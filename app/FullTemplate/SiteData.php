<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

class SiteData {

	public function update_logo() {
		$logo_id = isset( $_POST['logo'] ) ? sanitize_text_field( $_POST['logo'] ) : '';
		$width   = isset( $_POST['logo-width'] ) ? sanitize_text_field( $_POST['logo-width'] ) : '';

		if ( $logo_id ) {
			set_theme_mod( 'custom_logo', $logo_id );
			update_option( 'site_logo', $logo_id );
			update_option( '_templatiq_logo_width', $width );
		}
	}

	public function update_colors() {
		$palette = isset( $_POST['palette'] ) ? (array) json_decode( stripslashes( $_POST['palette'] ) ) : [];
		$colors  = isset( $palette['colors'] ) ? (array) $palette['colors'] : [];

		if ( ! empty( $colors ) ) {
			error_log( 'Site Colors Added  from set_site_data()' );
		}
	}

	public function update_typography() {
		$typography = isset( $_POST['typography'] ) ? (array) json_decode( stripslashes( $_POST['typography'] ) ) : '';

		$font_size_body = isset( $typography['font-size-body'] ) ? (array) $typography['font-size-body'] : '';
		if ( ! empty( $font_size_body ) && is_array( $font_size_body ) ) {
			// templatiq_update_option( 'font-size-body', $font_size_body );
		}

		if ( ! empty( $typography['body-font-family'] ) ) {
			// templatiq_update_option( 'body-font-family', $typography['body-font-family'] );
		}

		if ( ! empty( $typography['body-font-variant'] ) ) {
			// templatiq_update_option( 'body-font-variant', $typography['body-font-variant'] );
		}

		if ( ! empty( $typography['body-font-weight'] ) ) {
			// templatiq_update_option( 'body-font-weight', $typography['body-font-weight'] );
		}

		if ( ! empty( $typography['body-line-height'] ) ) {
			// templatiq_update_option( 'body-line-height', $typography['body-line-height'] );
		}

		if ( ! empty( $typography['headings-font-family'] ) ) {
			// templatiq_update_option( 'headings-font-family', $typography['headings-font-family'] );
		}

		if ( ! empty( $typography['headings-font-weight'] ) ) {
			// templatiq_update_option( 'headings-font-weight', $typography['headings-font-weight'] );
		}

		if ( ! empty( $typography['headings-line-height'] ) ) {
			// templatiq_update_option( 'headings-line-height', $typography['headings-line-height'] );
		}

		if ( ! empty( $typography['headings-font-variant'] ) ) {
			// templatiq_update_option( 'headings-font-variant', $typography['headings-font-variant'] );
		}

		error_log( 'Site Typography Added' );
	}
}