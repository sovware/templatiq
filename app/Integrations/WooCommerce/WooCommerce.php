<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\WooCommerce;

use Templatiq\Abstracts\IntegrationBase;

class WooCommerce extends IntegrationBase {
	public function boot(): void {
		Compatibility::init();
	}
}