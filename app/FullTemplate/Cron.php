<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Utils\Singleton;
use WP_Error;

class Cron {
	use Singleton;

	/**
	 * Check Cron Status
	 *
	 * Gets the current cron status by performing a test spawn. Cached for one hour when all is well.
	 *
	 * @since 2.0.0
	 *
	 * @param bool $cache Whether to use the cached result from previous calls.
	 * @return true|WP_Error Boolean true if the cron spawner is working as expected, or a WP_Error object if not.
	 */
	public static function status( $cache = true ) {
		global $wp_version;

		if ( defined( 'DISABLE_WP_CRON' ) && DISABLE_WP_CRON ) {
			return new WP_Error( 'templatiq_sites_cron_error', esc_html__( 'ERROR! Cron schedules are disabled by setting constant DISABLE_WP_CRON to true.<br/>To start the import process please enable the cron by setting the constant to false. E.g. define( \'DISABLE_WP_CRON\', false );', 'templatiq' ) );
		}

		if ( defined( 'ALTERNATE_WP_CRON' ) && ALTERNATE_WP_CRON ) {
			return new WP_Error( 'templatiq_sites_cron_error', esc_html__( 'ERROR! Cron schedules are disabled by setting constant ALTERNATE_WP_CRON to true.<br/>To start the import process please enable the cron by setting the constant to false. E.g. define( \'ALTERNATE_WP_CRON\', false );', 'templatiq' ) );
		}

		$cached_status = get_transient( 'templatiq-sites-cron-test-ok' );

		if ( $cache && $cached_status ) {
			return true;
		}

		$sslverify     = version_compare( $wp_version, 4.0, '<' );
		$doing_wp_cron = sprintf( '%.22F', microtime( true ) );

		$cron_request = apply_filters(
			'cron_request',
			[
				'url'  => site_url( 'wp-cron.php?doing_wp_cron=' . $doing_wp_cron ),
				'key'  => $doing_wp_cron,
				'args' => [
					'timeout'   => 3,
					'blocking'  => true,
					'sslverify' => apply_filters( 'https_local_ssl_verify', $sslverify ),
				],
			]
		);

		$cron_request['args']['blocking'] = true;

		$result = wp_remote_post( $cron_request['url'], $cron_request['args'] );

		if ( is_wp_error( $result ) ) {
			return $result;
		} elseif ( wp_remote_retrieve_response_code( $result ) >= 300 ) {
			return new WP_Error(
				'unexpected_http_response_code',
				sprintf(
					/* translators: 1: The HTTP response code. */
					__( 'Unexpected HTTP response code: %s', 'templatiq' ),
					intval( wp_remote_retrieve_response_code( $result ) )
				)
			);
		} else {
			set_transient( 'templatiq-sites-cron-test-ok', 1, 3600 );

			return true;
		}
	}
}