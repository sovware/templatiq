<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Routes;

use TemplateMarket\Abstracts\RouteBase;
use TemplateMarket\Model\Account as ModelAccount;
use TemplateMarket\Model\Directorist;

class Account extends RouteBase {
	private $endpoint = 'account';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/login', [$this, 'login'], $this->prepare_args( 'login' ) );
		$this->post( $this->endpoint . '/logout', [$this, 'logout'] );
		$this->post( $this->endpoint . '/create', [$this, 'create'], $this->prepare_args( 'create' ) );
		$this->get( $this->endpoint . '/is-logged-in', [$this, 'is_logged_in'] );
		$this->post( $this->endpoint . '/directorist-sync', [$this, 'directorist_membership_sync'] );
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