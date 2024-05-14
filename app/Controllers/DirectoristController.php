<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Controllers;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\Repositories\DirectoristRepository;
use Templatiq\Utils\Response;
use WP_REST_Request;

class DirectoristController extends ControllerBase {

	public function erase_existing_data() {
		$directorist = ( new DirectoristRepository() );

		if ( ! $directorist->is_active() ) {
			return Response::error(
				'invalid_erase_directorist_data_request',
				__( 'Directorist required to erase data' ),
				'directorist/erase_existing_data',
				404
			);
		}

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
}