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

	public function login( string $api_key, string $email, string $password ) {
		if ( ! empty( $api_key ) ) {
			$http     = new Http( $this->cloud_endpoint . '/account/login' );
			$response = $http->body(
				[
					'api_key' => 'my-api-key-goes-here',
				] )
				->post()
				->log()
				->response();

		} elseif ( ! empty( $email ) && ! empty( $password ) ) {

			if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
				$errors['email'] = __( 'Make sure you have given a valid email address.', 'template-market' );
			}

			$http     = new Http( $this->cloud_endpoint . '/account/login' );
			$response = $http->body(
				[
					'username' => $email,
					'password' => $password,
				] )
				->post()
				->log()
				->response();
		} else {
			$errors['email'] = __( 'Make sure you have given a valid api_key, or email address & password.', 'template-market' );
		}

		if ( ! empty( $errors ) ) {
			return Response::error( 'login_errors', $errors, 'login', '400' );
		}

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'account_login', 404 );
		}

		if ( ! empty( $response['api_key'] ) ) {
			Options::set( 'api_key', $response['api_key'] );
		}

		return $response;
	}

	public function logout() {
		Options::set( 'api_key', '' );

		$response = [
			'status'  => 'success',
			'message' => __( 'Logged out.', 'template-market' ),
		];

		return $response;
	}

	public static function is_logged_in() {
		$_response = ['status' => 'success'];
		$api_key   = Options::get( 'api_key' );

		if ( '' === $api_key ) {
			$_response['status'] = 'error';
		}

		$_response['api_key'] = $api_key;

		return $_response;
	}

	public function create( string $first_name, string $last_name, string $email, string $password, string $confirm_password ) {
		$errors    = [];
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

		if ( empty( $first_name ) ) {
			$errors['first_name'] = __( 'First name cannot be empty.', 'template-market' );
		}
		if ( empty( $last_name ) ) {
			$errors['last_name'] = __( 'Last name cannot be empty.', 'template-market' );
		}
		if ( empty( $email ) ) {
			$errors['email'] = __( 'Email cannot be empty.', 'template-market' );
		}
		if ( $email && ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
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
				'email'      => $email,
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

		if ( ! empty( $response['user']['api_key'] ) ) {
			Options::set( 'api_key', $response['api_key'] );
		}

		return $response;
	}
}