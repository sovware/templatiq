<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Providers;

use Templatiq\Abstracts\ProviderBase;

class RouteServiceProviders extends ProviderBase {

	public function boot() {
		foreach ( $this->get() as $r ) {
			$route = new $r();
			if ( $route instanceof \Templatiq\Abstracts\RouteBase ) {
				$route->init();
			}
		}

		( new \Templatiq\Routes\Connect );

		add_action( 'init', [$this, 'alter_template_details'] );
	}

	public function get(): array {
		return [
			\Templatiq\Routes\Account::class,
			\Templatiq\Routes\Bookmark::class,
			\Templatiq\Routes\Cache::class,
			\Templatiq\Routes\Dependency::class,
			\Templatiq\Routes\Template::class,
		];
	}


	/**
	 * Set default builder to Elementor 
	 * If the HTTP_REFER contains 'page=atbdp-extension'
	 */
	public function alter_template_details() {
		if (
			isset( $_GET['page'] )
			&& 'templatiq' === $_GET['page']
			&& isset( $_SERVER['HTTP_REFERER'] )
			&& strpos( $_SERVER['HTTP_REFERER'], 'page=atbdp-extension' ) !== false
		) {
			update_option( '_templatiq_selected_builder', 'elementor' );
		}
	}
}