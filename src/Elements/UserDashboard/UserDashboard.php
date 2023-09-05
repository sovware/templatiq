<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\UserDashboard;

use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Elements\Common\Container;
use Elementor\Controls_Manager;
use TemplateMarket\Utils\Helper;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class UserDashboard extends Widget_Base {

    use TextControls;
    use Container;
    use Styles;

    public function get_name() {
        return 'directorist_user_dashboard';
    }

    public function get_title() {
        return __( 'Dashboard', 'template-market' );
    }

    public function get_icon() {
        return 'directorist-el-custom';
    }

    public function get_categories() {
        return [ 'directorist-widgets' ];
    }

    public function get_keywords() {
        return [
            'dashboard', 'user-dashboard', 'my-listings',
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
            'sec_heading',
            [
                'label'     => __( 'This widget works only in Dashboard page. It has no additional elementor settings.', 'template-market' ),
                'type'      => Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_styles(): void {
        $this->register_container_style_controls( __( 'Sidebar: Container', 'template-market' ), 'dashboard_sidebar_container', '.directorist-user-dashboard__nav' );
        $this->register_dashboard_sidebar();
        $this->register_container_style_controls( __( 'My Listings Top: Container', 'template-market' ), 'my_listing_top_container', '.directorist-user-dashboard-tab__nav' );
        $this->register_my_listing_top_menu_items();
        $this->register_my_listing_top_search();
        $this->register_my_listing_content_area();
        $this->register_text_controls( __( 'My Listing Content: Label', 'template-market' ), 'my_listing_label', '.directorist-table thead tr th' );
        $this->register_text_controls( __( 'My Listing Content: Listing Title', 'template-market' ), 'my_listing_title', '.directorist-dashboard-listings-tbody .directorist-title a' );
        $this->register_my_listing_content_info();
        $this->register_dashboard_pagination();
    }

    protected function render(): void {
        Helper::run_shortcode( 'directorist_user_dashboard' );
    }
}