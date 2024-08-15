<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Controllers;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\Repositories\BookmarkRepository;
use Templatiq\Utils\Response;
use WP_REST_Request;

class BookmarkController extends ControllerBase {

	public function add( WP_REST_Request $request ) {
		$template_id = $request->get_param( 'template_id' );

		if ( ! $template_id ) {
			return Response::error(
				'invalid_template_id',
				['template_id' => __( 'Template id is required', 'templatiq' )],
				'bookmark',
				422
			);
		}

		try {
			return Response::success(
				( new BookmarkRepository )->add( $template_id )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'bookmark_add_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function remove( WP_REST_Request $request ) {
		$template_id = $request->get_param( 'template_id' );

		if ( ! $template_id ) {
			return Response::error(
				'invalid_template_id',
				['template_id' => __( 'Template id is required', 'templatiq' )],
				'bookmark',
				422
			);
		}

		try {
			return Response::success(
				( new BookmarkRepository )->remove( $template_id )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'bookmark_add_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}
}