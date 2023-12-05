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
		add_action('wp_head', [$this, 'add_header']);
		add_action('admin_head', [$this, 'add_header']);
	}

	public function add_header( ) {
		echo '<div id="templatiq-root" class="templatiq-root">Hello World</div>';
		echo '<div id="templatiq-roott" class="templatiq-roott">Hello World</div>';
	}
	public function admin_enqueue_scripts( $hook ) {
		if ( ! isset( $_GET['page'] ) || 'templatiq' !== $_GET['page'] ) {
			return;
		}

		wp_enqueue_style( 'wp-components' );

		$script_asset_path = TEMPLATIQ_ASSETS_PATH . '/js/admin.asset.php';

		$script_info = file_exists( $script_asset_path ) ? include $script_asset_path : [
			'dependencies' => [],
			'version'      => TEMPLATIQ_VERSION,
		];

		$script_dep = array_merge( $script_info['dependencies'], ['updates', 'wp-hooks'] );

		$this->enqueue_script( 'templatiq-app', '/js/admin.js', $script_dep );

		$this->enqueue_style( 'templatiq-app', '/css/global.css' );

		$obj = [
			'rest_args'  => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'templatiq' ),
			],
			'assets_url' => TEMPLATIQ_ASSETS,
		];

		wp_localize_script( 'templatiq-app', 'template_market_obj', $obj );
	}

	public function elementor_editor_enqueue() {

		wp_enqueue_style( 'wp-components' );

		$script_asset_path = TEMPLATIQ_ASSETS_PATH . '/js/admin.asset.php';

		$script_info = file_exists( $script_asset_path ) ? include $script_asset_path : [
			'dependencies' => [],
			'version'      => TEMPLATIQ_VERSION,
		];

		$script_dep = array_merge( $script_info['dependencies'], ['updates', 'wp-hooks'] );

		$this->enqueue_script( 'templatiq-app', '/js/admin.js', $script_dep );

		$this->enqueue_style( 'templatiq-app', '/css/global.css' );

		$obj = [
			'rest_args'  => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'templatiq' ),
			],
			'assets_url' => TEMPLATIQ_ASSETS,
		];

		wp_localize_script( 'templatiq-app', 'template_market_obj', $obj );

		
		wp_enqueue_style(
			'templatiq-elementor-editor',
			TEMPLATIQ_ASSETS . '/assets-vendor/elementor-editor.css',
			[],
			TEMPLATIQ_VERSION,
		);

		wp_enqueue_script(
			'templatiq-elementor-editor',
			TEMPLATIQ_URL . '/assets-vendor/elementor-editor.js',
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