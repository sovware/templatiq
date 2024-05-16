<?php
/**
 * Batch Processing
 *
 * @package Templatiq Sites
 * @since 2.0.0
 */

use Templatiq\FullSite\FullSite;

if ( ! class_exists( 'Templatiq_Sites_Batch_Processing_Importer' ) ) :

	/**
	 * Templatiq_Sites_Batch_Processing_Importer
	 *
	 * @since 1.0.14
	 */
	class Templatiq_Sites_Batch_Processing_Importer {

		/**
		 * Instance
		 *
		 * @since 1.0.14
		 * @access private
		 * @var object Class object.
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.0.14
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
		 * @since 1.0.14
		 */
		public function __construct() {
		}

		/**
		 * Import All Categories and Tags
		 *
		 * @since 2.6.22
		 * @return void
		 */
		public function import_all_categories_and_tags() {
			templatiq_sites_error_log( 'Requesting Site Categories' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Requesting Site Categories' );

			$api_args     = array(
				'timeout' => 30,
			);
			$request = wp_remote_get( trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-content/uploads/all-site-categories.json', $api_args );
			if ( ! is_wp_error( $request ) && 200 === (int) wp_remote_retrieve_response_code( $request ) ) {
				$cats = json_decode( wp_remote_retrieve_body( $request ), true );

				if ( isset( $cats['code'] ) ) {
					$message = isset( $cats['message'] ) ? $cats['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					update_site_option( 'templatiq-sites-all-site-categories-and-tags', $cats );

					do_action( 'templatiq_sites_sync_all_site_categories_and_tags', $cats );
				}
			}

			templatiq_sites_error_log( 'Site Categories Imported Successfully!' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Site Categories Imported Successfully!' );
		}

		/**
		 * Import All Categories and Tags
		 *
		 * @since 2.6.22
		 * @return void
		 */
		public function import_all_categories() {
			templatiq_sites_error_log( 'Requesting Site Categories' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Requesting Site Categories' );

			$api_args     = array(
				'timeout' => 30,
			);
			$request = wp_remote_get( trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/wp/v2/templatiq-sites-site-category/?hide_empty=true&_fields=id,name,slug&per_page=100', $api_args );
			if ( ! is_wp_error( $request ) && 200 === (int) wp_remote_retrieve_response_code( $request ) ) {
				$cats = json_decode( wp_remote_retrieve_body( $request ), true );

				if ( isset( $cats['code'] ) ) {
					$message = isset( $cats['message'] ) ? $cats['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					update_site_option( 'templatiq-sites-all-site-categories', $cats );

					do_action( 'templatiq_sites_sync_all_site_categories', $cats );
				}
			}

			templatiq_sites_error_log( 'Site Categories Imported Successfully!' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Site Categories Imported Successfully!' );
		}

		/**
		 * Import Categories
		 *
		 * @since 2.0.0
		 * @return void
		 */
		public function import_site_categories() {
			templatiq_sites_error_log( 'Requesting Site Categories' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Requesting Site Categories' );

			$api_args           = array(
				'timeout' => 30,
			);
			$categories_request = wp_remote_get( trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/wp/v2/templatiq-sites-site-category/?hide_empty=true&_fields=id,name,slug&per_page=100', $api_args );
			if ( ! is_wp_error( $categories_request ) && 200 === (int) wp_remote_retrieve_response_code( $categories_request ) ) {
				$categories = json_decode( wp_remote_retrieve_body( $categories_request ), true );

				if ( isset( $categories['code'] ) ) {
					$message = isset( $categories['message'] ) ? $categories['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					update_site_option( 'templatiq-sites-categories', $categories );

					do_action( 'templatiq_sites_sync_categories', $categories );
				}
			}

			templatiq_sites_error_log( 'Site Categories Imported Successfully!' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Site Categories Imported Successfully!' );
		}

		/**
		 * Import Block Categories
		 *
		 * @since 2.0.0
		 * @return void
		 */
		public function import_block_categories() {
			templatiq_sites_error_log( 'Requesting Block Categories' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Requesting Block Categories' );

			$api_args     = array(
				'timeout' => 30,
			);
			$tags_request = wp_remote_get( trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/wp/v2/blocks-category/?_fields=id,name,slug&per_page=100&hide_empty=1', $api_args );
			if ( ! is_wp_error( $tags_request ) && 200 === (int) wp_remote_retrieve_response_code( $tags_request ) ) {
				$tags = json_decode( wp_remote_retrieve_body( $tags_request ), true );

				if ( isset( $tags['code'] ) ) {
					$message = isset( $tags['message'] ) ? $tags['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					$categories = array();
					foreach ( $tags as $key => $value ) {
						$categories[ $value['id'] ] = $value;
					}

					update_site_option( 'astra-blocks-categories', $categories );

					do_action( 'templatiq_sites_sync_blocks_categories', $categories );
				}
			}

			templatiq_sites_error_log( 'Block Categories Imported Successfully!' );
			update_site_option( 'templatiq-sites-batch-status-string', 'Categories Imported Successfully!' );
		}

		/**
		 * Import Blocks
		 *
		 * @since 2.0.0
		 * @param  integer $page Page number.
		 * @return void
		 */
		public function import_blocks( $page = 1 ) {

			templatiq_sites_error_log( 'BLOCK: -------- ACTUAL IMPORT --------' );
			$api_args   = array(
				'timeout' => 30,
			);
			$all_blocks = array();
			templatiq_sites_error_log( 'BLOCK: Requesting ' . $page );
			update_site_option( 'astra-blocks-batch-status-string', 'Requesting for blocks page - ' . $page );

			$query_args = apply_filters(
				'templatiq_sites_blocks_query_args',
				array(
					'page_builder' => 'elementor',
					'per_page'     => 100,
					'page'         => $page,
					'wireframe'    => 'yes',
				)
			);

			$api_url = add_query_arg( $query_args, trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/astra-blocks/v1/blocks/' );

			$response = wp_remote_get( $api_url, $api_args );

			if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
				$templatiq_blocks = json_decode( wp_remote_retrieve_body( $response ), true );

				if ( isset( $templatiq_blocks['code'] ) ) {
					$message = isset( $templatiq_blocks['message'] ) ? $templatiq_blocks['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					templatiq_sites_error_log( 'BLOCK: Storing data for page ' . $page . ' in option astra-blocks-' . $page );
					update_site_option( 'astra-blocks-batch-status-string', 'Storing data for page ' . $page . ' in option astra-blocks-' . $page );

					update_site_option( 'astra-blocks-' . $page, $templatiq_blocks );

					do_action( 'templatiq_sites_sync_blocks', $page, $templatiq_blocks );
				}
			} else {
				templatiq_sites_error_log( 'BLOCK: API Error: ' . $response->get_error_message() );
			}

			templatiq_sites_error_log( 'BLOCK: Complete storing data for blocks ' . $page );
			update_site_option( 'astra-blocks-batch-status-string', 'Complete storing data for page ' . $page );
		}

		/**
		 * Import
		 *
		 * @since 1.0.14
		 * @since 2.0.0 Added page no.
		 *
		 * @param  integer $page Page number.
		 * @return array
		 */
		public function import_sites( $page = 1 ) {
			$api_args        = array(
				'timeout' => 30,
			);
			$sites_and_pages = array();
			templatiq_sites_error_log( 'Requesting ' . $page );
			update_site_option( 'templatiq-sites-batch-status-string', 'Requesting ' . $page );

			$query_args = apply_filters(
				'templatiq_sites_import_sites_query_args',
				array(
					'per_page' => 15,
					'page'     => $page,
				)
			);

			$api_url = add_query_arg( $query_args, trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/templatiq-sites/v1/sites-and-pages/' );

			$response = wp_remote_get( $api_url, $api_args );
			if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
				$sites_and_pages = json_decode( wp_remote_retrieve_body( $response ), true );

				if ( isset( $sites_and_pages['code'] ) ) {
					$message = isset( $sites_and_pages['message'] ) ? $sites_and_pages['message'] : '';
					if ( ! empty( $message ) ) {
						templatiq_sites_error_log( 'HTTP Request Error: ' . $message );
					} else {
						templatiq_sites_error_log( 'HTTP Request Error!' );
					}
				} else {
					templatiq_sites_error_log( 'Storing data for page ' . $page . ' in option templatiq-sites-and-pages-page-' . $page );
					update_site_option( 'templatiq-sites-batch-status-string', 'Storing data for page ' . $page . ' in option templatiq-sites-and-pages-page-' . $page );

					update_site_option( 'templatiq-sites-and-pages-page-' . $page, $sites_and_pages );

					do_action( 'templatiq_sites_sync_sites_and_pages', $page, $sites_and_pages );
				}
			} else {
				templatiq_sites_error_log( 'API Error: ' . $response->get_error_message() );
			}

			templatiq_sites_error_log( 'Complete storing data for page ' . $page );
			update_site_option( 'templatiq-sites-batch-status-string', 'Complete storing data for page ' . $page );

			return $sites_and_pages;
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Templatiq_Sites_Batch_Processing_Importer::get_instance();

endif;
