<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\FullTemplate\OptionsImport;
use Templatiq\Repositories\LoggingRepository;

/**
 * Templatiq Sites Importer
 */
class Importer {
	public static $instance = null;

	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct() {
		// Import AJAX.
		add_action( 'wp_ajax_templatiq-sites-import-customizer-settings', [$this, 'import_customizer_settings'] );
		add_action( 'wp_ajax_templatiq-sites-import-prepare-xml', [$this, 'prepare_xml_data'] );
		add_action( 'wp_ajax_templatiq-sites-import-options', [$this, 'import_options'] );
		add_action( 'wp_ajax_templatiq-sites-import-widgets', [$this, 'import_widgets'] );
		add_action( 'wp_ajax_templatiq-sites-import-end', [$this, 'templatiq_import_end'] );

		// Hooks in AJAX.
		add_action( 'templatiq_full_template_import_complete', [$this, 'clear_related_cache'] );
		add_action( 'init', [$this, 'load_importer'] );

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

		add_filter( 'upgrader_package_options', [$this, 'plugin_install_clear_directory'] );
	}

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

		ImporterLog::add( 'Importing from XML ' . $wxr_url );

		$overrides = [
			'wp_handle_sideload' => 'upload',
		];

		// Download XML file.
		$xml_path = Helper::download_file( $wxr_url, $overrides );

		if ( $xml_path['success'] ) {

			$post = [
				'post_title'     => basename( $wxr_url ),
				'guid'           => $xml_path['data']['url'],
				'post_mime_type' => $xml_path['data']['type'],
			];

			ImporterLog::add( wp_json_encode( $post ) );
			ImporterLog::add( wp_json_encode( $xml_path ) );

			// as per wp-admin/includes/upload.php.
			$post_id = wp_insert_attachment( $post, $xml_path['data']['file'] );

			ImporterLog::add( wp_json_encode( $post_id ) );

			if ( is_wp_error( $post_id ) ) {
				LoggingRepository::add( 'Error Downloading XML File', '' );
				wp_send_json_error( __( 'There was an error downloading the XML file.', 'templatiq' ) );
			} else {
				LoggingRepository::add( 'XML File Downloaded', $post_id );
				update_option( 'templatiq_sites_imported_wxr_id', $post_id, 'no' );
				$attachment_metadata = wp_generate_attachment_metadata( $post_id, $xml_path['data']['file'] );
				wp_update_attachment_metadata( $post_id, $attachment_metadata );
				$data        = \Templatiq_WXR_Importer::instance()->get_xml_data( $xml_path['data']['file'], $post_id );
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

		if ( ! empty( $options_data ) ) {
			// Set meta for tracking the post.
			if ( is_array( $options_data ) ) {
				ImporterLog::add( 'Imported - Site Options ' . wp_json_encode( $options_data ) );
				update_option( '_templatiq_sites_old_site_options', $options_data, 'no' );
			}

			$options_importer = ( new OptionsImport );
			$options_importer->import_options( $options_data );

			LoggingRepository::add( 'Site Options Imported' );

			if ( wp_doing_ajax() ) {
				wp_send_json_success( $options_data );
			}
		} else {

			LoggingRepository::add( 'Site options are empty!' );

			if ( wp_doing_ajax() ) {
				wp_send_json_error( __( 'Site options are empty!', 'templatiq' ) );
			}
		}
	}

	/**
	 * Import Widgets.
	 *
	 * @since 1.0.14
	 * @since 1.4.0 The `$widgets_data` was added.
	 *
	 * @return void
	 */
	public function import_widgets() {

		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			// Verify Nonce.
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		$json_data = templatiq_get_site_data( 'templatiq-site-widgets-data' );

		// $result = WidgetsImport::import_widgets( $widgets_data, $data );
		$data   = json_decode( $json_data ); // Decode file contents to JSON data.
		$result = WidgetsImport::import_data( $data );

		if ( isset( $result['status'] ) && false === $result['status'] ) {

			LoggingRepository::add( 'Import Widgets', $result['error'] );

			if ( wp_doing_ajax() ) {
				wp_send_json_error( $result['error'] );
			}
		} else {

			LoggingRepository::add( 'Import Widgets', 'Widgets Imported' );

			if ( wp_doing_ajax() ) {
				wp_send_json_success( 'Widgets Imported!' );
			}
		}
	}

	/**
	 * Import End.
	 *
	 * @since 1.0.14
	 * @return void
	 */
	public function templatiq_import_end() {
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			// Verify Nonce.
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		$demo_data = get_option( 'templatiq_sites_import_data', [] );

		do_action( 'templatiq_full_template_import_complete', $demo_data );

		update_option( 'templatiq_full_template_import_complete', 'yes', 'no' );
		delete_transient( 'templatiq_sites_import_started' );

		LoggingRepository::add( 'Import Complete', '' );

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}
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

		LoggingRepository::add( 'Start Import Process', '' );

		do_action( 'templatiq_before_start_import_process' );
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
			ImporterLog::add( 'Cache for Beaver Builder cleared.' );
		}

		// Clear 'Templatiq Addon' cache.
		if ( is_callable( 'Templatiq_Minify::refresh_assets' ) ) {
			Templatiq_Minify::refresh_assets();
			ImporterLog::add( 'Cache for Templatiq Addon cleared.' );
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

		ImporterLog::add( 'Deleted customizer Settings ' . wp_json_encode( get_option( 'templatiq-settings', [] ) ) );

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

		ImporterLog::add( 'Deleted - Site Options ' . wp_json_encode( $options ) );

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

			ImporterLog::add( $message );
			wp_delete_post( $post_id, true );
		}

		if ( wp_doing_ajax() ) {
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
				ImporterLog::add( $message );
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