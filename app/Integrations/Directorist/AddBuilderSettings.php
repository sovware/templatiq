<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\Utils\Singleton;
use WP_REST_Request;

class AddBuilderSettings {
	use Singleton;

	public function __construct() {
		add_action( 'your_hook', [$this, 'your_method'], 10, 3 );
	}

	public function your_method( int $inserted_id, ImportAsPageDTO $DTO, WP_REST_Request $request ) {

	}
}