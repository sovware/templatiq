<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Elementor\TemplateLibrary\Source_Local as ElementorLocal;
use Templatiq\DTO\ImportAsPageDTO;

class ImportAsPage extends ElementorLocal {
	use \Templatiq\Utils\Singleton;

	private string $cloud_endpoint;

	public function __construct() {
		add_filter( 'templatiq_import_as_page_created_post_id', [$this, 'import_as_page'], 10, 2 );
	}

	public function import_as_page( $page_id, ImportAsPageDTO $DTO ) {
		if ( 'elementor' !== $DTO->get_builder() ) {
			return;
		}

		$template_data = $DTO->get_template_data();

		$_content       = $template_data['content'] ?? [];
		$_title         = $template_data['title'] ?? '';
		$_post_title    = $DTO->get_title() ?? 'Templatiq: ' . $_title;
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

		return ( new Repository )->create_page( $templateDataDTO );
	}
}