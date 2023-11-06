<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Admin;

use Templatiq\Abstracts\EnqueuerBase;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueuer extends EnqueuerBase {

	public function __construct() {
		$this->action( 'admin_enqueue_scripts', 'admin_enqueue_scripts' );

		//Enqueue editor scripts
		$this->action( 'elementor/editor/after_enqueue_scripts', 'elementor_editor_enqueue' );
	}

	public function admin_enqueue_scripts( $hook ) {
		if ( ! isset( $_GET['page'] ) || 'templatiq' !== $_GET['page'] ) {
			return;
		}

		$this->enqueue_script( 'templatiq-app', '/js/index.js', ['wp-element'] );

		$obj = [
			'rest_args' => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'templatiq' ),
			],
		];

		wp_localize_script( 'templatiq-admin-app', 'template_market_obj', $obj );
	}

	public function elementor_editor_enqueue() {
		wp_enqueue_style(
			'templatiq-elementor-editor',
			TEMPLATIQ_ASSETS . '/css/elementor-editor.css',
			[],
			TEMPLATIQ_VERSION,
		);

		wp_enqueue_script(
			'templatiq-elementor-editor',
			TEMPLATIQ_ASSETS . '/js/elementor-editor.js',
			['elementor-editor', 'jquery'],
			TEMPLATIQ_VERSION,
			true
		);

		$obj = [
			'rest_args' => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'templatiq' ),
			],
		];

		wp_localize_script( 'templatiq-elementor-editor', 'template_market_obj', $obj );

	}
}