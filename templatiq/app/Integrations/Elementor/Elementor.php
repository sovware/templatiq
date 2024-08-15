<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Templatiq\Abstracts\IntegrationBase;
use Templatiq\Integrations\Elementor\Admin\Enqueuer;

class Elementor extends IntegrationBase {
	public function boot(): void {
		if ( ! class_exists( '\Elementor\Plugin' ) ) {
			return;
		}

		Ajax::init();
		Enqueuer::init();
		ImportAsPage::init();
	}
}