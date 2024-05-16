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
		// /* Skip Setup Widget*/
		// add_filter( 'atbdp_setup_wizard', function () {
		// 	return false;
		// } );

		// /* Stopped Auto Page Creation */
		// add_filter( 'atbdp_create_required_pages', function () {
		// 	return false;
		// } );
	}
}