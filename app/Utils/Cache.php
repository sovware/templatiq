<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Cache {

	public static function get( array $args ): array {
		$key  = self::key( ...$args );
		$data = Transient::get( $key );

		if ( $data ) {
			return $data;
		}

		return [];
	}

	private static function key( string...$items ): string {
		$single = "demo_data_";

		foreach ( $items as $item ) {
			$single .= $item . "_";
		}

		return trim( $single );
	}

	public static function set( array $args, array $data ): void {
		$key = self::key( ...$args );
		Transient::set( $key, $data, 0 );
	}
}