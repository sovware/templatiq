<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class Compatibility {
	use Singleton;

	public function __construct() {
		/* Stop Auto Page Creation */
		add_filter( 'atbdp_create_required_pages', function () {
			return false;
		} );
	}
}