<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Abstracts;

use TemplateMarket\Utils\Hookable;
use TemplateMarket\Utils\Singleton;

abstract class EnqueuerBase {
	public string $version = TEMPLATE_MARKET_VERSION;
	use Hookable;
	use Singleton;

	public function enqueue_script( string $handle, string $src, array $deps = [] ) {
		wp_enqueue_script( $handle, TEMPLATE_MARKET_ASSETS . $src, $deps, $this->version );
	}

	public function enqueue_style( string $handle, string $src, array $deps = [] ) {
		wp_enqueue_style( $handle, TEMPLATE_MARKET_ASSETS . $src, $deps, $this->version );
	}
}