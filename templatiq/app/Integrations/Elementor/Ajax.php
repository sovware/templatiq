<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Templatiq\Abstracts\AjaxBase;

class Ajax extends AjaxBase {

	public function __construct() {
		$this->action( 'elementor/ajax/register_actions', [Controller::class, 'elementor_editor_ajax'] );
		$this->action( 'elementor/editor/footer', [Controller::class, 'print_template_views'] );
	}
}