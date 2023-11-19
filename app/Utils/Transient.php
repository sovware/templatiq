<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Transient {
	public static function set( string $key, $value, $expiration = DAY_IN_SECONDS ): bool {
		$key = Key::get( $key );

		return set_transient( $key, $value, $expiration );
	}

	public static function get( string $key ) {
		$key = Key::get( $key );

		return get_transient( $key );
	}
}