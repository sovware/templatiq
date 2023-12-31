<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Onboarding;

use Templatiq\Utils\Singleton;
use Templatiq_Sites;
use Templatiq_Sites_Helper;
use Templatiq_Sites_Page;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

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

/**
 * Templatiq Sites Importer
 */
class Onboarding {

	use Singleton;

	/**
	 * List of hosting providers.
	 */
	private $hosting_providers = [
		'unaux',
		'epizy',
		'ezyro',
	];

	/**
	 * Constructor.
	 *
	 * @since  3.0.0-beta.1
	 */
	public function __construct() {
		Setup::init();
		SitesReporting::init();

		// Admin Menu.
		add_action( 'admin_menu', [$this, 'admin_menu'] );
		add_action( 'admin_body_class', [$this, 'admin_body_class'] );

		// Assets loading.
		add_action( 'admin_enqueue_scripts', [$this, 'enqueue_scripts'] );

		add_filter( 'admin_init', [$this, 'st_brizy_flag_field'] );
	}

	/**
	 * Add main menu
	 *
	 * @since 3.0.0-beta.1
	 */
	public function admin_menu() {
		$page_title = apply_filters( 'templatiq_sites_menu_page_title', esc_html__( 'Starter Templates', 'templatiq-sites' ) );

		add_theme_page( $page_title, $page_title, 'manage_options', 'starter-templates', [$this, 'menu_callback'] );
	}

	/**
	 * Menu callback
	 *
	 * @since 3.0.0-beta.1
	 */
	public function menu_callback() {
		$current_slug = isset( $_GET['action'] ) ? esc_attr( $_GET['action'] ) : 'general'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching a $_GET value, no nonce available to validate.
		$active_tab   = str_replace( '_', '-', $current_slug );
		if ( 'site-import' === $current_slug ) {
			Templatiq_Sites_Page::get_instance()->init_nav_menu( $active_tab );
		} else {
			?>
		<div class="templatiq-sites-menu-page-wrapper">
			<div id="templatiq-sites-menu-page">
				<div id="starter-templates-ai-root"></div>
			</div>
		</div>
		<?php }
	}

	/**
	 * Admin Body Classes
	 *
	 * @since 3.0.0-beta.1
	 * @param string $classes Space separated class string.
	 */
	public function admin_body_class( $classes = '' ) {
		$onboarding_class = isset( $_GET['page'] ) && 'starter-templates' === $_GET['page'] ? 'intelligent-starter-templates-onboarding' : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching a $_GET value, no nonce available to validate.
		$classes .= ' ' . $onboarding_class . ' ';

		return $classes;
	}

	/**
	 * Enqueue scripts in the admin area.
	 *
	 * @param string $hook Current screen hook.
	 *
	 * @return void
	 */
	public function enqueue_scripts( $hook = '' ) {

		// After activating the starter template from Templatiq notice for the first time, the templates was not displayed because of template import process not fully done.
		if ( isset( $_GET['ast-disable-activation-notice'] ) ) {
			$current_url = home_url( $_SERVER['REQUEST_URI'] );
			$current_url = str_replace( '&ast-disable-activation-notice', '', $current_url );
			wp_safe_redirect( $current_url );
			exit;
		}

		if ( 'appearance_page_starter-templates' !== $hook ) {
			return;
		}

		remove_all_actions( 'admin_notices' );

		$data = Templatiq_Sites::get_instance()->get_local_vars();

		wp_localize_script( 'jquery', 'templatiqSitesVars', $data );

		$file = INTELLIGENT_TEMPLATES_DIR . 'assets/dist/main.asset.php';
		if ( ! file_exists( $file ) ) {
			return;
		}

		$asset = require_once $file;

		if ( ! isset( $asset ) ) {
			return;
		}

		wp_register_script(
			'starter-templates-onboarding',
			INTELLIGENT_TEMPLATES_URI . 'assets/dist/main.js',
			array_merge( $asset['dependencies'] ),
			$asset['version'],
			true
		);

		wp_localize_script(
			'starter-templates-onboarding', 'wpApiSettings', [
				'root'  => esc_url_raw( get_rest_url() ),
				'nonce' => ( wp_installing() && ! is_multisite() ) ? '' : wp_create_nonce( 'wp_rest' ),
			]
		);

		wp_localize_script( 'starter-templates-onboarding', 'starterTemplates', $this->get_starter_templates_onboarding_localized_array() );

		wp_enqueue_media();
		wp_enqueue_script( 'starter-templates-onboarding' );

		wp_enqueue_style( 'starter-templates-onboarding', INTELLIGENT_TEMPLATES_URI . 'assets/dist/style-main.css', [], $asset['version'] );
		wp_style_add_data( 'starter-templates-onboarding', 'rtl', 'replace' );

		// Load fonts from Google.
		wp_enqueue_style( 'starter-templates-onboarding-google-fonts', $this->google_fonts_url(), ['starter-templates-onboarding'], 'all' );
	}

