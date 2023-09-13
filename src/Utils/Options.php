<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

class Options {
	public static $prefix = '_template_market_';

	public static function get( string $key, $default = false ) {
		return get_option( self::$prefix . $key, $default );
	}

	public static function set( string $key, $value, $autoload = 'no' ): bool {
		return update_option( self::$prefix . $key, $value, $autoload );
	}
}