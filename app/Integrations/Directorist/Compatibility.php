<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class Compatibility {
	use Singleton;

	public function __construct() {
		add_action( 'templatiq_sites_after_plugin_activation', [$this, 'after_activation'] );
		add_filter( 'wxr_importer.pre_process.post', [$this, 'pre_process_post'], 10 );
		add_filter( 'wxr_importer.pre_process.post_meta', [$this, 'set_directory_type'], 10, 2 );
		add_action( 'wxr_importer.processed.term', [$this, 'set_directory_type_term'], 10, 2 );
	}

	public function set_directory_type_term( $term_id, $data ) {

		if ( isset( $data['taxonomy'] ) && ( 'at_biz_dir-location' === $data['taxonomy'] || 'at_biz_dir-category' === $data['taxonomy'] ) ) {
			$_pre_types = get_term_meta( $term_id, '_directory_type', true );

			error_log( '$_pre_types: ' . print_r( $_pre_types, true ) );

			$types = array_values( get_option( 'templatiq_sites_directory_types_ids_mapping', true ) );
			update_term_meta( $term_id, '_directory_type', $types );
			// wp_set_object_terms( $term_id, $value, 'atbdp_listing_types' );

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

	public function after_activation( $plugin_init ) {
		if ( 'directorist/directorist-base.php' !== $plugin_init ) {
			return;
		}

		set_transient( 'templatiq_disable_import_default_directory', true, 300 );

		$redirect = get_transient( '_directorist_setup_page_redirect' );
		if ( ! empty( $redirect ) && '' !== $redirect ) {
			delete_transient( '_directorist_setup_page_redirect' );
		}
	}
}