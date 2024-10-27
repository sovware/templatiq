<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Bricks;

use Bricks\Helpers;
use Bricks\Templates;
use Templatiq\Repositories\LoggingRepository;

class Repository {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_API_BASE;
	}

	public function create_page( TemplateDataDTO $template_data ): int {

		$inserted_id = wp_insert_post( [
			'post_status' => $template_data->get_status(),
			'post_type'   => 'page',
			'post_title'  => $template_data->get_title(),
		] );

		LoggingRepository::add( 'Import As Page - Bricks - $inserted_id ', $inserted_id );

		if ( is_wp_error( $inserted_id ) ) {

			LoggingRepository::add( 'Import As Page - Bricks - is_wp_error ', $inserted_id->get_error_message() );

			throw new \Exception(
				esc_html( $inserted_id->get_error_message() ),
				esc_html( $inserted_id->get_error_code() )
			);
		}

		$data = $this->replace_images( $template_data->get_content() );

		update_post_meta( $inserted_id, BRICKS_DB_PAGE_CONTENT, $data );

		return $inserted_id;
	}

	/**
	 * Code inspired from Bricks
	 */
	private function replace_images( $elements ) {

		foreach ( $elements as $index => $element ) {
			if ( empty( $element['settings'] ) ) {
				$elements[$index]['settings'] = [];
			} else {
				// STEP: Import element images & update template data with local image data
				Templates::import_images( $element['settings'], true );
			}

			if ( ! isset( $element['children'] ) ) {
				$elements[$index]['children'] = [];
			}
		}

		// STEP: Replace remote image data with imported/existing image data
		if ( count( Templates::$template_images ) ) {
			$elements_encoded = wp_json_encode( $elements );

			foreach ( Templates::$template_images as $template_image ) {
				$elements_encoded = str_replace(
					wp_json_encode( $template_image['old'] ),
					wp_json_encode( $template_image['new'] ),
					$elements_encoded
				);
			}

			$elements = json_decode( $elements_encoded, true );
		}

		return Helpers::generate_new_element_ids( $elements );
	}
}