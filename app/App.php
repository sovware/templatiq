<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq;

use Templatiq\Admin\Admin;
use Templatiq\Providers\FullTemplateServiceProviders;
use Templatiq\Providers\IntegrationServiceProviders;
use Templatiq\Routes\Account;
use Templatiq\Routes\Bookmark;
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

		/**
		 * Routes Initialize
		 */
		Account::init();
		Bookmark::init();
		Cache::init();
		Dependency::init();
		Template::init();

		/**
		 * Service Providers
		 */
		FullTemplateServiceProviders::init()->boot();
		IntegrationServiceProviders::init()->boot();
	}
}