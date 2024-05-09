<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Controllers;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\Repositories\ImporterRepository;
use Templatiq\Repositories\TemplateRepository;
use Templatiq\Utils\Response;
use WP_REST_Request;

class TemplateController extends ControllerBase {

	public function import_as_page( WP_REST_Request $request ) {
		$template_id = (int) $request->get_param( 'template_id' );
		$title       = $request->get_param( 'title' );
		$builder     = $request->get_param( 'builder' );

		if ( 0 === $template_id ) {
			return Response::error(
				'invalid_template_id',
				__( 'Invalid ID is provided.', 'templatiq' ),
				'import/page',
				404
			);
		}

		$inserted_id = ( new ImporterRepository )->import_as_page( $template_id, $title, $builder );

		if ( is_wp_error( $inserted_id ) ) {
			return Response::error(
				'import_failed',
				$inserted_id->get_error_message(),
				'import-as-page'
			);
		}

		return [
			'post_id'             => $inserted_id,
			'edit_link'           => get_edit_post_link( $inserted_id, 'internal' ),
			'elementor_edit_link' => Plugin::$instance->documents->get( $inserted_id )->get_edit_url(),
			'visit'               => get_permalink( $inserted_id ),
			'right_access_ache'   => current_user_can( 'publish_posts' ),
		];
	}

	public function library_data() {
		try {
			return Response::success(
				( new TemplateRepository )->library_data()
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'library_data',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}
}