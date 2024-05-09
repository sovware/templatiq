<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

trait Singleton {
	protected static $singleton;

	public static function init(): self {
		if ( empty( static::$singleton ) ) {
			static::$singleton = new static;
		}

		return static::$singleton;
	}
}