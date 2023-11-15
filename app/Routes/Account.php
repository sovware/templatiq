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
		$this->post( $this->endpoint . '/login', [$this, 'login'], $this->prepare_args( 'login' ) );
		$this->post( $this->endpoint . '/logout', [$this, 'logout'] );
		$this->post( $this->endpoint . '/create', [$this, 'create'], $this->prepare_args( 'create' ) );
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
		$user_login = $this->get_param( 'user_login', '', 'sanitize_user' );
		$user_email = $this->get_param( 'user_email', '', 'sanitize_email' );

		$account  = new ModelAccount;
		$response = $account->create( $user_login, $user_email );

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

	private function prepare_args( string $type ) {
		$args = [
			'username'         => [
				'description' => 'Cloud site username',
				'type'        => 'string',
				'required'    => false,
			],
			'password'         => [
				'description' => 'Cloud site password',
				'type'        => 'string',
				'required'    => false,
			],
			'token'            => [
				'description' => 'JWT token, user can collect it from our cloud website account area.',
				'type'        => 'string',
				'required'    => false,
			],
			'additional'       => [
				'description' => 'This option required when you sending authentication request using JWT.',
				'type'        => 'bool',
				'required'    => false,
				'default'     => false,
			],
			'first_name'       => [
				'type'     => 'string',
				'required' => false,
			],
			'last_name'        => [
				'type'     => 'string',
				'required' => false,
			],
			'email'            => [
				'type'     => 'string',
				'required' => false,
			],
			'confirm_password' => [
				'type'     => 'string',
				'required' => false,
			],
		];

		$_args = [];
		switch ( $type ) {
			case 'login':
				$_args = [
					'username'   => $args['username'],
					'password'   => $args['password'],
					'token'      => $args['token'],
					'additional' => $args['additional'],
				];
				break;

			case 'create':
				$_args = [
					'first_name'       => $args['first_name'],
					'last_name'        => $args['last_name'],
					'email'            => $args['email'],
					'password'         => $args['password'],
					'confirm_password' => $args['confirm_password'],
				];
				break;
		}

		return $_args;
	}
}