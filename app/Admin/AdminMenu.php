<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Admin;

use TemplateMarket\Utils\Hookable;
use TemplateMarket\Utils\Singleton;

/**
 * Administration Menu Class
 */
class AdminMenu {
	use Hookable;
	use Singleton;

	public function __construct() {
		$this->action( 'admin_menu', 'admin_menu' );
	}

	public function admin_menu() {
		add_menu_page(
			__( 'TemplateMarket', 'template-market' ),
			apply_filters( 'template-market_title', 'TemplateMarket' ),
			'manage_options',
			'template-market',
			[$this, 'content']
		);
		add_submenu_page(
			'template-market',
			__( 'Dashboard', 'template-market' ),
			__( 'Dashboard', 'template-market' ),
			'manage_options',
			'template-market',
			[$this, 'content'],
		);
	}

	public function content() {
		echo '<div id="template-market-root"></div>';
	}
}
