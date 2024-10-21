<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Config {

	public static function get( string $name ): string {
		$config = [
			'version'     => '0.1.2',
			'environment' => 'production',
			'could_base'  => 'https://templatiq.com/',
		];

		$config = array_merge( $config, self::get_dev_config() );

		return $config[$name] ?? '';
	}

	public static function get_dev_config() {
		$file = TEMPLATIQ_PATH . DIRECTORY_SEPARATOR . "config.dev.php";

		if ( file_exists( $file ) ) {
			$config = ( include $file );
			if ( ! isset( $config["version"] ) ) {
				return [];
			}

			return $config;
		}

		return [];
	}
}