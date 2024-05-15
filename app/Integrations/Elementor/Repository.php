<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Elementor\Core\Settings\Page\Model;
use Elementor\Plugin as ElementorPlugin;
use Elementor\TemplateLibrary\Source_Local as ElementorLocal;
use Templatiq\DTO\TemplateDataDTO;
use Templatiq\Repositories\ImporterRepository;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;
use Templatiq\Utils\Response;

class Repository extends ElementorLocal {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_BASE;
	}

	public function get_template_data( int $template_id ) {
		$remote_data = ( new ImporterRepository() )->get_content( $template_id );

		$template_data = ( new TemplateDataDTO )
			->set_content( $remote_data['content'] )
			->set_page_settings( $remote_data['page_settings'] )
			->set_version( $remote_data['version'] )
			->set_title( $remote_data['title'] );

		$this->process_content( $template_data );

		return [
			'content'       => $template_data->get_content(),
			'page_settings' => $template_data->get_page_settings(),
			'version'       => $template_data->get_version(),
			'title'         => $template_data->get_title(),
		];
	}

	public function process_content( TemplateDataDTO $template_data ) {
		ElementorPlugin::$instance->editor->set_edit_mode( true );

		$content = $this->replace_elements_ids( $template_data->get_content() );
		$content = $this->process_export_import_content( $content, 'on_import' );

		$template_data->set_content( $content );
	}

	public function create_page( TemplateDataDTO $template_data ): int {
		$this->process_content( $template_data );

		$page_settings = $this->page_settings( $template_data );

		$document = ElementorPlugin::$instance->documents->create(
			$template_data->get_type(),
			[
				'post_title'  => $template_data->get_title(),
				'post_status' => $template_data->get_status(),
				'post_type'   => 'page',
			]
		);

		if ( is_wp_error( $document ) ) {
			throw new \Exception(
				$document->get_error_message(),
				$document->get_error_code()
			);
		}

		$document->save( [
			'elements' => $template_data->get_content(),
			'settings' => $page_settings,
		] );

		return $document->get_main_id();
	}

	private function page_settings( TemplateDataDTO $template_data ) {
		$page_settings = [];

		$_page_settings = $template_data->get_page_settings();
		if ( ! empty( $_page_settings ) ) {
			$page = new Model( [
				'id'       => 0,
				'settings' => $_page_settings,
			] );

			$page_settings_data = $this->process_element_export_import_content( $page, 'on_import' );

			if ( ! empty( $page_settings_data['settings'] ) ) {
				$page_settings = $page_settings_data['settings'];
			}
		}

		return $page_settings;
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