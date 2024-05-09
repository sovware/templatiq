<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations;

use Elementor\Core\Settings\Page\Model;
use Elementor\Plugin as ElementorPlugin;
use Elementor\TemplateLibrary\Source_Local as ElementorLocal;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class ElementorRepository extends ElementorLocal {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function create_page( array $template_data, string $title ): int {
		$template_data = $this->get_data( $template_data );
		$page_settings = $this->page_settings( $template_data );

		$defaults = [
			'post_title'    => $title ?? 'Templatiq: ' . $template_data['title'],
			'page_settings' => $page_settings,
			'status'        => current_user_can( 'publish_posts' ) ? 'publish' : 'pending',
		];

		$template_data = wp_parse_args( $template_data, $defaults );

		$document = ElementorPlugin::$instance->documents->create(
			$template_data['type'],
			[
				'post_title'  => $template_data['post_title'],
				'post_status' => $template_data['status'],
				'post_type'   => 'page',
			]
		);

		if ( is_wp_error( $document ) ) {
			error_log( print_r( $document, true ) );

			return 0;
		}

		$document->save( [
			'elements' => $template_data['content'],
			'settings' => $page_settings,
		] );

		return $document->get_main_id();
	}

	public function get_template_data( array $data ): array {
		$data = $this->get_data( $data );

		// $data['content'] = $document->get_elements_raw_data( $data['content'], true );

		return $data;
	}

	private function page_settings( array $template_data ): array {
		$page_settings = [];

		if ( ! empty( $template_data['page_settings'] ) ) {
			$page = new Model( [
				'id'       => 0,
				'settings' => $template_data['page_settings'],
			] );

			$page_settings_data = $this->process_element_export_import_content( $page, 'on_import' );

			if ( ! empty( $page_settings_data['settings'] ) ) {
				$page_settings = $page_settings_data['settings'];
			}
		}

		return $page_settings;
	}

	public function get_data( array $args ): array {
		ElementorPlugin::$instance->editor->set_edit_mode( true );

		$args['content'] = $this->replace_elements_ids( $args['content'] );
		$args['content'] = $this->process_export_import_content( $args['content'], 'on_import' );

		return $args;
	}

	public function get_library_data() {
		$http     = new Http( $this->cloud_endpoint . '/template/library' );
		$response = $http->body(
			[
				'token' => Options::get( 'token' ),
			] )
			->get()
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