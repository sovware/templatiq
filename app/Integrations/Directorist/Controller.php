<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\DTO\PluginDTO;
use Templatiq\Repositories\DependencyRepository;
use Templatiq\Utils\Response;
use WP_REST_Request;

class Controller extends ControllerBase {

	public function erase_existing_data() {
		$directorist = ( new Repository() );

		try {
			$directorist->erase_existing_data();

			return Response::success( true );
		} catch ( \Throwable $th ) {
			return Response::error(
				'bookmark_add_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function add_custom_page( WP_REST_Request $request ) {
		$plugins = (array) $request->get_param( 'types' );

		if ( empty( $plugins ) ) {
			return Response::error(
				'invalid_plugins',
				__( 'You have supplied an invalid requirements. Please reload the page and try again.', 'templatiq' ),
				'dependency/check',
				400
			);
		}

		$pluginDTOs = [];

		foreach ( $plugins as $plugin ) {
			$pluginDTO = ( new PluginDTO )
				->set_name( $plugin['name'] )
				->set_file_name( $plugin['file_name'] )
				->set_slug( $plugin['slug'] )
				->set_is_pro( $plugin['is_pro'] );

			$pluginDTOs[] = $pluginDTO;
		}

		try {
			return Response::success(
				( new DependencyRepository )->dependencies( ...$pluginDTOs )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'dependency_check_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function import_directory_types() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		error_log( print_r( 'Import directory type ajax request received: ', true ) );

		try {
			( new Repository() )->import_directory_types();

			wp_send_json_success( 'true' );
		} catch ( \Throwable $th ) {
			wp_send_json_error( __( 'Some problem detected, please try again later.', 'templatiq' ) );
		}
	}

	public function import_directory_listings() {
		update_option( 'templatiq_import_directory_listings', true );
		wp_send_json_success( 'true' );
	}
}