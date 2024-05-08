<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\AccountController;

class Account extends RouteBase {
	private $endpoint = 'account';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/login', [AccountController::class, 'login'] );
		$this->post( $this->endpoint . '/logout', [AccountController::class, 'logout'] );
		$this->post( $this->endpoint . '/create', [AccountController::class, 'create'] );
		$this->get( $this->endpoint . '/data', [AccountController::class, 'data'] );

		$this->post( $this->endpoint . '/directorist-sync', [AccountController::class, 'directorist_membership_sync'] );
	}
}