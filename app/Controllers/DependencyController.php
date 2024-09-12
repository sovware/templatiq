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

			( new DependencyRepository() )->activate_theme();

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

	public function required_plugins( $request = null ) {
		// Check if the request is via AJAX
		if ( wp_doing_ajax() ) {
			// Verify Nonce for AJAX requests
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			// Check if the user has the required permissions
			if ( ! current_user_can( 'edit_posts' ) ) {
				wp_send_json_error();
			}

			// Get required plugins from site data
			$required_plugins = templatiq_get_site_data( 'required-plugins' );
		} else {
			// Handle REST API requests
			if ( $request instanceof WP_REST_Request ) {
				$required_plugins = (array) $request->get_param( 'plugins' );
			} else {
				throw new \Exception( __( 'Invalid request type. Expecting WP_REST_Request.', 'templatiq' ), 400 );
			}
		}

		// Validate required plugins
		if ( empty( $required_plugins ) ) {
			throw new \Exception( __( 'You have supplied invalid requirements. Please reload the page and try again.', 'templatiq' ), 400 );
		}

		// Response format
		$response = [
			'active'       => [],
			'inactive'     => [],
			'notinstalled' => [],
		];

		try {
			// Get required plugin data
			$data = ( new DependencyRepository )->get_required_plugins_data( $response, $required_plugins );

			// Return the data depending on request type (AJAX or REST)
			if ( wp_doing_ajax() ) {
				wp_send_json_success( $data );
			} else {
				return Response::success( $data );
			}
		} catch ( \Throwable $th ) {
			// Handle errors for both request types
			if ( wp_doing_ajax() ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => $th->getMessage(),
					]
				);
			} else {
				return Response::error(
					'dependency_required_plugins_errors',
					$th->getMessage(),
					__FUNCTION__,
					$th->getCode()
				);
			}
		}
	}

	public function activate_plugin( $init = '', $options = [] ) {

		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'install_plugins' ) || ! isset( $_POST['init'] ) || ! sanitize_text_field( $_POST['init'] ) ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => __( 'Error: You don\'t have the required permissions to install plugins.', 'templatiq' ),
					]
				);
			}
		}

		$plugin_init = ( isset( $_POST['init'] ) ) ? esc_attr( sanitize_text_field( $_POST['init'] ) ) : $init;

		try {
			$dependencyRepository = new DependencyRepository();
			$activate             = $dependencyRepository->activate( $plugin_init );

			if ( is_wp_error( $activate ) ) {
				throw new \Exception( $activate->get_error_message(), $activate->get_error_code() );
			}

			if ( ! $options ) {
				$options = templatiq_get_site_data( 'templatiq-site-options-data' );
			}

			$dependencyRepository->after_plugin_activate( $plugin_init, $options );

			if ( wp_doing_ajax() ) {
				wp_send_json_success(
					[
						'success' => true,
						'message' => __( 'Plugin Activated', 'templatiq' ),
					]
				);
			} else {
				return Response::success( [
					'success' => true,
					'message' => __( 'Plugin Activated', 'templatiq' ),
				] );
			}
		} catch ( \Throwable $th ) {
			if ( wp_doing_ajax() ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => $th->getMessage(),
					]
				);
			} else {
				return Response::error(
					'plugin_activate_errors',
					$th->getMessage(),
					__FUNCTION__,
					$th->getCode()
				);
			}
		}
	}
}