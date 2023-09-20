<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarketCloud\Utils;

class Key {

	public static function get( string $key ): string {
		return sprintf( '%s_%s', self::prefix(), trim( $key ) );
	}

	public static function prefix(): string {
		return '_template_market_cloud';
	}

	private static function generate(): string {
		return '';
	}
}