<?php
/**
 * Admin Notices
 *
 * @since 2.3.7
 * @package Templatiq Sites
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Templatiq_Sites_Admin' ) ):

	/**
	 * Admin
	 */
	class Templatiq_Sites_Admin {

		/**
		 * Instance of Templatiq_Sites_Admin
		 *
		 * @since 2.3.7
		 * @var (Object) Templatiq_Sites_Admin
		 */
		private static $instance = null;

		/**
		 * Instance of Templatiq_Sites_Admin.
		 *
		 * @since 2.3.7
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since 2.3.7
		 */
		private function __construct() {
			add_action( 'templatiq_notice_before_markup', [$this, 'notice_assets'] );
			add_action( 'admin_enqueue_scripts', [$this, 'admin_assets'] );
			add_action( 'templatiq_sites_after_site_grid', [$this, 'custom_upgrade_cta'] );
			add_filter( 'templatiq_sites_quick_links', [$this, 'change_quick_links'] );
		}

		/**
		 * Change quick links
		 *
		 * @since 2.6.18
		 * @param array $links  All quick links.
		 * @return array
		 */
		public function change_quick_links( $links = [] ) {

			if ( ! isset( $links['links']['upgrade'] ) ) {
				return $links;
			}

			// Change default call to action link.
			$links['links']['upgrade']['url'] = Templatiq_Sites::get_instance()->get_cta_link( 'quick-links-corner' );

			return $links;
		}

		/**
		 * Admin Assets
		 */
		public function admin_assets() {
			$current_screen = get_current_screen();

			if ( 'appearance_page_starter-templates' !== $current_screen->id ) {
				return;
			}

			if ( Templatiq_Sites_White_Label::get_instance()->is_white_labeled() ) {
				return;
			}

			wp_enqueue_style( 'templatiq-sites-admin-page', TEMPLATIQ_SITES_URI . 'assets/css/admin.css', TEMPLATIQ_SITES_VER, true );
			wp_enqueue_script( 'templatiq-sites-admin-js', TEMPLATIQ_SITES_URI . 'assets/js/admin.js', ['templatiq-sites-admin-page', 'jquery'], TEMPLATIQ_SITES_VER, true );
		}

		/**
		 * Add Custom CTA Infobar.
		 */
		public function custom_upgrade_cta() {
			$current_screen = get_current_screen();

			if ( 'appearance_page_starter-templates' !== $current_screen->id ) {
				return;
			}

			if ( Templatiq_Sites_White_Label::get_instance()->is_white_labeled() ) {
				return;
			}

			$custom_cta_content_data = apply_filters(
				'templatiq_sites_custom_cta_vars',
				[
					'text'        => __( 'Get unlimited access to all premium Starter Templates and more, at a single low cost!', 'templatiq-sites' ),
					'button_text' => __( 'Get Essential Toolkit', 'templatiq-sites' ),
					'cta_link'    => Templatiq_Sites::get_instance()->get_cta_link(),
				]
			);

			$html = '<div class="templatiq-sites-custom-cta-wrap">';
			$html .= '<span class="templatiq-sites-cta-title">' . esc_html( $custom_cta_content_data['text'] ) . '</span>';
			$html .= '<span class="templatiq-sites-cta-btn">';
			$html .= '<a class="templatiq-sites-cta-link" href="' . esc_url( $custom_cta_content_data['cta_link'] ) . '"  target="_blank" >' . esc_html( $custom_cta_content_data['button_text'] ) . '</a>';
			$html .= '</span>';
			$html .= '</div>';
			echo wp_kses_post( $html );
		}

		/**
		 * Enqueue Templatiq Notices CSS.
		 *
		 * @since 2.3.7
		 *
		 * @return void
		 */
		public static function notice_assets() {
			$file = is_rtl() ? 'astra-notices-rtl.css' : 'astra-notices.css';
			wp_enqueue_style( 'templatiq-sites-notices', TEMPLATIQ_SITES_URI . 'assets/css/' . $file, [], TEMPLATIQ_SITES_VER );
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Templatiq_Sites_Admin::get_instance();

endif;