<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Admin;

use Templatiq\Abstracts\EnqueuerBase;
use Templatiq\Repositories\DirectoristRepository;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueuer extends EnqueuerBase {

	public function __construct() {
		$this->action( 'admin_enqueue_scripts', [$this, 'admin_enqueue_scripts'] );
		$this->action( 'elementor/editor/after_enqueue_scripts', [$this, 'elementor_editor_enqueue'] );
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

		$obj = $this->localize_object();

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

		$obj = $this->localize_object();

		wp_localize_script( 'templatiq-app', 'template_market_obj', $obj );

		$this->enqueue_style( 'templatiq-elementor-editor', '/vendor/elementor-style.css', [] );

		$this->enqueue_script( 'templatiq-elementor-editor', '/vendor/elementor-script.js', ['elementor-editor', 'jquery'] );

		wp_localize_script( 'templatiq-elementor-editor', 'template_market_obj', $obj );
	}

	private function localize_object() {
		return [
			'rest_args'       => [
				'nonce'    => wp_create_nonce( 'wp_rest' ),
				'endpoint' => get_rest_url( null, 'templatiq' ),
			],
			'assets_url'      => TEMPLATIQ_ASSETS,
			'directory_types' => $this->get_directory_types(),
		];
	}

	private function get_directory_types() {
		$directorist = ( new DirectoristRepository );

		if ( ! $directorist->is_active() ) {
			return [];
		}

		return $directorist->get_directory_types();
	}
}