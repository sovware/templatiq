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
		add_action( 'templatiq_share_non_sensitive_data', [$this, 'share_non_sensitive_data'] );

		add_filter( 'atbdp_create_required_pages', function () {
			return false;
		} );

		$redirect = get_transient( '_directorist_setup_page_redirect' );
		if ( ! empty( $redirect ) && '' !== $redirect ) {
			delete_transient( '_directorist_setup_page_redirect' );
		}

		add_filter( 'atbdp_import_default_directory', function () {
			return false;
		} );
	}

	public function share_non_sensitive_data( $bool ) {
		if ( ! $bool ) {
			return;
		}

		update_option( 'directorist_tracking_notice', 'hide' );
		update_option( 'directorist_allow_tracking', 'yes' );
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