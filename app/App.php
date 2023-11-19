<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq;

use Templatiq\Admin\Admin;
use Templatiq\Routes\Account;
use Templatiq\Routes\Cache;
use Templatiq\Routes\Dependency;
use Templatiq\Routes\Template;
use Templatiq\Utils\Singleton;

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
		Cache::init();
	}
}
