<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\Utils\Singleton;
use WP_REST_Request;

class AddCustomPages {
	use Singleton;

	public function __construct() {
		add_action( 'templatiq_import_as_page_after', [$this, 'custom_pages'], 10, 3 );
	}

	public function custom_pages( int $inserted_id, ImportAsPageDTO $DTO, WP_REST_Request $request ) {
		$page_type       = $request->get_param( 'pageType' );
		$raw_types       = $request->get_param( 'directoryTypes' );
		$directory_types = $raw_types['submittedTypes'] ?? [];

		if ( empty( $directory_types ) || empty( $page_type ) ) {
			return;
		}

		/**
		 * Have to set type specific
		 * custom pages here.
		 */
		switch ( $page_type ) {
			case 'add_listing':
				$this->set_add_listing( $inserted_id, $directory_types );
				break;

			case 'single_listing':
				$this->set_single_listing( $inserted_id, $directory_types );
				break;
		}
	}

	private function set_add_listing( $page_id, $terms ) {
		foreach ( $terms as $key => $term ) {
			$this->update_meta( $term['term_id'], 'enable_add_listing_custom_template', 1 );
			$this->update_meta( $term['term_id'], 'custom_add_listing_template', $page_id );
		}
	}

	private function set_single_listing( $page_id, $terms ) {
		foreach ( $terms as $key => $term ) {
			$this->update_meta( $term['term_id'], 'enable_add_listing_custom_template', 1 );
			$this->update_meta( $term['term_id'], 'custom_add_listing_template', $page_id );
		}
	}

	private function update_meta( int $term_id, string $key, $value ) {
		update_term_meta( $term_id, $key, $value );
	}
}