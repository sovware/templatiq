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

	public static function log( $data, string $prefix = '' ): void {
		$_data = '';
		if ( is_array( $data ) || is_object( $data ) ) {
			$_data = print_r( $data, true );
		} else {
			$_data = $data;
		}

		if ( $prefix ) {
			error_log( $prefix . ':' . $_data );
		} else {
			error_log( $_data );
		}
	}

	public static function get_ip(): string {
		$ip = '127.0.0.1'; // Local IP
		if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
			$ip = ! empty( $_SERVER['REMOTE_ADDR'] ) ? $_SERVER['REMOTE_ADDR'] : $ip;
		}

		return sanitize_text_field( $ip );
	}
}
