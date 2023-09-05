<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\Checkout;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use TemplateMarket\Elements\Common\Container;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Checkout extends Widget_Base {

	use Container;
	use Styles;
	use TextControls;

	public function get_name() {
		return 'directorist_checkout';
	}

	public function get_title() {
		return __( 'Cart/Checkout', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'checkout', 'payment',
		];
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
				'label'     => __( 'This widget works only in Checkout page. It has no additional elementor settings.', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	protected function register_styles(): void {

		$this->register_text_controls( __( 'Instruction', 'template-market' ), 'instruction', '.directorist-checkout-text' );

		$this->register_container_style_controls(
			__( 'Section Container', 'template-market' ),
			'directorist_checkout_summery_area',
			'.directorist-checkout-card',
		);

		$this->register_section_title_controls();
		$this->register_section_content_controls();
		$this->register_button_controls();
	}

	protected function render(): void {
		if ( is_user_logged_in() && Helper::is_edit() ) {
			require_once __DIR__ . "/output.php";
		} else {
			Helper::run_shortcode( 'directorist_checkout' );
		}
	}
}
