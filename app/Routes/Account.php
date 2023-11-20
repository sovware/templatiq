<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Model\Account as ModelAccount;
use Templatiq\Model\Directorist;

class Account extends RouteBase {
	private $endpoint = 'account';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/login', [$this, 'login'] );
		$this->post( $this->endpoint . '/logout', [$this, 'logout'] );
		$this->post( $this->endpoint . '/create', [$this, 'create'] );
		$this->get( $this->endpoint . '/data', [$this, 'data'] );
		$this->get( $this->endpoint . '/is-logged-in', [$this, 'is_logged_in'] );
		$this->post( $this->endpoint . '/directorist-sync', [$this, 'directorist_membership_sync'] );
	}

	public function login() {
		$username = $this->get_param( 'username' );
		$password = $this->get_param( 'password' );

		$account  = new ModelAccount;
		$response = $account->login( $username, $password );

		return $response;
	}

	public function logout() {
		$account  = new ModelAccount;
		$response = $account->logout();

		return $response;
	}

	public function create() {
		$name       = $this->get_param( 'name', '', 'sanitize_text_field' );
		$user_email = $this->get_param( 'user_email', '', 'sanitize_email' );

		$account  = new ModelAccount;
		$response = $account->create( $user_email, $name );

		return $response;
	}

	public function data() {
		$account  = new ModelAccount;
		$response = $account->data();

		return $response;
	}

	public function is_logged_in() {
		$account  = new ModelAccount;
		$response = $account->is_logged_in();

		return $response;
	}

	public function directorist_membership_sync() {
		$directorist = new Directorist;
		$response    = $directorist->sync_membership_with_cloud();

		return $response;
	}
}