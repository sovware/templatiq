<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

trait Singleton {
	private static $instances = [];

	public static function init( ...$args ): object {
		$class = get_called_class();
		if ( ! isset( self::$instances[$class] ) ) {
			self::$instances[$class] = new $class( ...$args );
		}

		return self::$instances[$class];
	}
}