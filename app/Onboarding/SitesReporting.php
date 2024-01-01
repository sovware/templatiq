<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Onboarding;

use Templatiq\Utils\Singleton;
use Templatiq_Sites;
use Templatiq_Sites_Page;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class SitesReporting {
	use Singleton;

	public function __construct() {
		add_action( 'st_before_start_import_process', [$this, 'schedule_reporting_event'] );
		add_action( 'generate_analytics_lead', [$this, 'send_analytics_lead'] );
	}

	public function schedule_reporting_event() {
		$has_sent_error_report = get_option( 'templatiq_sites_has_sent_error_report', 'no' );
		if ( 'no' === $has_sent_error_report ) {
			// Schedule and event in next 20mins to send error report.
			wp_schedule_single_event( time() + 1200, 'generate_analytics_lead' );
			update_option( 'templatiq_sites_has_sent_error_report', 'yes' );
		}
	}

	public function send_analytics_lead() {
		$cached_errors = get_option( 'templatiq_sites_cached_import_error', false );

		if ( false === $cached_errors ) {
			return;
		}

		$id = ( isset( $cached_errors['id'] ) ) ? $cached_errors['id'] : 0;

		if ( 0 === $id ) {
			return;
		}

		$data        = json_decode( $cached_errors['err'] );
		$report_data = [
			'id'              => $id,
			'import_attempts' => isset( $data->tryAgainCount ) ? absint( $data->tryAgainCount ) : 0,
			'import_status'   => 'false',
			'type'            => 'templatiq-sites',
			'page_builder'    => Templatiq_Sites_Page::get_instance()->get_setting( 'page_builder' ),
			'exit_intend'     => 'true',
		];

		$this->report( $report_data );

		update_option( 'templatiq_sites_has_sent_error_report', 'no' );
		delete_option( 'templatiq_sites_cached_import_error' );
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
				'version'         => TEMPLATIQ_SITES_VER,
				'type'            => $type,
				'builder'         => $page_builder,
				'user_agent'      => $user_agent_string,
				'exit_intend'     => $exit_intend,
			],
		];

		$request = wp_remote_post( Templatiq_Sites::get_instance()->import_analytics_url, $api_args );

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
}