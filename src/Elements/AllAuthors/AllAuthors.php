<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\AllAuthors;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use TemplateMarket\Elements\Common\Button;
use TemplateMarket\Elements\Common\Container;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AllAuthors extends Widget_Base {

	use TextControls;
	use Container;
	use Button;
	use Styles;

	public function get_name() {
		return 'directorist_all_authors';
	}

	public function get_title() {
		return __( 'All Authors', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'authors', 'users', 'all authors',
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
				'label'     => __( 'This widget works only in All Authors page. It has no additional elementor settings.', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->end_controls_section();

	}

	protected function register_styles(): void {

		$this->register_container_style_controls( __( 'Alphabet: Container', 'template-market' ), 'alphabet_container', '.directorist-authors__nav' );
		$this->register_button_style_controls( __( 'Alphabet: Style', 'template-market' ), 'alphabet_style', '.directorist-authors__nav li a', '.directorist-authors__nav li.active a' );
		$this->register_container_style_controls( __( 'Card: Container', 'template-market' ), 'card_container', '.directorist-authors__card' );
		$this->register_author_image_style_controls();
		$this->register_text_controls( __( 'Card: Author Name', 'template-market' ), 'author_name', '.directorist-authors__card h2' );
		$this->register_author_contact_style_controls();
		$this->register_text_controls( __( 'Card: Author Bio', 'template-market' ), 'author_bio', '.directorist-authors__card p' );
		$this->register_social_accounts_style_controls();
		$this->register_button_style_controls( __( 'Card: Button', 'template-market' ), 'card_button_style', '.directorist-authors__card .directorist-btn' );
	}

	protected function render(): void {
		Helper::run_shortcode( 'directorist_all_authors' );
	}
}
