<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AddListing;

use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Utils\DirectoristTaxonomies;
use TemplateMarket\Elements\Common\Container;
use TemplateMarket\Utils\DirectoristHelper;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AddListing extends Widget_Base {

	use Styles;
	use Container;
	use TextControls;

	public function get_name() {
		return 'directorist_add_listing';
	}

	public function get_title() {
		return __( 'Add Listing Form', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'add listing form', 'add-listing-form', 'form', 'add listing', 'submit listing',
		];
	}

	public function get_script_depends() {
		return ['directorist-select2-script', 'directorist-add-listing'];
	}

	protected function register_controls(): void {
		$this->register_contents();
		$this->register_styles();
	}

	protected function register_contents(): void {
		$this->start_controls_section(
			'sec_general',
			[
				'label' => __( 'General', 'template-market' ),
			]
		);

		$this->add_control(
			'sec_heading',
			[
				'label'     => __( 'This widget works only in Add Listing page. It has no additional elementor settings.', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'type',
			[
				'label'     => __( 'Directory Types', 'template-market' ),
				'type'      => Controls_Manager::SELECT2,
				'multiple'  => true,
				'options'   => DirectoristTaxonomies::listing_types(),
				'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : ['nocondition' => true],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	protected function register_styles(): void {

		$this->register_container_style_controls( __( 'Directory Type: Container', 'template-market' ), 'add_listing_directory_type_container', '.directorist-w-100', DirectoristHelper::is_multi_directory_enabled() ? '' : ['nocondition' => true], );
		$this->register_add_listing_directory_controls();
		$this->register_add_listing_form_container_controls();
		$this->register_add_listing_steps_controls();
		$this->register_section_name_controls( __( 'Form: Section Name', 'template-market' ), 'form_title', '.directorist-content-module__title h4' );
		$this->register_add_listing_form_fields( __( 'Form: Fields', 'template-market' ), 'form_fields', '.directorist-form-label' );
		$this->register_add_listing_form_progressbar_controls();
		$this->register_add_listing_form_buttons_controls();
	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		$atts     = [];
		$term     = get_term_by( 'id', directorist_default_directory(), ATBDP_TYPE );

		if ( DirectoristHelper::is_multi_directory_enabled() ) {

			if ( is_user_logged_in() && Helper::is_edit() ) {
				
				$this->get_script_depends();

				if ( 'yes' === $settings['disable_multi_directory'] ) {
					$atts['directory_type'] = $term->slug;
				} else {
					$atts['directory_type'] = implode( ',', $settings['type'] );
				}

			} else {
				if ( is_array( $settings['type'] ) ) {
					$atts['directory_type'] = implode( ',', $settings['type'] );
				}
			}
		}

		/**
		 * Filters the Elementor Add Listing atts to modify or extend it
		 *
		 * @since 1.0.0
		 *
		 * @param array     $atts       Available atts in the widgets
		 * @param array     $settings   All the settings of the widget
		 */
		$atts = apply_filters( 'directorist_add_listing_elementor_widget_atts', $atts, $settings );

		Helper::do_shortcode_callback( 'directorist_add_listing', $atts );
	}
}