<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Model;

use Elementor\Core\Settings\Page\Model;
use Elementor\Plugin as ElementorPlugin;
use Elementor\TemplateLibrary\Source_Local as ElementorLocal;

class Elementor extends ElementorLocal {

	public function create_page( array $template_data, string $title ): int {
		$template_data = $this->get_data( $template_data );
		$page_settings = $this->page_settings( $template_data );

		$defaults = [
			'post_title'    => $title ?? 'Template Market: ' . $template_data['title'],
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

		$document->save( [
			'elements' => $template_data['content'],
			'settings' => $page_settings,
		] );

		return $document->get_main_id();
	}

	public function insert_template( array $template_data ): int {
		$template_data = $this->get_data( $template_data );

		return '3434';
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
}