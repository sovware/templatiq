<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\DTO\TemplateDataDTO;
use Templatiq\Integrations\Elementor\Repository as ElementorRepository;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class ImporterRepository {

	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function import_as_page( ImportAsPageDTO $DTO ) {
		$template_data = $this->get_content( $DTO->get_template_id() );
		$builder       = $DTO->get_builder();
		$title         = $DTO->get_title();

		if ( empty( $template_data ) ) {
			throw new \Exception(
				__( "Template Data Not Found", "templatiq" ),
				'template-data-missing'
			);
		}

		$_content       = $template_data['content'] ?? [];
		$_title         = $template_data['title'] ?? '';
		$_post_title    = $title ?? 'Templatiq: ' . $_title;
		$_type          = $template_data['type'] ?? '';
		$_status        = current_user_can( 'publish_posts' ) ? 'publish' : 'pending';
		$_page_settings = $template_data['page_settings'] ?? [];

		$templateDataDTO = ( new TemplateDataDTO )
			->set_content( $_content )
			->set_title( $_title )
			->set_post_title( $_post_title )
			->set_type( $_type )
			->set_status( $_status )
			->set_page_settings( $_page_settings );

		$post_id = 0;
		if ( 'elementor' === $builder ) {
			$post_id = ( new ElementorRepository )->create_page( $templateDataDTO );
		} elseif ( 'block-editor' === $builder ) {
			$post_id = ( new ElementorRepository )->create_page( $templateDataDTO );
		}

		if ( $post_id ) {
			// Directorist add custom page functionality goes here.
			return $post_id;
		}

		throw new \Exception(
			__( "Something wen't wrong!", "templatiq" ),
			'builder-not-specified'
		);
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