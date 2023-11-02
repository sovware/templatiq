<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Utils;

use Plugin_Upgrader;
use WP_Ajax_Upgrader_Skin;
use WP_Filesystem_Base;

class Plugin {
	public static function activate( string $file ) {
		if ( ! current_user_can( 'activate_plugin', $file ) || ! is_plugin_inactive( $file ) ) {
			return false;
		}

		$result = activate_plugin( $file, false, false );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		return true;
	}

	/**
	 * Pass a list of required plugins
	 * the array structure would be like this
	 * [
	 * 	[
	 * 		name : Elementor PRO
	 * 		file_name: elementor-pro/elementor-pro.php
	 * 		slug: elementor-pro
	 * 		is_pro : true
	 * 	],
	 *  [
	 * 		name : Directorist
	 * 		file_name: directorist/directorist-base.php
	 * 		slug: directorist
	 * 		is_pro : false
	 * 	]
	 * ]
	 *
	 * return inactive plugins
	 */
	public static function dependencies( array $plugins ): array {
		$_inactive = [];
		$_plugins  = self::get();

		if ( empty( $plugins ) ) {
			return $_inactive;
		}

		foreach ( $plugins as $plugin ) {

			if ( ! is_array( $plugin ) || ! isset( $plugin['file_name'] ) ) {
				continue;
			}

			$plugin = (object) $plugin;
			if ( null === $plugin->file_name || self::is_active( $plugin->file_name ) ) {
				continue;
			}

			if ( $plugin->is_pro ) {
				if ( isset( $_plugins[$plugin->file_name] ) ) {
					unset( $plugin->is_pro );
					$plugin->message = __( 'You have the plugin installed.', 'template-market' );
				}
			}

			$_inactive[] = $plugin;
		}

		return $_inactive;
	}

	public static function get(): array {
		self::includes();

		return get_plugins();
	}

	public static function is_active( string $plugin ): bool {
		self::includes();

		return is_plugin_active( $plugin );
	}

	public static function installer( array $plugin ): array {
		self::includes();
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

		$response = ['success' => false];

		$_plugins     = self::get();
		$is_installed = isset( $_plugins[$plugin['file_name']] );

		if ( isset( $plugin['is_pro'] ) && true === $plugin['is_pro'] ) {
			if ( ! $is_installed ) {
				$status['code']    = 'pro_plugin';
				$status['message'] = 'Pro Plugin';
			}
		}

		if ( ! $is_installed ) {
			$api = plugins_api(
				'plugin_information',
				[
					'slug'   => sanitize_key( wp_unslash( $plugin['slug'] ) ),
					'fields' => [
						'sections' => false,
					],
				]
			);

			if ( is_wp_error( $api ) ) {
				$response['message'] = $api->get_error_message();

				return $response;
			}

			$response['name'] = $api->name;

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$result   = $upgrader->install( $api->download_link );

			if ( is_wp_error( $result ) ) {
				$response['code']    = $result->get_error_code();
				$response['message'] = $result->get_error_message();

				return $response;
			} elseif ( is_wp_error( $skin->result ) ) {
				$response['code']    = $skin->result->get_error_code();
				$response['message'] = $skin->result->get_error_message();

				return $response;
			} elseif ( $skin->get_errors()->has_errors() ) {
				$response['message'] = $skin->get_error_messages();

				return $response;
			} elseif ( null === $result ) {
				global $wp_filesystem;
				$response['code']    = 'unable_to_connect_to_filesystem';
				$response['message'] = __( 'Unable to connect to the filesystem. Please confirm your credentials.' );

				if ( $wp_filesystem instanceof WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->has_errors() ) {
					$response['message'] = esc_html( $wp_filesystem->errors->get_error_message() );
				}

				return $response;
			}

			$install_status      = install_plugin_install_status( $api );
			$plugin['file_name'] = $install_status['file'];
		}

		$activate_status = self::activate( $plugin['file_name'] );
		if ( $activate_status && ! is_wp_error( $activate_status ) ) {
			$response['success'] = true;
		}

		$response['slug'] = $plugin['slug'];

		return $response;
	}

	public static function includes(): void {
		if ( ! function_exists( 'is_plugin_active' ) || ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
	}
}