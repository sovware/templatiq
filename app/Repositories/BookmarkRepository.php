<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Utils\Http;
use Templatiq\Utils\Options;

class BookmarkRepository {

	public function add( int $template_id ) {
		$http     = new Http( TEMPLATIQ_BASE . '/bookmark/add' );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			throw new \Exception(
				esc_html( $response->get_error_message() ),
				404
			);
		}

		$body                             = wp_remote_retrieve_body( $response );
		$response['body']                 = json_decode( $body, true );
		$response['body']['last_updated'] = time();

		Options::set( 'account_data', $response['body'] ?? [] );

		return $response;
	}

	public function remove( int $template_id ) {
		$http     = new Http( TEMPLATIQ_BASE . '/bookmark/remove' );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			throw new \Exception(
				esc_html( $response->get_error_message() ),
				404
			);
		}

		$body                             = wp_remote_retrieve_body( $response );
		$response['body']                 = json_decode( $body, true );
		$response['body']['last_updated'] = time();

		Options::set( 'account_data', $response['body'] ?? [] );

		return $response;
	}
}