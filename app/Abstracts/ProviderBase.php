<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Abstracts;

use Templatiq\Utils\Singleton;

abstract class ProviderBase {
	use Singleton;
	abstract function boot();
}
