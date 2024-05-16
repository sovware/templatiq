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
		$directory_types     = $request->get_param( 'directory_types' );
		$directory_page_type = $request->get_param( 'directory_page_type' );

		if ( empty( $directory_types ) || empty( $page_type ) ) {
			return;
		}

		/**
		 * Have to set type specific
		 * custom pages here.
		 */
		switch ( $directory_page_type ) {
			case 'single-listing':
				get_directorist_option( 'add_listing_page' );
				break;

			case 'add-listing':
				get_directorist_option( 'add_listing_page' );
				break;
		}
	}
}