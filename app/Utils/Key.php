<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

class Key {

	public static function get( string $key ): string {
		return sprintf( '%s_%s', self::prefix(), trim( $key ) );
	}

	public static function prefix(): string {
		return '_template_market';
	}

	private static function generate(): string {
		return '';
	}
}