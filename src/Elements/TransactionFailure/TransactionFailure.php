<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Elements\TransactionFailure;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use TemplateMarket\Elements\Common\TextControls;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TransactionFailure extends Widget_Base {
	use TextControls;

	public function get_name() {
		return 'directorist_transaction_failure';
	}

	public function get_title() {
		return __( 'Transaction Failure', 'template-market' );
	}

	public function get_icon() {
		return 'directorist-el-custom';
	}

	public function get_categories() {
		return ['directorist-widgets'];
	}

	public function get_keywords() {
		return [
			'payment', 'transaction-failure', 'checkout', 'failed',
		];
	}

	protected function register_controls(): void{
		$this->register_contents();
	}

	protected function register_contents(): void{
		$this->start_controls_section(
			'sec_general',
			[
				'label' => __( 'General', 'template-market' ),
			]
		);

		$this->add_control(
			'sec_heading',
			[
				'label'     => __( 'This widget works only in Transaction Failure page. It has no additional elementor settings.', 'template-market' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	protected function render(): void{
		Helper::run_shortcode( 'directorist_transaction_failure' );
	}
}
