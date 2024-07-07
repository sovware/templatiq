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

	public function auto_deactivate( $file_name ): void {
		if ( $this->is_supported_php() ) {
			return;
		}

		deactivate_plugins( basename( $file_name ) );

		$error = sprintf( '<h1>%s</h1>', esc_html__( 'An Error Occurred', 'templatiq' ) );
		$error .= sprintf( '<h2>%s %s</h2>', esc_html__( 'Your installed PHP Version is: ', 'templatiq' ), PHP_VERSION );
		$error .= esc_html__( '<p>The <strong>All in One Content Restriction</strong> plugin requires PHP version <strong>', 'templatiq' ) . $this->min_php . __( '</strong> or greater', 'templatiq' );
		$error .= esc_html__( '<p>The version of your PHP is ', 'templatiq' ) . '<a href="http://php.net/supported-versions.php" target="_blank"><strong>' . __( 'unsupported and old', 'templatiq' ) . '</strong></a>.';
		$error .= esc_html__( 'You should update your PHP software or contact your host regarding this matter.</p>', 'templatiq' );
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