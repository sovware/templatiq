<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

class Repository {

	public function get_log_file_path() {
		$log_file = get_option( 'templatiq_sites_recent_import_log_file', false );
		if ( ! empty( $log_file ) && isset( $log_file ) ) {
			return str_replace( ABSPATH, esc_url( site_url() ) . '/', $log_file );
		}

		return "";
	}

	public function get_php_version() {
		if ( defined( 'PHP_MAJOR_VERSION' ) && defined( 'PHP_MINOR_VERSION' ) && defined( 'PHP_RELEASE_VERSION' ) ) { // phpcs:ignore
			return PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION . '.' . PHP_RELEASE_VERSION;
		}

		return phpversion();
	}

	public function report( $data ) {
		$id                = isset( $data['id'] ) ? absint( $data['id'] ) : 0;
		$import_attempts   = isset( $data['import_attempts'] ) ? absint( $data['import_attempts'] ) : 0;
		$import_status     = isset( $data['import_status'] ) ? sanitize_text_field( $data['import_status'] ) : 'true';
		$type              = isset( $data['type'] ) ? sanitize_text_field( $data['type'] ) : 'templatiq-sites';
		$page_builder      = isset( $data['page_builder'] ) ? sanitize_text_field( $data['page_builder'] ) : 'gutenberg';
		$exit_intend       = isset( $data['exit_intend'] ) ? sanitize_text_field( $data['exit_intend'] ) : 'false';
		$user_agent_string = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( $_SERVER['HTTP_USER_AGENT'] ) : '';

		$api_args = [
			'timeout'  => 3,
			'blocking' => true,
			'body'     => [
				'url'             => esc_url( site_url() ),
				'import_status'   => $import_status,
				'id'              => $id,
				'import_attempts' => $import_attempts,
				'version'         => TEMPLATIQ_VERSION,
				'type'            => $type,
				'builder'         => $page_builder,
				'user_agent'      => $user_agent_string,
				'exit_intend'     => $exit_intend,
			],
		];

		$request = wp_remote_post( ( new FullTemplate )->import_analytics_url, $api_args );

		if ( is_wp_error( $request ) ) {
			return [
				'status' => false,
				'data'   => $request,
			];
		}

		$code = (int) wp_remote_retrieve_response_code( $request );
		$data = json_decode( wp_remote_retrieve_body( $request ), true );

		if ( 200 === $code ) {
			return [
				'status' => true,
				'data'   => $data,
			];
		}

		return [
			'status' => false,
			'data'   => $data,
		];
	}

	public function get_required_plugins_data( $response, $required_plugins ) {

		$learndash_course_grid = 'https://www.learndash.com/add-on/course-grid/';
		$learndash_woocommerce = 'https://www.learndash.com/add-on/woocommerce/';
		if ( is_plugin_active( 'sfwd-lms/sfwd_lms.php' ) ) {
			$learndash_addons_url  = admin_url( 'admin.php?page=learndash_lms_addons' );
			$learndash_course_grid = $learndash_addons_url;
			$learndash_woocommerce = $learndash_addons_url;
		}

		$third_party_required_plugins = [];
		$third_party_plugins          = [
			'sfwd-lms'              => [
				'init' => 'sfwd-lms/sfwd_lms.php',
				'name' => 'LearnDash LMS',
				'link' => 'https://www.learndash.com/',
			],
			'learndash-course-grid' => [
				'init' => 'learndash-course-grid/learndash_course_grid.php',
				'name' => 'LearnDash Course Grid',
				'link' => $learndash_course_grid,
			],
			'learndash-woocommerce' => [
				'init' => 'learndash-woocommerce/learndash_woocommerce.php',
				'name' => 'LearnDash WooCommerce Integration',
				'link' => $learndash_woocommerce,
			],
		];

		$plugin_updates           = get_plugin_updates();
		$update_available_plugins = [];
		$incompatible_plugins     = [];

		if ( ! empty( $required_plugins ) ) {
			$php_version = ( new Repository )->get_php_version();
			foreach ( $required_plugins as $key => $plugin ) {

				$plugin = (array) $plugin;

				if ( 'woocommerce' === $plugin['slug'] && version_compare( $php_version, '7.0', '<' ) ) {
					$plugin['min_php_version'] = '7.0';
					$incompatible_plugins[]    = $plugin;
				}

				if ( 'presto-player' === $plugin['slug'] && version_compare( $php_version, '7.3', '<' ) ) {
					$plugin['min_php_version'] = '7.3';
					$incompatible_plugins[]    = $plugin;
				}

				/**
				 * Has Pro Version Support?
				 * And
				 * Is Pro Version Installed?
				 */
				$plugin_pro = $this->pro_plugin_exist( $plugin['init'] );
				if ( $plugin_pro ) {

					if ( array_key_exists( $plugin_pro['init'], $plugin_updates ) ) {
						$update_available_plugins[] = $plugin_pro;
					}

					// Pro - Active.
					if ( is_plugin_active( $plugin_pro['init'] ) ) {
						$response['active'][] = $plugin_pro;
						$this->after_plugin_activate( $plugin['init'] );
					} else {
						$response['inactive'][] = $plugin_pro;
					}
				} else {
					if ( array_key_exists( $plugin['init'], $plugin_updates ) ) {
						$update_available_plugins[] = $plugin;
					}

					// Lite - Installed but Inactive.
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

						// Lite - Not Installed.
					} elseif ( ! file_exists( WP_PLUGIN_DIR . '/' . $plugin['init'] ) ) {

						// Added premium plugins which need to install first.
						if ( array_key_exists( $plugin['slug'], $third_party_plugins ) ) {
							$third_party_required_plugins[] = $third_party_plugins[$plugin['slug']];
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
							$link                       = str_replace( '&amp;', '&', $link );
							$plugin['action']           = $link;
							$response['notinstalled'][] = $plugin;
						}

						// Lite - Active.
					} else {
						$response['active'][] = $plugin;
						$options              = templatiq_get_site_data( 'templatiq-site-options-data' );
						$this->after_plugin_activate( $plugin['init'], $options );
					}
				}
			}
		}

