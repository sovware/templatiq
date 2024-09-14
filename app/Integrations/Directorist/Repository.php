<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Repositories\DependencyRepository;

/**
 * Will unlock the directory related templates
 * When directorist is active
 * & has a valid token
 * & will only unlock the themes design that already purchased
 */
class Repository {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_API_BASE;
	}

	public function is_active() {
		return ( new DependencyRepository )->is_active( 'directorist/directorist-base.php' );
	}

	public function get_directory_types(): array {
		$listing_types = get_terms( [
			'taxonomy'   => 'atbdp_listing_types',
			'hide_empty' => false,
			'orderby'    => 'date',
			'order'      => 'DESC',
		] );

		foreach ( $listing_types as $key => $type ) {
			$listing_types[$key]->meta = $this->get_directory_type_meta( $type->term_id );
		}

		return $listing_types;
	}

	private function get_directory_type_meta( $id ) {
		$meta_val_with_array = get_term_meta( $id, '', true );
		$meta                = [];
		foreach ( $meta_val_with_array as $key => $value ) {
			$meta[$key] = $value[0];
		}

		return $meta;
	}

	public function erase_existing_data() {
		$path = WP_CONTENT_DIR . '/plugins/' . DIRECTORY_SEPARATOR . 'directorist' . DIRECTORY_SEPARATOR . "uninstall.php";
		if ( ! file_exists( $path ) ) {
			return;
		}

		include_once $path;

		directorist_uninstall();
	}

	public function import_directory_types() {
		$types       = get_option( 'templatiq_sites_import_data', true )['directory-types'];
		$ids_mapping = [];
		$set_default = false;

		foreach ( $types as $type ) {
			if ( term_exists( $type['name'], 'atbdp_listing_types' ) ) {
				continue;
			}

			$type_id               = (string) $type['term_id'];
			$term                  = wp_insert_term( $type['name'], 'atbdp_listing_types' );
			$term_id               = $term['term_id'];
			$ids_mapping[$type_id] = $term_id;

			update_term_meta( $term_id, '_templatiq_sites_imported_term', true );

			if ( ! $set_default ) {
				update_term_meta( $term_id, '_default', true );
			}

			foreach ( $type['meta'] as $key => $value ) {
				if ( '_default' !== $key ) {
					$value = maybe_unserialize( $value );
					update_term_meta( $term_id, $key, $value );
				}
			}

			// error_log( 'Directory Type Inserted Name: ' . $type['name'] . ' ID #' . $type_id . ' => ' . $term_id );
		}

		if ( $ids_mapping ) {
			update_option( 'templatiq_sites_directory_types_ids_mapping', $ids_mapping, 'no' );
		}
	}
}