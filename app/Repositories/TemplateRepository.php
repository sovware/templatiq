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
	public function get_builder() {
		return get_option( '_templatiq_selected_builder', 'elementor' );
	}

	public function library_data() {
		$data = Cache::get( [$this->get_builder(), 'library'] );

		if ( $data ) {
			return $data;
		}

		$endpoint = TEMPLATIQ_CLOUD_API_BASE . '/template/library/';
		$http     = new Http( $endpoint );

		$response = $http->post()->response();

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

		Cache::set( [$this->get_builder(), 'library'], $data );

		return $data;
	}

	public function templates() {
		$data = Cache::get( [$this->get_builder(), 'templates'] );

		if ( $data ) {
			return $data;
		}

		$endpoint = TEMPLATIQ_CLOUD_API_BASE . '/template/templates/';
		$http     = new Http( $endpoint );

		$response = $http->post()->response();

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

		Cache::set( [$this->get_builder(), 'templates'], $data );

		return $data;
	}

	public function descriptions() {
		$data = Cache::get( [$this->get_builder(), 'descriptions'] );

		if ( $data ) {
			return $data;
		}

		$endpoint = TEMPLATIQ_CLOUD_API_BASE . '/template/descriptions/';
		$http     = new Http( $endpoint );

		$response = $http->post()->response();

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

		Cache::set( [$this->get_builder(), 'descriptions'], $data );

		return $data;
	}

	public function filters() {
		$data = Cache::get( [$this->get_builder(), 'filters'] );

		if ( $data ) {
			return $data;
		}

		$endpoint = TEMPLATIQ_CLOUD_API_BASE . '/template/filters/';
		$http     = new Http( $endpoint );

		$response = $http->post()->response();

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

		Cache::set( [$this->get_builder(), 'filters'], $data );

		return $data;
	}
}