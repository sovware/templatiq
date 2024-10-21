<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

class LoggingRepository {

	public static function add( string $context, $message ) {
		error_log( $context . ' : ' . print_r( $message, true ) );
	}
}