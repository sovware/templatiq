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

	public function login( string $username, string $password ) {
		if ( ! empty( $username ) && ! empty( $password ) ) {
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

			$response['body']['last_updated'] = time();

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
		$response = ['status' => 'success'];
		$data     = Options::get( 'account_data' );
		$token    = Options::get( 'token' );

		if ( '' === $data || ! $token ) {
			$response['status'] = 'error';
		}

		if ( isset( $data['last_updated'] ) && $data['last_updated'] < ( time() - 60 * 5 ) ) {

			$http     = new Http( $this->cloud_endpoint . '/account/data' );
			$response = $http->body(
				[
					'token' => $token,
				] )
				->post()
				->response();

			if ( is_wp_error( $response ) ) {
				return Response::error( 'invalid_data', $response->get_error_message(), 'account_data', 404 );
			}

			if ( ! empty( $response['body'] ) ) {
				$response['body'] = json_decode( $response['body'], true );

				$response['body']['last_updated'] = time();

				Options::set( 'account_data', $response['body'] ?? [] );
			}
		} else {
			$response['body'] = $data;
		}

		return $response;
	}

	public static function is_logged_in() {
		$response = ['status' => 'success'];
		$token    = Options::get( 'token' );

		if ( '' === $token ) {
			$response['status'] = 'error';
		}

		$response['token'] = $token;

		return $response;
	}

	public function create( string $user_email, string $name = '' ) {
		$errors    = [];
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

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
				'user_email' => $user_email,
				'name'       => $name,
				'site_url'   => $_site_url,
				'ip'         => $_ip,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! empty( $response['body'] ) ) {
			$response['body'] = json_decode( $response['body'], true );
		}

		return $response;
	}
}