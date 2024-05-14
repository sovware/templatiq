<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Abstracts\RouteBase;

class Routes extends RouteBase {
	private $endpoint = 'directorist';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/erase-existing-data', [Controller::class, 'erase_existing_data'] );
		// $this->post( $this->endpoint . '/add-custom-page', [Controller::class, 'add_custom_page'] );
	}
}