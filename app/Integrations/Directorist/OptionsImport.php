<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

class OptionsImport {

	private static function site_options() {
		return [
			'atbdp_option',
			'atbdp_roles_mapped',
			'atbdp_has_multidirectory',
			'directorist_setup_wizard_completed',
		];
	}

	public function import_options( $options ) {
		if ( ! isset( $options ) ) {
			return;
		}

		foreach ( $options as $option_name => $option_value ) {

			if ( null !== $option_value ) {
				if ( in_array( $option_name, self::site_options(), true ) ) {

					switch ( $option_name ) {

						case 'atbdp_option':
							$this->persona_wise_settings( $option_name, $option_value );
							break;

						default:
							update_option( $option_name, $option_value );
							break;
					}
				}
			}
		}
	}

	private function persona_wise_settings( $option_name, $option_value ) {
		$existing_option = get_option( $option_name );

		if ( ! $existing_option ) {
			update_option( $option_name, $option_value );

			return;
		}

		$mapping       = get_option( 'templatiq_imported_items_mapping' );
		$pages_mapping = $mapping['post'] ?? [];

		$pages_to_update = [
			'search_listing', 'search_result_page', 'add_listing_page', 'all_listing_page',
			'single_category_page', 'single_location_page', 'single_tag_page',
			'author_profile_page', 'user_dashboard', 'custom_registration', 'user_login',
		];

		foreach ( $pages_to_update as $page ) {
			if ( isset( $option_value[$page] ) && isset( $pages_mapping[$option_value[$page]] ) ) {
				$option_value[$page] = $pages_mapping[$option_value[$page]];
			}
		}

		update_option( $option_name, $option_value );
	}
}