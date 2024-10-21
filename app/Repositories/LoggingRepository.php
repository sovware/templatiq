<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Utils\Config;

class LoggingRepository {

	public static function add( string $context, $message ) {
		if ( 'development' === Config::get( 'environment' ) ) {
			error_log( $context . ' : ' . print_r( $message, true ) );
		}
	}
}