	/**
	 * Get localized array for starter templates.
	 *
	 * @return array
	 */
	private function get_starter_templates_onboarding_localized_array() {
		$current_user = wp_get_current_user();

		$site_url = add_query_arg(
			[
				'preview-nonce' => wp_create_nonce( 'starter-templates-preview' ),
			], site_url( '/' )
		);

		$spectraTheme = 'not-installed';
		$themeStatus  = Templatiq_Sites::get_instance()->get_theme_status();
		// Theme installed and activate.
		if ( 'spectra-one' === get_option( 'stylesheet', 'onedirectory' ) ) {
			$spectraTheme = 'installed-and-active';
			$themeStatus  = 'installed-and-active';
		}

		$data = [
			'imageDir'            => INTELLIGENT_TEMPLATES_URI . 'assets/images/',
			'URI'                 => INTELLIGENT_TEMPLATES_URI,
			'buildDir'            => INTELLIGENT_TEMPLATES_URI . 'assets/dist/',
			'previewUrl'          => $site_url,
			'adminUrl'            => admin_url(),
			'demoId'              => 0,
			'skipImport'          => false,
			'adminEmail'          => $current_user->user_email,
			'themeStatus'         => $themeStatus,
			'spectraTheme'        => $spectraTheme,
			'nonce'               => wp_create_nonce( 'templatiq-sites-set-ai-site-data' ),
			'restNonce'           => wp_create_nonce( 'wp_rest' ),
			'retryTimeOut'        => 5000, // 10 Seconds.
			'siteUrl' => get_site_url(),
			'searchData'          => Templatiq_Sites::get_instance()->get_api_domain() . 'wp-json/starter-templates/v1/ist-data',
			'firstImportStatus'   => get_option( 'templatiq_sites_import_complete', false ),
			'supportLink'         => 'https://wpastra.com/starter-templates-support/?ip=' . Templatiq_Sites_Helper::get_client_ip(),
			'isBrizyEnabled'      => get_option( 'st-brizy-builder-flag' ),
			'isElementorDisabled' => get_option( 'st-elementor-builder-flag' ),
			'analytics'           => get_site_option( 'bsf_analytics_optin', false ),
			'phpVersion'          => PHP_VERSION,
			'reportError'         => $this->should_report_error(),
		];

		return apply_filters( 'starter_templates_onboarding_localize_vars', $data );
	}

	/**
	 * Check if we should report error or not.
	 * Skipping error reporting for a few hosting providers.
	 */
	public function should_report_error() {

		/**
		 * Bypassing error reporting for a few hosting providers.
		 */
		foreach ( $this->hosting_providers as $provider ) {
			if ( strpos( ABSPATH, $provider ) !== false ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Generate and return the Google fonts url.
	 *
	 * @since 3.0.0-beta.1
	 * @return string
	 */
	public function google_fonts_url() {

		$fonts_url     = '';
		$font_families = [
			'Inter:400,500,600',
		];

		$query_args = [
			'family' => rawurlencode( implode( '|', $font_families ) ),
			'subset' => rawurlencode( 'latin,latin-ext' ),
		];

		$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );

		return $fonts_url;
	}

	/**
	 * Register Enable Brizy templates flag.
	 *
	 * @return void
	 */
	public function st_brizy_flag_field() {
		register_setting( 'general', 'st-brizy-builder-flag', 'esc_attr' );
		register_setting( 'general', 'st-elementor-builder-flag', 'esc_attr' );
		add_settings_field( 'st-brizy-builder-flag', '<label for="st-brizy-builder-flag">' . 'Starter Templates' . '</label>', [$this, 'st_brizy_flag'], 'general' );
	}

	/**
	 * Enable Brizy templates flag markup.
	 *
	 * @return void
	 */
	public function st_brizy_flag() {
		$value           = get_option( 'st-brizy-builder-flag' );
		$elementor_value = get_option( 'st-elementor-builder-flag' );
		ob_start();
		?>
			<div style="display:flex;flex-direction:column;gap:15px;padding:10px;">
				<label>
					<input id='st-brizy-builder-flag' type='checkbox' name='st-brizy-builder-flag' value='1' <?php checked( 1, $value, true );?>>
					<?php _e( 'Enable Brizy Page Builder Templates in Starter Templates', 'templatiq-sites' );?>
				</label>
				<label>
					<input id='st-elementor-builder-flag' type='checkbox' name='st-elementor-builder-flag' value='1' <?php checked( 1, $elementor_value, true );?>>
					<?php _e( 'Disable Elementor Page Builder Templates in Starter Templates', 'templatiq-sites' );?>
				</label>
			</div>
		<?php echo ob_get_clean();
	}

}