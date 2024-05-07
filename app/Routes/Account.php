<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\UserController;

class Account extends RouteBase {
	private $endpoint = 'account';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/login', [UserController::class, 'login'] );
		$this->post( $this->endpoint . '/logout', [UserController::class, 'logout'] );
		$this->post( $this->endpoint . '/create', [UserController::class, 'create'] );
		$this->post( $this->endpoint . '/data', [UserController::class, 'data'] );
		$this->post( $this->endpoint . '/is-logged-in', [UserController::class, 'is_logged_in'] );

		$this->post( $this->endpoint . '/directorist-sync', [UserController::class, 'directorist_membership_sync'] );
	}
}