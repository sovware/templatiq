<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

use Elementor\Plugin;

class Helper {

	public static function run_shortcode( $tag, $atts = [], $content = null ) {

		global $shortcode_tags;

		if ( ! isset( $shortcode_tags[$tag] ) ) {
			return false;
		}

		echo call_user_func( $shortcode_tags[$tag], $atts, $content, $tag );
	}

	public static function is_edit() {
		return ( Plugin::instance()->editor->is_edit_mode() ||
			Plugin::instance()->preview->is_preview_mode() ||
			is_preview() );
	}
}
