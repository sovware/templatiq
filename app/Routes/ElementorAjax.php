<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\AjaxBase;
use Templatiq\Controllers\ElementorController;

class ElementorAjax extends AjaxBase {

	public function __construct() {
		$this->action( 'elementor/ajax/register_actions', [ElementorController::class, 'elementor_editor_ajax'] );
		$this->action( 'elementor/editor/footer', [ElementorController::class, 'print_template_views'] );
	}
}