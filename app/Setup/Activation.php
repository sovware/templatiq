<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Setup;

class Activation {
	private $min_php = '7.4';

	public function execute() {
		$this->auto_deactivate();
		$this->redirection();
	}

	public function redirection() {
		add_option( '_templatiq_redirect_to_dashboard', true );
	}

	public function auto_deactivate(): void {
		if ( $this->is_supported_php() ) {
			return;
		}

		deactivate_plugins( basename( __FILE__ ) );

		$error = __( '<h1>An Error Occurred</h1>', 'templatiq' );
		$error .= __( '<h2>Your installed PHP Version is: ', 'templatiq' ) . PHP_VERSION . '</h2>';
		$error .= __( '<p>The <strong>Templatiq</strong> plugin requires PHP version <strong>', 'templatiq' ) . $this->min_php . __( '</strong> or greater', 'templatiq' );
		$error .= __( '<p>The version of your PHP is ', 'templatiq' ) . '<a href="http://php.net/supported-versions.php" target="_blank"><strong>' . __( 'unsupported and old', 'templatiq' ) . '</strong></a>.';
		$error .= __( 'You should update your PHP software or contact your host regarding this matter.</p>', 'templatiq' );
		wp_die(
			wp_kses_post( $error ),
			esc_html__( 'Plugin Activation Error', 'templatiq' ),
			[
				'response'  => 200,
				'back_link' => true,
			]
		);
	}

	public function is_supported_php(): bool {
		if ( version_compare( PHP_VERSION, $this->min_php, '<' ) ) {
			return false;
		}

		return true;
	}
}