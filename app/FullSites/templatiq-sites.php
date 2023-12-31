<?php
/**
 * These code forked from Astra Sites plugin.
 */

/**
 * Set constants.
 */
if ( ! defined( 'TEMPLATIQ_SITES_NAME' ) ) {
	define( 'TEMPLATIQ_SITES_NAME', __( 'Templatiq Sites', 'templatiq-sites' ) );
}

if ( ! defined( 'TEMPLATIQ_SITES_VER' ) ) {
	define( 'TEMPLATIQ_SITES_VER', '1.0.0' );
}

if ( ! defined( 'TEMPLATIQ_SITES_BASE' ) ) {
	define( 'TEMPLATIQ_SITES_BASE', TEMPLATIQ_PATH . '/app/FullSite/' );
}

if ( ! defined( 'TEMPLATIQ_SITES_DIR' ) ) {
	define( 'TEMPLATIQ_SITES_DIR', TEMPLATIQ_PATH . '/app/FullSite/' );
}

if ( ! defined( 'TEMPLATIQ_SITES_URI' ) ) {
	define( 'TEMPLATIQ_SITES_URI', TEMPLATIQ_URL . '/app/FullSite/' );
}

if ( ! function_exists( 'templatiq_sites_setup' ) ):

	/**
	 * Templatiq Sites Setup
	 *
	 * @since 1.0.5
	 */
	function templatiq_sites_setup() {
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites.php';

		// Admin.
		require_once TEMPLATIQ_SITES_DIR . 'classes/class-templatiq-sites-admin.php';
	}

	templatiq_sites_setup();

endif;