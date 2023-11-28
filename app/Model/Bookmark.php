<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Model;

use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class Bookmark {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function add( int $template_id ) {
		$http     = new Http( $this->cloud_endpoint . '/bookmark/add' );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'bookmark_add', 404 );
		}

		if ( ! empty( $response['body'] ) && isset( $response['body']['token'] ) ) {
			$response['body'] = json_decode( $response['body'], true );

			$response['body']['last_updated'] = time();

			Options::set( 'account_data', $response['body'] ?? [] );
		}

		return $response;
	}

	public function remove( int $template_id ) {
		$http     = new Http( $this->cloud_endpoint . '/bookmark/remove' );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'bookmark_add', 404 );
		}

		if ( ! empty( $response['body'] ) && isset( $response['body']['token'] ) ) {
			$response['body'] = json_decode( $response['body'], true );

			$response['body']['last_updated'] = time();

			Options::set( 'account_data', $response['body'] ?? [] );
		}

		return $response;
	}
}