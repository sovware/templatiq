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
		add_filter( 'atbdp_create_required_pages', function () {
			return false;
		} );

		add_filter( 'wxr_importer.pre_process.post', [$this, 'pre_process_post'], 10 );
	}

	public function pre_process_post( $data ) {
		if ( ! isset( $data['post_type'] ) || 'at_biz_dir' !== $data['post_type'] ) {
			return $data;
		}

		$import_listings = get_option( 'templatiq_import_directory_listings', false );
		if ( ! $import_listings ) {
			return [];
		}

		return $data;
	}
}