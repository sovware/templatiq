<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\TemplateController;

class Template extends RouteBase {
	private $endpoint = 'template';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/import-as-page', [TemplateController::class, 'import_as_page'] );
		$this->post( $this->endpoint . '/library', [TemplateController::class, 'library_data'] );
	}
}