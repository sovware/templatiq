<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Onboarding;

use Templatiq\Utils\Singleton;
use Templatiq_Sites_Page;

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

	public function __construct() {
		Setup::init();
		SitesReporting::init();
		Enqueuer::init();

		// Admin Menu.
		add_action( 'admin_menu', [$this, 'admin_menu'] );
		add_action( 'admin_body_class', [$this, 'admin_body_class'] );
	}

	public function admin_menu() {
		$page_title = apply_filters( 'templatiq_sites_menu_page_title', esc_html__( 'Templaitq Templates', 'templatiq' ) );

		add_theme_page( $page_title, $page_title, 'manage_options', 'starter-templates', [$this, 'menu_callback'] );
	}

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

	public function admin_body_class( $classes = '' ) {
		$onboarding_class = isset( $_GET['page'] ) && 'starter-templates' === $_GET['page'] ? 'intelligent-starter-templates-onboarding' : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching a $_GET value, no nonce available to validate.
		$classes .= ' ' . $onboarding_class . ' ';

		return $classes;
	}
}