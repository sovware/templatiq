<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket;

use TemplateMarket\Admin\Admin;
use TemplateMarket\Route\Import;
use TemplateMarket\Utils\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class App {
	use Singleton;

	public function __construct() {
		$this->setup();
	}

	public function setup() {
		if ( is_admin() ) {
			Admin::initialize();
		}

		Enqueuer::initialize();

		/**
		 * Routes Initialize
		 */
		Import::initialize();
	}
}
