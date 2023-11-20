<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Utils\Cache as UtilsCache;

class Cache extends RouteBase {
	private $endpoint = 'cache';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/clear', [$this, 'clear'] );
	}

	public function clear() {
		return UtilsCache::clear( ['library'] );
	}
}