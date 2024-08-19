<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Utils\Singleton;

class Settings {
	use Singleton;

	/**
	 * Get single setting value
	 *
	 * @param  string $key      Setting key.
	 * @param  mixed  $defaults Setting value.
	 * @return mixed           Stored setting value.
	 */
	public function get_setting( $key = '', $defaults = '' ) {

		$settings = $this->get_settings();

		if ( empty( $settings ) ) {
			return $defaults;
		}

		if ( array_key_exists( $key, $settings ) ) {
			return $settings[$key];
		}

		return $defaults;
	}

	public function get_settings() {

		$defaults = [
			'page_builder' => '',
		];

		$stored_data = get_option( 'templatiq_sites_settings', $defaults );

		return wp_parse_args( $stored_data, $defaults );
	}
}