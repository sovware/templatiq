<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Utils\Singleton;

if ( ! defined( 'INTELLIGENT_TEMPLATES_FILE' ) ) {
	define( 'INTELLIGENT_TEMPLATES_FILE', __FILE__ );
}

if ( ! defined( 'INTELLIGENT_TEMPLATES_BASE' ) ) {
	define( 'INTELLIGENT_TEMPLATES_BASE', plugin_basename( INTELLIGENT_TEMPLATES_FILE ) );
}

if ( ! defined( 'INTELLIGENT_TEMPLATES_DIR' ) ) {
	define( 'INTELLIGENT_TEMPLATES_DIR', plugin_dir_path( INTELLIGENT_TEMPLATES_FILE ) );
}

if ( ! defined( 'INTELLIGENT_TEMPLATES_URI' ) ) {
	define( 'INTELLIGENT_TEMPLATES_URI', plugins_url( '/', INTELLIGENT_TEMPLATES_FILE ) );
}

if ( ! defined( 'TEMPLATIQ_SITES_VER' ) ) {
	define( 'TEMPLATIQ_SITES_VER', '1.0.0' );
}

if ( ! defined( 'TEMPLATIQ_SITES_DIR' ) ) {
	define( 'TEMPLATIQ_SITES_DIR', TEMPLATIQ_PATH . '/app/FullTemplate/' );
}

if ( ! defined( 'TEMPLATIQ_SITES_URI' ) ) {
	define( 'TEMPLATIQ_SITES_URI', TEMPLATIQ_URL . '/app/FullTemplate/inc/' );
}

class FullTemplate {
	use Singleton;

	public string $api_domain;
	public string $api_url;
	public string $search_analytics_url;
	public string $import_analytics_url;

	private function __construct() {
		$this->api_domain = trailingslashit( TEMPLATIQ_API_ENDPOINT );
		$this->api_url    = apply_filters( 'templatiq_sites_api_url', $this->api_domain . 'wp-json/wp/v2/' );

		$this->search_analytics_url = apply_filters( 'templatiq_sites_search_api_url', $this->api_domain . 'wp-json/analytics/v2/search/' );
		$this->import_analytics_url = apply_filters( 'templatiq_sites_import_analytics_api_url', $this->api_domain . 'wp-json/analytics/v2/import/' );

		$this->includes();

		add_action( 'templatiq_notice_before_markup', [$this, 'notice_assets'] );
		add_action( 'admin_enqueue_scripts', [$this, 'admin_assets'] );

		add_action( 'admin_notices', [$this, 'check_filesystem_access_notice'] );

		add_action( 'delete_attachment', [$this, 'delete_templatiq_images'] );
		add_filter( 'wp_php_error_message', [$this, 'php_error_message'], 10, 2 );
		add_filter( 'wp_import_post_data_processed', [$this, 'wp_slash_after_xml_import'], 99, 2 );
	}

	private function includes() {
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/functions.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-error-handler.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-importer.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-image-processing.php';
	}

	public function admin_assets() {
		$current_screen = get_current_screen();

		if ( 'appearance_page_starter-templates' !== $current_screen->id ) {
			return;
		}

		wp_enqueue_style( 'templatiq-sites-admin-page', TEMPLATIQ_SITES_URI . 'assets/css/admin.css', TEMPLATIQ_SITES_VER, true );
		wp_enqueue_script( 'templatiq-sites-admin-js', TEMPLATIQ_SITES_URI . 'assets/js/admin.js', ['templatiq-sites-admin-page', 'jquery'], TEMPLATIQ_SITES_VER, true );
	}

	public static function notice_assets() {
		$file = is_rtl() ? 'astra-notices-rtl.css' : 'astra-notices.css';
		wp_enqueue_style( 'templatiq-sites-notices', TEMPLATIQ_SITES_URI . 'assets/css/' . $file, [], TEMPLATIQ_SITES_VER );
	}

	public function check_filesystem_access_notice() {
		// Check if WP_Filesystem() returns false.
		if ( ! WP_Filesystem() ) {
			// Display a notice on the dashboard.
			echo '<div class="error"><p>' . esc_html__( 'Required WP_Filesystem Permissions to import the templates from Starter Templates are missing.', 'templatiq' ) . '</p></div>';
		}
	}

	public function delete_templatiq_images( $id ) {
		if ( ! $id ) {
			return;
		}

		$saved_images         = get_option( 'templatiq-sites-saved-images', [] );
		$templatiq_image_flag = get_post_meta( $id, 'astra-images', true );
		$templatiq_image_flag = (int) $templatiq_image_flag;
		if (
			'' !== $templatiq_image_flag &&
			is_array( $saved_images ) &&
			! empty( $saved_images ) &&
			in_array( $templatiq_image_flag, $saved_images )
		) {
			$flag_arr     = [$templatiq_image_flag];
			$saved_images = array_diff( $saved_images, $flag_arr );
			update_option( 'templatiq-sites-saved-images', $saved_images, 'no' );
		}
	}

	public function php_error_message( $message, $error ) {
		if ( empty( $error ) ) {
			return $message;
		}

		$message = isset( $error['message'] ) ? $error['message'] : $message;

		return $message;
	}

	public function wp_slash_after_xml_import( $postdata, $data ) {
		return wp_slash( $postdata );
	}
}