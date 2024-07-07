<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

class ImageImporter {
	private static $instance;
	private $already_imported_ids = [];

	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct() {
		if ( ! function_exists( 'WP_Filesystem' ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
		}

		WP_Filesystem();
	}

	public function get_hash_image( $attachment_url ) {
		return sha1( $attachment_url );
	}

	private function get_saved_image( $attachment ) {
		if ( apply_filters( 'templatiq_sites_image_importer_skip_image', false, $attachment ) ) {
			ImporterLog::add( 'BATCH - SKIP Image - {from filter} - ' . $attachment['url'] . ' - Filter name `templatiq_sites_image_importer_skip_image`.' );

			return [
				'status'     => true,
				'attachment' => $attachment,
			];
		}

		global $wpdb;

		// 1. Is already imported in Batch Import Process?
		$post_id = $wpdb->get_var(  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- We are checking if this image is already processed. WO_Query would have been overkill.
			$wpdb->prepare(
				'SELECT `post_id` FROM `' . $wpdb->postmeta . '`
									WHERE `meta_key` = \'_templatiq_sites_image_hash\'
										AND `meta_value` = %s
								;',
				$this->get_hash_image( $attachment['url'] )
			)
		);

		// 2. Is image already imported though XML?
		if ( empty( $post_id ) ) {

			// Get file name without extension.
			// To check it exist in attachment.
			$filename = basename( $attachment['url'] );

			// Find the attachment by meta value.
			// Code reused from Elementor plugin.
			$post_id = $wpdb->get_var(  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- We are checking if this attachment is already processed. WO_Query would have been overkill.
				$wpdb->prepare(
					"SELECT post_id FROM {$wpdb->postmeta}
									WHERE meta_key = '_wp_attached_file'
									AND meta_value LIKE %s",
					'%/' . $filename . '%'
				)
			);

			ImporterLog::add( 'BATCH - SKIP Image {already imported from xml} - ' . $attachment['url'] );
		}

		if ( $post_id ) {
			$new_attachment = [
				'id'  => $post_id,
				'url' => wp_get_attachment_url( $post_id ),
			];
			$this->already_imported_ids[] = $post_id;

			return [
				'status'     => true,
				'attachment' => $new_attachment,
			];
		}

		return [
			'status'     => false,
			'attachment' => $attachment,
		];
	}

	public function import( $attachment ) {
		if ( isset( $attachment['url'] ) && ! templatiq_sites_is_valid_url( $attachment['url'] ) ) {
			return $attachment;
		}

		ImporterLog::add( 'Source - ' . $attachment['url'] );
		$saved_image = $this->get_saved_image( $attachment );
		ImporterLog::add( 'Log - ' . wp_json_encode( $saved_image['attachment'] ) );

		if ( $saved_image['status'] ) {
			return $saved_image['attachment'];
		}

		$file_content = wp_remote_retrieve_body(
			wp_safe_remote_get(
				$attachment['url'],
				[
					'timeout'   => '60',
					'sslverify' => false,
				]
			)
		);

		// Empty file content?
		if ( empty( $file_content ) ) {
			ImporterLog::add( 'BATCH - FAIL Image {Error: Failed wp_remote_retrieve_body} - ' . $attachment['url'] );

			return $attachment;
		}

		// Extract the file name and extension from the URL.
		$filename = basename( $attachment['url'] );

		$upload = wp_upload_bits( $filename, null, $file_content );

		templatiq_sites_error_log( $filename );
		templatiq_sites_error_log( wp_json_encode( $upload ) );

		$post = [
			'post_title' => $filename,
			'guid'       => $upload['url'],
		];
		templatiq_sites_error_log( wp_json_encode( $post ) );

		$info = wp_check_filetype( $upload['file'] );
		if ( $info ) {
			$post['post_mime_type'] = $info['type'];
		} else {
			// For now just return the origin attachment.
			return $attachment;
		}

		$post_id = wp_insert_attachment( $post, $upload['file'] );
		wp_update_attachment_metadata(
			$post_id,
			wp_generate_attachment_metadata( $post_id, $upload['file'] )
		);
		update_post_meta( $post_id, '_templatiq_sites_image_hash', $this->get_hash_image( $attachment['url'] ) );

		\Templatiq_WXR_Importer::instance()->track_post( $post_id );

		$new_attachment = [
			'id'  => $post_id,
			'url' => $upload['url'],
		];

		ImporterLog::add( 'BATCH - SUCCESS Image {Imported} - ' . $new_attachment['url'] );

		$this->already_imported_ids[] = $post_id;

		return $new_attachment;
	}
}