<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Controllers;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\DTO\PluginDTO;
use Templatiq\Repositories\DependencyRepository;
use Templatiq\Utils\Response;
use WP_REST_Request;

class DependencyController extends ControllerBase {

	public function check( WP_REST_Request $request ) {
		$plugins = (array) $request->get_param( 'plugins' );

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

	public function install( WP_REST_Request $request ) {
		$plugin = (array) $request->get_param( 'plugin' );

		if ( empty( $plugin ) ) {
			return Response::error(
				'invalid_plugin',
				__( 'You have supplied an invalid requirements. Please reload the page and try again.', 'templatiq' ),
				'dependency/install',
				400
			);
		}

		$pluginDTO = ( new PluginDTO() )
			->set_name( $plugin['name'] )
			->set_file_name( $plugin['file_name'] )
			->set_slug( $plugin['slug'] )
			->set_is_pro( $plugin['is_pro'] );

		try {
			return Response::success(
				( new DependencyRepository )->installer( $pluginDTO )
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'dependency_install_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}

	public function activate_theme() {
		try {
			switch_theme( 'oceanwp' );

			error_log( print_r( 'theme activated ', true ) );

			return Response::success(
				[
					'success' => true,
					'message' => __( 'Theme Activated', 'templatiq' ),
				]
			);
		} catch ( \Throwable $th ) {
			return Response::error(
				'theme_activate_errors',
				$th->getMessage(),
				__FUNCTION__,
				$th->getCode()
			);
		}
	}
}