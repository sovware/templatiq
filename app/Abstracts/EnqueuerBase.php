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
	use Hookable;
	use Singleton;

	public function enqueue_script( string $handle, string $src, array $deps = [], $in_footer = true, $ver = TEMPLATIQ_VERSION ) {
		wp_enqueue_script( $handle, TEMPLATIQ_ASSETS . $src, $deps, $ver, $in_footer );
	}

	public function enqueue_style( string $handle, string $src, array $deps = [], $ver = TEMPLATIQ_VERSION ) {
		wp_enqueue_style( $handle, TEMPLATIQ_ASSETS . $src, $deps, $ver );
	}
}