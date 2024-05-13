<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Repositories\DependencyRepository;
use Templatiq\Utils\Http;
use Templatiq\Utils\Response;

/**
 * Will unlock the directory related templates
 * When directorist is active
 * & has a valid token
 * & will only unlock the themes design that already purchased
 */
class DirectoristRepository {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function is_active() {
		return ( new DependencyRepository )->is_active( 'directorist/directorist-base.php' );
	}

	public function token(): string {
		return 'directorist token from user meta';
	}

	public function sync_membership_with_cloud() {
		$http     = new Http( $this->cloud_endpoint . '/account/directorist-sync' );
		$response = $http->body(
			[
				'token' => $this->token(),
			] )
			->post()
		// ->log()
			->response();

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'sync_cloud', 404 );
		}

		if ( isset( $response['status'] ) && 'error' === $response['status'] ) {
			return Response::error( 'invalid_data', $response['message'], 'get_content', 404 );
		}

		if ( ! empty( $response['body'] ) && is_string( $response['body'] ) ) {
			$data = json_decode( $response['body'], true );
		} else {
			$data = isset( $response['body'] ) ? (array) $response['body'] : [];
		}

		return $data;
	}

	public function get_directory_types(): array {
		$listing_types = get_terms( [
			'taxonomy'   => 'atbdp_listing_types',
			'hide_empty' => false,
			'orderby'    => 'date',
			'order'      => 'DESC',
		] );

		foreach ( $listing_types as $key => $type ) {
			$listing_types[$key]->meta = $this->get_directory_type_meta( $type->term_id );
		}

		return $listing_types;
	}

	private function get_directory_type_meta( $id ) {
		$meta_val_with_array = get_term_meta( $id, '', true );
		$meta                = [];
		foreach ( $meta_val_with_array as $key => $value ) {
			$meta[$key] = $value[0];
		}

		return $meta;
	}
}