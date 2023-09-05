<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\UserDashboard;

use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

trait Styles {

    protected function register_dashboard_sidebar(): void {

        $this->start_controls_section(
            'section_dashboard_sidebar_style',
            [
                'label' => __( 'Sidebar: Menu', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'dashboard_sidebar_menu_item_gap',
            [
                'label'      => __( 'Menu Item Gap', 'template-market' ),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => [ 'px' ],
                'range'      => [
                    'px' => [
                        'min'  => 0,
                        'max'  => 20,
                        'step' => 1,
                    ],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link, .directorist-tab__nav__action .directorist-btn--add-listing' => 'margin-bottom: {{SIZE}}{{UNIT}} !important;',
                ],
            ]
        );

        $this->add_control(
			'dashboard_menu_items',
			[
				'label'     => __( 'Menu Items', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

        $this->start_controls_tabs( 'menu_tabs' );

        // Hover State Tab
        $this->start_controls_tab( 'menu_normal', ['label' => __( 'Normal', 'template-market' )] );
        $this->add_control(
            'dashboard_sidebar_menu_color',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link'         => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link i:after' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'dashboard_sidebar_menu_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        // Active State Tab
        $this->start_controls_tab( 'menu_active', ['label' => __( 'Active', 'template-market' )] );
        $this->add_control(
            'dashboard_sidebar_menu_color_active',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__active'         => 'color: {{VALUE}} !important;',
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__active i:after' => 'background-color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->add_control(
            'dashboard_sidebar_menu_color_bg_active',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__active' => 'background-color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->end_controls_tab();

        // Hover State Tab
        $this->start_controls_tab( 'menu_hover', ['label' => __( 'Hover', 'template-market' )] );
        $this->add_control(
            'dashboard_sidebar_menu_color_hover',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link:hover'         => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link:hover i:after' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'dashboard_sidebar_menu_color_bg_hover',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__item a.directorist-tab__nav__link:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_control(
			'dashboard_buttons',
			[
				'label'     => __( 'Buttons Style', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

        $this->start_controls_tabs( 'submit_logout_button' );

        // Submit State Tab
        $this->start_controls_tab( 'submit', ['label' => __( 'Submit Button', 'template-market' )] );
        $this->add_control(
            'dashboard_submit_color',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__action .directorist-btn--add-listing' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'dashboard_submit_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__action .directorist-btn--add-listing' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        // Logout State Tab
        $this->start_controls_tab( 'logout', ['label' => __( 'Logout Button', 'template-market' )] );
        $this->add_control(
            'dashboard_logout_color',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__action .directorist-btn--logout' => 'color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->add_control(
            'dashboard_logout_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-tab__nav__action .directorist-btn--logout' => 'background-color: {{VALUE}} !important;',
                    '{{WRAPPER}} .directorist-tab__nav__action a.directorist-btn--logout' => 'border-color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->end_controls_tab();
        $this->end_controls_tabs();
        $this->end_controls_section();
    }

    protected function register_my_listing_top_menu_items(): void {

        $this->start_controls_section(
            'section_top_menu_items_style',
            [
                'label' => __( 'My Listings Top: Menu Items', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'top_area_typography',
                'selector' => '{{WRAPPER}} .directorist-user-dashboard-tab__nav a',
            ]
        );

        $this->add_control(
            'top_area_text',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tab__nav a' => 'color: {{VALUE}};',
                ],
                'separator' => 'before'
            ]
        );

        $this->add_control(
            'top_area_text_active',
            [
                'label'     => __( 'Active Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tab__nav a.directorist-tab__nav__active' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-user-dashboard-tab__nav a.directorist-tab__nav__active:after' => 'display: none;',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_my_listing_top_search(): void {

        $this->start_controls_section(
            'section_top_search_style',
            [
                'label' => __( 'My Listings Top: Search Form', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'search_text',
            [
                'label'     => __( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tab .directorist-user-dashboard-search input::placeholder' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-user-dashboard-search__icon i::after' => 'background-color: {{VALUE}};',
                ],
                'separator' => 'before'
            ]
        );

        $this->add_control(
            'search_bg_color',
            [
                'label'     => __( 'Background', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tab .directorist-user-dashboard-search input' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => 'search_border',
                'selector'  => '{{WRAPPER}} .directorist-user-dashboard-tab .directorist-user-dashboard-search input',
                'separator' => 'before',
            ]
        );

        $this->add_responsive_control(
            'search_border_radius',
            [
                'label'      => __( 'Border Radius', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'selectors'  => [
                    '{{WRAPPER}} .directorist-user-dashboard-tab .directorist-user-dashboard-search input' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => 'search_border_box_shadow',
                'selector' => '{{WRAPPER}} .directorist-user-dashboard-tab .directorist-user-dashboard-search input',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_my_listing_content_area(): void {

        $this->start_controls_section(
            'section_my_listing_content_area_style',
            [
                'label' => __( 'My Listing Content: Container', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'my_listing_content_area_margin',
            [
                'label'      => __( 'Margin', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'my_listing_content_area_padding',
            [
                'label'      => __( 'Padding', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'separator'  => 'before',
            ]
        );

        $this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'my_listing_content_area_bg_color',
				'types'    => ['classic', 'gradient'],
				'exclude'  => ['image'],
				'selector' => "{{WRAPPER}} .directorist-user-dashboard-tabcontent, {{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table tr, {{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-actions .directorist-btn-more",
                'separator' => 'before',
			]
		);

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => 'my_listing_content_area_border',
                'selector'  => '{{WRAPPER}} .directorist-user-dashboard-tabcontent',
                'separator' => 'before',
            ]
        );

        $this->add_responsive_control(
            'my_listing_content_area_border_radius',
            [
                'label'      => __( 'Border Radius', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'selectors'  => [
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => 'my_listing_content_area_border_box_shadow',
                'selector' => '{{WRAPPER}} .directorist-user-dashboard-tabcontent',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_my_listing_content_info(): void {

        $this->start_controls_section(
            'section_my_listing_info_style',
            [
                'label' => __( 'My Listing Content: Listing Info', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'info_color',
            [
                'label'     => __( 'Info Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table tr td' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-actions .directorist-btn-more' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-listing-table-listing-info__content .directorist-listing-price-range .directorist-price-active' => 'color: {{VALUE}};',
                ],
                'separator' => 'before'
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'info_typography',
                'selector' => '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table tr td, {{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-actions .directorist-btn-more',
            ]
        );

        $this->add_control(
            'edit_color',
            [
                'label'     => __( 'Edit Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-actions a.directorist-link-btn' => 'color: {{VALUE}};',
                ],
                'separator' => 'before'
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'edit_typography',
                'selector' => '{{WRAPPER}} .directorist-user-dashboard-tabcontent .directorist-listing-table .directorist-actions a.directorist-link-btn',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_dashboard_pagination(): void {

        $prefix     = 'dashboard_pagination';
        $selector   = '.directorist-dashboard-pagination';
        $normal     = "{$selector} a.page-numbers";
        $arrow      = "{$selector} a.page-numbers .directorist-icon-mask:after";
        $active     = "{$selector} span.page-numbers.current";
        $hover      = "{$selector} a.page-numbers:hover";
        $hover_icon = "{$selector} a.page-numbers:hover .directorist-icon-mask:after";

        $this->start_controls_section(
            "section_{$prefix}_style",
            [
                'label' => __( 'My Listing: Pagination', 'template-market' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->start_controls_tabs( "{$prefix}_tabs_normal" );

		$this->start_controls_tab( "{$prefix}_tab_normal", [
			'label' => esc_html__( 'Normal', 'template-market' ),
		] );

        $this->add_control(
            "{$prefix}_color",
            [
                'label'     => esc_html__( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$normal}" => 'color: {{VALUE}};',
                    "{{WRAPPER}} {$arrow}" => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            "{$prefix}_background_color",
            [
                'label'     => esc_html__( 'Background Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$normal}" => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => "{$prefix}_border",
                'selector'  => "{{WRAPPER}} {$normal}",
            ]
        );

        $this->add_responsive_control(
            "{$prefix}_border_radius",
            [
                'label'      => esc_html__( 'Border Radius', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'selectors'  => [
                    "{{WRAPPER}} {$normal}" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'      => "{$prefix}_box_shadow",
                'selector'  => "{{WRAPPER}} {$normal}",
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab( "{$prefix}_tab_active", [
			'label' => esc_html__( 'Active', 'template-market' ),
		]);

        $this->add_control(
            "{$prefix}_color_active",
            [
                'label'     => esc_html__( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$active}" => 'color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->add_control(
            "{$prefix}_background_color_active",
            [
                'label'     => esc_html__( 'Background Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$active}" => 'background-color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => "{$prefix}_border_active",
                'selector'  => "{{WRAPPER}} {$active}",
            ]
        );

        $this->add_responsive_control(
            "{$prefix}_border_radius_active",
            [
                'label'      => esc_html__( 'Border Radius', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'selectors'  => [
                    "{{WRAPPER}} {$active}" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'      => "{$prefix}_box_shadow_active",
                'selector'  => "{{WRAPPER}} {$active}",
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab( "{$prefix}_tab_hover", [
			'label' => esc_html__( 'Hover', 'template-market' ),
		]);

        $this->add_control(
            "{$prefix}_color_hover",
            [
                'label'     => esc_html__( 'Text Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$hover}" => 'color: {{VALUE}} !important;',
                    "{{WRAPPER}} {$hover_icon}" => 'background-color: {{VALUE}} !important;',
                ],
            ]
        );

        $this->add_control(
            "{$prefix}_background_color_hover",
            [
                'label'     => esc_html__( 'Background Color', 'template-market' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    "{{WRAPPER}} {$hover}" => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'      => "{$prefix}_border_hover",
                'selector'  => "{{WRAPPER}} {$hover}",
            ]
        );

        $this->add_responsive_control(
            "{$prefix}_border_radius_hover",
            [
                'label'      => esc_html__( 'Border Radius', 'template-market' ),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'selectors'  => [
                    "{{WRAPPER}} {$hover}" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'      => "{$prefix}_box_shadow_hover",
                'selector'  => "{{WRAPPER}} {$hover}",
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->end_controls_section();
    }
}
