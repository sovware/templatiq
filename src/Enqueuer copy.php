<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket;

use TemplateMarket\Abstracts\EnqueuerBase;
use TemplateMarket\Utils\Helper;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Enqueuer extends EnqueuerBase {
    public function __construct() {
        add_action( 'wp_admin_scripts', [ $this, 'enqueue_elementor_scripts' ] );
    }

    public function enqueue_elementor_scripts() {
        if ( Helper::is_edit() ) {
            wp_enqueue_script( 'directorist-select2-script' );
            wp_enqueue_script( 'directorist-add-listing' );
        }
    }
}
