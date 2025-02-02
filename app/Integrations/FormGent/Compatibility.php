<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\FormGent;

class Compatibility {

	public function __construct() {
		add_action( 'formgent_redirect_after_activation', [$this, 'after_activation'] );
	}

	public function after_activation() {
		return false;
	}
}