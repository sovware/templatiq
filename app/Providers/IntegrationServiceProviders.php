<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Providers;

class IntegrationServiceProviders extends \Templatiq\Abstracts\ProviderBase {

	public function boot() {
		foreach ( $this->get() as $i ) {
			$integration = new $i();
			if ( $integration instanceof \Templatiq\Abstracts\IntegrationBase ) {
				$integration->boot();
			}
		}
	}

	public function get(): array {
		return [
			\Templatiq\Integrations\Elementor\Elementor::class,
		];
	}
}