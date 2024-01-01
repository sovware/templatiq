<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullSite;

use Templatiq\Utils\Singleton;
use Templatiq_Sites_White_Label;

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

class FullSite {
	use Singleton;

	public string $api_domain;
	public string $api_url;
	public string $search_analytics_url;
	public string $import_analytics_url;
	public string $pixabay_url;
	public string $pixabay_api_key;

	public function __construct() {
		$this->set_api_url();
		$this->includes();

		add_action( 'admin_enqueue_scripts', [$this, 'admin_enqueue'], 99 );
		add_action( 'elementor/editor/footer', [$this, 'insert_templates'] );
		add_action( 'admin_footer', [$this, 'insert_image_templates'] );
		add_action( 'customize_controls_print_footer_scripts', [$this, 'insert_image_templates'] );
		add_action( 'admin_notices', [$this, 'check_filesystem_access_notice'] );

		Ajax::init();

		add_action( 'delete_attachment', [$this, 'delete_templatiq_images'] );
		add_filter( 'wp_php_error_message', [$this, 'php_error_message'], 10, 2 );
		add_filter( 'wp_import_post_data_processed', [$this, 'wp_slash_after_xml_import'], 99, 2 );
	}

	public function set_api_url() {
		$this->api_domain = trailingslashit( $this->get_api_domain() );
		$this->api_url    = apply_filters( 'templatiq_sites_api_url', $this->api_domain . 'wp-json/wp/v2/' );

		$this->search_analytics_url = apply_filters( 'templatiq_sites_search_api_url', $this->api_domain . 'wp-json/analytics/v2/search/' );
		$this->import_analytics_url = apply_filters( 'templatiq_sites_import_analytics_api_url', $this->api_domain . 'wp-json/analytics/v2/import/' );

		$this->pixabay_url     = 'https://pixabay.com/api/';
		$this->pixabay_api_key = '2727911-c4d7c1031949c7e0411d7e81e';
	}

	private function includes() {
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/functions.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-error-handler.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-white-label.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-page.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-elementor-pages.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-elementor-images.php';
		// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/class-templatiq-sites-compatibility.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-importer.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-image-processing.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/class-templatiq-sites-wp-cli.php';
		// require_once TEMPLATIQ_SITES_DIR . 'inc/lib/class-templatiq-sites-ast-block-templates.php';
		// require_once TEMPLATIQ_SITES_DIR . 'inc/lib/onboarding/class-onboarding.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/lib/zip-ai/zip-ai.php';

		// Batch Import.
		require_once TEMPLATIQ_SITES_DIR . 'inc/classes/batch-import/class-templatiq-sites-batch-import.php';
	}

	//

	public function admin_enqueue( $hook = '' ) {
		// Avoid scripts from customizer.
		if ( is_customize_preview() ) {
			return;
		}

		wp_enqueue_script( 'templatiq-sites-install-theme', TEMPLATIQ_SITES_URI . 'inc/assets/js/install-theme.js', ['jquery', 'updates'], TEMPLATIQ_SITES_VER, true );

		$data = apply_filters(
			'templatiq_sites_install_theme_localize_vars',
			[
				'installed'   => __( 'Installed! Activating..', 'templatiq-sites' ),
				'activating'  => __( 'Activating...', 'templatiq-sites' ),
				'activated'   => __( 'Activated!', 'templatiq-sites' ),
				'installing'  => __( 'Installing...', 'templatiq-sites' ),
				'ajaxurl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
				'_ajax_nonce' => wp_create_nonce( 'templatiq-sites' ),
			]
		);
		wp_localize_script( 'templatiq-sites-install-theme', 'TemplatiqSitesInstallThemeVars', $data );

		if ( 'appearance_page_starter-templates' !== $hook ) {
			return;
		}

		global $is_IE, $is_edge;

		if ( $is_IE || $is_edge ) {
			wp_enqueue_script( 'templatiq-sites-eventsource', TEMPLATIQ_SITES_URI . 'inc/assets/js/eventsource.min.js', ['jquery', 'wp-util', 'updates'], TEMPLATIQ_SITES_VER, true );
		}

		// Fetch.
		wp_register_script( 'templatiq-sites-fetch', TEMPLATIQ_SITES_URI . 'inc/assets/js/fetch.umd.js', ['jquery'], TEMPLATIQ_SITES_VER, true );

		// History.
		wp_register_script( 'templatiq-sites-history', TEMPLATIQ_SITES_URI . 'inc/assets/js/history.js', ['jquery'], TEMPLATIQ_SITES_VER, true );

		// Admin Page.
		wp_enqueue_style( 'templatiq-sites-admin', TEMPLATIQ_SITES_URI . 'inc/assets/css/admin.css', TEMPLATIQ_SITES_VER, true );
		wp_style_add_data( 'templatiq-sites-admin', 'rtl', 'replace' );

		$data = $this->get_local_vars();
	}

