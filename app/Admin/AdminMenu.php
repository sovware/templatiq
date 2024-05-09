<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Admin;

use Templatiq\Utils\Hookable;
use Templatiq\Utils\Singleton;

/**
 * Administration Menu Class
 */
class AdminMenu {
	use Hookable;
	use Singleton;

	public function __construct() {
		$this->action( 'admin_menu', [$this, 'admin_menu'] );
	}

	public function admin_menu() {
		add_menu_page(
			__( 'Templatiq', 'templatiq' ),
			apply_filters( 'templatiq_title', 'Templatiq' ),
			'manage_options',
			'templatiq',
			[$this, 'content']
		);
		add_submenu_page(
			'templatiq',
			__( 'Dashboard', 'templatiq' ),
			__( 'Dashboard', 'templatiq' ),
			'manage_options',
			'templatiq',
			[$this, 'content'],
		);
	}

	public function content() {
		echo '<div id="templatiq-root" class="templatiq-root"></div>';
	}
}
