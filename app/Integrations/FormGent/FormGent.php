<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\FormGent;

use Templatiq\Abstracts\IntegrationBase;

class FormGent extends IntegrationBase {
	public function boot(): void {
		new Compatibility();
	}
}