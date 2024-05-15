<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Templatiq\Abstracts\IntegrationBase;

class Elementor extends IntegrationBase {
	public function boot(): void {
		if ( ! class_exists( '\Elementor\Plugin' ) ) {
			return;
		}

		Ajax::init();
		Compatibility::init();
	}
}