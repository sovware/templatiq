<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

class Transient {
	public static function set( string $key, $value, $expiration = DAY_IN_SECONDS ): bool {
		$key = '_template_market_' . trim( $key );

		return set_transient( $key, $value, $expiration );
	}

	public static function get( string $key ) {
		$key = '_template_market_' . trim( $key );

		return get_transient( $key );
	}
}