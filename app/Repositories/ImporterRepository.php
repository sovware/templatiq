<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;

class ImporterRepository {
	public function import_as_page( ImportAsPageDTO $DTO ) {
		if ( empty( $DTO->get_builder() ) ) {
			throw new \Exception(
				esc_html__( "Builder not specified yet.", "templatiq" ),
				'builder-not-specified'
			);
		}

		$template_data = ( new RemoteRepository() )
			->get_single_template( $DTO->get_template_id() );

		if ( empty( $template_data ) ) {
			throw new \Exception(
				esc_html__( "Template data not found", "templatiq" ),
				'template-data-missing'
			);
		}

		error_log( '$template_data: ' . print_r( $template_data, true ) );

		if ( isset( $template_data['message'] ) ) {
			throw new \Exception(
				esc_html( $template_data['message'] ),
				esc_html( $template_data['code'] )
			);
		}

		$template_data['type'] = 'page';

		$DTO->set_template_data( $template_data );

		$inserted_id = apply_filters(
			'templatiq_import_as_page_created_post_id',
			0,
			$DTO
		);

		if ( is_wp_error( $inserted_id ) ) {
			throw new \Exception(
				esc_html( $inserted_id->get_error_message() ),
				'import-as-page'
			);
		}

		if ( ! $inserted_id ) {
			throw new \Exception(
				esc_html__( "Import as page failed", "templatiq" ),
				'import-as-page-failed'
			);
		}

		return $inserted_id;
	}
}