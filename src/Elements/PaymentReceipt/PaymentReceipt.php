<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\PaymentReceipt;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class PaymentReceipt extends Widget_Base {

	public function get_name() {
		return 'directorist_payment_receipt';
	}

	public function get_title() {
		return __( 'Payment Receipt', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'payment', 'checkout',
		];
	}

	protected function register_controls(): void{
		$this->register_contents();
		$this->register_styles();
	}

	protected function register_contents(): void{
		$this->start_controls_section(
			'sec_general',
			[
				'label' => __( 'General', 'template-market' ),
			]
		);

		$this->add_control(
			'sec_heading',
			[
				'label'     => __( 'This widget works only in Payment Receipt page. It has no additional elementor settings.', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->end_controls_section();
    }

	protected function register_styles(): void{
		$this->register_button_style_controls();
	}

	protected function register_button_style_controls( $args = [] ) {
		$default_args = [
			'section_condition' => [],
		];

		$prefix   = 'payment_receipt_button';
		$selector = '.directorist-btn.directorist-btn-primary';

		$args = wp_parse_args( $args, $default_args );

		$this->start_controls_section(
			"section_{$prefix}_style",
			[
				'label' => esc_html__( 'Button Style', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'      => "{$prefix}_typography",
				'global'    => [
				],
				'selector'  => "{{WRAPPER}} {$selector}",
				'condition' => $args['section_condition'],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name'      => "{$prefix}_text_shadow",
				'selector'  => "{{WRAPPER}} {$selector}",
				'condition' => $args['section_condition'],
			]
		);

		$this->start_controls_tabs( 'tabs_button_style', [
			'condition' => $args['section_condition'],
		] );

		$this->start_controls_tab(
			"tab_{$prefix}_normal",
			[
				'label'     => esc_html__( 'Normal', 'template-market' ),
				'condition' => $args['section_condition'],
			]
		);

		$this->add_control(
			"{$prefix}_text_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '',
				'selectors' => [
					"{{WRAPPER}} {$selector}" => 'fill: {{VALUE}}!important; color: {{VALUE}} !important;',
				],
				'condition' => $args['section_condition'],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'           => "{$prefix}_background",
				'types'          => ['classic', 'gradient'],
				'exclude'        => ['image'],
				'selector'       => "{{WRAPPER}} {$selector}",
				'fields_options' => [
					'background' => [
						'default' => 'classic',
					],
					'color'      => [
						'global' => [

						],
					],
				],
				'condition'      => $args['section_condition'],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			"tab_{$prefix}_hover",
			[
				'label'     => esc_html__( 'Hover', 'template-market' ),
				'condition' => $args['section_condition'],
			]
		);

		$this->add_control(
			"{$prefix}_hover_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$selector}:hover, {{WRAPPER}} {$selector}:focus"         => 'color: {{VALUE}}!important;',
					"{{WRAPPER}} {$selector}:hover svg, {{WRAPPER}} {$selector}:focus svg" => 'fill: {{VALUE}}!important;',
				],
				'condition' => $args['section_condition'],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'           => "{$prefix}__background_hover",
				'types'          => ['classic', 'gradient'],
				'exclude'        => ['image'],
				'selector'       => "{{WRAPPER}} {$selector}:hover, {{WRAPPER}} {$selector}:focus",
				'fields_options' => [
					'background' => [
						'default' => 'classic',
					],
				],
				'condition'      => $args['section_condition'],
			]
		);

		$this->add_control(
			"{$prefix}__hover_border_color",
			[
				'label'     => esc_html__( 'Border Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'condition' => [
					'border_border!' => '',
				],
				'selectors' => [
					"{{WRAPPER}} {$selector}:hover, {{WRAPPER}} {$selector}:focus" => 'border-color: {{VALUE}}!important;',
				],
				'condition' => $args['section_condition'],
			]
		);

		$this->add_control(
			"{$prefix}_hover_animation",
			[
				'label'     => esc_html__( 'Hover Animation', 'template-market' ),
				'type'      => Controls_Manager::HOVER_ANIMATION,
				'condition' => $args['section_condition'],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'      => "{$prefix}_border",
				'selector'  => "{{WRAPPER}} {$selector}",
				'separator' => 'before',
				'condition' => $args['section_condition'],
			]
		);

		$this->add_responsive_control(
			"{$prefix}_border_radius",
			[
				'label'      => esc_html__( 'Border Radius', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', '%', 'em', 'rem', 'custom'],
				'selectors'  => [
					"{{WRAPPER}} {$selector}" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}} !important;',
				],
				'condition'  => $args['section_condition'],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name'      => "{$prefix}_button_box_shadow",
				'selector'  => "{{WRAPPER}} {$selector}",
				'condition' => $args['section_condition'],
			]
		);

		$this->add_responsive_control(
			"{$prefix}_text_padding",
			[
				'label'      => esc_html__( 'Padding', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', '%', 'em', 'rem', 'vw', 'custom'],
				'selectors'  => [
					"{{WRAPPER}} {$selector}" => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}} !important;',
				],
				'separator'  => 'before',
				'condition'  => $args['section_condition'],
			]
		);

		$this->end_controls_section();
	}

	protected function render(): void{
		Helper::run_shortcode( 'directorist_payment_receipt' );
	}
}
