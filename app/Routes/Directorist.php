<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\DirectoristController;

class Directorist extends RouteBase {
	private $endpoint = 'directorist';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/erase-existing-data', [DirectoristController::class, 'erase_existing_data'] );
		// $this->post( $this->endpoint . '/add-custom-page', [DirectoristController::class, 'add_custom_page'] );
	}
}