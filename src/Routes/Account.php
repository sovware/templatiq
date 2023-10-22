<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Route;

use TemplateMarket\Abstracts\RouteBase;
use TemplateMarket\Model\Account as ModelAccount;

class Account extends RouteBase {
	private $endpoint = 'account';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/login', [$this, 'login'] );
		$this->post( $this->endpoint . '/logout', [$this, 'logout'] );
		$this->post( $this->endpoint . '/create', [$this, 'create'] );
		$this->get( $this->endpoint . '/is-logged-in', [$this, 'is_logged_in'] );
	}

	public function login() {
		$token      = $this->get_param( 'token', '' );
		$email      = $this->get_param( 'username', '' );
		$password   = $this->get_param( 'password' );
		$additional = $this->get_param( 'additional' );

		$account  = new ModelAccount;
		$response = $account->login( $token, $email, $password, $additional );

		return $response;
	}

	public function logout() {
		$account  = new ModelAccount;
		$response = $account->logout();

		return $response;
	}

	public function is_logged_in() {
		$account  = new ModelAccount;
		$response = $account->is_logged_in();

		return $response;
	}

	public function create() {
		$first_name       = $this->get_param( 'first_name' );
		$last_name        = $this->get_param( 'last_name' );
		$email            = $this->get_param( 'email', '', 'sanitize_email' );
		$password         = $this->get_param( 'password' );
		$confirm_password = $this->get_param( 'confirm_password' );

		$account  = new ModelAccount;
		$response = $account->create( $first_name, $last_name, $email, $password, $confirm_password );

		return $response;
	}
}