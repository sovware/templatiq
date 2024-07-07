<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

class SiteData {

	public function update_logo( $logo_id, $width ) {
		if ( $logo_id ) {
			set_theme_mod( 'custom_logo', sanitize_text_field( $logo_id ) );
			update_option( 'site_logo', $logo_id );
			update_option( '_templatiq_logo_width', sanitize_text_field( $width ) );
		}
	}
}