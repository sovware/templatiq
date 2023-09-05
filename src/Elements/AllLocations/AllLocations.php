<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AllLocations;

use TemplateMarket\Elements\Common\DirectoryTypeStyles;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Elements\AllLocations\Styles;
use TemplateMarket\Elements\Common\Container;
use TemplateMarket\Utils\DirectoristTaxonomies;
use TemplateMarket\Utils\DirectoristHelper;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class AllLocations extends Widget_Base {

    use Styles;
    use Container;
    use TextControls;
    use DirectoryTypeStyles;

    public function get_name() {
        return 'directorist_all_locations';
    }

    public function get_title() {
        return __( 'All Locations', 'template-market' );
    }

    public function get_icon() {
        return 'directorist-el-custom';
    }

    public function get_categories() {
        return ['directorist-widgets'];
    }

    public function get_keywords() {
        return [
            'all-locations', 'location', 'locations', 'directorist',
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

        $this->add_control(
            'default_type',
            [
                'label'     => __( 'Default Directory', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'multiple'  => true,
                'options'   => DirectoristTaxonomies::listing_types(),
                'condition' => DirectoristHelper::is_multi_directory_enabled() ? '' : ['nocondition' => true],
            ]
        );

        $this->add_control(
            'view',
            [
                'label'     => __( 'View As', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    'grid' => __( 'Grid', 'template-market' ),
                    'list' => __( 'List', 'template-market' ),
                ],
                'default'   => 'grid',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'columns',
            [
                'label'     => __( 'Locations Per Row', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'label_on'  => esc_html__( 'Show', 'template-market' ),
                'label_off' => esc_html__( 'Hide', 'template-market' ),
                'options'   => [
                    '6' => __( '6 Items / Row', 'template-market' ),
                    '4' => __( '4 Items / Row', 'template-market' ),
                    '3' => __( '3 Items / Row', 'template-market' ),
                    '2' => __( '2 Items / Row', 'template-market' ),
                ],
                'default'   => '3',
                'condition' => ['view' => 'grid'],
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'order_by',
            [
                'label'     => __( 'Order by', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    'id'    => __( 'ID', 'template-market' ),
                    'count' => __( 'Count', 'template-market' ),
                    'name'  => __( 'Name', 'template-market' ),
                    'slug'  => __( 'Slug', 'template-market' ),
                ],
                'default'   => 'id',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'slug',
            [
                'label'     => __( 'Specify Locations', 'template-market' ),
                'type'      => Controls_Manager::SELECT2,
                'multiple'  => true,
                'options'   => DirectoristTaxonomies::listing_locations(),
                'condition' => ['orderby' => ['slug']],
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'order_list',
            [
                'label'     => __( 'Locations Order', 'template-market' ),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    'asc'  => __( ' ASC', 'template-market' ),
                    'desc' => __( ' DESC', 'template-market' ),
                ],
                'default'   => 'desc',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'number_loc',
            [
                'label'     => __( 'Number of Locations to Show', 'template-market' ),
                'type'      => Controls_Manager::NUMBER,
                'min'       => 1,
                'max'       => 100,
                'step'      => 1,
                'default'   => 6,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'user',
            [
                'label'     => __( 'Only For Logged In User?', 'template-market' ),
                'type'      => Controls_Manager::SWITCHER,
                'label_on'  => esc_html__( 'Yes', 'template-market' ),
                'label_off' => esc_html__( 'No', 'template-market' ),
                'default'   => 'no',
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_styles(): void {

        if ( DirectoristHelper::is_multi_directory_enabled() ) {

			$this->register_container_style_controls(
				__( 'Directory Type: Container', 'template-market' ),
				'directory_type_area',
				'.directorist-type-nav__list',
			);

			$this->register_directory_type_style_controls(
				'.directorist-type-nav__list .directorist-type-nav__link',
				[],
				'.directorist-type-nav__list .current .directorist-type-nav__link'
			);
		}

        $this->register_location_card_style_controls();

		$this->register_location_title_controls();
    }

    protected function render(): void {
        $settings = $this->get_settings();

        $atts = [
            'view'                => $settings['view'],
            'columns'             => $settings['columns'],
            'loc_per_page'        => $settings['number_loc'],
            'orderby'             => $settings['order_by'],
            'order'               => $settings['order_list'],
            'logged_in_user_only' => $settings['user'] ?? 'no',
            'slug'                => $settings['slug'] ? implode( ',', $settings['slug'] ) : '',
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
         * Filters the Elementor All Locations atts to modify or extend it
         *
         * @since 1.0.0
         *
         * @param array     $atts       Available atts in the widgets
         * @param array     $settings   All the settings of the widget
         */
        $atts = apply_filters( 'directorist_all_locations_elementor_widget_atts', $atts, $settings );

        Helper::run_shortcode( 'directorist_all_locations', $atts );
    }
}
