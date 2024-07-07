<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Providers;

use Templatiq\Abstracts\ProviderBase;
use Templatiq\FullTemplate\Repository;
use Templatiq\FullTemplate\Settings;

class FullTemplateServiceProviders extends ProviderBase {

	public function boot() {
		add_action( 'st_before_sending_error_report', [$this, 'delete_transient_for_import_process'] );
		add_action( 'st_before_sending_error_report', [$this, 'temporary_cache_errors'], 10, 1 );

		add_action( 'st_before_start_import_process', [$this, 'schedule_reporting_event'] );
		add_action( 'generate_analytics_lead', [$this, 'send_analytics_lead'] );

		\Templatiq\FullTemplate\FullTemplate::init();
		\Templatiq\FullTemplate\Importer::get_instance();
		\Templatiq\FullTemplate\ImportComplete::get_instance();
		\Templatiq\FullTemplate\AdminMenu::init();
		\Templatiq\FullTemplate\Enqueuer::init();
		\Templatiq\FullTemplate\Ajax::init();
	}

	public function temporary_cache_errors( $posted_data ) {
		update_option( 'templatiq_sites_cached_import_error', $posted_data, 'no' );
	}

	public function delete_transient_for_import_process() {
		delete_transient( 'templatiq_sites_import_started' );
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
			'page_builder'    => ( new Settings )->get_setting( 'page_builder' ),
			'exit_intend'     => 'true',
		];

		( new Repository )->report( $report_data );

		update_option( 'templatiq_sites_has_sent_error_report', 'no' );
		delete_option( 'templatiq_sites_cached_import_error' );
	}
}