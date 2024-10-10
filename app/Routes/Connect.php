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

		$redirect_url = admin_url( 'admin.php?page=templatiq&connected=true' );
		if ( isset( $_GET['templateSlug'] ) ) {
			$redirect_url .= '#/template/' . sanitize_text_field( $_GET['templateSlug'] );
		}

		$this->redirection( $redirect_url );
	}

	public function redirection( string $redirect_uri ) {
		?>
		<!doctype html>
		<html lang=en>
		<head>
			<meta charset=utf-8>
			<title><?php _e( 'Authentication Successful', 'templatiq' );?></title>
			<script type="text/javascript">
				try {
					if (window.opener !== null && window.opener !== window) {
						var sameOrigin = true;
						try {
							var currentOrigin = window.location.protocol + '//' + window.location.hostname;
							if (window.opener.location.href.substring(0, currentOrigin.length) !== currentOrigin) {
								sameOrigin = false;
							}

						} catch (e) {
							/**
							 * Blocked cross origin
							 */
							sameOrigin = false;
						}
						if (sameOrigin) {
							var url = <?php echo wp_json_encode( $redirect_uri ); ?>;
							window.opener.location = url;
							window.close();
						} else {
							window.location.reload(true);
						}
					} else {
						if (window.opener === null) {
							/**
							 * Cross-Origin-Opener-Policy blocked the access to the opener
							 */
							if (typeof BroadcastChannel === "function") {
								const _lmnLoginBroadCastChannel = new BroadcastChannel('lmn_login_broadcast_channel');
								_lmnLoginBroadCastChannel.postMessage({
									action: 'redirect',
									href:<?php echo wp_json_encode( $redirect_uri ); ?>});
								_lmnLoginBroadCastChannel.close();
								window.close();
							} else {
								window.location.reload(true);
							}
						} else {
							window.location.reload(true);
						}
					}
				} catch (e) {
					window.location.reload(true);
				}
			</script>
		</head>
		<body><a href="<?php echo esc_url( $redirect_uri ); ?>"><?php echo 'Continue...'; ?></a></body>
		</html>
	<?php exit;
	}
}