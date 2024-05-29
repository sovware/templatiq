<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq;

use Templatiq\Admin\Admin;
use Templatiq\Providers\FullTemplateServiceProviders;
use Templatiq\Providers\IntegrationServiceProviders;
use Templatiq\Routes\Account;
use Templatiq\Routes\Bookmark;
use Templatiq\Routes\Cache;
use Templatiq\Routes\Dependency;
use Templatiq\Routes\Template;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class App {
	public static App $instance;

	public static function instance() {
		if ( empty( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	public function load( string $plugin_file ) {
		$this->define_constants( $plugin_file );

		Admin::init();

		/**
		 * Routes Initialize
		 */
		Account::init();
		Bookmark::init();
		Cache::init();
		Dependency::init();
		Template::init();

		/**
		 * Service Providers
		 */
		FullTemplateServiceProviders::init()->boot();
		IntegrationServiceProviders::init()->boot();
	}

	private function define_constants( string $plugin_file ): void {
		define( 'TEMPLATIQ_FILE', $plugin_file );
		define( 'TEMPLATIQ_PATH', dirname( TEMPLATIQ_FILE ) );
		define( 'TEMPLATIQ_URL', plugins_url( '', TEMPLATIQ_FILE ) );
		define( 'TEMPLATIQ_ASSETS', TEMPLATIQ_URL . '/assets' );
		define( 'TEMPLATIQ_ASSETS_PATH', TEMPLATIQ_PATH . '/assets' );

		define( 'TEMPLATIQ_VERSION', \Templatiq\Utils\Config::get( 'version' ) );

		define( 'TEMPLATIQ_CLOUD_BASE', 'https://templatiq.com/wp-json/tm' );
		define( 'TEMPLATIQ_API_ENDPOINT', 'https://templatiq.com/' );

		define( 'TEMPLATIQ_DEV', true );
		define( 'TEMPLATIQ_DEBUG_LOG', true );
	}
}