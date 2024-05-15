<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor\Admin;

use Templatiq\Abstracts\EnqueuerBase;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueuer extends EnqueuerBase {

	public function __construct() {
		add_action( 'elementor/editor/after_enqueue_scripts', [$this, 'elementor_editor_enqueue'] );
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

		$obj = \Templatiq\Admin\Enqueuer::init()->localize_object();

		wp_localize_script( 'templatiq-app', 'template_market_obj', $obj );

		$this->enqueue_style( 'templatiq-elementor-editor', '/vendor/elementor-style.css', [] );

		$this->enqueue_script( 'templatiq-elementor-editor', '/vendor/elementor-script.js', ['elementor-editor', 'jquery'] );

		wp_localize_script( 'templatiq-elementor-editor', 'template_market_obj', $obj );
	}
}