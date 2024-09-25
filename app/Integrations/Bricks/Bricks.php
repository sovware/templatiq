<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Bricks;

use Templatiq\Abstracts\IntegrationBase;
use Templatiq\Repositories\DependencyRepository;

// use Templatiq\Integrations\Bricks\Admin\Enqueuer;

class Bricks extends IntegrationBase {
	public function boot(): void {
		Compatibility::init();

		$current_theme = ( new DependencyRepository() )->get_current_theme();

		if ( 'Bricks' !== $current_theme && 'Bricks Child Theme' !== $current_theme ) {
			return;
		}

		ImportAsPage::init();
	}
}