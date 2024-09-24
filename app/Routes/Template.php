<?php
/**
 * @author  wpWax
 * @package Templatiq
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\TemplateController;

class Template extends RouteBase {
	private $endpoint = 'template';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/import-as-page', [TemplateController::class, 'import_as_page'] );
		$this->post( $this->endpoint . '/set-builder', [TemplateController::class, 'set_builder'] );

		$this->post( $this->endpoint . '/library', [TemplateController::class, 'library_data'] );

		$this->post( $this->endpoint . '/templates', [TemplateController::class, 'templates'] );
		$this->post( $this->endpoint . '/descriptions', [TemplateController::class, 'descriptions'] );
		$this->post( $this->endpoint . '/filters', [TemplateController::class, 'filters'] );
		$this->post( $this->endpoint . '/editor-library', [TemplateController::class, 'editor_library'] );
	}
}