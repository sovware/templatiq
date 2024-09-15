<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class FullTemplateImport {
	use Singleton;

	public function __construct() {
		add_filter( 'templatiq_wxr_importer.pre_process.post', [$this, 'pre_process_post'], 10 );
		add_filter( 'templatiq_wxr_importer.pre_process.post_meta', [$this, 'set_directory_type'], 10, 2 );
		add_action( 'templatiq_wxr_importer.processed.term', [$this, 'set_directory_type_term'], 10, 2 );
		add_action( 'templatiq_full_template_import_complete', [$this, 'change_term_meta'] );
	}

	public function change_term_meta() {
		$attachments_ref = get_option( '_templatiq_imported_attachments', [] );

		if ( empty( $attachments_ref ) ) {
			return;
		}

		// Location update
		$locs = get_terms( ['taxonomy' => 'at_biz_dir-location', 'meta_key' => 'image', 'hide_empty' => false, 'fields' => 'ids'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		if ( ! empty( $locs ) ) {
			foreach ( $locs as $loc ) {
				$attachment_id = $attachments_ref[$loc] ?? 0;
				if ( $attachment_id ) {
					update_term_meta( $loc, 'image', $attachment_id );
				}
			}
		}

		// Category update
		$cats = get_terms( ['taxonomy' => 'at_biz_dir-category', 'meta_key' => 'image', 'hide_empty' => false, 'fields' => 'ids'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		if ( ! empty( $cats ) ) {
			foreach ( $cats as $cat ) {
				$attachment_id = $attachments_ref[$cat] ?? 0;
				if ( $attachment_id ) {
					update_term_meta( $cat, 'image', $attachment_id );
				}
			}
		}

		// Directory Type update
		$types = get_terms( ['taxonomy' => 'atbdp_listing_types', 'fields' => 'ids'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		if ( ! empty( $types ) ) {
			$uuid = 1;
			foreach ( $types as $type ) {
				if ( 1 === $uuid ) {
					update_term_meta( $type, '_default', $attachment_id );
					$uuid++;
				}
			}
		}
	}

	public function set_directory_type_term( $term_id, $data ) {
		if ( isset( $data['taxonomy'] ) && ( 'at_biz_dir-location' === $data['taxonomy'] || 'at_biz_dir-category' === $data['taxonomy'] ) ) {
			// Get the directory type mappings.
			$types = get_option( 'templatiq_sites_directory_types_ids_mapping', [] );

			if ( ! empty( $types ) ) {
				// Update term meta with directory types.
				update_term_meta( $term_id, '_directory_type', array_values( $types ) );

				// Define a term or terms to associate with the 'atbdp_listing_types' taxonomy.
				$value = array_values( $types ); // Assuming $types is an array of term IDs or slugs for 'atbdp_listing_types'.

				// Ensure $value is not empty before setting terms.
				if ( ! empty( $value ) ) {
					wp_set_object_terms( $term_id, $value, 'atbdp_listing_types' );
				}
			}
		}
	}

	public function set_directory_type( $meta_item, $post_id ) {
		$key = $meta_item['key'] ?? '';
		if ( '_directory_type' === $key ) {
			$types     = get_option( 'templatiq_sites_directory_types_ids_mapping', true );
			$value     = $types[$meta_item['value']] ?? 0; // if no id found then serve the default directory type
			$_pre_type = get_post_meta( $post_id, '_directory_type', true );

			if ( $_pre_type !== $value ) {
				update_post_meta( $post_id, '_directory_type', $value );
				wp_set_object_terms( $post_id, $value, 'atbdp_listing_types' );

				error_log( 'Directory Type Changed - post_id #' . $post_id . ' from #' . $meta_item['value'] . ' => ' . $value );
			}
		}

		return $meta_item;
	}

	public function pre_process_post( $data ) {
		if ( ! isset( $data['post_type'] ) || 'at_biz_dir' !== $data['post_type'] ) {
			return $data;
		}

		$import_listings = get_option( 'templatiq-import-directorist-listings', false );
		if ( ! $import_listings ) {
			return [];
		}

		return $data;
	}
}