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
			\Templatiq\Integrations\Bricks\Bricks::class,
			\Templatiq\Integrations\Directorist\Directorist::class,
			\Templatiq\Integrations\Elementor\Elementor::class,
			\Templatiq\Integrations\FormGent\FormGent::class,
			\Templatiq\Integrations\WooCommerce\WooCommerce::class,
		];
	}
}