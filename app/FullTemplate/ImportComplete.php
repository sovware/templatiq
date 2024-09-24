<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

class ImportComplete {
	public static $instance = null;

	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct() {
		add_action( 'templatiq_full_template_import_complete', [$this, 'templatiq_import_end'] );
	}

	public function templatiq_import_end() {
		$this->update_menu_links();
		$this->update_menu_refs();
		$this->update_logo_width();

		update_option( 'permalink_structure', "/%postname%/" );
	}

	public function update_menu_links() {
		$menu_ref = get_option( '_templatiq_imported_menu_map', [] );
		if ( empty( $menu_ref ) ) {
			return;
		}

		$demo_url = templatiq_get_site_data( 'templatiq-site-url' );
		$site_url = site_url() . '/';

		foreach ( $menu_ref as $menu_id ) {
			$post = get_post( $menu_id );

			if ( ! isset( $post->post_content ) ) {
				continue;
			}

			$post->post_content = str_replace( $demo_url, $site_url, $post->post_content );
			wp_update_post( $post );

			// error_log( 'Menu Demo URL Replaced with Current Site => #' . $menu_id );
		}
	}

	public function update_menu_refs() {
		$menu_ref  = get_option( '_templatiq_imported_menu_map', [] );
		$templates = get_option( '_templatiq_imported_template_parts', [] );

		if ( empty( $menu_ref ) || empty( $templates ) ) {
			return;
		}

		foreach ( $templates as $template_id ) {
			$post = get_post( $template_id );
			if ( ! isset( $post->post_content ) ) {
				continue;
			}

			foreach ( $menu_ref as $old_id => $new_id ) {
				$post->post_content = $this->menu_id_replace( $post->post_content, $old_id, $new_id );
				wp_update_post( $post );
			}

			// error_log( 'Main Menu Replaced by Demo one template id => #' . $template_id );
		}
	}

	public function update_logo_width() {
		$width     = get_option( '_templatiq_logo_width', '40' );
		$templates = get_option( '_templatiq_imported_template_parts', [] );

		if ( empty( $width ) || empty( $templates ) ) {
			return;
		}

		foreach ( $templates as $template_id ) {
			$post = get_post( $template_id );
			if ( ! isset( $post->post_content ) ) {
				continue;
			}

			$post->post_content = $this->update_site_logo_width( $post->post_content, $width );
			wp_update_post( $post );

			// error_log( 'Logo replaced => #' . $template_id );
		}
	}

	public function update_site_logo_width( string $content, int $width ) {
		if ( strpos( $content, 'wp:site-logo' ) !== false ) {
			$content = preg_replace(
				'/<!-- wp:site-logo {"width":\d+/',
				'<!-- wp:site-logo {"width":' . $width,
				$content
			);
		}

		return $content;
	}

	public function menu_id_replace( $data, $old_id, $new_id ) {
		$find            = sprintf( '"ref":%d', $old_id );
		$replace         = sprintf( '"ref":%d', $new_id );
		$updated_content = str_replace( $find, $replace, $data );

		return $updated_content;
	}
}