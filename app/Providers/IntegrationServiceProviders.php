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
		foreach ( $this->get_integrations() as $_integration ) {
			$integration = new $_integration();
			if ( $integration instanceof IntegrationBase ) {
				$integration->boot();
			}
		}
	}

	public function get_integrations(): array {
		return [
			Directorist::class,
			Elementor::class,
		];
	}
}