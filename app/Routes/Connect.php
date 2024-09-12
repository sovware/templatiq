<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

class Connect {
	public function __construct() {
		$this->listen();
	}

	public function listen() {

		if ( ! is_user_logged_in() || ! is_admin() ) {
			return;
		}

		if ( isset( $_GET['page'] ) && 'templatiq' !== $_GET['page'] ) {
			return;
		}

		if ( isset( $_GET['connected'] ) && ! $_GET['connected'] ) {
			return;
		}

		if ( ! user_can( get_current_user_id(), 'manage_options' ) ) {
			return;
		}

		if ( ! isset( $_GET['token'] ) ) {
			return;
		}

		$token = sanitize_text_field( $_GET['token'] );

		\Templatiq\Utils\Options::set( 'token', $token );

		( new \Templatiq\Repositories\AccountRepository() )->data();
	}
}