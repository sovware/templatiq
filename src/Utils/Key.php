<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

class Key {
	public static $prefix = 'template_market';

	public static function get( string $key ) {
		$key = sprintf( '_%s_%s', self::$prefix, trim( $key ) );
	}
}