<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\SearchListing;

use TemplateMarket\Elements\Common\DirectoryTypeStyles;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Utils\DirectoristTaxonomies;
use TemplateMarket\Utils\DirectoristHelper;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class SearchListing extends Widget_Base {

    use Styles;
    use TextControls;
    use DirectoryTypeStyles;

    public function get_name() {
        return 'directorist_search_listing';
    }

    public function get_title() {
        return __( 'Directorist Search Form', 'template-market' );
    }

    public function get_icon() {
        return 'directorist-el-custom';
    }

    public function get_categories() {
        return [ 'directorist-widgets' ];
    }
    
    public function get_keywords() {
        return [
            'search', 'search-form', 'form', 'directorist-search',
        ];
    }

    protected function register_controls(): void {
        $this->register_contents();
        $this->register_styles();
    }

    protected function register_contents() {

        $this->start_controls_section(
            'sec_general',
            [
                'label' => __( 'General', 'template-market' ),
            ]
        );

        $this->add_control(
            'show_subtitle',
            [
                'label'     => __( 'Title & Subtitle?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => __( 'Show', 'template-market' ),
                'label_off' => __( 'Hide', 'template-market' ),
                'default'   => 'yes',
            ]
        );

        $this->add_control(
            'title',
            [
                'label'     => __( 'Search Form Title', 'template-market' ),
                'type'      => Controls_Manager::TEXTAREA,
                'default'   => __( 'Search here', 'template-market' ),
                'condition' => [ 'show_subtitle' => [ 'yes' ] ],
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label'     => __( 'Search Form Subtitle', 'template-market' ),
                'type'      => Controls_Manager::TEXTAREA,
                'default'   => __( 'Find the best match of your interest', 'template-market' ),
                'condition' => [ 'show_subtitle' => [ 'yes' ] ],
            ]
        );

        $this->add_control(
            'title_subtitle_alignment',
            [
                'label'     => __( 'Title/Subtitle Alignment', 'template-market' ),
                'type'      => Controls_Manager::CHOOSE,
                'options'   => [
                    'left'   => [
                        'title' => __( 'Left', 'template-market' ),
                        'icon'  => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => __( 'Center', 'template-market' ),
                        'icon'  => 'eicon-text-align-center',
                    ],
                    'right'  => [
                        'title' => __( 'Right', 'template-market' ),
                        'icon'  => 'eicon-text-align-right',
                    ],
                ],
                'toggle'    => true,
                'selectors' => [
                    '{{WRAPPER}} .directorist-search-top__title'    => 'text-align: {{VALUE}}',
                    '{{WRAPPER}} .directorist-search-top__subtitle' => 'text-align: {{VALUE}}',
                ],
                'condition' => [ 'show_subtitle' => [ 'yes' ] ],
            ]
        );

        $this->add_control(
            'type',
            [
                'label'     => __( 'Directory Types', 'template-market' ),
                'type'      => Controls_Manager::SELECT2,
                'multiple'  => true,
                'options'   => DirectoristTaxonomies::listing_types(),
                'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : [ 'nocondition' => true ],
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'default_type',
            [
                'label'     => __( 'Default Directory', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'multiple'  => true,
                'options'   => DirectoristTaxonomies::listing_types(),
                'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : [ 'nocondition' => true ],
            ]
        );

        $this->add_control(
            'search_btn_text',
            [
                'label'     => __( 'Search Button Label', 'template-market' ),
                'type'      => Controls_Manager::TEXT,
                'default'   => __( 'Search Listing', 'template-market' ),
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'show_more_filter_btn',
            [
                'label'     => __( 'More Search Fields?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => __( 'Show', 'template-market' ),
                'label_off' => __( 'Hide', 'template-market' ),
                'default'   => 'yes',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'more_filter_btn_text',
            [
                'label'     => __( 'Button Label', 'template-market' ),
                'type'      => Controls_Manager::TEXT,
                'default'   => __( 'More Filters', 'template-market' ),
                'condition' => [ 'show_more_filter_btn' => [ 'yes' ] ],
            ]
        );

        $this->add_control(
            'more_filter_reset_btn',
            [
                'label'     => __( 'Reset Filters?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => __( 'Show', 'template-market' ),
                'label_off' => __( 'Hide', 'template-market' ),
                'default'   => 'yes',
                'condition' => [ 'show_more_filter_btn' => [ 'yes' ] ],
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'more_filter_reset_btn_text',
            [
                'label'     => __( 'Button Label', 'template-market' ),
                'type'      => Controls_Manager::TEXT,
                'default'   => __( 'Reset Filters', 'template-market' ),
                'condition' => [
                    'more_filter_reset_btn' => 'yes',
                    'show_more_filter_btn'  => 'yes',
                ],
            ]
        );

        $this->add_control(
            'more_filter_search_btn',
            [
                'label'     => __( 'Apply Filters?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => __( 'Show', 'template-market' ),
                'label_off' => __( 'Hide', 'template-market' ),
                'default'   => 'yes',
                'condition' => [ 'show_more_filter_btn' => [ 'yes' ] ],
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'more_filter_search_btn_text',
            [
                'label'     => __( 'Button Label', 'template-market' ),
                'type'      => Controls_Manager::TEXT,
                'default'   => __( 'Apply Filters', 'template-market' ),
                'condition' => [
                    'more_filter_search_btn' => 'yes',
                    'show_more_filter_btn'   => 'yes',
                ],
            ]
        );

        $this->add_control(
            'more_filter',
            [
                'label'     => __( 'Open Filter Fields', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    'overlapping' => __( 'Overlapping', 'template-market' ),
                    'sliding'     => __( 'Sliding', 'template-market' ),
                    'always_open' => __( 'Always Open', 'template-market' ),
                ],
                'default'   => 'overlapping',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'user',
            [
                'label'     => __( 'Show only for logged in user?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => __( 'Yes', 'template-market' ),
                'label_off' => __( 'No', 'template-market' ),
                'default'   => 'no',
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_styles(): void {
        $this->register_text_controls( __( 'Title', 'template-market' ), 'title', '.directorist-search-top__title' );
        $this->register_text_controls( __( 'Subtitle', 'template-market' ), 'subtitle', '.directorist-search-top__subtitle' );
        $this->register_directory_type_style_controls( '.directorist-listing-type-selection__item a', [], '.directorist-listing-type-selection__item a.directorist-listing-type-selection__link--current' );
        $this->register_form_container_style_controls( __( 'Form Container', 'template-market' ), 'search-form-container', '.directorist-search-form__box' );
        $this->register_placeholder_controls();
        $this->register_form_button_style_controls();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        $atts = [
            'show_title_subtitle'  => $settings['show_subtitle'],
            'search_bar_title'     => $settings['title'],
            'search_bar_sub_title' => $settings['subtitle'],
            'search_button_text'   => $settings['search_btn_text'],
            'more_filters_button'  => $settings['show_more_filter_btn'],
            'more_filters_text'    => $settings['more_filter_btn_text'],
            'reset_filters_button' => $settings['more_filter_reset_btn'],
            'apply_filters_button' => $settings['more_filter_search_btn'],
            'reset_filters_text'   => $settings['more_filter_reset_btn_text'],
            'apply_filters_text'   => $settings['more_filter_search_btn_text'],
            'more_filters_display' => $settings['more_filter'],
            'logged_in_user_only'  => $settings['user'] ?? 'no',
        ];

        if ( DirectoristHelper::is_multi_directory_enabled() ) {
            if ( is_array( $settings['type'] ) ) {
                $atts['directory_type'] = implode( ',', $settings['type'] );
            }
            if ( $settings['default_type'] ) {
                $atts['default_directory_type'] = $settings['default_type'];
            }
        }

        /**
         * Filters the Elementor Search Listing atts to modify or extend it
         *
         * @since 1.0.0
         *
         * @param array     $atts       Available atts in the widgets
         * @param array     $settings   All the settings of the widget
         */
        $atts = apply_filters( 'directorist_search_listing_elementor_widget_atts', $atts, $settings );

        Helper::run_shortcode( 'directorist_search_listing', $atts );
    }
}
