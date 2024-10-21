<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Repositories\LoggingRepository;

class Repository {

	public function get_log_file_path() {
		$log_file = get_option( 'templatiq_sites_recent_import_log_file', false );
		if ( ! empty( $log_file ) && isset( $log_file ) ) {
			return str_replace( ABSPATH, esc_url( site_url() ) . '/', $log_file );
		}

		return "";
	}

	public function get_php_version() {
		if ( defined( 'PHP_MAJOR_VERSION' ) && defined( 'PHP_MINOR_VERSION' ) && defined( 'PHP_RELEASE_VERSION' ) ) { // phpcs:ignore
			return PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION . '.' . PHP_RELEASE_VERSION;
		}

		return phpversion();
	}

	public function report( $data ) {
		$id                = isset( $data['id'] ) ? absint( $data['id'] ) : 0;
		$import_attempts   = isset( $data['import_attempts'] ) ? absint( $data['import_attempts'] ) : 0;
		$import_status     = isset( $data['import_status'] ) ? sanitize_text_field( $data['import_status'] ) : 'true';
		$type              = isset( $data['type'] ) ? sanitize_text_field( $data['type'] ) : 'templatiq-sites';
		$page_builder      = isset( $data['page_builder'] ) ? sanitize_text_field( $data['page_builder'] ) : 'gutenberg';
		$exit_intend       = isset( $data['exit_intend'] ) ? sanitize_text_field( $data['exit_intend'] ) : 'false';
		$user_agent_string = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( $_SERVER['HTTP_USER_AGENT'] ) : '';

		$api_args = [
			'timeout'  => 3,
			'blocking' => true,
			'body'     => [
				'url'             => esc_url( site_url() ),
				'import_status'   => $import_status,
				'id'              => $id,
				'import_attempts' => $import_attempts,
				'version'         => TEMPLATIQ_VERSION,
				'type'            => $type,
				'builder'         => $page_builder,
				'user_agent'      => $user_agent_string,
				'exit_intend'     => $exit_intend,
			],
		];

		$request = wp_remote_post( ( new FullTemplate )->import_analytics_url, $api_args );

		if ( is_wp_error( $request ) ) {
			return [
				'status' => false,
				'data'   => $request,
			];
		}

		$code = (int) wp_remote_retrieve_response_code( $request );
		$data = json_decode( wp_remote_retrieve_body( $request ), true );

		if ( 200 === $code ) {
			return [
				'status' => true,
				'data'   => $data,
			];
		}

		return [
			'status' => false,
			'data'   => $data,
		];
	}

	public function save_user_requirements( array $import_data ) {
		/**
		 * Make all the options as false
		 */
		update_option( 'templatiq-erase-existing-directorist-data', false );
		update_option( 'templatiq-erase-existing-imported-data', false );
		update_option( 'templatiq-import-directorist-listings', false );
		update_option( 'templatiq-share-non-sensitive-data', false );

		if ( isset( $import_data['removeImportedData'] ) && $import_data['removeImportedData'] ) {
			update_option( 'templatiq-erase-existing-imported-data', true );
		}

		$importContents = array_flip( $import_data['installContents'] );
		if ( isset( $importContents['importListing'] ) ) {
			update_option( 'templatiq-import-directorist-listings', true );
		}
		if ( isset( $importContents['shareNonSensitiveData'] ) ) {
			update_option( 'templatiq-share-non-sensitive-data', true );
			do_action( 'templatiq_share_non_sensitive_data', true );
		}

		LoggingRepository::add( 'User Requirements Saved', $import_data );

		if ( isset( $import_data['eraseExistingDirectoristData'] ) && $import_data['eraseExistingDirectoristData'] ) {
			update_option( 'templatiq-erase-existing-directorist-data', true );

			LoggingRepository::add( 'Erase Existing Directorist Data', '' );

			return [
				'success'     => true,
				'text'        => __( 'User requirements saved.', 'templatiq' ),
				'ajax_action' => 'templatiq_erase_existing_directorist_data',
			];
		}

		return [
			'success' => true,
			'text'    => __( 'User requirements saved.', 'templatiq' ),
		];
	}
}