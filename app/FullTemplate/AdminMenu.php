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
		$page_title = apply_filters( 'templatiq_sites_menu_page_title', esc_html__( 'Starter Templates', 'templatiq' ) );

		add_theme_page( $page_title, $page_title, 'manage_options', 'templatiq-library', [$this, 'menu_callback'] );

		if ( 'templatiq-library' === $_GET['page'] && ! isset( $_GET['template_id'] ) ) {
			wp_redirect( admin_url( 'admin.php?page=templatiq' ) );
			exit;
		}
	}

	public function menu_callback() {
		echo '<div class="templatiq-sites-menu-page-wrapper"><div id="templatiq-sites-menu-page"><div id="templatiq-library-ai-root"></div></div></div>';
	}

	public function admin_body_class( $classes = '' ) {
		$onboarding_class = isset( $_GET['page'] ) && 'templatiq-library' === $_GET['page'] ? 'intelligent-templatiq-library-onboarding' : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching a $_GET value, no nonce available to validate.
		$classes .= ' ' . $onboarding_class . ' ';

		return $classes;
	}
}