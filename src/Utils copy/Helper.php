<?php

namespace TemplateMarket\Utils;

use Elementor\Plugin;

class Helper {
    public static function run_shortcode( $shortcode, $atts = [] ): void {
        $html = '';

        foreach ( $atts as $key => $value ) {
            $html .= sprintf( ' %s="%s"', $key, esc_html( $value ) );
        }

        $html = sprintf( '[%s%s]', $shortcode, $html );

        echo do_shortcode( $html );
    }

    public static function is_edit() {
        return ( Plugin::instance()->editor->is_edit_mode() ||
            Plugin::instance()->preview->is_preview_mode() ||
            is_preview() );
    }
}