		// Checking the `install_plugins` and `activate_plugins` capability for the current user.
		// To perform plugin installation process.
		if (
			( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) &&
			( ( ! current_user_can( 'install_plugins' ) && ! empty( $response['notinstalled'] ) ) || ( ! current_user_can( 'activate_plugins' ) && ! empty( $response['inactive'] ) ) ) ) {
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
			'required_plugins'             => $response,
			'third_party_required_plugins' => $third_party_required_plugins,
			'update_available_plugins'     => $update_available_plugins,
			'incompatible_plugins'         => $incompatible_plugins,
		];

		return $data;
	}

	public function pro_plugin_exist( $lite_version = '' ) {

		// Lite init => Pro init.
		$plugins = apply_filters(
			'templatiq_sites_pro_plugin_exist',
			[
				'beaver-builder-lite-version/fl-builder.php'                    => [
					'slug' => 'bb-plugin',
					'init' => 'bb-plugin/fl-builder.php',
					'name' => 'Beaver Builder Plugin',
				],
				'ultimate-addons-for-beaver-builder-lite/bb-ultimate-addon.php' => [
					'slug' => 'bb-ultimate-addon',
					'init' => 'bb-ultimate-addon/bb-ultimate-addon.php',
					'name' => 'Ultimate Addon for Beaver Builder',
				],
				'wpforms-lite/wpforms.php'                                      => [
					'slug' => 'wpforms',
					'init' => 'wpforms/wpforms.php',
					'name' => 'WPForms',
				],
			],
			$lite_version
		);

		if ( isset( $plugins[$lite_version] ) ) {

			// Pro plugin directory exist?
			if ( file_exists( WP_PLUGIN_DIR . '/' . $plugins[$lite_version]['init'] ) ) {
				return $plugins[$lite_version];
			}
		}

		return false;
	}

	public function after_plugin_activate( $plugin_init = '', $options = [] ) {
		$data = [
			'templatiq_site_options' => $options,
		];

		do_action( 'templatiq_sites_after_plugin_activation', $plugin_init, $data );
	}

	public function save_user_requirements( array $import_data ) {
		/**
		 * Make all the options as false
		 */
		update_option( 'templatiq-erase-existing-directorist-data', false );
		update_option( 'templatiq-erase-existing-imported-data', false );
		update_option( 'templatiq-import-directorist-listings', false );
		update_option( 'templatiq-install-contents-share-non-sensitive-data', false );

		if ( isset( $import_data['eraseExistingData'] ) && $import_data['eraseExistingData'] ) {
			( new \Templatiq\Integrations\Directorist\Repository() )->erase_existing_data();
			update_option( 'templatiq-erase-existing-directorist-data', true );
		}

		if ( isset( $import_data['removeImportedData'] ) && $import_data['removeImportedData'] ) {
			update_option( 'templatiq-erase-existing-imported-data', true );
		}

		$importContents = array_flip( $import_data['installContents'] );
		if ( isset( $importContents['import-listing'] ) ) {
			update_option( 'templatiq-import-directorist-listings', true );
		}

		if ( isset( $importContents['share-non-sensitive-data'] ) ) {
			update_option( 'templatiq-install-contents-share-non-sensitive-data', true );
		}
	}
}