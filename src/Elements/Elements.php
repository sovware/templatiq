<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements;

use Directorist\Asset_Loader\Asset_Loader;
use Directorist\Asset_Loader\Localized_Data;
use Elementor\Plugin;
use TemplateMarket\Utils\Hookable;
use TemplateMarket\Utils\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Elements {
	use Singleton;
	use Hookable;

	public function __construct() {
		$this->action( 'elementor/editor/after_enqueue_styles', 'editor_style' );
		$this->action( 'elementor/elements/categories_registered', 'register_category' );
		add_action( 'elementor/widgets/register', [$this, 'register_widgets'] );
	}

	public function register_widgets() {
		$widgets_manager = Plugin::instance()->widgets_manager;

		/**
		 * Registers Directorist Elements
		 */
		$this->directorist_elements( $widgets_manager );
	}

	private function directorist_elements( $widgets_manager ) {
		Asset_Loader::register_scripts();
		Localized_Data::load_localized_data();
        
		$directorist_widget_classes = [
			'AddListing',
			'AllAuthors',
			'AllCategories',
			'AllListings',
			'AllLocations',
			'AuthorProfile',
			'Checkout',
			'UserRegistration',
			'PaymentReceipt',
			'SearchListing',
			'SearchResult',
			'SingleCategory',
			'SingleLocation',
			'SingleTag',
			'TransactionFailure',
			'UserDashboard',
			'UserLogin',
		];

		foreach ( $directorist_widget_classes as $widget_class ) {
			$class = 'TemplateMarket\\Elements\\' . $widget_class . '\\' . $widget_class;
			if ( class_exists( $class ) ) {
				$widgets_manager->register( new $class() );
			}
		}
	}

	public function register_category( $elements_manager ) {
		$elements_manager->add_category(
			'directorist-widgets',
			[
				'title' => __( 'Directorist', 'template-market' ),
			]
		);
	}

	public function editor_style() {
		$img = DIRECTORIST_ASSETS . 'images/elementor-icon.png';
		wp_add_inline_style( 'elementor-editor', '.elementor-control-type-select2 .elementor-control-input-wrapper {min-width: 130px;}.elementor-element .icon .directorist-el-custom{content: url(' . $img . ');width: 22px;}' );
	}
}
