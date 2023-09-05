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

    public function setup() {
        $this->action( 'admin_menu', 'admin_menu' );
    }

    public function admin_menu() {
        add_menu_page(
            __( 'TemplateMarket', 'template-market' ),
            apply_filters( 'template-market_title', 'TemplateMarket' ),
            'manage_options',
            'template-market',
            [ $this, 'overview' ]
        );
        add_submenu_page(
            'template-market',
            __( 'Dashboard', 'template-market' ),
            __( 'Dashboard', 'template-market' ),
            'manage_options',
            'template-market',
            [ $this, 'overview' ],
        );
    }

    public function overview() {
        echo 1212;
    }
}
