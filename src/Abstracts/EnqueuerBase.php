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

	public function enqueue_script( string $handle, string $path, array $deps = [] ) {
		wp_enqueue_script( $handle, TEMPLATE_MARKET_ASSETS . $path, $deps, $this->version );
	}
}
