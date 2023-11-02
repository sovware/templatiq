<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Admin;

use TemplateMarket\Abstracts\EnqueuerBase;

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
		if ( ! isset( $_GET['page'] ) || 'template-market' !== $_GET['page'] ) {
			return;
		}
		// $inc = require_once TEMPLATE_MARKET_ASSETS_PATH . '/js/admin.asset.php';

		$this->enqueue_script( 'template-market-admin-app', '/js/admin.js', ['wp-element']);

		$this->enqueue_script( 'helpgent-frontend-chat-shortCode', '/js/frontend/ChatForm/index.js', ['wp-element'] );
		$this->enqueue_script( 'helpgent-frontend-chat-bubble', '/js/frontend/ChatBubble/index.js', ['wp-element'] );
		$this->enqueue_script( 'helpgent-frontend-dashboard-shortCode', '/js/frontend/UserDashboard/index.js', ['wp-element'] );

		$obj = [
			'rest_args' => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'template-market' ),
			],
		];

		wp_localize_script( 'template-market-admin-app', 'template_market_obj', $obj );
	}

	public function elementor_editor_enqueue() {
		wp_enqueue_style(
			'template-market-elementor-editor',
			TEMPLATE_MARKET_ASSETS . '/css/elementor-editor.css',
			[],
			TEMPLATE_MARKET_VERSION,
		);

		wp_enqueue_script(
			'template-market-elementor-editor',
			TEMPLATE_MARKET_ASSETS . '/js/elementor-editor.js',
			['elementor-editor', 'jquery'],
			TEMPLATE_MARKET_VERSION,
			true
		);

		$obj = [
			'rest_args' => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'template-market' ),
			],
		];

		wp_localize_script( 'template-market-elementor-editor', 'template_market_obj', $obj );

	}
}