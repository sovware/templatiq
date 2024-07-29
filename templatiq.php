<?php
defined( 'ABSPATH' ) || exit;

/**
 * Plugin Name: Templatiq
 * Description: The Ultimate Templates | Craft beautiful website in no time
 * Author: wpWax
 * Author URI: https://wpwax.com
 * Version: 1.0.0
 * License: GPLv2 or later
 * Requires PHP: 7.4
 * Text Domain: templatiq
 * Domain Path: /languages
 */

include __DIR__ . '/vendor/autoload.php';

final class Templatiq {
	private static Templatiq $instance;

	public static function instance(): Templatiq {
		if ( empty( self::$instance ) ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	public function load() {
		register_activation_hook(
			__FILE__, function () {
				( new \Templatiq\Setup\Activation() )->boot( __FILE__ );
			}
		);

		register_deactivation_hook(
			__FILE__, function () {
				( new \Templatiq\Setup\Deactivation() )->execute();
			}
		);

		$application = \Templatiq\Boot\App::instance();
		$application->boot( __FILE__, __DIR__ );

		add_action(
			'plugins_loaded', function () use ( $application ): void {

				do_action( 'templatiq_before_load' );

				$application->load();

				do_action( 'templatiq_after_load' );
			}
		);
	}
}

Templatiq::instance()->load();