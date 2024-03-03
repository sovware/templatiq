<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullSite;

use Templatiq\Utils\Singleton;
use Templatiq_Sites_Image_Importer;
use Templatiq_WXR_Importer;
use WP_Query;

class OptionsImport {
	use Singleton;

	private static function site_options() {
		return [
			'custom_logo',
			'nav_menu_locations',
			'show_on_front',
			'page_on_front',
			'page_for_posts',

			// Plugin: Elementor.
			'elementor_container_width',
			'elementor_cpt_support',
			'elementor_css_print_method',
			'elementor_default_generic_fonts',
			'elementor_disable_color_schemes',
			'elementor_disable_typography_schemes',
			'elementor_editor_break_lines',
			'elementor_exclude_user_roles',
			'elementor_global_image_lightbox',
			'elementor_page_title_selector',
			'elementor_scheme_color',
			'elementor_scheme_color-picker',
			'elementor_scheme_typography',
			'elementor_space_between_widgets',
			'elementor_stretched_section_container',
			'elementor_load_fa4_shim',

			// Templatiq Theme Global Color Palette and Typography Preset options.
			'templatiq-color-palettes',
			'templatiq-typography-presets',

			// Plugin: Directorist.
			'atbdp_option',
			'atbdp_roles_mapped',
			'atbdp_has_multidirectory',
			'directorist_setup_wizard_completed',
		];
	}

	public function import_options( $options = [] ) {
		if ( ! isset( $options ) ) {
			return;
		}

		foreach ( $options as $option_name => $option_value ) {

			if ( null !== $option_value ) {
				if ( in_array( $option_name, self::site_options(), true ) ) {

					switch ( $option_name ) {

						case 'page_for_posts':
						case 'page_on_front':
							$this->update_page_id_by_option_value( $option_name, $option_value );
							break;

						case 'nav_menu_locations':
							$this->set_nav_menu_locations( $option_value );
							break;

						case 'custom_logo':
							$this->insert_logo( $option_value );
							break;

						default:
							update_option( $option_name, $option_value );
							break;
					}
				}
			}
		}
	}

	public function get_page_by_title( $post_title, $post_type ) {
		$page  = [];
		$query = new WP_Query(
			[
				'post_type'              => $post_type,
				'title'                  => $post_title,
				'posts_per_page'         => 1,
				'no_found_rows'          => true,
				'ignore_sticky_posts'    => true,
				'update_post_term_cache' => false,
				'update_post_meta_cache' => false,
			]
		);
		if ( $query->have_posts() ) {
			$page = $query->posts[0];
		}

		return $page;
	}

	private function update_page_id_by_option_value( $option_name, $option_value ) {
		if ( empty( $option_value ) ) {
			return;
		}

		$page = $this->get_page_by_title( $option_value, 'page' );

		if ( is_object( $page ) ) {
			update_option( $option_name, $page->ID );
		}
	}

	private function set_nav_menu_locations( $nav_menu_locations = [] ) {
		$menu_locations = [];

		if ( isset( $nav_menu_locations ) ) {

			foreach ( $nav_menu_locations as $menu => $value ) {

				$term = get_term_by( 'slug', $value, 'nav_menu' );

				if ( is_object( $term ) ) {
					$menu_locations[$menu] = $term->term_id;
				}
			}

			set_theme_mod( 'nav_menu_locations', $menu_locations );
		}
	}

	private function insert_logo( $image_url = '' ) {
		$downloaded_image = Templatiq_Sites_Image_Importer::get_instance()->import(
			[
				'url' => $image_url,
				'id'  => 0,
			]
		);

		if ( $downloaded_image['id'] ) {
			Templatiq_WXR_Importer::instance()->track_post( $downloaded_image['id'] );
			set_theme_mod( 'custom_logo', $downloaded_image['id'] );
			update_option( 'site_logo', $downloaded_image['id'] );

			error_log( 'Logo Set from insert_logo()' . $downloaded_image['id'] . $image_url );
		}
	}
}