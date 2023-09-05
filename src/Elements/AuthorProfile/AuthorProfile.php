<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AuthorProfile;

use TemplateMarket\Elements\AllListings\Styles as AllListingsStyles;
use TemplateMarket\Elements\Common\DirectoryTypeStyles;
use TemplateMarket\Elements\Common\Container;
use TemplateMarket\Elements\Common\TextControls;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AuthorProfile extends Widget_Base {
	use Styles;
	use Container;
	use TextControls;
	use AllListingsStyles;
	use DirectoryTypeStyles;

	public function get_name() {
		return 'directorist_author_profile';
	}

	public function get_title() {
		return __( 'Author Profile', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'all-authors', 'author', 'profile', 'owner',
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

		$this->register_container_style_controls( __( 'Profile: Container', 'template-market' ), 'profile_area', '.directorist-author-profile__wrap' );

		$this->register_author_profile_info();

		$this->register_container_style_controls( __( 'Profile: Reviews & Listings Container', 'template-market' ), 'profile_review_listings_area', '.directorist-author-profile__meta-list__item' );

		$this->register_profile_info_controls( __( 'Profile: Reviews & Listings', 'template-market' ), 'profile_review_listings_icon', '.directorist-author-profile__meta-list' );

		$this->register_container_style_controls( __( 'Contact Info: Container', 'template-market' ), 'profile_contact_info', '.directorist-author-contact' );

		$this->register_text_controls( __( 'Contact Info: Title', 'template-market' ), 'contact_info', '.directorist-author-contact .directorist-card__header--title' );

		$this->register_author_contact_style_controls();
		$this->register_social_accounts_style_controls();

		$this->register_container_style_controls( __( 'About: Container', 'template-market' ), 'profile_about', '.directorist-author-about' );

		$this->register_author_title_description();

		/**
		 * All Listings - Controls
		 */
		$this->register_text_controls( __( 'Listings: Section Title', 'template-market' ), 'author_listings_title', '.directorist-author-listing-top__title' );

		$this->register_container_style_controls( __( 'Listings: Directory Type Container', 'template-market' ), 'directory_type_container', '.directorist-author-listing-top__filter' );

		$this->register_directory_type_style_controls( '.directorist-type-nav__list .directorist-type-nav__link', [], '.directorist-type-nav__list__current .directorist-type-nav__link' );

		$this->register_text_controls( __( 'Listings: Filter', 'template-market' ), 'listings_filter', '#directorist-dropdown-menu-link' );

		$this->register_listing_card_info();
		$this->register_listing_footer();

		$this->register_container_style_controls( __( 'Pagination Container', 'template-market' ), 'author_pagination_container', '.directorist-pagination' );

		$this->register_all_listing_pagination();
	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		$atts = [];

		$atts['logged_in_user_only'] = $settings['user'] ?? 'no';

		/**
		 * Filters the Elementor Author Profile atts to modify or extend it
		 *
		 * @since 1.0.0
		 *
		 * @param array     $atts       Available atts in the widgets
		 * @param array     $settings   All the settings of the widget
		 */
		$atts = apply_filters( 'directorist_author_profile_elementor_widget_atts', $atts, $settings );

		Helper::run_shortcode( 'directorist_author_profile', $atts );
	}
}