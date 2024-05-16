<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Abstracts\EnqueuerBase;
use Templatiq\Repositories\DependencyRepository;
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
	public string $api_domain;
	public string $api_url;
	public function __construct() {
		$this->api_domain = trailingslashit( TEMPLATIQ_API_ENDPOINT );
		$this->api_url    = apply_filters( 'templatiq_sites_api_url', $this->api_domain . 'wp-json/wp/v2/' );

		$this->action( 'admin_enqueue_scripts', [$this, 'new_enqueue_scripts'] );
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

		$data = $this->get_local_vars();

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

		$data = $this->get_local_vars();

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

		wp_enqueue_style( 'templatiq-onboarding-google-fonts', $this->google_fonts_url(), ['templatiq-onboarding'], 'all' );
	}

	private function get_starter_templates_onboarding_localized_array() {
		$current_user = wp_get_current_user();

		$site_url = add_query_arg(
			[
				'preview-nonce' => wp_create_nonce( 'starter-templates-preview' ),
			], site_url( '/' )
		);

		$themeStatus = ( new DependencyRepository )->get_theme_status();

		$data = [
			'imageDir'          => INTELLIGENT_TEMPLATES_URI . 'assets/images/',
			'URI'               => INTELLIGENT_TEMPLATES_URI,
			'buildDir'          => INTELLIGENT_TEMPLATES_URI . 'assets/dist/',
			'previewUrl'        => $site_url,
			'adminUrl'          => admin_url(),
			'demoId'            => 0,
			'skipImport'        => false,
			'adminEmail'        => $current_user->user_email,
			'themeStatus'       => $themeStatus,
			'nonce'             => wp_create_nonce( 'templatiq-sites-set-ai-site-data' ),
			'restNonce'         => wp_create_nonce( 'wp_rest' ),
			'retryTimeOut'      => 5000, // 10 Seconds.
			'siteUrl' => get_site_url(),
			'searchData'        => TEMPLATIQ_API_ENDPOINT . 'wp-json/starter-templates/v1/ist-data',
			'firstImportStatus' => get_option( 'templatiq_sites_import_complete', false ),
			'supportLink'       => 'https://wpastra.com/starter-templates-support/?ip=' . Templatiq_Sites_Helper::get_client_ip(),
			'analytics'         => get_site_option( 'bsf_analytics_optin', false ),
			'phpVersion'        => PHP_VERSION,
			'reportError'       => $this->should_report_error(),
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

	public function get_local_vars() {
		$stored_data = [
			'templatiq-sites-site-category' => [],
			'templatiq-site-page-builder'   => [],
			'templatiq-sites'               => [],
			'site-pages-category'           => [],
			'site-pages-page-builder'       => [],
			'site-pages-parent-category'    => [],
			'site-pages'                    => [],
			'favorites'                     => get_option( 'templatiq-sites-favorites' ),
		];

		$data = apply_filters(
			'templatiq_sites_localize_vars',
			[
				'debug'                              => defined( 'WP_DEBUG' ) ? true : false,
				'isPro'                              => defined( 'TEMPLATIQ_PRO_SITES_NAME' ) ? true : false,
				'ajaxurl'                            => esc_url( admin_url( 'admin-ajax.php' ) ),
				'siteURL'                            => site_url(),
				'getProText'                         => __( 'Get Access!', 'templatiq' ),
				'getProURL'                          => esc_url( 'https://wpastra.com/starter-templates-plans/?utm_source=demo-import-panel&utm_campaign=templatiq-sites&utm_medium=wp-dashboard' ),
				'getUpgradeText'                     => __( 'Upgrade', 'templatiq' ),
				'getUpgradeURL'                      => esc_url( 'https://wpastra.com/starter-templates-plans/?utm_source=demo-import-panel&utm_campaign=templatiq-sites&utm_medium=wp-dashboard' ),
				'_ajax_nonce'                        => wp_create_nonce( 'templatiq-sites' ),
				'requiredPlugins'                    => [],
				'xmlRequiredFilesMissing'            => __( 'Some of the files required during the import process are missing.<br/><br/>Please try again after some time.', 'templatiq' ),
				'importFailedMessageDueToDebug'      => __( '<p>WordPress debug mode is currently enabled on your website. This has interrupted the import process..</p><p>Kindly disable debug mode and try importing Starter Template again.</p><p>You can add the following code into the wp-config.php file to disable debug mode.</p><p><code>define(\'WP_DEBUG\', false);</code></p>', 'templatiq' ),
				/* translators: %s is a documentation link. */
				'importFailedMessage'                => sprintf( __( '<p>We are facing a temporary issue in importing this template.</p><p>Read <a href="%s" target="_blank">article</a> to resolve the issue and continue importing template.</p>', 'templatiq' ), esc_url( 'https://wpastra.com/docs/fix-starter-template-importing-issues/' ) ),
				/* translators: %s is a documentation link. */
				'importFailedRequiredPluginsMessage' => sprintf( __( '<p>We are facing a temporary issue in installing the required plugins for this template.</p><p>Read&nbsp;<a href="%s" target="_blank">article</a>&nbsp;to resolve the issue and continue importing template.</p>', 'templatiq' ), esc_url( 'https://wpastra.com/docs/plugin-installation-failed-multisite/' ) ),

				'strings'                            => [
					/* translators: %s are white label strings. */
					'warningBeforeCloseWindow' => sprintf( __( 'Warning! %1$s Import process is not complete. Don\'t close the window until import process complete. Do you still want to leave the window?', 'templatiq' ), 'Templatiq' ),
					'viewSite'                 => __( 'Done! View Site', 'templatiq' ),
					'syncCompleteMessage'      => $this->get_sync_complete_message(),
					/* translators: %s is a template name */
					'importSingleTemplate'     => __( 'Import "%s" Template', 'templatiq' ),
				],
				'log'                                => [
					'bulkInstall'  => __( 'Installing Required Plugins..', 'templatiq' ),
					/* translators: %s are white label strings. */
					'themeInstall' => sprintf( __( 'Installing %1$s Theme..', 'templatiq' ), 'Templatiq' ),
				],
				'ApiDomain'                          => $this->api_domain,
				'ApiURL'                             => $this->api_url,
				'stored_data'                        => $stored_data,
				'category_slug'                      => 'templatiq-sites-site-category',
				'page_builder'                       => 'templatiq-site-page-builder',
				'cpt_slug'                           => 'templatiq-sites',
				'parent_category'                    => '',
				'compatibilities'                    => $this->get_compatibilities(),
				'compatibilities_data'               => $this->get_compatibilities_data(),
				'dismiss'                            => __( 'Dismiss this notice.', 'templatiq' ),
				'headings'                           => [
					'subscription' => esc_html__( 'One Last Step..', 'templatiq' ),
					'site_import'  => esc_html__( 'Your Selected Website is Being Imported.', 'templatiq' ),
					'page_import'  => esc_html__( 'Your Selected Template is Being Imported.', 'templatiq' ),
				],
				'first_import_complete'              => get_option( 'templatiq_sites_import_complete' ),
				'server_import_primary_error'        => __( 'Looks like the template you are importing is temporarily not available.', 'templatiq' ),
				'client_import_primary_error'        => __( 'We could not start the import process and this is the message from WordPress:', 'templatiq' ),
				'cloudflare_import_primary_error'    => __( 'There was an error connecting to the Starter Templates API.', 'templatiq' ),
				'xml_import_interrupted_primary'     => __( 'There was an error while importing the content.', 'templatiq' ),
				'xml_import_interrupted_secondary'   => __( 'To import content, WordPress needs to store XML file in /wp-content/ folder. Please get in touch with your hosting provider.', 'templatiq' ),
				'xml_import_interrupted_error'       => __( 'Looks like your host probably could not store XML file in /wp-content/ folder.', 'templatiq' ),
				/* translators: %s HTML tags */
				'ajax_request_failed_primary'        => sprintf( __( '%1$sWe could not start the import process due to failed AJAX request and this is the message from WordPress:%2$s', 'templatiq' ), '<p>', '</p>' ),
				/* translators: %s URL to document. */
				'ajax_request_failed_secondary'      => sprintf( __( '%1$sRead&nbsp;<a href="%2$s" target="_blank">article</a>&nbsp;to resolve the issue and continue importing template.%3$s', 'templatiq' ), '<p>', esc_url( 'https://wpastra.com/docs/internal-server-error-starter-templates/' ), '</p>' ),

				/* translators: %s URL to document. */
				'process_failed_primary'             => sprintf( __( '%1$sWe could not complete the import process due to failed AJAX request and this is the message:%2$s', 'templatiq' ), '<p>', '</p>' ),
				/* translators: %s URL to document. */
				'process_failed_secondary'           => sprintf( __( '%1$sPlease report this <a href="%2$s" target="_blank">here</a>.%3$s', 'templatiq' ), '<p>', esc_url( 'https://wpastra.com/starter-templates-support/?url=#DEMO_URL#&subject=#SUBJECT#' ), '</p>' ),
				'st_page_url'                        => admin_url( 'themes.php?page=starter-templates' ),
				'staging_connected'                  => apply_filters( 'templatiq_sites_staging_connected', '' ),
				'isRTLEnabled'                       => is_rtl(),
				/* translators: %s Anchor link to support URL. */
				'support_text'                       => sprintf( __( 'Please report this error %1$shere%2$s, so we can fix it.', 'templatiq' ), '<a href="https://wpastra.com/support/open-a-ticket/" target="_blank">', '</a>' ),
			]
		);

		return $data;
	}

	public function get_compatibilities_data() {
		return [
			'xmlreader'            => [
				'title'   => esc_html__( 'XMLReader Support Missing', 'templatiq' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'You\'re close to importing the template. To complete the process, enable XMLReader support on your website..', 'templatiq' ) . '</p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq' ), 'https://wpastra.com/docs/xmlreader-missing/' ) . '</p>',
			],
			'curl'                 => [
				'title'   => esc_html__( 'cURL Support Missing', 'templatiq' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'To run a smooth import, kindly enable cURL support on your website.', 'templatiq' ) . '</p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq' ), 'https://wpastra.com/docs/curl-support-missing/' ) . '</p>',
			],
			'wp-debug'             => [
				'title'   => esc_html__( 'Disable Debug Mode', 'templatiq' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'WordPress debug mode is currently enabled on your website. With this, any errors from third-party plugins might affect the import process.', 'templatiq' ) . '</p><p>' . esc_html__( 'Kindly disable it to continue importing the Starter Template. To do so, you can add the following code into the wp-config.php file.', 'templatiq' ) . '</p><p><code>define(\'WP_DEBUG\', false);</code></p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq' ), 'https://wpastra.com/docs/disable-debug-mode/' ) . '</p>',
			],
			'update-available'     => [
				'title'   => esc_html__( 'Update Plugin', 'templatiq' ),
				/* translators: %s update page link. */
				'tooltip' => '<p>' . esc_html__( 'Updates are available for plugins used in this starter template.', 'templatiq' ) . '</p>##LIST##<p>' . sprintf( __( 'Kindly <a href="%s" target="_blank">update</a> them for a successful import. Skipping this step might break the template design/feature.', 'templatiq' ), esc_url( network_admin_url( 'update-core.php' ) ) ) . '</p>',
			],
			'third-party-required' => [
				'title'   => esc_html__( 'Required Plugins Missing', 'templatiq' ),
				'tooltip' => '<p>' . esc_html__( 'This starter template requires premium plugins. As these are third party premium plugins, you\'ll need to purchase, install and activate them first.', 'templatiq' ) . '</p>',
			],
			'dynamic-page'         => [
				'title'   => esc_html__( 'Dynamic Page', 'templatiq' ),
				'tooltip' => '<p>' . esc_html__( 'The page template you are about to import contains a dynamic widget/module. Please note this dynamic data will not be available with the imported page.', 'templatiq' ) . '</p><p>' . esc_html__( 'You will need to add it manually on the page.', 'templatiq' ) . '</p><p>' . esc_html__( 'This dynamic content will be available when you import the entire site.', 'templatiq' ) . '</p>',
			],
		];
	}

	public function get_compatibilities() {

		$data = $this->get_compatibilities_data();

		$compatibilities = [
			'errors'   => [],
			'warnings' => [],
		];

		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$compatibilities['warnings']['wp-debug'] = $data['wp-debug'];
		}

		if ( ! class_exists( 'XMLReader' ) ) {
			$compatibilities['errors']['xmlreader'] = $data['xmlreader'];
		}

		if ( ! function_exists( 'curl_version' ) ) {
			$compatibilities['errors']['curl'] = $data['curl'];
		}

		return $compatibilities;
	}

	public function get_sync_complete_message( $echo = false ) {

		$message = __( 'Template library refreshed!', 'templatiq' );

		if ( $echo ) {
			echo esc_html( $message );
		} else {
			return esc_html( $message );
		}
	}
}