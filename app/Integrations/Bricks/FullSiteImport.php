<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Bricks;

use Templatiq\Repositories\LoggingRepository;
use Templatiq\Utils\Singleton;

class FullSiteImport {
	use Singleton;

	public function __construct() {
		add_action( 'templatiq_wxr_importer.processed.term', [$this, 'add_menu_mapping'], 10, 2 );
		add_action( 'templatiq_full_template_import_complete', [$this, 'change_menu_id'] );
		add_action( 'templatiq_full_template_import_complete', [$this, 'remove_mappings_after_complete'] );
	}

	public function change_menu_id() {
		$menu_ref = get_option( '_templatiq_imported_bricks_nav_menu', [] );
		if ( empty( $menu_ref ) ) {
			return;
		}

		$bricks_templates = get_posts( ['post_type' => 'bricks_template'] );

		// Update Header & Footer Menu IDs
		foreach ( $bricks_templates as $template ) {
			$this->replace_menu_id( $template->ID, '_bricks_page_header_2', $menu_ref );
			$this->replace_menu_id( $template->ID, '_bricks_page_footer_2', $menu_ref );
		}
	}

	private function replace_menu_id( $post_id, $meta_key, $menu_ref ) {
		$meta_value = get_post_meta( $post_id, $meta_key, true );
		if ( ! $meta_value ) {
			return;
		}

		foreach ( $meta_value as &$item ) {

			if ( isset( $item['name'] ) && 'nav-menu' === $item['name'] ) {

				if ( isset( $item['settings']['menu'] ) && isset( $menu_ref[$item['settings']['menu']] ) ) {

					$old_menu_id              = $item['settings']['menu'];
					$item['settings']['menu'] = $menu_ref[$old_menu_id];

					LoggingRepository::add( 'Full Site Importing - Bricks', 'Updated menu ID from ' . $old_menu_id . ' to ' . $item['settings']['menu'] );
				}
			}
		}

		update_post_meta( $post_id, $meta_key, $meta_value );
	}

	public function add_menu_mapping( $term_id, $data ) {
		if ( ! empty( $data['taxonomy'] ) && 'nav_menu' === $data['taxonomy'] ) {
			$demo_id          = $data['id'];
			$_menus           = get_option( '_templatiq_imported_bricks_nav_menu', [] );
			$_menus[$demo_id] = $term_id;

			update_option( '_templatiq_imported_bricks_nav_menu', $_menus );
		}
	}

	public function remove_mappings_after_complete() {
		delete_option( '_templatiq_imported_bricks_nav_menu' );
	}
}