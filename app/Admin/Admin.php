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
		add_action( 'wp_loaded', [$this, 'hide_admin_notices'] );

		$this->init_appsero();
	}

	/**
	 * Initialize appsero tracking.
	 *
	 * Removed custom plugins meta data field in 7.0.5.4
	 * since Appsero made this builtin.
	 *
	 * @see https://github.com/Appsero/client
	 *
	 * @return void
	 */
	public function init_appsero() {
		$client = new \Templatiq\Admin\Appsero\Client(
			'24d5de94-881f-47c7-bee9-f779e17a55a9',
			'Templatiq',
			TEMPLATIQ_FILE
		);

		// Active insights
		$client->set_textdomain( 'templatiq' );
		$client->insights()->init();
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

	public function hide_admin_notices() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
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

			echo "<script>
			if (typeof BroadcastChannel === 'function') {
				const _lmnLoginBroadCastChannel = new BroadcastChannel('lmn_login_broadcast_channel');
				_lmnLoginBroadCastChannel.onmessage = (event) => {
					if (event.data?.action === 'redirect') {
						const url = event.data?.href;
						window.location = url;
						setTimeout(() => {
							window.location.reload(true);
							_lmnLoginBroadCastChannel.close();
						}, 1000);
					}
				};
			}
			</script>";
		}
	}
}