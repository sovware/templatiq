<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Utils\Cache;
use Templatiq\Utils\Http;

class TemplateRepository {

	public function library_data() {

		$data = Cache::get( ['library'] );
		if ( $data ) {
			return $data;
		}

		$endpoint = TEMPLATIQ_BASE . '/template/library/?' . time();
		$http     = new Http( $endpoint );
		$response = $http->get()->response();

		if ( is_wp_error( $response ) ) {
			throw new \Exception(
				esc_html( $response->get_error_message() ),
				404
			);
		}

		if ( isset( $response['status'] ) && 'error' === $response['status'] ) {
			throw new \Exception(
				esc_html( $response['message'] ),
				404
			);
		}

		$body = wp_remote_retrieve_body( $response );

		if ( ! empty( $body ) && is_string( $body ) ) {
			$data = json_decode( $body, true );
		} else {
			$data = (array) $body;
		}

		Cache::set( ['library'], $data );

		return $data;
	}
}