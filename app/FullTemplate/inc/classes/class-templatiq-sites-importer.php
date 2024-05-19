<?php
/**
 * Templatiq Sites Importer
 *
 * @since  1.0.0
 * @package Templatiq Sites
 */

use Templatiq\FullTemplate\OptionsImport;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Templatiq_Sites_Importer' ) ) {

	/**
	 * Templatiq Sites Importer
	 */
	class Templatiq_Sites_Importer {

		public static $instance = null;

		/**
		 * Set Instance
		 *
		 * @since  1.0.0
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since  1.0.0
		 */
		public function __construct() {

			require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-importer-log.php';
			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/class-templatiq-sites-helper.php';

			// Import AJAX.
			add_action( 'wp_ajax_templatiq-sites-import-customizer-settings', [$this, 'import_customizer_settings'] );
			add_action( 'wp_ajax_templatiq-sites-import-prepare-xml', [$this, 'prepare_xml_data'] );
			add_action( 'wp_ajax_templatiq-sites-import-options', [$this, 'import_options'] );
			add_action( 'wp_ajax_templatiq-sites-import-end', [$this, 'import_end'] );

			// Hooks in AJAX.
			add_action( 'templatiq_sites_import_complete', [$this, 'clear_related_cache'] );
			add_action( 'init', [$this, 'load_importer'] );

			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/batch-processing/class-templatiq-sites-batch-processing.php';

			add_action( 'wp_ajax_templatiq-sites-set-start-flag', [$this, 'set_start_flag'] );
			add_action( 'templatiq_sites_batch_process_complete', [$this, 'clear_related_cache'] );
			add_action( 'templatiq_sites_batch_process_complete', [$this, 'delete_related_transient'] );

			// Reset Customizer Data.
			add_action( 'wp_ajax_templatiq-sites-reset-customizer-data', [$this, 'reset_customizer_data'] );
			add_action( 'wp_ajax_templatiq-sites-reset-site-options', [$this, 'reset_site_options'] );

			// Reset Post & Terms.
			add_action( 'wp_ajax_templatiq-sites-delete-posts', [$this, 'delete_imported_posts'] );
			add_action( 'wp_ajax_templatiq-sites-delete-terms', [$this, 'delete_imported_terms'] );

			if ( version_compare( get_bloginfo( 'version' ), '5.1.0', '>=' ) ) {
				add_filter( 'http_request_timeout', [$this, 'set_timeout_for_images'], 10, 2 ); //phpcs:ignore WordPressVIPMinimum.Hooks.RestrictedHooks.http_request_timeout -- We need this to avoid timeout on slow servers while installing theme, plugin etc.
			}

			add_action( 'init', [$this, 'disable_default_woo_pages_creation'], 2 );
			add_filter( 'upgrader_package_options', [$this, 'plugin_install_clear_directory'] );
		}

		/**
		 * Delete related transients
		 *
		 * @since 3.1.3
		 */
		public function delete_related_transient() {
			delete_transient( 'templatiq_sites_batch_process_started' );
			delete_option( 'templatiq_sites_import_data' );
		}

		/**
		 * Delete directory when installing plugin.
		 *
		 * Set by enabling `clear_destination` option in the upgrader.
		 *
		 * @since 3.0.10
		 * @param array $options Options for the upgrader.
		 * @return array $options The options.
		 */
		public function plugin_install_clear_directory( $options ) {
			if ( true !== templatiq_sites_has_import_started() ) {
				return $options;
			}
			// Verify Nonce.
			check_ajax_referer( 'templatiq-sites', 'ajax_nonce' );
			if ( isset( $_REQUEST['clear_destination'] ) && 'true' === $_REQUEST['clear_destination'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- This is a callback filter while performing plugin install action - https://developer.wordpress.org/reference/hooks/upgrader_package_options/, We don't quite have access to the nonce here. We are skipping it here.
				$options['clear_destination'] = true;
			}

			return $options;
		}

		/**
		 * Restrict WooCommerce Pages Creation process
		 *
		 * Why? WooCommerce creates set of pages on it's activation
		 * These pages are re created via our XML import step.
		 * In order to avoid the duplicacy we restrict these page creation process.
		 *
		 * @since 3.0.0
		 */
		public function disable_default_woo_pages_creation() {
			if ( templatiq_sites_has_import_started() ) {
				add_filter( 'woocommerce_create_pages', '__return_empty_array' );
			}
		}

		/**
		 * Set the timeout for the HTTP request by request URL.
		 *
		 * E.g. If URL is images (jpg|png|gif|jpeg) are from the domain `https://templatiq.com` then we have set the timeout by 30 seconds. Default 5 seconds.
		 *
		 * @since 1.3.8
		 *
		 * @param int    $timeout_value Time in seconds until a request times out. Default 5.
		 * @param string $url           The request URL.
		 */
		public function set_timeout_for_images( $timeout_value, $url ) {

			// URL not contain `https://templatiq.com` then return $timeout_value.
			if ( strpos( $url, 'https://templatiq.com' ) === false ) {
				return $timeout_value;
			}

			// Check is image URL of type jpg|png|gif|jpeg.
			if ( templatiq_sites_is_valid_image( $url ) ) {
				$timeout_value = 300;
			}

			return $timeout_value;
		}

		/**
		 * Load WordPress WXR importer.
		 */
		public function load_importer() {
			require_once TEMPLATIQ_SITES_DIR . 'inc/importers/wxr-importer/class-templatiq-wxr-importer.php';
		}

		/**
		 * Prepare XML Data.
		 *
		 * @since 1.1.0
		 * @return void
		 */
		public function prepare_xml_data() {

			// Verify Nonce.
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}

			if ( ! class_exists( 'XMLReader' ) ) {
				wp_send_json_error( __( 'The XMLReader library is not available. This library is required to import the content for the website.', 'templatiq' ) );
			}

			$wxr_url = templatiq_get_site_data( 'templatiq-site-wxr-path' );

			error_log( $wxr_url );
			Templatiq_Sites_Importer_Log::add( 'Importing from XML ' . $wxr_url );

			$overrides = [
				'wp_handle_sideload' => 'upload',
			];

			// Download XML file.
			$xml_path = Templatiq_Sites_Helper::download_file( $wxr_url, $overrides );

			if ( $xml_path['success'] ) {

				$post = [
					'post_title'     => basename( $wxr_url ),
					'guid'           => $xml_path['data']['url'],
					'post_mime_type' => $xml_path['data']['type'],
				];

				Templatiq_Sites_Importer_Log::add( wp_json_encode( $post ) );
				Templatiq_Sites_Importer_Log::add( wp_json_encode( $xml_path ) );

				// as per wp-admin/includes/upload.php.
				$post_id = wp_insert_attachment( $post, $xml_path['data']['file'] );

				Templatiq_Sites_Importer_Log::add( wp_json_encode( $post_id ) );

				if ( is_wp_error( $post_id ) ) {
					wp_send_json_error( __( 'There was an error downloading the XML file.', 'templatiq' ) );
				} else {

					update_option( 'templatiq_sites_imported_wxr_id', $post_id, 'no' );
					$attachment_metadata = wp_generate_attachment_metadata( $post_id, $xml_path['data']['file'] );
					wp_update_attachment_metadata( $post_id, $attachment_metadata );
					$data        = Templatiq_WXR_Importer::instance()->get_xml_data( $xml_path['data']['file'], $post_id );
					$data['xml'] = $xml_path['data'];
					wp_send_json_success( $data );
				}
			} else {
				wp_send_json_error( $xml_path['data'] );
			}
		}

		/**
		 * Import Options.
		 *
		 * @since 1.0.14
		 * @since 1.4.0 The `$options_data` was added.
		 *
		 * @param  array $options_data Site Options.
		 * @return void
		 */
		public function import_options( $options_data = [] ) {

			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			$options_data = templatiq_get_site_data( 'templatiq-site-options-data' );

			// error_log( print_r( $options_data ,true) );

			if ( ! empty( $options_data ) ) {
				// Set meta for tracking the post.
				if ( is_array( $options_data ) ) {
					Templatiq_Sites_Importer_Log::add( 'Imported - Site Options ' . wp_json_encode( $options_data ) );
					update_option( '_templatiq_sites_old_site_options', $options_data, 'no' );
				}

				$options_importer = ( new OptionsImport );
				$options_importer->import_options( $options_data );

				if ( defined( 'WP_CLI' ) ) {
					WP_CLI::line( 'Imported Site Options!' );
				} elseif ( wp_doing_ajax() ) {
					wp_send_json_success( $options_data );
				}
			} else {
				if ( defined( 'WP_CLI' ) ) {
					WP_CLI::line( 'Site options are empty!' );
				} elseif ( wp_doing_ajax() ) {
					wp_send_json_error( __( 'Site options are empty!', 'templatiq' ) );
				}
			}

		}

		/**
		 * Import End.
		 *
		 * @since 1.0.14
		 * @return void
		 */
		public function import_end() {
			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			$demo_data = get_option( 'templatiq_sites_import_data', [] );

			do_action( 'templatiq_sites_import_complete', $demo_data );

			update_option( 'templatiq_sites_import_complete', 'yes', 'no' );
			delete_transient( 'templatiq_sites_import_started' );

			$this->update_menu_refs();

			error_log(
				'Import ended, hello '
				. PHP_EOL . '#############################################'
				. PHP_EOL . '#############################################'
				. PHP_EOL );

			if ( wp_doing_ajax() ) {
				wp_send_json_success();
			}
		}

		public function update_menu_refs() {
			$menu_ref  = get_option( '_templatiq_imported_menu_map', [] );
			$templates = get_option( '_templatiq_imported_template_parts', [] );

			foreach ( $templates as $template_id ) {
				$post = get_post( $template_id );
				if ( ! isset( $post->post_content ) ) {
					error_log( $template_id . 'post content not found' );
					continue;
				}

				foreach ( $menu_ref as $old_id => $new_id ) {
					$post->post_content = $this->menu_id_replace( $post->post_content, $old_id, $new_id );
					wp_update_post( $post );
				}
			}
		}

		public function menu_id_replace( $data, $old_id, $new_id ) {
			$find            = sprintf( '"ref":%d', $old_id );
			$replace         = sprintf( '"ref":%d', $new_id );
			$updated_content = str_replace( $find, $replace, $data );

			return $updated_content;
		}

		/**
		 * Set a flag that indicates the import process has started.
		 */
		public function set_start_flag() {
			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}
			do_action( 'st_before_start_import_process' );
			set_transient( 'templatiq_sites_import_started', 'yes', HOUR_IN_SECONDS );
			wp_send_json_success();
		}

		/**
		 * Clear Cache.
		 *
		 * @since  1.0.9
		 */
		public function clear_related_cache() {

			// Clear 'Builder Builder' cache.
			if ( is_callable( 'FLBuilderModel::delete_asset_cache_for_all_posts' ) ) {
				FLBuilderModel::delete_asset_cache_for_all_posts();
				Templatiq_Sites_Importer_Log::add( 'Cache for Beaver Builder cleared.' );
			}

			// Clear 'Templatiq Addon' cache.
			if ( is_callable( 'Templatiq_Minify::refresh_assets' ) ) {
				Templatiq_Minify::refresh_assets();
				Templatiq_Sites_Importer_Log::add( 'Cache for Templatiq Addon cleared.' );
			}

			$this->update_latest_checksums();

			// Flush permalinks.
			flush_rewrite_rules(); //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.flush_rewrite_rules_flush_rewrite_rules -- This function is called only after import is completed
		}

		/**
		 * Update Latest Checksums
		 *
		 * Store latest checksum after batch complete.
		 *
		 * @since 2.0.0
		 * @return void
		 */
		public function update_latest_checksums() {
			$latest_checksums = get_site_option( 'templatiq-sites-last-export-checksums-latest', '' );
			update_site_option( 'templatiq-sites-last-export-checksums', $latest_checksums );
		}

		/**
		 * Reset customizer data
		 *
		 * @since 1.3.0
		 * @return void
		 */
		public function reset_customizer_data() {

			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			Templatiq_Sites_Importer_Log::add( 'Deleted customizer Settings ' . wp_json_encode( get_option( 'templatiq-settings', [] ) ) );

			delete_option( 'templatiq-settings' );

			if ( defined( 'WP_CLI' ) ) {
				WP_CLI::line( 'Deleted Customizer Settings!' );
			} elseif ( wp_doing_ajax() ) {
				wp_send_json_success();
			}
		}

		/**
		 * Reset site options
		 *
		 * @since 1.3.0
		 * @return void
		 */
		public function reset_site_options() {

			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			$options = get_option( '_templatiq_sites_old_site_options', [] );

			Templatiq_Sites_Importer_Log::add( 'Deleted - Site Options ' . wp_json_encode( $options ) );

			if ( $options ) {
				foreach ( $options as $option_key => $option_value ) {
					delete_option( $option_key );
				}
			}

			if ( defined( 'WP_CLI' ) ) {
				WP_CLI::line( 'Deleted Site Options!' );
			} elseif ( wp_doing_ajax() ) {
				wp_send_json_success();
			}
		}

		/**
		 * Delete imported posts
		 *
		 * @since 1.3.0
		 * @since 1.4.0 The `$post_id` was added.
		 * Note: This function can be deleted after a few releases since we are performing the delete operation in chunks.
		 *
		 * @param  integer $post_id Post ID.
		 * @return void
		 */
		public function delete_imported_posts( $post_id = 0 ) {

			if ( wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			$post_id = isset( $_REQUEST['post_id'] ) ? absint( $_REQUEST['post_id'] ) : $post_id;

			$message = 'Deleted - Post ID ' . $post_id . ' - ' . get_post_type( $post_id ) . ' - ' . get_the_title( $post_id );

			$message = '';
			if ( $post_id ) {

				$post_type = get_post_type( $post_id );
				$message   = 'Deleted - Post ID ' . $post_id . ' - ' . $post_type . ' - ' . get_the_title( $post_id );

				do_action( 'templatiq_sites_before_delete_imported_posts', $post_id, $post_type );

				Templatiq_Sites_Importer_Log::add( $message );
				wp_delete_post( $post_id, true );
			}

			if ( defined( 'WP_CLI' ) ) {
				WP_CLI::line( $message );
			} elseif ( wp_doing_ajax() ) {
				wp_send_json_success( $message );
			}
		}

		/**
		 * Delete imported terms
		 *
		 * @since 1.3.0
		 * @since 1.4.0 The `$post_id` was added.
		 * Note: This function can be deleted after a few releases since we are performing the delete operation in chunks.
		 *
		 * @param  integer $term_id Term ID.
		 * @return void
		 */
		public function delete_imported_terms( $term_id = 0 ) {
			if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
				// Verify Nonce.
				check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

				if ( ! current_user_can( 'customize' ) ) {
					wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
				}
			}

			$term_id = isset( $_REQUEST['term_id'] ) ? absint( $_REQUEST['term_id'] ) : $term_id;

			$message = '';
			if ( $term_id ) {
				$term = get_term( $term_id );
				if ( ! is_wp_error( $term ) && ! empty( $term ) && is_object( $term ) ) {

					do_action( 'templatiq_sites_before_delete_imported_terms', $term_id, $term );

					$message = 'Deleted - Term ' . $term_id . ' - ' . $term->name . ' ' . $term->taxonomy;
					Templatiq_Sites_Importer_Log::add( $message );
					wp_delete_term( $term_id, $term->taxonomy );
				}
			}

			if ( defined( 'WP_CLI' ) ) {
				WP_CLI::line( $message );
			} elseif ( wp_doing_ajax() ) {
				wp_send_json_success( $message );
			}
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Templatiq_Sites_Importer::get_instance();
}
