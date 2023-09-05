<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AddListing;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Typography;
use TemplateMarket\Utils\DirectoristHelper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait Styles {

	protected function register_add_listing_directory_controls(): void {

		$this->start_controls_section(
			'section_directory_style',
			[
				'label'     => __( 'Directory: Types', 'template-market' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : ['nocondition' => true],
			]
		);

		$this->add_responsive_control(
			'directory_icon_size',
			[
				'label'      => __( 'Icon Size', 'template-market' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => ['px', 'em'],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 50,
						'step' => 1,
					],
					'em' => [
						'min'  => 0,
						'max'  => 5,
						'step' => .5,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link .directorist-icon-mask:after' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}',
				],
				'separator'  => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'directory_title_typography',
				'selector' => '{{WRAPPER}} .directorist-add-listing-types__single__link',
			]
		);

		$this->add_responsive_control(
			'directory_margin',
			[
				'label'      => __( 'Margin', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', 'em', '%'],
				'selectors'  => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator'  => 'before',
			]
		);

		$this->add_responsive_control(
			'directory_padding',
			[
				'label'      => __( 'Padding', 'template-market' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => ['px', 'em', '%'],
				'selectors'  => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs( 'directory_header_tabs' );

		// Normal State Tab
		$this->start_controls_tab( 'directory_header_normal', ['label' => __( 'Normal', 'template-market' )] );

		$this->add_control(
			'directory_text_color',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_bg_color',
			[
				'label'     => __( 'Background Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_icon_color',
			[
				'label'     => __( 'Icon Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link .directorist-icon-mask:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_icon_bg_color',
			[
				'label'     => __( 'Icon Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link .directorist-icon-mask' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		// Hover State Tab
		$this->start_controls_tab( 'directory_header_hover', ['label' => __( 'Hover', 'template-market' )] );

		$this->add_control(
			'directory_text_color_hover',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_bg_color_hover',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_icon_color_hover',
			[
				'label'     => __( 'Icon', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link:hover .directorist-icon-mask:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'directory_icon_bg_color_hover',
			[
				'label'     => __( 'Icon Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-add-listing-types__single__link:hover .directorist-icon-mask' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	protected function register_add_listing_form_container_controls(): void {

		$prefix   = 'form';
		$selector = '.directorist-add-listing-form .directorist-content-module';

		$this->start_controls_section(
			'section_form_style',
			[
				'label' => __( 'Form: Container', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'disable_multi_directory',
			[
				'label'     => __( '<b>Form View</b>', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'no',
				'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : ['nocondition' => true],
			]
		);

		$this->add_responsive_control(
            "{$prefix}_margin",
            [
                'label'      => __( 'Margin', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    "{{WRAPPER}} {$selector}" => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            "{$prefix}_padding",
            [
                'label'      => __( 'Padding', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    "{{WRAPPER}} {$selector}" => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'separator'  => 'before',
            ]
        );

        $this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => "{$prefix}_bg_color",
				'types'    => ['classic', 'gradient'],
				'exclude'  => ['image'],
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => "{$prefix}_border",
                'selector'  => "{{WRAPPER}} {$selector}",
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
                    "{{WRAPPER}} {$selector}" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => "{$prefix}_border_box_shadow",
                'selector' => "{{WRAPPER}} {$selector}",
            ]
        );

		$this->end_controls_section();
	}

	protected function register_add_listing_steps_controls(): void {

		$this->start_controls_section(
			'section_steps_style',
			[
				'label' => __( 'Form: Steps', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => "steps_typography",
				'selector' => "{{WRAPPER}} .multistep-wizard__nav__btn",
			]
		);

		$this->add_responsive_control(
			'steps_menu_item_gap',
			[
				'label'      => __( 'Menu Item Gap', 'template-market' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => ['px'],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 40,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs( 'menu_tabs' );

		// Hover State Tab
		$this->start_controls_tab( 'menu_normal', ['label' => __( 'Normal', 'template-market' )] );
		$this->add_control(
			'steps_menu_color',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__nav__btn'         => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard__nav__btn i:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'steps_menu_bg_color',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__nav__btn' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		// Active State Tab
		$this->start_controls_tab( 'menu_active', ['label' => __( 'Active', 'template-market' )] );
		$this->add_control(
			'steps_menu_color_active',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover'          => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover:before'   => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover i:after'  => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn.active'         => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn.active:before'  => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn.active i:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'steps_menu_color_bg_active',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover'  => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn.active' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		// Hover State Tab
		$this->start_controls_tab( 'menu_hover', ['label' => __( 'Hover', 'template-market' )] );
		$this->add_control(
			'steps_menu_color_hover',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover'         => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover:before'  => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover i:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'steps_menu_color_bg_hover',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard .multistep-wizard__nav__item a.multistep-wizard__nav__btn:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	protected function register_section_name_controls( string $section_label = '', string $prefix = '', string $selector = '' ): void{

		$separator_selector = '.directorist-content-module__title';

		$this->start_controls_section(
			"section_{$prefix}_style",
			[
				'label' => $section_label,
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			"{$prefix}_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$selector}" => 'color: {{VALUE}} !important;',
					"{{WRAPPER}} {$selector}:after" => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => "{$prefix}_typography",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name'     => "{$prefix}_text_stroke",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name'     => "{$prefix}_text_shadow",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_control(
			"{$prefix}_separator",
			[
				'label'     => __( 'Separator', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			"{$prefix}_border",
			[
				'label'      => __( 'Height', 'template-market' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => ['px'],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 10,
						'step' => 1,
					],
				],
				'selectors'  => [
					"{{WRAPPER}} {$separator_selector}" => 'border-bottom: {{SIZE}}{{UNIT}} solid;',
				],
			]
		);

		$this->add_control(
			"{$prefix}_border_color",
			[
				'label'     => __( 'Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$separator_selector}" => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_add_listing_form_fields( string $section_label = '', string $prefix = '', string $selector = '' ): void{

		$this->start_controls_section(
			"section_{$prefix}_style",
			[
				'label' => $section_label,
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			"{$prefix}_label",
			[
				'label'     => __( 'Label', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			"{$prefix}_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}} {$selector}" => 'color: {{VALUE}} !important;',
					"{{WRAPPER}} {$selector}:after" => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => "{$prefix}_typography",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name'     => "{$prefix}_text_stroke",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name'     => "{$prefix}_text_shadow",
				'selector' => "{{WRAPPER}} {$selector}",
			]
		);

		$this->add_control(
			"{$prefix}_separator",
			[
				'label'     => __( 'Separator', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		
		$this->add_control(
			"{$prefix}_separator_height",
			[
				'label'      => esc_html__( 'Height', 'template-market' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => ['px', '%', 'em', 'rem', 'vw', 'custom'],
				'range'      => [
					'px' => [
						'max' => 20,
					],
					'em' => [
						'max' => 2,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .directorist-form-group .directorist-form-element'                                                => 'border-width: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .directorist-form-group .select2.select2-container.select2-container--default .select2-selection' => 'border-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			"{$prefix}_separator_color",
			[
				'label'     => esc_html__( 'Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .directorist-form-group .directorist-form-element'                                                => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .select2.select2-container.select2-container--default .select2-selection' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_add_listing_form_progressbar_controls(): void {

		$this->start_controls_section(
			'section_progressbar_style',
			[
				'label' => __( 'Form: Progressbar', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'progressbar_color',
			[
				'label'     => esc_html__( 'Progressbar Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__progressbar__width:after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'progressbar_bg_color',
			[
				'label'     => esc_html__( 'Progressbar Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__progressbar:before' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'progressbar_height',
			[
				'label'     => esc_html__( 'Height', 'template-market' ),
				'type'      => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__progressbar:before'       => 'height: {{SIZE}}{{UNIT}}; line-height: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .multistep-wizard__progressbar__width:after' => 'height: {{SIZE}}{{UNIT}}; line-height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_add_listing_form_buttons_controls(): void {

		$this->start_controls_section(
			'section_buttons_style',
			[
				'label' => __( 'Form: Buttons', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs( 'button_tabs' );

		// Hover State Tab
		$this->start_controls_tab( 'button_normal', ['label' => __( 'Normal', 'template-market' )] );
		$this->add_control(
			'button_color',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__btn' => 'color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn' => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard__btn i::after' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn i::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_bg_color',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__bottom .multistep-wizard__btn' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-checkbox input[type=checkbox]:checked + .directorist-checkbox__label:after' => 'background-color: {{VALUE}} !important;border-color: {{VALUE}} !important;',
				],
			]
		);

		$this->end_controls_tab();

		// Hover State Tab
		$this->start_controls_tab( 'button_hover', ['label' => __( 'Hover', 'template-market' )] );
		$this->add_control(
			'button_color_hover',
			[
				'label'     => __( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__btn:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .multistep-wizard__btn:hover i::after' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn:hover i::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_color_bg_hover',
			[
				'label'     => __( 'Background', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .multistep-wizard__bottom .multistep-wizard__btn:hover' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .directorist-form-group .directorist-btn:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tabs();

		$this->end_controls_section();
	}
}
