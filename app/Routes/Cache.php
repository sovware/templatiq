<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Repositories\AccountRepository;
use Templatiq\Utils\Cache as UtilsCache;

class Cache extends RouteBase {
	private $endpoint = 'cache';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/clear', [$this, 'clear'] );
	}

	public function clear() {

		( new AccountRepository() )->data();

		$builder = get_option( '_templatiq_selected_builder', 'elementor' );

		return UtilsCache::clear( [$builder, 'library'] );
	}
}