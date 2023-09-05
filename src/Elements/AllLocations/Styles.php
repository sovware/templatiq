<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AllLocations;

use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

trait Styles {

    protected function register_location_card_style_controls(): void{

		$section_label = __( 'Location Card Container', 'template-market' );
		$prefix        = 'location_area';
		$selector      = '.directorist-location__single';
		$selector_list = '.directorist-taxonomy-list .directorist-taxonomy-list__card';

		$this->start_controls_section(
			"section_{$prefix}_style",
			[
				'label' => $section_label,
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			"{$prefix}_padding",
			[
				'label'      => __( 'Padding', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', 'em', '%'],
				'selectors'  => [
					"{{WRAPPER}} {$selector} "      => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					"{{WRAPPER}} {$selector_list} " => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator'  => 'before',
			]
		);

		$this->add_responsive_control(
			"{$prefix}_margin",
			[
				'label'      => __( 'Margin', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', 'em', '%'],
				'selectors'  => [
					"{{WRAPPER}} {$selector} "      => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					"{{WRAPPER}} {$selector_list} " => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			"{$prefix}_bg_color",
			[
				'label'     => __( 'Background Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$selector} "      => 'background: {{VALUE}};',
					"{{WRAPPER}} {$selector_list} " => 'background: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'      => "{$prefix}_border",
				'selector'  => "{{WRAPPER}} {$selector}, {{WRAPPER}} {$selector_list}",
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			"{$prefix}_border_radius",
			[
				'label'      => __( 'Border Radius', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', '%', 'em', 'rem', 'custom'],
				'selectors'  => [
					"{{WRAPPER}} {$selector} "      => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					"{{WRAPPER}} {$selector_list} " => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name'     => "{$prefix}_border_box_shadow",
				'selector' => "{{WRAPPER}} {$selector}, {{WRAPPER}} {$selector_list}",
			]
		);

		$this->end_controls_section();
	}

    protected function register_location_title_controls(): void{

		$section_label  = __( 'Location Content', 'template-market' );
		$prefix         = 'location_title';
		$selector       = '.directorist-location__single';
		$selector_count = '.directorist-location__count';

		$this->start_controls_section(
			"section_{$prefix}_style",
			[
				'label' => $section_label,
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => "{$prefix}_color_typography",
				'selector' => "{{WRAPPER}} {$selector} a, {{WRAPPER}} {$selector} {$selector_count}",
			]
		);

		$this->add_control(
			"{$prefix}_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$selector} a"                        => 'color: {{VALUE}};',
					"{{WRAPPER}} {$selector} {$selector_count}" => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name'     => "{$prefix}_text_stroke",
				'selector' => "{{WRAPPER}} {$selector} a, {{WRAPPER}} {$selector} {$selector_count}",
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name'     => "{$prefix}_text_shadow",
				'selector' => "{{WRAPPER}} {$selector} a, {{WRAPPER}} {$selector} {$selector_count}",
			]
		);

		$this->end_controls_section();
	}
}