	public function insert_templates() {
		ob_start();
		require_once TEMPLATIQ_SITES_DIR . 'inc/includes/templates.php';
		require_once TEMPLATIQ_SITES_DIR . 'inc/includes/image-templates.php';
		ob_end_flush();
	}

	public function insert_image_templates() {
		ob_start();
		require_once TEMPLATIQ_SITES_DIR . 'inc/includes/image-templates.php';
		ob_end_flush();
	}

	public function check_filesystem_access_notice() {
		// Check if WP_Filesystem() returns false.
		if ( ! WP_Filesystem() ) {
			// Display a notice on the dashboard.
			echo '<div class="error"><p>' . esc_html__( 'Required WP_Filesystem Permissions to import the templates from Starter Templates are missing.', 'templatiq-sites' ) . '</p></div>';
		}
	}

	//
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

	public static function get_api_domain() {
		return apply_filters( 'templatiq_sites_api_domain', 'https://templatiq.com/' );
	}

	public function get_local_vars() {
		$stored_data = [
			'templatiq-sites-site-category' => [],
			'astra-site-page-builder'       => [],
			'templatiq-sites'               => [],
			'site-pages-category'           => [],
			'site-pages-page-builder'       => [],
			'site-pages-parent-category'    => [],
			'site-pages'                    => [],
			'favorites'                     => get_option( 'templatiq-sites-favorites' ),
		];

		$favorite_data = get_option( 'templatiq-sites-favorites' );

		$data = apply_filters(
			'templatiq_sites_localize_vars',
			[
				'subscribed'                         => get_user_meta( get_current_user_ID(), 'templatiq-sites-subscribed', true ),
				'debug'                              => defined( 'WP_DEBUG' ) ? true : false,
				'isPro'                              => defined( 'TEMPLATIQ_PRO_SITES_NAME' ) ? true : false,
				'ajaxurl'                            => esc_url( admin_url( 'admin-ajax.php' ) ),
				'siteURL'                            => site_url(),
				'getProText'                         => __( 'Get Access!', 'templatiq-sites' ),
				'getProURL'                          => esc_url( 'https://wpastra.com/starter-templates-plans/?utm_source=demo-import-panel&utm_campaign=templatiq-sites&utm_medium=wp-dashboard' ),
				'getUpgradeText'                     => __( 'Upgrade', 'templatiq-sites' ),
				'getUpgradeURL'                      => esc_url( 'https://wpastra.com/starter-templates-plans/?utm_source=demo-import-panel&utm_campaign=templatiq-sites&utm_medium=wp-dashboard' ),
				'_ajax_nonce'                        => wp_create_nonce( 'templatiq-sites' ),
				'requiredPlugins'                    => [],
				'syncLibraryStart'                   => '<span class="message">' . esc_html__( 'Syncing template library in the background. The process can take anywhere between 2 to 3 minutes. We will notify you once done.', 'templatiq-sites' ) . '</span>',
				'xmlRequiredFilesMissing'            => __( 'Some of the files required during the import process are missing.<br/><br/>Please try again after some time.', 'templatiq-sites' ),
				'importFailedMessageDueToDebug'      => __( '<p>WordPress debug mode is currently enabled on your website. This has interrupted the import process..</p><p>Kindly disable debug mode and try importing Starter Template again.</p><p>You can add the following code into the wp-config.php file to disable debug mode.</p><p><code>define(\'WP_DEBUG\', false);</code></p>', 'templatiq-sites' ),
				/* translators: %s is a documentation link. */
				'importFailedMessage'                => sprintf( __( '<p>We are facing a temporary issue in importing this template.</p><p>Read <a href="%s" target="_blank">article</a> to resolve the issue and continue importing template.</p>', 'templatiq-sites' ), esc_url( 'https://wpastra.com/docs/fix-starter-template-importing-issues/' ) ),
				/* translators: %s is a documentation link. */
				'importFailedRequiredPluginsMessage' => sprintf( __( '<p>We are facing a temporary issue in installing the required plugins for this template.</p><p>Read&nbsp;<a href="%s" target="_blank">article</a>&nbsp;to resolve the issue and continue importing template.</p>', 'templatiq-sites' ), esc_url( 'https://wpastra.com/docs/plugin-installation-failed-multisite/' ) ),

				'strings'                            => [
					/* translators: %s are white label strings. */
					'warningBeforeCloseWindow' => sprintf( __( 'Warning! %1$s Import process is not complete. Don\'t close the window until import process complete. Do you still want to leave the window?', 'templatiq-sites' ), 'Templatiq' ),
					'viewSite'                 => __( 'Done! View Site', 'templatiq-sites' ),
					'syncCompleteMessage'      => $this->get_sync_complete_message(),
					/* translators: %s is a template name */
					'importSingleTemplate'     => __( 'Import "%s" Template', 'templatiq-sites' ),
				],
				'log'                                => [
					'bulkInstall'  => __( 'Installing Required Plugins..', 'templatiq-sites' ),
					/* translators: %s are white label strings. */
					'themeInstall' => sprintf( __( 'Installing %1$s Theme..', 'templatiq-sites' ), Templatiq_Sites_White_Label::get_instance()->get_option( 'astra', 'name', 'Templatiq' ) ),
				],
				'sites'                              => templatiq_sites_get_api_params(),
				'categories'                         => [],
				'page-builders'                      => [],
				'all_sites'                          => $this->get_all_sites(),
				'all_site_categories'                => get_option( 'templatiq-sites-all-site-categories', [] ),
				'all_site_categories_and_tags'       => get_option( 'templatiq-sites-all-site-categories-and-tags', [] ),
				'license_page_builder'               => get_option( 'templatiq-sites-license-page-builder', '' ),
				'ApiDomain'                          => $this->api_domain,
				'ApiURL'                             => $this->api_url,
				'stored_data'                        => $stored_data,
				'favorite_data'                      => $favorite_data,
				'category_slug'                      => 'templatiq-sites-site-category',
				'page_builder'                       => 'astra-site-page-builder',
				'cpt_slug'                           => 'templatiq-sites',
				'parent_category'                    => '',
				'compatibilities'                    => $this->get_compatibilities(),
				'compatibilities_data'               => $this->get_compatibilities_data(),
				'dismiss'                            => __( 'Dismiss this notice.', 'templatiq-sites' ),
				'headings'                           => [
					'subscription' => esc_html__( 'One Last Step..', 'templatiq-sites' ),
					'site_import'  => esc_html__( 'Your Selected Website is Being Imported.', 'templatiq-sites' ),
					'page_import'  => esc_html__( 'Your Selected Template is Being Imported.', 'templatiq-sites' ),
				],
				'subscriptionSuccessMessage'         => esc_html__( 'We have sent you a surprise gift on your email address! Please check your inbox!', 'templatiq-sites' ),
				'first_import_complete'              => get_option( 'templatiq_sites_import_complete' ),
				'server_import_primary_error'        => __( 'Looks like the template you are importing is temporarily not available.', 'templatiq-sites' ),
				'client_import_primary_error'        => __( 'We could not start the import process and this is the message from WordPress:', 'templatiq-sites' ),
				'cloudflare_import_primary_error'    => __( 'There was an error connecting to the Starter Templates API.', 'templatiq-sites' ),
				'xml_import_interrupted_primary'     => __( 'There was an error while importing the content.', 'templatiq-sites' ),
				'xml_import_interrupted_secondary'   => __( 'To import content, WordPress needs to store XML file in /wp-content/ folder. Please get in touch with your hosting provider.', 'templatiq-sites' ),
				'xml_import_interrupted_error'       => __( 'Looks like your host probably could not store XML file in /wp-content/ folder.', 'templatiq-sites' ),
				/* translators: %s HTML tags */
				'ajax_request_failed_primary'        => sprintf( __( '%1$sWe could not start the import process due to failed AJAX request and this is the message from WordPress:%2$s', 'templatiq-sites' ), '<p>', '</p>' ),
				/* translators: %s URL to document. */
				'ajax_request_failed_secondary'      => sprintf( __( '%1$sRead&nbsp;<a href="%2$s" target="_blank">article</a>&nbsp;to resolve the issue and continue importing template.%3$s', 'templatiq-sites' ), '<p>', esc_url( 'https://wpastra.com/docs/internal-server-error-starter-templates/' ), '</p>' ),

				/* translators: %s URL to document. */
				'process_failed_primary'             => sprintf( __( '%1$sWe could not complete the import process due to failed AJAX request and this is the message:%2$s', 'templatiq-sites' ), '<p>', '</p>' ),
				/* translators: %s URL to document. */
				'process_failed_secondary'           => sprintf( __( '%1$sPlease report this <a href="%2$s" target="_blank">here</a>.%3$s', 'templatiq-sites' ), '<p>', esc_url( 'https://wpastra.com/starter-templates-support/?url=#DEMO_URL#&subject=#SUBJECT#' ), '</p>' ),
				'st_page_url'                        => admin_url( 'themes.php?page=starter-templates' ),
				'staging_connected'                  => apply_filters( 'templatiq_sites_staging_connected', '' ),
				'isRTLEnabled'                       => is_rtl(),
				/* translators: %s Anchor link to support URL. */
				'support_text'                       => sprintf( __( 'Please report this error %1$shere%2$s, so we can fix it.', 'templatiq-sites' ), '<a href="https://wpastra.com/support/open-a-ticket/" target="_blank">', '</a>' ),
			]
		);

		return $data;
	}

