<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class Localize {
	use Singleton;

	public function __construct() {
		add_filter( 'templatiq_admin_localize_data', [$this, 'localize_data'] );
	}

	public function localize_data( array $data ) {
		$data['directory_types'] = ( new Repository )->get_directory_types();

		return $data;
	}
}