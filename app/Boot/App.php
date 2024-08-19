<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Boot;

class App {
	public static bool $loaded;
	public static App $instance;

	public static function instance() {
		if ( empty( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	public function boot( $plugin_root_file, $plugin_root_dir ) {
		if ( ! empty( static::$loaded ) ) {
			return;
		}

		$this->define_constants( $plugin_root_file );
	}

	public function load() {
		if ( ! empty( static::$loaded ) ) {
			return;
		}

		\Templatiq\Admin\Admin::init();

		/**
		 * Service Providers
		 */
		\Templatiq\Providers\FullTemplateServiceProviders::init()->boot();
		\Templatiq\Providers\IntegrationServiceProviders::init()->boot();
		\Templatiq\Providers\RouteServiceProviders::init()->boot();

		static::$loaded = \true;
	}

	private function define_constants( string $plugin_file ): void {
		define( 'TEMPLATIQ_FILE', $plugin_file );
		define( 'TEMPLATIQ_PATH', dirname( TEMPLATIQ_FILE ) );
		define( 'TEMPLATIQ_URL', plugins_url( '', TEMPLATIQ_FILE ) );
		define( 'TEMPLATIQ_ASSETS', TEMPLATIQ_URL . '/assets' );
		define( 'TEMPLATIQ_ASSETS_PATH', TEMPLATIQ_PATH . '/assets' );

		define( 'TEMPLATIQ_VERSION', \Templatiq\Utils\Config::get( 'version' ) );

		define( 'TEMPLATIQ_CLOUD_BASE', 'https://templatiq.com/wp-json/cloud' );
		define( 'TEMPLATIQ_API_ENDPOINT', 'https://templatiq.com/' );

		define( 'TEMPLATIQ_DEV', true );
		define( 'TEMPLATIQ_DEBUG_LOG', true );
	}
}