<?php
/**
 * Customizer Data importer class.
 *
 * @since  1.0.0
 * @package Templatiq Addon
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Customizer Data importer class.
 *
 * @since  1.0.0
 */
class Templatiq_Customizer_Import {

	/**
	 * Instance of Templatiq_Customizer_Import
	 *
	 * @since  1.0.0
	 * @var Templatiq_Customizer_Import
	 */
	private static $instance = null;

	/**
	 * Instantiate Templatiq_Customizer_Import
	 *
	 * @since  1.0.0
	 * @return (Object) Templatiq_Customizer_Import
	 */
	public static function instance() {

		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Import customizer options.
	 *
	 * @since  1.0.0
	 *
	 * @param  (Array) $options customizer options from the demo.
	 */
	public function import( $options ) {

		// Update Templatiq Theme customizer settings.
		if ( isset( $options['templatiq-settings'] ) ) {
			update_option( 'templatiq-settings', $options['templatiq-settings'] );
		}

		// Add Custom CSS.
		if ( isset( $options['custom-css'] ) ) {
			wp_update_custom_css_post( $options['custom-css'] );
		}

	}
}
