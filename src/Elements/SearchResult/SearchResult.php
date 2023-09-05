<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\SearchResult;

use TemplateMarket\Elements\Common\DirectoryTypeStyles;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Elements\AllListings\Styles;
use TemplateMarket\Elements\Common\Container;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class SearchResult extends Widget_Base {

	use DirectoryTypeStyles;
	use TextControls;
	use Container;
	use Styles;

	public function get_name() {
		return 'directorist_search_result';
	}

	public function get_title() {
		return __( 'Search Result', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'search', 'search-result', 'result', 'search-listings',
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
			'advanced_filter',
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
			'number',
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
			'display_preview_image',
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
			'featured_only',
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
			'popular_only',
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
		$this->register_container_style_controls( __( 'Directory Type: Container', 'template-market' ), 'search_listing_directory_type_container', '.directorist-type-nav__list' );

		$this->register_directory_type_style_controls( '.directorist-type-nav__list .directorist-type-nav__link', [], '.directorist-type-nav__list__current .directorist-type-nav__link' );
		
		$this->register_container_style_controls( __( 'Listing Header: Container', 'template-market' ), 'search_listing_header_container', '.directorist-listings-header' );

		$this->register_filters_button( ['header' => 'yes', 'advanced_filter' => 'yes'] );

		$this->register_text_controls( __( 'Listing Header: Listings Found', 'template-market' ), 'search_listings_found', '.directorist-listings-header__left .directorist-header-found-title' );

		$this->register_view_as_sort_by();

		$this->register_container_style_controls( __( 'Listing: Card Container', 'template-market' ), 'search_listing_card_container', '.directorist-listing-card' );

		$this->register_listing_card_info();
		$this->register_listing_footer();

		$this->register_container_style_controls( __( 'Pagination Container', 'template-market' ), 'search_pagination_container', '.directorist-pagination', ['show_pagination' => 'yes'] );
		
		$this->register_all_listing_pagination( ['show_pagination' => 'yes'] );
	}

	protected function render(): void {
		$settings = $this->get_settings();

		$atts = [
			'header'                => $settings['header'] ?? 'no',
			'header_title'          => $settings['header_title'],
			'advanced_filter'       => $settings['advanced_filter'] ?? 'no',
			'view'                  => $settings['view'],
			'map_height'            => $settings['map_height'],
			'columns'               => $settings['columns'],
			'listings_per_page'     => $settings['number'],
			'show_pagination'       => $settings['show_pagination'] ?? 'no',
			'orderby'               => $settings['order_by'],
			'order'                 => $settings['order_list'],
			'featured_only'         => $settings['featured_only'] ?? 'no',
			'popular_only'          => $settings['popular_only'] ?? 'no',
			'logged_in_user_only'   => $settings['user'] ?? 'no',
			'display_preview_image' => $settings['display_preview_image'] ?? 'no',
		];

		/**
		 * Filters the Elementor Search Result atts to modify or extend it
		 *
		 * @since 1.0.0
		 *
		 * @param array     $atts       Available atts in the widgets
		 * @param array     $settings   All the settings of the widget
		 */
		$atts = apply_filters( 'directorist_search_result_elementor_widget_atts', $atts, $settings );

		Helper::run_shortcode( 'directorist_search_result', $atts );
	}
}
