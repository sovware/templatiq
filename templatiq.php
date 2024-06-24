<?php
/**
 * Plugin Name: Templatiq
 * Description: The Ultimate Templates on WordPress | Craft beautiful website in no time
 * Author: wpWax
 * Author URI: https://wpwax.com
 * Version: 1.0.0
 * License: GPL2
 * Requires PHP: 7.4
 * Text Domain: templatiq
 * Domain Path: /languages
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
				( new \Templatiq\Setup\Activation() )->execute();
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

				do_action( 'before_load_templatiq' );

				$application->load();

				do_action( 'after_load_templatiq' );
			}
		);
	}
}

Templatiq::instance()->load();