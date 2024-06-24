<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Plugin_Upgrader;
use Templatiq\DTO\PluginDTO;
use WP_Ajax_Upgrader_Skin;
use WP_Filesystem_Base;

class DependencyRepository {
	private string $theme_slug = 'Pixetiq';

	private function activate( string $file ) {
		if ( ! is_plugin_inactive( $file ) ) {
			throw new \Exception(
				__( "This plugin already activated", 'templatiq' ),
				401
			);
		}

		$result = activate_plugin( $file, false, false );

		if ( is_wp_error( $result ) ) {
			throw new \Exception(
				__( "Can't install this plugin", 'templatiq' ),
				401
			);
		}

		return true;
	}

	public function dependencies( PluginDTO ...$pluginDTOs ) {
		$_inactive = [];
		$_plugins  = $this->get();

		if ( empty( $pluginDTOs ) ) {
			return $_inactive;
		}

		foreach ( $pluginDTOs as $plugin ) {
			if (
				! $plugin->get_file_name()
				|| $this->is_active( $plugin->get_file_name() )
			) {
				continue;
			}

			if ( $plugin->get_is_pro() ) {
				if ( isset( $_plugins[$plugin->get_file_name()] ) ) {
					unset( $plugin->is_pro );
					$plugin->message = __( 'You have to install this plugin manually.', 'templatiq' );
				}
			}

			$_inactive[] = $plugin->to_array();
		}

		return $_inactive;
	}

	private function get(): array {
		$this->includes();

		return get_plugins();
	}

	public function is_active( string $plugin ): bool {
		$this->includes();

		return is_plugin_active( $plugin );
	}

	public function installer( PluginDTO $plugin ) {
		$this->includes();
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

		$_plugins     = $this->get();
		$is_installed = isset( $_plugins[$plugin->get_file_name()] );

		if ( $plugin->get_is_pro() && ! $is_installed ) {
			throw new \Exception(
				__( "Can't install pro plugin, have to install it manually first", 'templatiq' ),
				401
			);
		}

		if ( ! $is_installed ) {
			$api = plugins_api(
				'plugin_information',
				[
					'slug'   => sanitize_key( wp_unslash( $plugin->get_slug() ) ),
					'fields' => [
						'sections' => false,
					],
				]
			);

			if ( is_wp_error( $api ) ) {
				throw new \Exception(
					$api->get_error_message(),
					$status_code
				);
			}

			$errors = [];

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$result   = $upgrader->install( $api->download_link );

			if ( is_wp_error( $result ) ) {
				$errors['code']    = $result->get_error_code();
				$errors['message'] = $result->get_error_message();
			} elseif ( is_wp_error( $skin->result ) ) {
				$errors['code']    = $skin->result->get_error_code();
				$errors['message'] = $skin->result->get_error_message();
			} elseif ( $skin->get_errors()->has_errors() ) {
				$errors['code']    = 'skin_errors';
				$errors['message'] = $skin->get_error_messages();
			} elseif ( null === $result ) {
				global $wp_filesystem;

				$errors['code']    = 'unable_to_connect_to_filesystem';
				$errors['message'] = __( 'Unable to connect to the filesystem. Please confirm your credentials.', 'templatiq' );

				if ( $wp_filesystem instanceof WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->has_errors() ) {
					$errors['message'] = esc_html( $wp_filesystem->errors->get_error_message() );
				}
			}

			if ( ! empty( $errors ) ) {
				throw new \Exception(
					$errors['message'],
					$errors['code']
				);
			}

			$install_status = install_plugin_install_status( $api );
			$plugin->set_file_name( $install_status['file'] );
		}

		$activate_status = $this->activate( $plugin->get_file_name() );

		if ( is_wp_error( $activate_status ) ) {
			throw new \Exception(
				$activate_status->get_error_message(),
				$activate_status->get_error_code()
			);
		}

		return [
			'success' => true,
			'slug'    => $plugin->get_slug(),
		];
	}

	public function includes(): void {
		if ( ! function_exists( 'is_plugin_active' ) || ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
	}

	public function get_theme_status(): string {
		$theme = wp_get_theme();

		// Theme installed and activate.
		if ( $this->theme_slug === $theme->Name || $this->theme_slug === $theme->parent_theme ) {
			return 'installed-and-active';
		}

		// Theme installed but not activate.
		foreach ( (array) wp_get_themes() as $theme_dir => $theme ) {
			if ( $this->theme_slug === $theme->Name || $this->theme_slug === $theme->parent_theme ) {
				return 'installed-but-inactive';
			}
		}

		return 'not-installed';
	}

	public function activate_theme() {
		switch_theme( 'pixetiq' );
	}
}