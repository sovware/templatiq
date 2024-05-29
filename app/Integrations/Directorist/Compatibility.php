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