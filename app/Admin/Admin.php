<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Admin;

use Templatiq\Admin\AdminMenu;
use Templatiq\Utils\Singleton;

class Admin {
	use Singleton;

	public function __construct() {
		AdminMenu::init();
		Enqueuer::init();

		add_action( 'wp_loaded', [$this, 'hide_admin_notices'] );
	}

	public function hide_admin_notices() {
		if ( is_admin() && isset( $_GET["page"] ) && 'templatiq' === $_GET["page"] ) {
			remove_all_actions( 'admin_notices' );
			remove_all_actions( 'all_admin_notices' );

			echo "
			<style>
			div.notice {
				display: none;
			}
			</style>
			";
		}
	}
}
