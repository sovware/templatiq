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

class FullTemplate {
	use Singleton;

	private function __construct() {
		add_action( 'templatiq_notice_before_markup', [$this, 'notice_assets'] );
		add_action( 'admin_enqueue_scripts', [$this, 'admin_assets'] );
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
}