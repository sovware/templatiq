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
		$this->get( $this->endpoint . '/is-logged-in', [$this, 'is_logged_in'] );
	}

	public function login() {
		$via_api  = (bool) $this->get_param( 'via_api', false );
		$email    = $this->get_param( 'email', '', 'sanitize_email' );
		$password = $this->get_param( 'password' );

		$account  = new ModelAccount;
		$response = $account->login( '', $via_api, $email, $password );

		return $response;
	}

	public function logout() {
		$account  = new ModelAccount;
		$response = $account->logout();

		return $response;
	}

	public static function is_logged_in() {
		$account  = new ModelAccount;
		$response = $account->is_logged_in();

		return $response;
	}
}