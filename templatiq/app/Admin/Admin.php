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

		add_action( 'admin_init', [$this, 'redirect_to_dashboard'] );
	}

	public function redirect_to_dashboard() {
		if ( ! get_option( '_templatiq_redirect_to_dashboard', false ) ) {
			return;
		}

		delete_option( '_templatiq_redirect_to_dashboard' );

		if ( ! defined( 'WP_CLI' ) || ! WP_CLI ) {
			wp_safe_redirect( admin_url( 'admin.php?page=templatiq' ) );
			exit();
		}
	}
}