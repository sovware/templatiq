<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

trait Hookable {
	public function action( string $tag, array $function, int $priority = 10, int $accepted_args = 1 ): void {
		add_action( $tag, $function, $priority, $accepted_args );
	}

	public function filter( string $tag, array $function, int $priority = 10, int $accepted_args = 1 ): void {
		add_filter( $tag, $function, $priority, $accepted_args );
	}
}
