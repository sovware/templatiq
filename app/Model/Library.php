<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Model;

use Templatiq\Utils\Cache;
use Templatiq\Utils\Http;
use Templatiq\Utils\Response;

class Library {

	public function data() {

		// $data = Cache::get( ['library'] );

		// if ( $data ) {
		// 	return $data;
		// }

		$http     = new Http( TEMPLATIQ_CLOUD_BASE . '/template/library' );
		$response = $http->get()->response();

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'get_library_data', 404 );
		}

		if ( isset( $response['status'] ) && 'error' === $response['status'] ) {
			return Response::error( 'invalid_data', $response['message'], 'get_library_data', 404 );
		}

		if ( ! empty( $response['body'] ) && is_string( $response['body'] ) ) {
			$data = json_decode( $response['body'], true );
		} else {
			$data = isset( $response['body'] ) ? (array) $response['body'] : [];
		}

		// Cache::set( ['library'], $data );

		return $data;
	}
}