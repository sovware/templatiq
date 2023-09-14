<?php
/**
 * Plugin Name: Template Market
 * Description: Complete Elementor Widgets
 * Author: wpWax
 * Author URI: https://wpwax.com
 * Version: 1.0.0
 * License: GPL2
 * Requires PHP: 7.4
 * Text Domain: template-market
 * Domain Path: /i18n/languages/
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

use TemplateMarket\App;

// don't call the file directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * TemplateMarket class
 *
 * @class TemplateMarket The class that holds the entire TemplateMarket plugin
 */
final class TemplateMarket {
	public $version = '1.0.0';

	private $min_php = '7.4';

	private static $instance;

	public $app;

	public static function init() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof TemplateMarket ) ) {
			self::$instance = new TemplateMarket();
			self::$instance->setup();
		}

		return self::$instance;
	}

	private function setup() {
		register_activation_hook( __FILE__, [$this, 'auto_deactivate'] );

		if ( ! $this->is_supported_php() ) {
			return;
		}

		$this->define_constants();
		$this->includes();
		$this->app = App::init();

		do_action( 'addonskit_for_elementor_loaded' );
	}

	public function is_supported_php(): bool {
		if ( version_compare( PHP_VERSION, $this->min_php, '<' ) ) {
			return false;
		}

		return true;
	}

	public function auto_deactivate(): void {
		if ( $this->is_supported_php() ) {
			return;
		}

		deactivate_plugins( basename( __FILE__ ) );

		$error = __( '<h1>An Error Occurred</h1>', 'template-market' );
		$error .= __( '<h2>Your installed PHP Version is: ', 'template-market' ) . PHP_VERSION . '</h2>';
		$error .= __( '<p>The <strong>Wax Elements</strong> plugin requires PHP version <strong>', 'template-market' ) . $this->min_php . __( '</strong> or greater', 'template-market' );
		$error .= __( '<p>The version of your PHP is ', 'template-market' ) . '<a href="http://php.net/supported-versions.php" target="_blank"><strong>' . __( 'unsupported and old', 'template-market' ) . '</strong></a>.';
		$error .= __( 'You should update your PHP software or contact your host regarding this matter.</p>', 'template-market' );
		wp_die(
			wp_kses_post( $error ),
			esc_html__( 'Plugin Activation Error', 'template-market' ),
			[
				'response'  => 200,
				'back_link' => true,
			]
		);
	}

	public function is_plugin_installed( $basename ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			include_once ABSPATH . '/wp-admin/includes/plugin.php';
		}

		$installed_plugins = get_plugins();

		return isset( $installed_plugins[$basename] );
	}

	/**
	 * Define the constants
	 *
	 * @return void
	 */
	private function define_constants(): void {
		define( 'TEMPLATE_MARKET_VERSION', $this->version );
		define( 'TEMPLATE_MARKET_FILE', __FILE__ );
		define( 'TEMPLATE_MARKET_PATH', dirname( TEMPLATE_MARKET_FILE ) );
		define( 'TEMPLATE_MARKET_ELEMENTS', TEMPLATE_MARKET_PATH . 'App/Elements' );
		define( 'TEMPLATE_MARKET_URL', plugins_url( '', TEMPLATE_MARKET_FILE ) );
		define( 'TEMPLATE_MARKET_ASSETS', TEMPLATE_MARKET_URL . '/assets' );

		define( 'TEMPLATE_MARKET_DEV', true );
		define( 'TEMPLATE_MARKET_DEBUG_LOG', true );
	}

	/**
	 * Include the required files
	 *
	 * @return void
	 */
	private function includes() {
		include __DIR__ . '/vendor/autoload.php';
	}
}

/**
 * Init the TemplateMarket plugin
 *
 * @return TemplateMarket the plugin object
 */
function TemplateMarket() {
	add_action( 'plugins_loaded', ['TemplateMarket', 'init'] );
}

// kick it off
TemplateMarket();