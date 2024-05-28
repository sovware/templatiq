<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Abstracts\ControllerBase;
use Templatiq\Repositories\FileSystemRepository;
use Templatiq\Repositories\RemoteRepository;
use Templatiq_Sites_Error_Handler;

class Controller extends ControllerBase {

	public string $api_domain;
	public string $api_url;
	public string $search_analytics_url;
	public string $import_analytics_url;
	public string $pixabay_url;
	public string $pixabay_api_key;
	private static $instance        = null;
	public static array $local_vars = [];
	public string $wp_upload_url    = '';

	public function set_site_data() {
		check_ajax_referer( 'templatiq-sites-set-ai-site-data', 'security' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error(
				[
					'success' => false,
					'message' => __( 'You are not authorized to perform this action.', 'templatiq' ),
				]
			);
		}

		$param = isset( $_POST['param'] ) ? sanitize_text_field( $_POST['param'] ) : '';

		if ( empty( $param ) ) {
			wp_send_json_error();
		}

		switch ( $param ) {
			case 'site-logo' === $param:
				( new SiteData() )->update_logo();
				break;

			case 'site-colors' === $param:
				( new SiteData() )->update_colors();
				break;

			case 'site-typography' === $param && function_exists( 'templatiq_get_option' ):
				( new SiteData() )->update_typography();
				break;
		}

		wp_send_json_success();
	}

	public function report_error() {
		$api_url = add_query_arg( [], trailingslashit( TEMPLATIQ_API_ENDPOINT ) . 'wp-json/starter-templates/v2/import-error/' );

		if ( ! templatiq_sites_is_valid_url( $api_url ) ) {
			wp_send_json_error(
				[
					'message' => sprintf( __( 'Invalid Request URL - %s', 'templatiq' ), $api_url ),
					'code'    => 'Error',
				]
			);
		}

		$post_id           = ( isset( $_POST['id'] ) ) ? intval( $_POST['id'] ) : 0;
		$user_agent_string = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( $_SERVER['HTTP_USER_AGENT'] ) : '';

		if ( 0 === $post_id ) {
			wp_send_json_error(
				[
					'message' => sprintf( __( 'Invalid Post ID - %d', 'templatiq' ), $post_id ),
					'code'    => 'Error',
				]
			);
		}

		$Repository = new Repository;

		$api_args = [
			'timeout'  => 3,
			'blocking' => true,
			'body'     => [
				'url'        => esc_url( site_url() ),
				'err'        => stripslashes( $_POST['error'] ),
				'id'         => $_POST['id'],
				'logfile'    => $Repository->get_log_file_path(),
				'version'    => TEMPLATIQ_SITES_VER,
				'abspath'    => ABSPATH,
				'user_agent' => $user_agent_string,
				'server'     => [
					'php_version'            => $Repository->get_php_version(),
					'php_post_max_size'      => ini_get( 'post_max_size' ),
					'php_max_execution_time' => ini_get( 'max_execution_time' ),
					'max_input_time'         => ini_get( 'max_input_time' ),
					'php_memory_limit'       => ini_get( 'memory_limit' ),
					'php_max_input_vars'     => ini_get( 'max_input_vars' ), // phpcs:ignore:PHPCompatibility.IniDirectives.NewIniDirectives.max_input_varsFound
				],
			],
		];

		do_action( 'st_before_sending_error_report', $api_args['body'] );

		$request = wp_remote_post( $api_url, $api_args );

		do_action( 'st_after_sending_error_report', $api_args['body'], $request );

		if ( is_wp_error( $request ) ) {
			wp_send_json_error( $request );
		}

		$code = (int) wp_remote_retrieve_response_code( $request );
		$data = json_decode( wp_remote_retrieve_body( $request ), true );

		if ( 200 === $code ) {
			wp_send_json_success( $data );
		}

		wp_send_json_error( $data );
	}

	public function required_plugin( $required_plugins = [], $options = [] ) {
		// Verify Nonce.
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );
			if ( ! current_user_can( 'edit_posts' ) ) {
				wp_send_json_error();
			}
		}

		$response = [
			'active'       => [],
			'inactive'     => [],
			'notinstalled' => [],
		];

		$options          = templatiq_get_site_data( 'templatiq-site-options-data' );
		$required_plugins = templatiq_get_site_data( 'required-plugins' );

		$data = ( new Repository )->get_required_plugins_data( $response, $required_plugins );

		if ( wp_doing_ajax() ) {
			wp_send_json_success( $data );
		} else {
			return $data;
		}
	}

	public function required_plugin_activate( $init = '', $options = [] ) {
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

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		$plugin_init = ( isset( $_POST['init'] ) ) ? esc_attr( sanitize_text_field( $_POST['init'] ) ) : $init;
		$activate    = activate_plugin( $plugin_init, '', false, false );

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		if ( is_wp_error( $activate ) ) {
			if ( wp_doing_ajax() ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => $activate->get_error_message(),
					]
				);
			}
		}

		$options = templatiq_get_site_data( 'templatiq-site-options-data' );
		( new Repository )->after_plugin_activate( $plugin_init, $options );

		if ( wp_doing_ajax() ) {
			wp_send_json_success(
				[
					'success' => true,
					'message' => __( 'Plugin Activated', 'templatiq' ),
				]
			);
		}
	}

	public function backup_settings() {
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'User does not have permission!', 'templatiq' ) );
			}
		}

		( new Backup )->settings();

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}
	}

	public function get_reset_data() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		$data = [
			'reset_posts'    => [],
			'reset_wp_forms' => [],
			'reset_terms'    => [],
		];

		if ( get_option( 'templatiq-erase-existing-imported-data' ) ) {
			$data = ( new Reset )->get_data();
		}

		if ( wp_doing_ajax() ) {
			wp_send_json_success( $data );
		}

		return $data;
	}

	public function reset_terms_and_forms() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		if ( get_option( 'templatiq-erase-existing-imported-data' ) ) {
			( new Reset )->terms_and_forms();
		}

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}
	}

	public function reset_posts() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		if ( get_option( 'templatiq-erase-existing-imported-data' ) ) {
			( new Reset )->posts();
		}

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}

		wp_send_json_error();
	}

	public function get_deleted_post_ids() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		if ( ! get_option( 'templatiq-erase-existing-imported-data' ) ) {
			wp_send_json_success( [] );
		}

		wp_send_json_success( templatiq_sites_get_reset_post_data() );
	}

	public function api_request() {
		check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error();
		}

		$template_id = (int) $_POST['template_id'] ?? 0;

		if ( empty( $template_id ) ) {
			wp_send_json_error(
				[
					'message' => __( 'Provided template_id is empty! Please try again!', 'templatiq' ),
					'code'    => 'Error',
				]
			);
		}

		$response = ( new RemoteRepository() )
			->get_full_template( $template_id );

		update_option( 'templatiq_sites_import_data', $response, 'no' );

		wp_send_json_success( $response );
	}

	public function filesystem_permission() {
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You do not have permission to perform this action.', 'templatiq' ) );
			}
		}

		wp_send_json_success(
			( new FileSystemRepository )->check_permission()
		);
	}

	public function import_content_persona_wise() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		$import_data = $_POST['import_data'] ?? '';
		if ( empty( $import_data ) ) {
			wp_send_json_success( true );
		}

		$import_data = json_decode( stripslashes( $import_data ), true );

		wp_send_json_success(
			( new Repository )->save_user_requirements( $import_data )
		);
	}
}