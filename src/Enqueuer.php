<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket;

use TemplateMarket\Abstracts\EnqueuerBase;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueuer extends EnqueuerBase {

	public function __construct() {
		add_action( 'wp_admin_scripts', [$this, 'enqueue_elementor_scripts'] );
		add_action( 'admin_enqueue_scripts', [$this, 'enqueue_admin_script'] );

		//Enqueue editor scripts
		add_action( 'elementor/editor/after_enqueue_scripts', [$this, 'elementor_editor_enqueue'] );
	}

	public function enqueue_elementor_scripts() {
		if ( Helper::is_edit() ) {
			wp_enqueue_script( 'directorist-select2-script' );
			wp_enqueue_script( 'directorist-add-listing' );
		}
	}

	public function enqueue_admin_script( $hook ) {
		if ( ! isset( $_GET['tm'] ) ) {
			return;
		}

		wp_enqueue_script( 'template_market', plugin_dir_url( __FILE__ ) . '/template_market.js', [], '1.0' );
		$obj = [
			'rest_args' => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'template-market' ),
			],
		];

		wp_localize_script( 'template_market', 'template_market_obj', $obj );
	}

	public function elementor_editor_enqueue() {
		wp_enqueue_script(
			'template-market-elementor-editor',
			TEMPLATE_MARKET_ASSETS . '/admin/js/elementor-editor.js',
			['elementor-editor', 'jquery'],
			TEMPLATE_MARKET_VERSION,
			true
		);
	}
}
