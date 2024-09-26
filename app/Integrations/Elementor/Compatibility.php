<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Templatiq\Utils\Singleton;

class Compatibility {
	use Singleton;

	public function __construct() {
		if ( ! wp_doing_ajax() || ( defined( 'ELEMENTOR_VERSION' ) && version_compare( ELEMENTOR_VERSION, '3.0.0', '>=' ) ) ) {
			remove_filter( 'templatiq_import_post_meta', ['Elementor\Compatibility', 'on_templatiq_import_post_meta'] );
			remove_filter( 'templatiq_wxr_importer.pre_process.post_meta', ['Elementor\Compatibility', 'on_wxr_importer_pre_process_post_meta'] );

			add_filter( 'templatiq_import_post_meta', [$this, 'on_templatiq_import_post_meta'] );
			add_filter( 'templatiq_wxr_importer.pre_process.post_meta', [$this, 'on_wxr_importer_pre_process_post_meta'] );
		}

		add_action( 'templatiq_sites_before_delete_imported_posts', [$this, 'force_delete_kit'], 10, 2 );
		add_action( 'templatiq_sites_before_sse_import', [$this, 'disable_attachment_metadata'] );
		add_action( 'templatiq_sites_after_plugin_activation', [$this, 'disable_elementor_redirect'] );
	}

	/**
	 * Disable Elementor redirect.
	 *
	 * @return void.
	 */
	public function disable_elementor_redirect() {
		$elementor_redirect = get_transient( 'elementor_activation_redirect' );

		if ( ! empty( $elementor_redirect ) && '' !== $elementor_redirect ) {
			delete_transient( 'elementor_activation_redirect' );
		}
	}

	/**
	 * Disable the attachment metadata
	 */
	public function disable_attachment_metadata() {
		if ( class_exists( '\Elementor\Plugin' ) ) {
			remove_filter(
				'wp_update_attachment_metadata', [
					\Elementor\Plugin::$instance->uploads_manager->get_file_type_handlers( 'svg' ),
					'set_svg_meta_data',
				], 10
			);
		}
	}

	/**
	 * Force Delete Elementor Kit
	 *
	 * Delete the previously imported Elementor kit.
	 *
	 * @param int    $post_id     Post name.
	 * @param string $post_type   Post type.
	 */
	public function force_delete_kit( $post_id = 0, $post_type = '' ) {

		if ( ! $post_id ) {
			return;
		}

		if ( 'elementor_library' === $post_type ) {
			$_GET['force_delete_kit'] = true;
		}
	}

	/**
	 * Process post meta before WP importer.
	 *
	 * Normalize Elementor post meta on import, We need the `wp_slash` in order
	 * to avoid the unslashing during the `add_post_meta`.
	 *
	 * Fired by `templatiq_import_post_meta` filter.
	 *
	 * @since 1.4.3
	 * @access public
	 *
	 * @param array $post_meta Post meta.
	 *
	 * @return array Updated post meta.
	 */
	public function on_templatiq_import_post_meta( $post_meta ) {
		if ( ! is_array( $post_meta ) || empty( $post_meta ) ) {
			return [];
		}

		foreach ( $post_meta as &$meta ) {
			if ( '_elementor_data' === $meta['key'] ) {
				$meta['value'] = wp_slash( $meta['value'] );
				break;
			}
		}

		return $post_meta;
	}

	/**
	 * Process post meta before WXR importer.
	 *
	 * Normalize Elementor post meta on import with the new WP_importer, We need
	 * the `wp_slash` in order to avoid the unslashing during the `add_post_meta`.
	 *
	 * Fired by `templatiq_templatiq_wxr_importer.pre_process.post_meta` filter.
	 *
	 * @since 1.4.3
	 * @access public
	 *
	 * @param array $post_meta Post meta.
	 *
	 * @return array Updated post meta.
	 */
	public function on_templatiq_wxr_importer_pre_process_post_meta( $post_meta ) {
		if ( isset( $post_meta['key'] ) && '_elementor_data' === $post_meta['key'] ) {
			$post_meta['value'] = wp_slash( $post_meta['value'] );
		}

		return $post_meta;
	}

	/**
	 * Process post meta before WXR importer.
	 *
	 * Normalize Elementor post meta on import with the new WP_importer, We need
	 * the `wp_slash` in order to avoid the unslashing during the `add_post_meta`.
	 *
	 * Fired by `templatiq_wxr_importer.pre_process.post_meta` filter.
	 *
	 * @since 1.4.3
	 * @access public
	 *
	 * @param array $post_meta Post meta.
	 *
	 * @return array Updated post meta.
	 */
	public function on_wxr_importer_pre_process_post_meta( $post_meta ) {
		if ( isset( $post_meta['key'] ) && '_elementor_data' === $post_meta['key'] ) {
			$post_meta['value'] = wp_slash( $post_meta['value'] );
		}

		return $post_meta;
	}
}