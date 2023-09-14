<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Abstracts;

use TemplateMarket\Utils\Response;
use TemplateMarket\Utils\Singleton;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

abstract class RouteBase {
	use Singleton;

	protected $api_key;
	protected $request;
	protected $namespace = 'template-market';

	public function __construct() {
		add_action( 'rest_api_init', [$this, 'register_routes'] );
	}

	abstract function register_routes(): void;

	public function permission_check( WP_REST_Request $request ) {

		$this->request = $request;

		if ( 'mehedi' === 'mehedi' ) {
			return true;
		}

		$_route = $request->get_route();

		return $this->permission_error( '', $_route );
	}

	protected function permission_error( string $message, $endpoint = '' ) {
		if ( empty( $message ) ) {
			$message = __( 'Sorry, you need to login/re-login again.', 'template-market' );
		}

		$_additional_data = [
			'status' => rest_authorization_required_code(),
		];

		if ( ! empty( $endpoint ) ) {
			$_additional_data['endpoint'] = $endpoint;
		}

		return new WP_Error( 'invalid_api_key', $message, $_additional_data );
	}

	public function get( $endpoint, $callback, $args = [] ) {
		return $this->register_endpoint( $endpoint, $callback, $args, WP_REST_Server::READABLE );
	}

	public function post( $endpoint, $callback, $args = [] ) {
		return $this->register_endpoint( $endpoint, $callback, $args );
	}

	public function register_endpoint( $endpoint, $callback, $args = [], $methods = WP_REST_Server::CREATABLE ) {
		return register_rest_route(
			$this->namespace,
			$endpoint,
			[
				'methods'             => $methods,
				'callback'            => $callback,
				'permission_callback' => [$this, 'permission_check'],
				'args'                => $args,
			]
		);
	}

	public function response( $response, $endpoint, $status = 500, $additional_data = [] ) {
		if ( $response instanceof WP_Error ) {
			return Response::error(
				$response->get_error_code(),
				$response->get_error_message(),
				$endpoint,
				$status,
				$additional_data
			);
		}

		return Response::success( $response );
	}

	public function get_param( string $param, $default = '', string $sanitizer = 'sanitize_text_field' ) {
		$_value = $this->request->get_param( $param );
		if ( ! empty( $_value ) ) {
			if ( is_callable( $sanitizer ) && ! is_array( $_value ) ) {
				return call_user_func_array( $sanitizer, [$_value] );
			} elseif ( is_array( $_value ) && is_callable( $sanitizer ) ) {
				return array_map( $sanitizer, $_value );
			}

			return $_value;
		}

		return $default;
	}
}