<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class RemoteRepository {

	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_API_BASE;
	}

	public function get_single_template( int $template_id ): array {
		return $this->get_remote_content( $template_id, 'contents' );
	}

	public function get_full_template( int $template_id ) {
		$remote_args = [];
		$defaults    = [
			'id'                           => '',
			'templatiq-site-options-data'  => '',
			'templatiq-post-data-mapping'  => '',
			'templatiq-site-wxr-path'      => '',
			'templatiq-enabled-extensions' => '',
			'required-plugins'             => '',
			'license-status'               => '',
			'templatiq-site-url'           => '',
		];

		$data = $this->get_remote_content( $template_id, 'full-site' );

		if ( ! isset( $data['code'] ) ) {
			$remote_args['id']                          = $data['id'];
			$remote_args['templatiq-site-options-data'] = $data['templatiq-site-options-data'];
			$remote_args['templatiq-site-wxr-path']     = $data['templatiq-site-wxr-path'];
			$remote_args['required-plugins']            = $data['required-plugins'];
			$remote_args['license-status']              = $data['license-status'];
			$remote_args['templatiq-site-url']          = $data['templatiq-site-url'];
			$remote_args['directory-types']             = $data['directory-types'];
		}

		return wp_parse_args( $remote_args, $defaults );
	}

	private function get_remote_content( int $template_id, string $endpoint ) {
		$http     = new Http( $this->cloud_endpoint . '/template/' . $endpoint );
		$response = $http->body(
			[
				'token'       => Options::get( 'token' ),
				'template_id' => $template_id,
				'nocache'     => time(),
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

		return $data;
	}
}