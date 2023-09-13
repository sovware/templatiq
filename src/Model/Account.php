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
	public function login( string $api_key, bool $via_api, string $email, string $password ) {
		$errors    = [];
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

		$funcArgs = [
			'ip'       => $_ip,
			'site_url' => $_site_url,
		];

		if ( $via_api ) {
			$funcArgs['api_key'] = $api_key;

			if ( empty( $api_key ) ) {
				$errors['api_key'] = __( 'API Key field cannot be empty.', 'templately' );
			}
		} else {
			$funcArgs['email']    = $email;
			$funcArgs['password'] = addcslashes( $password, '"' );

			if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
				$errors['email'] = __( 'Make sure you have given a valid email address.', 'templately' );
			}

			if ( empty( $password ) ) {
				$errors['password'] = __( 'Password field cannot be empty.', 'templately' );
			}
		}

		if ( ! empty( $errors ) ) {
			return Response::error( 'login_error', $errors, 'login', 400 );
		}

		$query = 'status, message, user{ id, name, first_name, last_name, display_name, email, profile_photo, joined, is_verified, api_key, plan, plan_expire_at, my_cloud{ limit, usages, last_pushed }, favourites{ id, type }, show_notice }';

		$http     = new Http;
		$response = $http->mutation(
			$via_api ? 'connectWithApiKey' : 'connect',
			$query,
			$funcArgs
		)->post();

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! empty( $response['user']['api_key'] ) ) {
			Options::set( 'api_key', trim( $response['user']['api_key'] ) );
			unset( $response['user']['api_key'] );
		}

		return $response;
	}

	public function logout() {
		$http     = new Http;
		$response = $http->mutation(
			'disconnect',
			'status, message, data',
			[
				// 'api_key'  => $this->api_key,
				"site_url" => home_url( '/' ),
			]
		)->post();

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! isset( $response['status'] ) || 'success' !== $response['status'] ) {
			return Response::error( 'logout_error', $response['message'], 'logout', 404 );
		}

		Options::set( 'api_key', '' );

		$response = [
			'status'  => 'success',
			'message' => __( 'Logged out.', 'templately' ),
		];

		return $response;
	}

	public static function is_logged_in() {
		$_response = [
			'status' => 'success',
		];

		$api_key = Options::get( 'api_key' );

		if ( '' === $api_key ) {
			$_response['status'] = 'error';
		}

		$_response['api_key'] = $api_key;

		return $_response;
	}
}