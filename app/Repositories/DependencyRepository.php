<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Plugin_Upgrader;
use Templatiq\DTO\PluginDTO;
use Templatiq\Utils\Options;
use WP_Ajax_Upgrader_Skin;
use WP_Filesystem_Base;

class DependencyRepository {
	private string $theme_slug = 'Pixetiq';

	private function activate( string $file ) {
		if ( ! is_plugin_inactive( $file ) ) {
			throw new \Exception(
				esc_html__( "This plugin already activated", 'templatiq' ),
				401
			);
		}

		$result = activate_plugin( $file, false, false );

		if ( is_wp_error( $result ) ) {
			throw new \Exception(
				esc_html__( "Can't install this plugin", 'templatiq' ),
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
					// error_log( print_r($plugin ,true) );
					// unset( $plugin->is_pro );
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
				esc_html__( "Can't install pro plugin, have to install it manually first", 'templatiq' ),
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
					esc_html( $api->get_error_message() ),
					esc_html( $status_code )
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
					esc_html( $errors['message'] ),
					esc_html( $errors['code'] )
				);
			}

			$install_status = install_plugin_install_status( $api );
			$plugin->set_file_name( $install_status['file'] );
		}

		$activate_status = $this->activate( $plugin->get_file_name() );

		if ( is_wp_error( $activate_status ) ) {
			throw new \Exception(
				esc_html( $activate_status->get_error_message() ),
				esc_html( $activate_status->get_error_code() )
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

	public function get_required_plugins_data( $response, $required_plugins ) {

		if ( ! empty( $required_plugins ) ) {
			foreach ( $required_plugins as $key => $plugin ) {
				$plugin = (array) $plugin;

				// Installed but Inactive.
				if ( file_exists( WP_PLUGIN_DIR . '/' . $plugin['init'] ) && is_plugin_inactive( $plugin['init'] ) ) {
					$link = wp_nonce_url(
						add_query_arg(
							[
								'action' => 'activate',
								'plugin' => $plugin['init'],
							],
							admin_url( 'plugins.php' )
						),
						'activate-plugin_' . $plugin['init']
					);
					$link                   = str_replace( '&amp;', '&', $link );
					$plugin['action']       = $link;
					$response['inactive'][] = $plugin;

					$this->get_unlocked_extensions();

					// Not Installed.
				} elseif ( ! file_exists( WP_PLUGIN_DIR . '/' . $plugin['init'] ) ) {

					$unlocked_extensions = $this->get_unlocked_extensions();

					if ( isset( $unlocked_extensions[$plugin['slug']] ) ) {
						$link                   = $unlocked_extensions[$plugin['slug']];
						$plugin['pro_unlocked'] = true;
					} else {

						$link = wp_nonce_url(
							add_query_arg(
								[
									'action' => 'install-plugin',
									'plugin' => $plugin['slug'],
								],
								admin_url( 'update.php' )
							),
							'install-plugin_' . $plugin['slug']
						);

						$link = str_replace( '&amp;', '&', $link );
					}

					$plugin['action']           = $link;
					$response['notinstalled'][] = $plugin;

					// Active.
				} else {
					$response['active'][] = $plugin;
					$options              = templatiq_get_site_data( 'templatiq-site-options-data' );
					$this->after_plugin_activate( $plugin['init'], $options );
				}
			}
		}

		// Checking the `install_plugins` and `activate_plugins` capability for the current user.
		// To perform plugin installation process.
		if (
			( ! defined( 'WP_CLI' ) && wp_doing_ajax() )
			&& ( ( ! current_user_can( 'install_plugins' ) && ! empty( $response['notinstalled'] ) )
				|| ( ! current_user_can( 'activate_plugins' ) && ! empty( $response['inactive'] ) )
			)
		) {
			$message               = __( 'Insufficient Permission. Please contact your Super Admin to allow the install required plugin permissions.', 'templatiq' );
			$required_plugins_list = array_merge( $response['notinstalled'], $response['inactive'] );
			$markup                = $message;
			$markup .= '<ul>';
			foreach ( $required_plugins_list as $key => $required_plugin ) {
				$markup .= '<li>' . esc_html( $required_plugin['name'] ) . '</li>';
			}
			$markup .= '</ul>';

			wp_send_json_error( $markup );
		}

		$data = [
			'required_plugins' => $response,
		];

		return $data;
	}

	public function after_plugin_activate( $plugin_init = '', $options = [] ) {
		$data = [
			'templatiq_site_options' => $options,
		];

		do_action( 'templatiq_sites_after_plugin_activation', $plugin_init, $data );
	}

	public function get_unlocked_extensions(): array {
		$account_data = Options::get( 'account_data', [] );
		$extensions   = $account_data['unlocked_extensions'] ?? [];

		if ( empty( $extensions ) ) {
			return [];
		}

		return $extensions;
	}

	public function install_self_hosted_plugin( array $args = [] ) {
		$status = ['success' => false];

		$default = [
			'url'                => '',
			'init_wp_filesystem' => true,
		];
		$args = array_merge( $default, $args );

		$allowed_host = ['directorist.com', 'wordpress.org', 'downloads.wordpress.org'];

		if ( empty( $args['url'] ) || ! in_array( parse_url( $args['url'], PHP_URL_HOST ), $allowed_host, true ) ) {
			$status['success'] = false;
			$status['message'] = __( 'Invalid download link', 'templatiq' );

			return $status;
		}

		global $wp_filesystem;

		if ( $args['init_wp_filesystem'] ) {

			if ( ! function_exists( 'WP_Filesystem' ) ) {
				include ABSPATH . 'wp-admin/includes/file.php';
			}

			WP_Filesystem();
		}

		$plugin_path = WP_CONTENT_DIR . '/plugins';
		$temp_dest   = "{$plugin_path}/atbdp-temp-dir";
		$file_url    = $args['url'];
		$file_name   = basename( $file_url );
		$tmp_file    = download_url( $file_url );

		if ( ! is_string( $tmp_file ) ) {
			$status['success']  = false;
			$status['tmp_file'] = $tmp_file;
			$status['file_url'] = $file_url;
			$status['message']  = 'Could not download the file';

			return $status;
		}

		// Make Temp Dir
		if ( $wp_filesystem->exists( $temp_dest ) ) {
			$wp_filesystem->delete( $temp_dest, true );
		}

		$wp_filesystem->mkdir( $temp_dest );

		if ( ! file_exists( $temp_dest ) ) {
			$status['success'] = false;
			$status['message'] = __( 'Could not create temp directory', 'templatiq' );

			return $status;
		}

		// Sets file temp destination.
		$file_path = "{$temp_dest}/{$file_name}";

		set_error_handler(
			function ( $errno, $errstr, $errfile, $errline ) {
				// error was suppressed with the @-operator
				if ( 0 === error_reporting() ) {
					return false;
				}

				throw new \ErrorException( $errstr, 0, $errno, $errfile, $errline );
			}
		);

		// Copies the file to the final destination and deletes temporary file.
		try {
			copy( $tmp_file, $file_path );
		} catch ( \Exception $e ) {
			$status['success'] = false;
			$status['message'] = $e->getMessage();

			return $status;
		}

		@unlink( $tmp_file );
		unzip_file( $file_path, $temp_dest );

		if ( "{$plugin_path}/" !== $file_path || $file_path !== $plugin_path ) {
			@unlink( $file_path );
		}

		$extracted_file_dir = glob( "{$temp_dest}/*", GLOB_ONLYDIR );

		foreach ( $extracted_file_dir as $dir_path ) {
			$dir_name  = basename( $dir_path );
			$dest_path = "{$plugin_path}/{$dir_name}";

			// Delete Previous Files if Exists
			if ( $wp_filesystem->exists( $dest_path ) ) {
				$wp_filesystem->delete( $dest_path, true );
			}
		}

		copy_dir( $temp_dest, $plugin_path );
		$wp_filesystem->delete( $temp_dest, true );

		$status['success'] = true;
		$status['message'] = __( 'The plugin has been downloaded successfully', 'templatiq' );

		return $status;
	}
}