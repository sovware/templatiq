<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Onboarding;

use Templatiq\Abstracts\EnqueuerBase;
use Templatiq\FullSite\FullSite;
use Templatiq_Sites_Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Enqueuer extends EnqueuerBase {

	private $hosting_providers = [
		'unaux',
		'epizy',
		'ezyro',
	];

	public function __construct() {
		$this->action( 'admin_enqueue_scripts', 'new_enqueue_scripts' );
	}

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

		$data = FullSite::init()->get_local_vars();

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

	public function new_enqueue_scripts( $hook = '' ) {
		if ( 'appearance_page_starter-templates' !== $hook ) {
			return;
		}

		remove_all_actions( 'admin_notices' );

		$data = FullSite::init()->get_local_vars();

		wp_localize_script( 'jquery', 'templatiqSitesVars', $data );

		wp_enqueue_style( 'wp-components' );

		$script_asset_path = TEMPLATIQ_ASSETS_PATH . '/js/onboarding.asset.php';

		$script_info = file_exists( $script_asset_path ) ? include $script_asset_path : [
			'dependencies' => [],
			'version'      => TEMPLATIQ_VERSION,
		];

		$script_dep = array_merge( $script_info['dependencies'], ['updates', 'wp-hooks'] );

		$this->enqueue_script( 'templatiq-onboarding', '/js/onboarding.js', $script_dep );
		$this->enqueue_style( 'templatiq-onboarding', '/js/style-onboarding.css' );

		wp_localize_script(
			'templatiq-onboarding', 'wpApiSettings',
			[
				'root'  => esc_url_raw( get_rest_url() ),
				'nonce' => ( wp_installing() && ! is_multisite() ) ? '' : wp_create_nonce( 'wp_rest' ),
			]
		);

		wp_localize_script(
			'templatiq-onboarding',
			'starterTemplates',
			$this->get_starter_templates_onboarding_localized_array()
		);

		wp_enqueue_media();

		$this->enqueue_style(
			'templatiq-onboarding-google-fonts',
			$this->google_fonts_url(),
			['templatiq-onboarding'],
			'all'
		);
	}

	private function get_starter_templates_onboarding_localized_array() {
		$current_user = wp_get_current_user();

		$site_url = add_query_arg(
			[
				'preview-nonce' => wp_create_nonce( 'starter-templates-preview' ),
			], site_url( '/' )
		);

		$spectraTheme = 'not-installed';
		$themeStatus  = FullSite::init()->get_theme_status();
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
			'searchData'          => FullSite::init()->get_api_domain() . 'wp-json/starter-templates/v1/ist-data',
			'firstImportStatus'   => get_option( 'templatiq_sites_import_complete', false ),
			'supportLink'         => 'https://wpastra.com/starter-templates-support/?ip=' . Templatiq_Sites_Helper::get_client_ip(),
			'isElementorDisabled' => get_option( 'st-elementor-builder-flag' ),
			'analytics'           => get_site_option( 'bsf_analytics_optin', false ),
			'phpVersion'          => PHP_VERSION,
			'reportError'         => $this->should_report_error(),
		];

		return apply_filters( 'starter_templates_onboarding_localize_vars', $data );
	}

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
}