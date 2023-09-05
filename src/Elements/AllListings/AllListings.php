<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AllListings;

use TemplateMarket\Elements\Common\DirectoryTypeStyles;
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

class AllListings extends Widget_Base {

	use DirectoryTypeStyles;
	use TextControls;
	use Container;
	use Styles;

	public function get_name() {
		return 'directorist_all_listing';
	}

	public function get_title() {
		return __( 'All Listings', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'search', 'search-form', 'form', 'directorist-search', 'all-listings', 'listings',
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
			'header',
			[
				'label'     => __( 'Header?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'template-market' ),
				'label_off' => esc_html__( 'Hide', 'template-market' ),
				'default'   => 'yes',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'filter',
			[
				'label'     => __( 'Filter Button?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'template-market' ),
				'label_off' => esc_html__( 'Hide', 'template-market' ),
				'default'   => 'no',
				'condition' => ['header' => 'yes'],
			]
		);

		$this->add_control(
			'header_title',
			[
				'label'     => __( 'Total Listings Found Title', 'template-market' ),
				'type'      => Controls_Manager::TEXT,
				'default'   => __( 'Listings Found', 'template-market' ),
				'condition' => ['header' => 'yes'],
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
					'map'  => __( 'Map', 'template-market' ),
				],
				'default'   => 'grid',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'map_height',
			[
				'label'     => __( 'Map Height', 'template-market' ),
				'type'      => Controls_Manager::NUMBER,
				'min'       => 300,
				'max'       => 1980,
				'default'   => 500,
				'condition' => ['view' => ['map']],
			]
		);

		$this->add_control(
			'columns',
			[
				'label'     => __( 'Listings Per Row', 'template-market' ),
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
			'listing_number',
			[
				'label'     => __( 'Number of Listings to Show', 'template-market' ),
				'type'      => Controls_Manager::NUMBER,
				'min'       => 1,
				'max'       => 100,
				'step'      => 1,
				'default'   => 6,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'preview',
			[
				'label'     => __( 'Preview Image?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'template-market' ),
				'label_off' => esc_html__( 'Hide', 'template-market' ),
				'default'   => 'yes',
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

		$this->add_responsive_control(
			'type_align',
			[
				'label'     => esc_html__( 'Alignment', 'template-market' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
					'start'  => [
						'title' => esc_html__( 'Left', 'template-market' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'template-market' ),
						'icon'  => 'eicon-text-align-center',
					],
					'end'    => [
						'title' => esc_html__( 'Right', 'template-market' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default'   => '',
				'selectors' => [
					'{{WRAPPER}} .directorist-type-nav .directorist-type-nav__list' => 'justify-content: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'cat',
			[
				'label'     => __( 'Specify Categories', 'template-market' ),
				'type'      => Controls_Manager::SELECT2,
				'multiple'  => true,
				'options'   => DirectoristTaxonomies::listing_categories(),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'tag',
			[
				'label'     => __( 'Specify Tags', 'template-market' ),
				'type'      => Controls_Manager::SELECT2,
				'multiple'  => true,
				'options'   => DirectoristTaxonomies::listing_tags(),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'location',
			[
				'label'     => __( 'Specify Locations', 'template-market' ),
				'type'      => Controls_Manager::SELECT2,
				'multiple'  => true,
				'options'   => DirectoristTaxonomies::listing_locations(),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'featured',
			[
				'label'     => __( 'Show Featured Only?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Yes', 'template-market' ),
				'label_off' => esc_html__( 'No', 'template-market' ),
				'default'   => 'no',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'popular',
			[
				'label'     => __( 'Show Popular Only?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Yes', 'template-market' ),
				'label_off' => esc_html__( 'No', 'template-market' ),
				'default'   => 'no',
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

		$this->add_control(
			'order_by',
			[
				'label'     => __( 'Order by', 'template-market' ),
				'type'      => Controls_Manager::SELECT,
				'options'   => [
					'title' => __( 'Title', 'template-market' ),
					'date'  => __( 'Date', 'template-market' ),
					'price' => __( 'Price', 'template-market' ),
				],
				'default'   => 'date',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'order_list',
			[
				'label'     => __( 'Listings Order', 'template-market' ),
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
			'show_pagination',
			[
				'label'     => __( 'Pagination?', 'template-market' ),
				'type'      => Controls_Manager::SWITCHER,
				'label_on'  => esc_html__( 'Show', 'template-market' ),
				'label_off' => esc_html__( 'Hide', 'template-market' ),
				'default'   => 'no',
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	protected function register_styles(): void {

		$this->register_container_style_controls( __( 'Directory Type: Container', 'template-market' ), 'all_listing_directory_type_container', '.directorist-type-nav__list' );

		$this->register_directory_type_style_controls( '.directorist-type-nav__list .directorist-type-nav__link', [], '.directorist-type-nav__list__current .directorist-type-nav__link' );

		$this->register_filters_button( ['header' => 'yes', 'filter' => 'yes'] );

		$this->register_text_controls( __( 'Listing Header: Items Found', 'template-market' ), 'listings_found', '.directorist-listings-header__left .directorist-header-found-title' );

		$this->register_view_as_sort_by();
		$this->register_listing_card_info();
		$this->register_listing_footer();

		$this->register_container_style_controls( __( 'Pagination Container', 'template-market' ), 'all_listing_pagination_container', '.directorist-pagination', ['show_pagination' => 'yes'] );
		
		$this->register_all_listing_pagination( ['show_pagination' => 'yes'] );
	}

	protected function render(): void {
		$settings = $this->get_settings();

		$atts = [
			'header'                => $settings['header'] ?? 'no',
			'header_title'          => $settings['header_title'],
			'advanced_filter'       => $settings['filter'] ?? 'no',
			'view'                  => $settings['view'],
			'map_height'            => $settings['map_height'],
			'columns'               => $settings['columns'],
			'listings_per_page'     => $settings['listing_number'],
			'show_pagination'       => $settings['show_pagination'] ?? 'no',
			'category'              => $settings['cat'] ? implode( ',', $settings['cat'] ) : '',
			'tag'                   => $settings['tag'] ? implode( ',', $settings['tag'] ) : '',
			'location'              => $settings['location'] ? implode( ',', $settings['location'] ) : '',
			'featured_only'         => $settings['featured'] ?? 'no',
			'popular_only'          => $settings['popular'] ?? 'no',
			'logged_in_user_only'   => $settings['user'] ?? 'no',
			'display_preview_image' => $settings['preview'] ?? 'no',
			'orderby'               => $settings['order_by'],
			'order'                 => $settings['order_list'],
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
		 * Filters the Elementor All Listing atts to modify or extend it
		 *
		 * @since 1.0.0
		 *
		 * @param array     $atts       Available atts in the widgets
		 * @param array     $settings   All the settings of the widget
		 */
		$atts = apply_filters( 'directorist_all_listings_elementor_widget_atts', $atts, $settings );

		Helper::run_shortcode( 'directorist_all_listing', $atts );
	}
}