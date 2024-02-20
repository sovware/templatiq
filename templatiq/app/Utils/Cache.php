<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Cache {

	public static function get( array $args ): array {
		$data = Transient::get( self::key( $args ) );

		if ( $data ) {
			return $data;
		}

		return [];
	}

	public static function set( array $args, array $data ): bool {
		return Transient::set( self::key( $args ), $data, WEEK_IN_SECONDS );
	}

	public static function clear( array $args ): bool {
		return Transient::delete( self::key( $args ) );
	}

	private static function key( array $items ): string {
		$single = "library_data_";

		foreach ( $items as $item ) {
			$single .= $item . "_";
		}

		return trim( $single );
	}
}