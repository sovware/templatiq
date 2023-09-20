<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Model;

use TemplateMarket\Utils\Helper;
use TemplateMarket\Utils\Http;
use TemplateMarket\Utils\Options;
use TemplateMarket\Utils\Response;

class Account {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = 'http://template-market-cloud.local/wp-json/tm';
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
			$errors['empty_request'] = __( 'Make sure you have given a valid token, or email address & password.', 'template-market' );

			return Response::error( 'login_errors', $errors, 'login', '400' );
		}

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'account_login', 404 );
		}

		if ( ! empty( $response['body'] ) ) {
			$response['body'] = json_decode( $response['body'], true );
			Options::set( 'token', $response['body']['token'] );
		}

		return $response;
	}

	public function logout() {
		Options::set( 'token', '' );

		$response = [
			'status'  => 'success',
			'message' => __( 'Logged out.', 'template-market' ),
		];

		return $response;
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

	public function create( string $first_name, string $last_name, string $username, string $password, string $confirm_password ) {
		$errors    = [];
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

		if ( empty( $first_name ) ) {
			$errors['first_name'] = __( 'First name cannot be empty.', 'template-market' );
		}
		if ( empty( $last_name ) ) {
			$errors['last_name'] = __( 'Last name cannot be empty.', 'template-market' );
		}
		if ( empty( $username ) ) {
			$errors['email'] = __( 'Email cannot be empty.', 'template-market' );
		}
		if ( $username && ! filter_var( $username, FILTER_VALIDATE_EMAIL ) ) {
			$errors['email'] = __( 'Make sure you have given a valid email address.', 'template-market' );
		}
		if ( empty( $password ) ) {
			$errors['password'] = __( 'Password cannot be empty.', 'template-market' );
		}
		if ( empty( $confirm_password ) ) {
			$errors['confirm_password'] = __( 'Confirm password cannot be empty.', 'template-market' );
		}

		if ( ! empty( $password ) && ! empty( $confirm_password ) && $password !== $confirm_password ) {
			$errors['password_mismatched'] = __( 'Password and confirm password should be matched.', 'template-market' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error( 'signup_errors', $errors, 'signup', '400' );
		}

		$http     = new Http( $this->cloud_endpoint . '/account/login' );
		$response = $http->body(
			[
				'first_name' => $first_name,
				'last_name'  => $last_name,
				'email'      => $username,
				'password'   => $password,
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