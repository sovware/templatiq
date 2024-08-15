<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Options {
	public static function get( string $key, $default = false ) {
		return get_option( Key::get( $key ), $default );
	}

	public static function set( string $key, $value, $autoload = 'no' ): bool {
		return update_option( Key::get( $key ), $value, $autoload );
	}
}