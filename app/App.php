<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket;

use TemplateMarket\Admin\Admin;
use TemplateMarket\Routes\Account;
use TemplateMarket\Routes\Dependency;
use TemplateMarket\Routes\Template;
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
		Admin::init();
		Enqueuer::init();

		/**
		 * Routes Initialize
		 */
		Account::init();
		Dependency::init();
		Template::init();
	}
}
