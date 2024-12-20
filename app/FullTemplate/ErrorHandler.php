<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Repositories\LoggingRepository;

defined( 'ABSPATH' ) || exit;

define( 'TEMPLATIQ_ERROR_FATALS', E_ERROR | E_PARSE | E_COMPILE_ERROR | E_USER_ERROR | E_RECOVERABLE_ERROR );

/**
 * ErrorHandler
 */
class ErrorHandler {

	/**
	 * Instance of ErrorHandler
	 *
	 * @since  3.0.23
	 * @var (Object) ErrorHandler
	 */
	private static $instance = null;

	/**
	 * Instance of ErrorHandler.
	 *
	 * @since  3.0.23
	 *
	 * @return object Class object.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {

		if ( true === templatiq_sites_has_import_started() ) {
			$this->start_error_handler();
		}

		add_action( 'shutdown', [$this, 'stop_handler'] );
	}

	/**
	 * Stop the shutdown handlers.
	 *
	 * @return void
	 */
	public function stop_handler() {
		if ( true === templatiq_sites_has_import_started() ) {
			$this->stop_error_handler();
		}
	}

	/**
	 * Start the error handling.
	 */
	public function start_error_handler() {
		if ( ! interface_exists( 'Throwable' ) ) {
			// Fatal error handler for PHP < 7.
			register_shutdown_function( [$this, 'shutdown_handler'] );
		}

		// Fatal error handler for PHP >= 7, and uncaught exception handler for all PHP versions.
		set_exception_handler( [$this, 'exception_handler'] );
	}

	/**
	 * Stop and restore the error handlers.
	 */
	public function stop_error_handler() {
		// Restore the error handlers.
		restore_error_handler();
		restore_exception_handler();
	}

	/**
	 * Uncaught exception handler.
	 *
	 * In PHP >= 7 this will receive a Throwable object.
	 * In PHP < 7 it will receive an Exception object.
	 *
	 * @throws Exception Exception that is catched.
	 * @param Throwable|Exception $e The error or exception.
	 */
	public function exception_handler( $e ) {
		if ( is_a( $e, 'Exception' ) ) {
			$error = 'Uncaught Exception';
		} else {
			$error = 'Uncaught Error';
		}

		ImporterLog::add( 'There was an error on website: ' . $error );
		ImporterLog::add( $e );

		if ( wp_doing_ajax() ) {
			wp_send_json_error(
				[
					'message' => __( 'There was an error on your website.', 'templatiq' ),
					'stack'   => [
						'error-message' => sprintf(
							'%s: %s',
							$error,
							$e->getMessage()
						),
						'file'          => $e->getFile(),
						'line'          => $e->getLine(),
						'trace'         => $e->getTrace(),
					],
				]
			);
		}

		throw $e;
	}

	/**
	 * Displays fatal error output for sites running PHP < 7.
	 */
	public function shutdown_handler() {
		$e = error_get_last();

		if ( empty( $e ) || ! ( $e['type'] & TEMPLATIQ_ERROR_FATALS ) ) {
			return;
		}

		if ( $e['type'] & E_RECOVERABLE_ERROR ) {
			$error = 'Catchable fatal error';
		} else {
			$error = 'Fatal error';
		}

		ImporterLog::add( 'There was an error on website: ' . $error );
		ImporterLog::add( $e );

		if ( wp_doing_ajax() ) {
			wp_send_json_error(
				[
					'message' => __( 'There was an error your website.', 'templatiq' ),
					'stack'   => [
						'error-message' => $error,
						'error'         => $e,
					],
				]
			);
		}
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
ErrorHandler::get_instance();
