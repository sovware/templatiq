<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Templatiq\Abstracts\ControllerBase;
use Templatiq\Utils\Response;

class Controller extends ControllerBase {

	public function print_template_views() {
		include_once TEMPLATIQ_PATH . '/templates/template-library/templates.php';
	}

	public function elementor_editor_ajax( Ajax $ajax ) {
		$ajax->register_ajax_action( 'get_tm_library_data', function ( $data ) {
			if ( ! current_user_can( 'edit_posts' ) ) {
				throw new \Exception(
					'Access Denied',
					401
				);
			}

			if ( ! empty( $data['editor_post_id'] ) ) {
				$editor_post_id = absint( $data['editor_post_id'] );
				if ( ! get_post( $editor_post_id ) ) {
					throw new \Exception(
						esc_html__( 'Post not found.', 'templatiq' ),
						404
					);
				}

				\Elementor\Plugin::instance()->db->switch_to_post( $editor_post_id );
			}

			try {
				return Response::success(
					( new Repository )->get_library_data()
				);
			} catch ( \Throwable $th ) {
				return Response::error(
					'dependency_check_errors',
					$th->getMessage(),
					__FUNCTION__,
					$th->getCode()
				);
			}
		} );

		$ajax->register_ajax_action( 'get_templatiq_template_data', function ( $data ) {
			if ( ! current_user_can( 'edit_posts' ) ) {
				return Response::error(
					'access_denied',
					__( 'Access Denied', 'templatiq' ),
					'get_templatiq_template_data',
					401
				);
			}

			if ( empty( $data['template_id'] ) ) {
				return Response::error(
					'item_id_missing',
					__( 'Item ID Missing', 'templatiq' ),
					'get_templatiq_template_data',
					404
				);
			}

			try {
				$template_id = (int) $data['template_id'];
				$result      = ( new Repository )->get_template_data( $template_id );

				unset( $result['type'] );

				return Response::success( $result );

			} catch ( \Throwable $th ) {
				return Response::error(
					'dependency_check_errors',
					$th->getMessage(),
					__FUNCTION__,
					$th->getCode()
				);
			}
		} );
	}
}