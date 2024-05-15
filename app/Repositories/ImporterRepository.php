<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class ImporterRepository {

	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function import_as_page( ImportAsPageDTO $DTO ) {
		if ( empty( $DTO->get_builder() ) ) {
			throw new \Exception(
				__( "Builder not specified yet.", "templatiq" ),
				'builder-not-specified'
			);
		}

		$template_data = $this->get_content( $DTO->get_template_id() );
		if ( empty( $template_data ) ) {
			throw new \Exception(
				__( "Template data not found", "templatiq" ),
				'template-data-missing'
			);
		}

		$DTO->set_template_data( $template_data );

		$inserted_id = apply_filters( 'templatiq_import_as_page_created_post_id', 0, $DTO );
		if ( is_wp_error( $inserted_id ) ) {
			throw new \Exception(
				$inserted_id->get_error_message(),
				'import-as-page'
			);
		}

		if ( ! $inserted_id ) {
			throw new \Exception(
				__( "Import as page failed", "templatiq" ),
				'import-as-page-failed'
			);
		}

		return $inserted_id;
	}

	public function get_content( int $template_id, string $origin = 'remote' ): array {
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