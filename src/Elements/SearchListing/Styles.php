<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

 namespace TemplateMarket\Elements\SearchListing;

 use Elementor\Group_Control_Box_Shadow;
 use Elementor\Group_Control_Typography;
 use Elementor\Group_Control_Border;
 use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

trait Styles {

    protected function register_form_container_style_controls( string $section_label = '', string $prefix = '', string $selector = '' ): void {

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
                    "{{WRAPPER}} {$selector}" => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
                    "{{WRAPPER}} {$selector}" => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            "{$prefix}_bg_color",
            [
                'label'     => __( 'Background Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$selector}" => 'background-color: {{VALUE}};',
                    "{{WRAPPER}} {$selector} .directorist-search-modal__contents" => 'background-color: {{VALUE}};',
                ],
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

    protected function register_placeholder_controls(): void{

		$this->start_controls_section(
			"section_form_style",
			[
				'label' => __( 'Placeholder', 'template-market' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			"form_color",
			[
				'label'     => esc_html__( 'Text Color', 'template-market' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
                    '{{WRAPPER}} .directorist-search-contents .directorist-search-form-top .directorist-search-field .directorist-form-element::placeholder' => 'color: {{VALUE}}',
                    '{{WRAPPER}} .select2-container--default .select2-selection--single .select2-selection__placeholder'                                     => 'color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-search-contents .directorist-search-form-top .directorist-search-field .directorist-btn-ml'                    => 'color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-price-ranges__item .directorist-pf-range'                                                                      => 'color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-checkbox .directorist-checkbox__label'                                                                         => 'color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-form-group .directorist-input-icon .directorist-icon-mask:after'                                               => 'background-color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-select2-addons-area .directorist-icon-mask:after'                                                              => 'background-color: {{VALUE}}',
                    '{{WRAPPER}} .directorist-search-form-wrap .directorist-search-form-box .directorist-form-group .directorist-form-element::placeholder'  => 'color: {{VALUE}}',
                ],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => "form_typography",
				'selector' => "{{WRAPPER}} .directorist-search-contents .directorist-search-form-top .directorist-search-field .directorist-form-element::placeholder, {{WRAPPER}} .select2-container--default .select2-selection--single .select2-selection__placeholder, {{WRAPPER}} .directorist-search-contents .directorist-search-form-top .directorist-search-field .directorist-btn-ml, {{WRAPPER}} .directorist-price-ranges__item .directorist-pf-range, {{WRAPPER}} .directorist-checkbox .directorist-checkbox__label, {{WRAPPER}} .directorist-form-group .directorist-input-icon .directorist-icon-mask:after, {{WRAPPER}} .directorist-select2-addons-area .directorist-icon-mask:after, {{WRAPPER}} .directorist-search-form-wrap .directorist-search-form-box .directorist-form-group .directorist-form-element::placeholder",
			]
		);

		$this->end_controls_section();
	}

    protected function register_form_button_style_controls(): void {

        $this->start_controls_section(
            'section_form_search_style',
            [
                'label' => __( 'Form Button', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->start_controls_tabs( "search_buttons_style" );

        $this->start_controls_tab(
            "filters_button",
            [
                'label' => esc_html__( 'Filters', 'template-market' ),
            ]
        );

        $this->add_control(
            'filter_color',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-form-action__filter .directorist-filter-btn' => 'color: {{VALUE}};',
                ],
                'condition' => [
                    'show_more_filter_btn' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'filter_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-form-action__filter .directorist-filter-btn' => 'background-color: {{VALUE}};',
                ],
                'condition' => [
                    'show_more_filter_btn' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'filter_icon_color',
            [
                'label'     => __( 'Icon', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-form-action__filter .directorist-filter-btn .directorist-icon-mask:after' => 'background-color: {{VALUE}};',
                ],
                'condition' => [
                    'show_more_filter_btn' => 'yes',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            "search_button",
            [
                'label' => esc_html__( 'Search', 'template-market' ),
            ]
        );

        $this->add_control(
            'search_color',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-contents .directorist-btn.directorist-btn-dark' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'search_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-contents .directorist-btn.directorist-btn-dark' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'search_icon_color',
            [
                'label'     => __( 'Icon', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-contents .directorist-btn.directorist-btn-dark .directorist-icon-mask:after' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->end_controls_section();
    }
}
