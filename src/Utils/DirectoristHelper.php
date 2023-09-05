<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

class DirectoristHelper {

	public static function is_multi_directory_enabled(): bool {
		$directory_types = DirectoristTaxonomies::listing_types();
		$multi_directory = get_directorist_option( 'enable_multi_directory', false );

		return ( 1 < count( $directory_types ) ) && $multi_directory ? true : false;
	}
}
