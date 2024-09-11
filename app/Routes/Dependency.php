<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\DependencyController;

class Dependency extends RouteBase {

	private $endpoint = 'dependency';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/required-plugins', [DependencyController::class, 'required_plugins'] );
		$this->post( $this->endpoint . '/check', [DependencyController::class, 'check'] );
		$this->post( $this->endpoint . '/install', [DependencyController::class, 'install'] );
		$this->post( $this->endpoint . '/activate-theme', [DependencyController::class, 'activate_theme'] );

		
	}
}