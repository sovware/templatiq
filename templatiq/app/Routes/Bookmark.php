<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Controllers\BookmarkController;

class Bookmark extends RouteBase {
	private $endpoint = 'bookmark';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/add', [BookmarkController::class, 'add'] );
		$this->post( $this->endpoint . '/remove', [BookmarkController::class, 'remove'] );
	}
}