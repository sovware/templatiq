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

	public static function set( array $args, array $data ): bool {
		$key = self::key( ...$args );

		return Transient::set( $key, $data, 0 );
	}

	public static function clear( array $args ): bool {
		$key = self::key( ...$args );

		return Transient::delete( $key );
	}

	private static function key( string...$items ): string {
		$single = "library_data_";

		foreach ( $items as $item ) {
			$single .= $item . "_";
		}

		return trim( $single );
	}
}