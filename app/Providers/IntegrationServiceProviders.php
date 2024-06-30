<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Providers;

use Templatiq\Abstracts\IntegrationBase;
use Templatiq\Abstracts\ProviderBase;
use Templatiq\Integrations\Directorist\Directorist;
use Templatiq\Integrations\Elementor\Elementor;

class IntegrationServiceProviders extends ProviderBase {

	public function boot() {
		foreach ( $this->get() as $i ) {
			$integration = new $i();
			if ( $integration instanceof IntegrationBase ) {
				$integration->boot();
			}
		}
	}

	public function get(): array {
		return [
			Directorist::class,
			Elementor::class,
		];
	}
}