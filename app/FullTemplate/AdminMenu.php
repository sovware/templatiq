<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Utils\Hookable;
use Templatiq\Utils\Singleton;

/**
 * Administration Menu Class
 */
class AdminMenu {
	use Hookable;
	use Singleton;

	public function __construct() {
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
			\Templatiq_Sites_Page::get_instance()->init_nav_menu( $active_tab );
		} else {
			echo '<div class="templatiq-sites-menu-page-wrapper"><div id="templatiq-sites-menu-page"><div id="starter-templates-ai-root"></div></div></div>';
		}
	}

	public function admin_body_class( $classes = '' ) {
		$onboarding_class = isset( $_GET['page'] ) && 'starter-templates' === $_GET['page'] ? 'intelligent-starter-templates-onboarding' : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching a $_GET value, no nonce available to validate.
		$classes .= ' ' . $onboarding_class . ' ';

		return $classes;
	}
}