<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Abstracts\IntegrationBase;
use Templatiq\Integrations\Directorist\Routes;

class Directorist extends IntegrationBase {
	public function boot(): void {
		if ( ! class_exists( '\Directorist_Base' ) ) {
			return;
		}

		Compatibility::init();
		Localize::init();
		Routes::init();
	}
}