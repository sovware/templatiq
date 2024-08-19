<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Abstracts\AjaxBase;

class Ajax extends AjaxBase {

	public function __construct() {
		$this->action( 'wp_ajax_templatiq-sites-import-directory-types', [Controller::class, 'import_directory_types'] );
		$this->action( 'wp_ajax_templatiq-sites-import-directory-listings', [Controller::class, 'import_directory_listings'] );
	}
}