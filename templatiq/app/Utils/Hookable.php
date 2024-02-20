<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

trait Hookable {
	public function action( string $tag, string $function, int $priority = 10, int $accepted_args = 1 ): void {
		add_action( $tag, array( $this, $function ), $priority, $accepted_args );
	}

	public function filter( string $tag, string $function, int $priority = 10, int $accepted_args = 1 ): void {
		add_filter( $tag, array( $this, $function ), $priority, $accepted_args );
	}
}
