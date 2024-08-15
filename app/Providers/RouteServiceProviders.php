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
	}

	public function get(): array {
		return apply_filters(
			'templatiq_route_service_providers ',
			[
				'account'    => \Templatiq\Routes\Account::class,
				'bookmark'   => \Templatiq\Routes\Bookmark::class,
				'cache'      => \Templatiq\Routes\Cache::class,
				'dependency' => \Templatiq\Routes\Dependency::class,
				'template'   => \Templatiq\Routes\Template::class,
			]
		);
	}
}