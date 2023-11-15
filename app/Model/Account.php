<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Model;

use Templatiq\Utils\Helper;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class Account {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function login( string $token, string $username, string $password, bool $additional = false ) {
		if ( ! empty( $token ) ) {
			$http     = new Http( $this->cloud_endpoint . '/account/login' );
			$response = $http->body( ['token' => $token, 'additional' => $additional] )
				->post()
				->response();

		} elseif ( ! empty( $username ) && ! empty( $password ) ) {
			$http     = new Http( $this->cloud_endpoint . '/account/login' );
			$response = $http->body(
				[
					'username' => $username,
					'password' => $password,
				] )
				->post()
				->response();
		} else {
			$errors['empty_request'] = __( 'Make sure you have given a valid token, or email address & password.', 'templatiq' );

			return Response::error( 'login_errors', $errors, 'login', '400' );
		}

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'account_login', 404 );
		}

		if ( ! empty( $response['body'] ) ) {
			$response['body'] = json_decode( $response['body'], true );
			Options::set( 'token', $response['body']['token'] ?? '' );
			Options::set( 'account_data', $response['body'] ?? [] );
		}

		return $response;
	}

	public function logout() {
		Options::set( 'token', '' );
		Options::set( 'account_data', '' );

		$response = [
			'status'  => 'success',
			'message' => __( 'Logged out.', 'templatiq' ),
		];

		return $response;
	}

	public function data() {
		$_response = ['status' => 'success'];
		$data      = Options::get( 'account_data' );

		if ( '' === $data ) {
			$_response['status'] = 'error';
		}

		$_response['data'] = $data;

		return $_response;
	}

	public static function is_logged_in() {
		$_response = ['status' => 'success'];
		$token     = Options::get( 'token' );

		if ( '' === $token ) {
			$_response['status'] = 'error';
		}

		$_response['token'] = $token;

		return $_response;
	}

	public function create( string $user_login, string $user_email ) {
		$errors    = [];
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

		if ( empty( $user_login ) ) {
			$errors['user_login'] = __( 'Username cannot be empty.', 'templatiq' );
		}

		if ( empty( $user_email ) ) {
			$errors['user_login'] = __( 'Email cannot be empty.', 'templatiq' );
		}
		if ( $user_email && ! filter_var( $user_email, FILTER_VALIDATE_EMAIL ) ) {
			$errors['user_login'] = __( 'Make sure you have given a valid email address.', 'templatiq' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error( 'signup_errors', $errors, 'signup', '400' );
		}

		$http = new Http( $this->cloud_endpoint . '/account/create' );

		$response = $http->body(
			[
				'user_login' => $user_login,
				'user_email' => $user_email,
				'site_url'   => $_site_url,
				'ip'         => $_ip,
			] )
			->post()
			->log()
			->response();

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! empty( $response['user']['token'] ) ) {
			Options::set( 'token', $response['token'] );
		}

		return $response;
	}
}