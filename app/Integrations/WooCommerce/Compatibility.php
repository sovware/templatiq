<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\WooCommerce;

use Templatiq\Utils\Singleton;

class Compatibility {
	use Singleton;

	public function __construct() {
		add_action( 'init', [$this, 'disable_default_woo_pages_creation'], 2 );
	}

	/**
	 * Restrict WooCommerce Pages Creation process
	 *
	 * Why? WooCommerce creates set of pages on it's activation
	 * These pages are re created via our XML import step.
	 * In order to avoid the duplication we restrict these page creation process.
	 *
	 * @since 3.0.0
	 */
	public function disable_default_woo_pages_creation() {
		if ( templatiq_sites_has_import_started() ) {
			add_filter( 'woocommerce_create_pages', '__return_empty_array' );
		}
	}
}