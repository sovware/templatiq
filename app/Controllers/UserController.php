<?php

namespace Templatiq\Controllers;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\Model\Directorist;
use Templatiq\Repositories\AccountRepository;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;
use WP_REST_Request;

class UserController extends ControllerBase {

	public function login( WP_REST_Request $request ) {
		$username = $request->get_param( 'username' );
		$password = $request->get_param( 'password' );

		$errors = [];

		if ( empty( $username ) ) {
			$errors['username'] = __( 'Username is required', 'templatiq' );
		}

		if ( empty( $password ) ) {
			$errors['password'] = __( 'Password is required', 'templatiq' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error(
				'login_errors',
				$errors,
				'login',
				422
			);
		}

		try {
			return Response::success(
				( new AccountRepository )->login( $username, $password )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'login_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function logout() {
		try {
			Options::set( 'token', '' );
			Options::set( 'account_data', '' );

			return Response::success(
				[
					'status'  => 'success',
					'message' => __( 'Logged out.', 'templatiq' ),
				]
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'login_errors',
				$th->getMessage(),
				'login',
				$th->getCode()
			);
		}
	}

	public function create( WP_REST_Request $request ) {
		$name       = $request->get_param( 'name' );
		$user_email = $request->get_param( 'user_email' );

		$errors = [];

		if ( empty( $name ) ) {
			$errors['name'] = __( 'Name is required', 'templatiq' );
		}

		if ( empty( $user_email ) ) {
			$errors['user_email'] = __( 'User email is required', 'templatiq' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error(
				'login_errors',
				$errors,
				__FUNCTION__,
				422
			);
		}

		try {
			return Response::success(
				( new AccountRepository )->create( $user_email, $name )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'account_create_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function data() {
		$data  = Options::get( 'account_data' );
		$token = Options::get( 'token' );

		$errors = [];

		if ( empty( $token ) ) {
			$errors['token'] = __( 'Account not logged in! please login before sending request.', 'templatiq' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error(
				'account_token_errors',
				$errors,
				__FUNCTION__,
				422
			);
		}

		if (
			isset( $data['last_updated'] )
			&& $data['last_updated'] > ( time() - 60 * 5 )
		) {
			return Response::success( $data );
		}

		try {
			return Response::success(
				( new AccountRepository )->data()
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'account_data_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	/**
	 * Check whether a user logged,
	 * If no token found have to login
	 */
	public function is_logged_in() {
		$token = Options::get( 'token' );

		if ( empty( $token ) ) {
			$errors['token'] = __( 'Account not logged in! please login with templatiq.com', 'templatiq' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error(
				'is_logged_in',
				$errors,
				__FUNCTION__,
				401
			);
		}

		return Response::success(
			[
				'token' => $token,
			]
		);
	}

	public function directorist_membership_sync() {
		$directorist = new Directorist;
		$response    = $directorist->sync_membership_with_cloud();

		return $response;
	}
}