<?php
/**
 * Batch Import
 *
 * @package Templatiq Sites
 * @since 2.5.0
 */

if ( ! class_exists( 'Templatiq_Sites_Batch_Import' ) ) :

	/**
	 * Batch Import
	 *
	 * @since 2.5.0
	 */
	class Templatiq_Sites_Batch_Import {

		/**
		 * Instance
		 *
		 * @since 2.5.0
		 * @var object Class object.
		 * @access private
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 2.5.0
		 * @return object initialized object of class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 2.5.0
		 */
		public function __construct() {

			// WP Core Files.
			require_once ABSPATH . 'wp-admin/includes/image.php';

			// Image Downloader.
			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/batch-processing/helpers/class-templatiq-sites-image-importer.php';

			// Batch Processing.
			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/batch-processing/helpers/class-wp-async-request.php';
			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/batch-processing/helpers/class-wp-background-process.php';

			// Site Import Batch.
			require_once TEMPLATIQ_SITES_DIR . 'inc/classes/batch-import/class-templatiq-sites-batch-site-import.php';
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Templatiq_Sites_Batch_Import::get_instance();

endif;