	public function get_compatibilities_data() {
		return [
			'xmlreader'            => [
				'title'   => esc_html__( 'XMLReader Support Missing', 'templatiq-sites' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'You\'re close to importing the template. To complete the process, enable XMLReader support on your website..', 'templatiq-sites' ) . '</p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq-sites' ), 'https://wpastra.com/docs/xmlreader-missing/' ) . '</p>',
			],
			'curl'                 => [
				'title'   => esc_html__( 'cURL Support Missing', 'templatiq-sites' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'To run a smooth import, kindly enable cURL support on your website.', 'templatiq-sites' ) . '</p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq-sites' ), 'https://wpastra.com/docs/curl-support-missing/' ) . '</p>',
			],
			'wp-debug'             => [
				'title'   => esc_html__( 'Disable Debug Mode', 'templatiq-sites' ),
				/* translators: %s doc link. */
				'tooltip' => '<p>' . esc_html__( 'WordPress debug mode is currently enabled on your website. With this, any errors from third-party plugins might affect the import process.', 'templatiq-sites' ) . '</p><p>' . esc_html__( 'Kindly disable it to continue importing the Starter Template. To do so, you can add the following code into the wp-config.php file.', 'templatiq-sites' ) . '</p><p><code>define(\'WP_DEBUG\', false);</code></p><p>' . sprintf( __( 'Read an article <a href="%s" target="_blank">here</a> to resolve the issue.', 'templatiq-sites' ), 'https://wpastra.com/docs/disable-debug-mode/' ) . '</p>',
			],
			'update-available'     => [
				'title'   => esc_html__( 'Update Plugin', 'templatiq-sites' ),
				/* translators: %s update page link. */
				'tooltip' => '<p>' . esc_html__( 'Updates are available for plugins used in this starter template.', 'templatiq-sites' ) . '</p>##LIST##<p>' . sprintf( __( 'Kindly <a href="%s" target="_blank">update</a> them for a successful import. Skipping this step might break the template design/feature.', 'templatiq-sites' ), esc_url( network_admin_url( 'update-core.php' ) ) ) . '</p>',
			],
			'third-party-required' => [
				'title'   => esc_html__( 'Required Plugins Missing', 'templatiq-sites' ),
				'tooltip' => '<p>' . esc_html__( 'This starter template requires premium plugins. As these are third party premium plugins, you\'ll need to purchase, install and activate them first.', 'templatiq-sites' ) . '</p>',
			],
			'dynamic-page'         => [
				'title'   => esc_html__( 'Dynamic Page', 'templatiq-sites' ),
				'tooltip' => '<p>' . esc_html__( 'The page template you are about to import contains a dynamic widget/module. Please note this dynamic data will not be available with the imported page.', 'templatiq-sites' ) . '</p><p>' . esc_html__( 'You will need to add it manually on the page.', 'templatiq-sites' ) . '</p><p>' . esc_html__( 'This dynamic content will be available when you import the entire site.', 'templatiq-sites' ) . '</p>',
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

		$message = __( 'Template library refreshed!', 'templatiq-sites' );

		if ( $echo ) {
			echo esc_html( $message );
		} else {
			return esc_html( $message );
		}
	}

	public function get_all_sites() {
		$sites_and_pages = [];
		$total_requests  = (int) get_site_option( 'templatiq-sites-requests', 0 );

		for ( $page = 1; $page <= $total_requests; $page++ ) {
			$current_page_data = get_site_option( 'templatiq-sites-and-pages-page-' . $page, [] );
			if ( ! empty( $current_page_data ) ) {
				foreach ( $current_page_data as $page_id => $page_data ) {
					$sites_and_pages[$page_id] = $page_data;
				}
			}
		}

		return $sites_and_pages;
	}

	public function get_all_blocks() {

		$blocks         = [];
		$total_requests = (int) get_site_option( 'astra-blocks-requests', 0 );

		for ( $page = 1; $page <= $total_requests; $page++ ) {
			$current_page_data = get_site_option( 'astra-blocks-' . $page, [] );
			if ( ! empty( $current_page_data ) ) {
				foreach ( $current_page_data as $page_id => $page_data ) {
					$blocks[$page_id] = $page_data;
				}
			}
		}

		return $blocks;
	}

	public function get_page_builders() {
		return $this->get_default_page_builders();
	}

	public function get_default_page_builders() {
		return [
			[
				'id'   => 42,
				'slug' => 'gutenberg',
				'name' => 'Gutenberg',
			],
			[
				'id'   => 33,
				'slug' => 'elementor',
				'name' => 'Elementor',
			],
			[
				'id'   => 34,
				'slug' => 'beaver-builder',
				'name' => 'Beaver Builder',
			],
			[
				'id'   => 41,
				'slug' => 'brizy',
				'name' => 'Brizy',
			],
		];
	}

	public function get_filesystem() {
		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';

		WP_Filesystem();

		return $wp_filesystem;
	}

	public function get_theme_status() {

		$theme = wp_get_theme();

		// Theme installed and activate.
		if ( 'One Directory' === $theme->name || 'One Directory' === $theme->parent_theme ) {
			return 'installed-and-active';
		}

		// Theme installed but not activate.
		foreach ( (array) wp_get_themes() as $theme_dir => $theme ) {
			if ( 'One Directory' === $theme->name || 'One Directory' === $theme->parent_theme ) {
				return 'installed-but-inactive';
			}
		}

		return 'not-installed';
	}
}