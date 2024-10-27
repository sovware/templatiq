<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Bricks;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\Repositories\LoggingRepository;

class ImportAsPage {
	use \Templatiq\Utils\Singleton;

	private string $cloud_endpoint;

	public function __construct() {
		add_filter( 'templatiq_import_as_page_created_post_id', [$this, 'import_as_page'], 10, 2 );
		add_filter( 'templatiq_before_return_import_as_page', [$this, 'before_return_import_as_page'], 10, 2 );
	}

	public function import_as_page( $page_id, ImportAsPageDTO $DTO ) {

		if ( 'bricks' !== $DTO->get_builder() ) {
			return $page_id;
		}

		LoggingRepository::add( 'Import As Page - Bricks' );

		$template_data = $DTO->get_template_data();

		$_content       = $template_data['content'] ?? [];
		$_title         = $template_data['title'] ?? '';
		$_post_title    = $DTO->get_title() ?? 'Templatiq: ' . $_title;
		$_type          = $template_data['type'] ?? '';
		$_status        = current_user_can( 'publish_posts' ) ? 'publish' : 'pending';
		$_page_settings = $template_data['page_settings'] ?? [];

		$templateDataDTO = ( new TemplateDataDTO )
			->set_content( $_content )
			->set_title( $_post_title )
			->set_type( $_type )
			->set_status( $_status )
			->set_page_settings( $_page_settings );

		$inserted_id = ( new Repository )->create_page( $templateDataDTO );

		LoggingRepository::add( 'Import As Page - Bricks - page created ', $inserted_id );

		return $inserted_id;
	}

	public function before_return_import_as_page( $data, ImportAsPageDTO $DTO ) {
		if ( 'bricks' === $DTO->get_builder() ) {
			$post_id           = $data['post_id'] ?? 0;
			$data['edit_link'] = $this->get_edit_url( $post_id );
		}

		return $data;
	}

	private function get_edit_url( int $post_id ) {
		return add_query_arg( 'bricks', 'run', get_permalink( $post_id ) );
	}
}