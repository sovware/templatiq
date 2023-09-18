<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Model;

use TemplateMarket\Utils\Http;
use TemplateMarket\Utils\Response;
use WP_Error;

class Importer {
	public function import_as_page( int $id, string $title, string $builder = 'elementor' ) {
		$template_data = $this->get_content( $id );

		if ( 'elementor' === $builder ) {
			return ( new Elementor )->create_page( $template_data, $title );
		} elseif ( 'block-editor' === $builder ) {
			return ( new Elementor )->create_page( $template_data, $title );
		}

		return new WP_Error( 'builder-not-specified', __( "Builder not specified", "template-market" ) );
	}

	public function insert_template( int $id, string $builder = 'elementor' ) {
		$template_data = $this->get_content( $id );

		if ( 'elementor' === $builder ) {
			return ( new Elementor )->insert_template( $template_data );
		} elseif ( 'block-editor' === $builder ) {
			return ( new Elementor )->insert_template( $template_data );
		}

		return new WP_Error( 'builder-not-specified', __( "Builder not specified", "template-market" ) );
	}

	private function get_content( int $item_id, string $origin = 'remote' ): array {
		switch ( $origin ) {
			case 'remote':
				$template_data = self::get_remote_content( $item_id );
				break;
		}

		return $template_data;
	}

	// Have to create remote routes, so that we can fetch datas
	private function get_remote_content( int $item_id ): array {

		$http     = new Http( 'http://template-market-cloud.local/wp-json/tm/contents' );
		$response = $http->body(
			[
				'api_key' => 'my-api-key-goes-here',
				'item_id' => $item_id,
			] )
			->get()
		// ->log()
			->response();

		if ( is_wp_error( $response ) ) {
			return Response::error( 'invalid_data', $response->get_error_message(), 'get_remote_content', 404 );
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
}