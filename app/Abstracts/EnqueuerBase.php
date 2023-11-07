<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Abstracts;

use Templatiq\Utils\Hookable;
use Templatiq\Utils\Singleton;

abstract class EnqueuerBase {
	public string $version = TEMPLATIQ_VERSION;
	use Hookable;
	use Singleton;

	public function enqueue_script( string $handle, string $src, array $deps = [] ) {
		wp_enqueue_script( $handle, TEMPLATIQ_ASSETS . $src, $deps, $this->version );
	}

	public function enqueue_style( string $handle, string $src, array $deps = [] ) {
		wp_enqueue_style( $handle, TEMPLATIQ_ASSETS . $src, $deps, $this->version );
	}
}