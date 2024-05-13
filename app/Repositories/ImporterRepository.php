<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Repositories\ElementorRepository;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;
use WP_Error;

class ImporterRepository {

	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function import_as_page( int $template_id, string $title, string $builder = 'elementor' ) {
		$template_data = $this->get_content( $template_id );

		if ( 'elementor' === $builder ) {
			return ( new ElementorRepository )->create_page( $template_data, $title );
		} elseif ( 'block-editor' === $builder ) {
			return ( new ElementorRepository )->create_page( $template_data, $title );
		}

		return new WP_Error( 'builder-not-specified', __( "Builder not specified", "templatiq" ) );
	}

	public function get_template_data( int $template_id, string $builder = 'elementor' ) {
		$template_data = $this->get_content( $template_id );

		return ( new ElementorRepository )->get_template_data( $template_data );
	}

	private function get_content( int $template_id, string $origin = 'remote' ): array {
		switch ( $origin ) {
			case 'remote':
				$template_data = self::get_remote_content( $template_id );
				break;
		}

		return $template_data;
	}

	private function get_remote_content( int $template_id ) {
		$http     = new Http( $this->cloud_endpoint . '/template/contents' );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
			] )
			->post()
			->response();

		if ( is_wp_error( $response ) ) {
			return Response::error(
				'invalid_data',
				$response->get_error_message(),
				'get_remote_content',
				404
			);
		}

		if ( isset( $response['status'] ) && 'error' === $response['status'] ) {
			return Response::error( 'invalid_data', $response['message'], 'get_content', 404 );
		}

		if ( ! empty( $response['body'] ) && is_string( $response['body'] ) ) {
			$data = json_decode( $response['body'], true );
		} else {
			$data = isset( $response['body'] ) ? (array) $response['body'] : [];
		}

		$data['type'] = 'page';

		return $data;
	}
}