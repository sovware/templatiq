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
		Compatibility::init();

		if ( ! class_exists( '\Directorist_Base' ) ) {
			return;
		}

		AddBuilderSettings::init();
		AddCustomPages::init();
		FullTemplateImport::init();
		Localize::init();
		Routes::init();
		Ajax::init();
	}
}