<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullSite;

use Templatiq\Onboarding\Setup;
use Templatiq\Utils\Singleton;
use Templatiq_Sites_Error_Handler;
use Templatiq_Sites_Helper;
use Templatiq_Sites_Importer;
use Templatiq_Sites_Importer_Log;

class Ajax {
	use Singleton;

	public string $api_domain;
	public string $api_url;
	public string $search_analytics_url;
	public string $import_analytics_url;
	public string $pixabay_url;
	public string $pixabay_api_key;
	private static $instance        = null;
	public static array $local_vars = [];
	public string $wp_upload_url    = '';
	private array $ajax             = [];

	public function __construct() {
		// AJAX.
		$this->ajax = [
			'templatiq-required-plugins'            => 'required_plugin',
			'templatiq-required-plugin-activate'    => 'required_plugin_activate',
			'templatiq-sites-backup-settings'       => 'backup_settings',
			'templatiq-sites-set-reset-data'        => 'get_reset_data',
			'templatiq-sites-reset-terms-and-forms' => 'reset_terms_and_forms',
			'templatiq-sites-reset-posts'           => 'reset_posts',
			'templatiq-sites-activate-theme'        => 'activate_theme',
			'templatiq-sites-get-deleted-post-ids'  => 'get_deleted_post_ids',
			'templatiq-sites-api-request'           => 'api_request',
			'templatiq-sites-filesystem-permission' => 'filesystem_permission',
		];

		foreach ( $this->ajax as $ajax_hook => $ajax_callback ) {
			add_action( 'wp_ajax_' . $ajax_hook, [$this, $ajax_callback] );
		}
	}

	public function get_plugin_status( $plugin_init_file ) {
		$installed_plugins = get_plugins();

		if ( ! isset( $installed_plugins[$plugin_init_file] ) ) {
			return 'not-installed';
		} elseif ( is_plugin_active( $plugin_init_file ) ) {
			return 'active';
		} else {
			return 'inactive';
		}
	}

	public function api_request() {
		// Verify Nonce.
		check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error();
		}

		$template_id = isset( $_POST['template_id'] ) ? sanitize_text_field( $_POST['template_id'] ) : '';

		if ( empty( $template_id ) ) {
			wp_send_json_error(
				[
					'message' => __( 'Provided template_id is empty! Please try again!', 'templatiq' ),
					'code'    => 'Error',
				]
			);
		}

		$request = Templatiq_Sites_Importer::get_instance()->get_single_demo( $template_id );

		error_log( print_r( $request  ,true) );
		if ( is_wp_error( $request ) ) {
			$wp_error_code = $request->get_error_code();
			switch ( $wp_error_code ) {
				case 'http_request_not_executed':
					/* translators: %s Error Message */
					$message = sprintf( __( 'API Request could not be performed - %s', 'templatiq-sites' ), $request->get_error_message() );
					break;
				case 'http_request_failed':
				default:
					/* translators: %s Error Message */
					$message = sprintf( __( 'API Request has failed - %s', 'templatiq-sites' ), $request->get_error_message() );
					break;
			}

			wp_send_json_error(
				[
					'message'       => $request->get_error_message(),
					'code'          => 'WP_Error',
					'response_code' => $wp_error_code,
				]
			);
		}

		update_option( 'templatiq_sites_import_data', $request, 'no' );

		wp_send_json_success( $request );

		return;

		// $code      = (int) wp_remote_retrieve_response_code( $request );
		// $demo_data = json_decode( wp_remote_retrieve_body( $request ), true );

		// error_log( print_r( $demo_data ,true) );

		// wp_send_json_success( $demo_data );

		if ( 200 === $code ) {
			// error_log( print_r( $demo_data, true ) );
			update_option( 'templatiq_sites_import_data', $demo_data, 'no' );
			wp_send_json_success( $demo_data );
		} else {
			error_log( 'Error Custom api_request(): ' . print_r( $demo_data, true ) );
		}

		$message       = wp_remote_retrieve_body( $request );
		$response_code = $code;

		if ( 200 !== $code && is_array( $demo_data ) && isset( $demo_data['code'] ) ) {
			$message = $demo_data['message'];
		}

		if ( 500 === $code ) {
			$message = __( 'Internal Server Error.', 'templatiq' );
		}

		if ( 200 !== $code && false !== strpos( $message, 'Cloudflare' ) ) {
			$ip = Templatiq_Sites_Helper::get_client_ip();
			/* translators: %s IP address. */
			$message = sprintf( __( 'Client IP: %1$s </br> Error code: %2$s', 'templatiq' ), $ip, $code );
			$code    = 'Cloudflare';
		}

		wp_send_json_error(
			[
				'message'       => $message,
				'code'          => $code,
				'response_code' => $response_code,
			]
		);
	}

	public function get_wp_upload_url() {
		$wp_upload_dir = wp_upload_dir();

		return isset( $wp_upload_dir['url'] ) ? $wp_upload_dir['url'] : false;
	}

	public function create_image_from_url( $url, $name, $photo_id ) {
		$file_array         = [];
		$file_array['name'] = wp_basename( $name );

		// Download file to temp location.
		$file_array['tmp_name'] = download_url( $url );

		// If error storing temporarily, return the error.
		if ( is_wp_error( $file_array['tmp_name'] ) ) {
			return $file_array;
		}

		// Do the validation and storage stuff.
		$id = media_handle_sideload( $file_array, 0, null );

		// If error storing permanently, unlink.
		if ( is_wp_error( $id ) ) {
			@unlink( $file_array['tmp_name'] ); // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged, WordPressVIPMinimum.Functions.RestrictedFunctions.file_ops_unlink -- Deleting the file from temp location.

			return $id;
		}

		// Store the original attachment source in meta.
		add_post_meta( $id, '_source_url', $url );

		update_post_meta( $id, 'astra-images', $photo_id );
		update_post_meta( $id, '_wp_attachment_image_alt', $name );

		return $id;
	}

	public function import_post_meta( $post_id, $metadata ) {

		$metadata = (array) $metadata;

		foreach ( $metadata as $meta_key => $meta_value ) {

			if ( $meta_value ) {

				if ( '_elementor_data' === $meta_key ) {

					$raw_data = json_decode( stripslashes( $meta_value ), true );

					if ( is_array( $raw_data ) ) {
						$raw_data = wp_slash( wp_json_encode( $raw_data ) );
					} else {
						$raw_data = wp_slash( $raw_data );
					}
				} else {

					if ( is_serialized( $meta_value, true ) ) {
						$raw_data = maybe_unserialize( stripslashes( $meta_value ) );
					} elseif ( is_array( $meta_value ) ) {
						$raw_data = json_decode( stripslashes( $meta_value ), true );
					} else {
						$raw_data = $meta_value;
					}
				}

				update_post_meta( $post_id, $meta_key, $raw_data );
			}
		}
	}

	public function import_template_meta( $post_id, $metadata ) {

		$metadata = (array) $metadata;

		foreach ( $metadata as $meta_key => $meta_value ) {

			if ( $meta_value ) {

				if ( '_elementor_data' === $meta_key ) {

					$raw_data = json_decode( stripslashes( $meta_value ), true );

					if ( is_array( $raw_data ) ) {
						$raw_data = wp_slash( wp_json_encode( $raw_data ) );
					} else {
						$raw_data = wp_slash( $raw_data );
					}
				} else {

					if ( is_serialized( $meta_value, true ) ) {
						$raw_data = maybe_unserialize( stripslashes( $meta_value ) );
					} elseif ( is_array( $meta_value ) ) {
						$raw_data = json_decode( stripslashes( $meta_value ), true );
					} else {
						$raw_data = $meta_value;
					}
				}

				update_post_meta( $post_id, $meta_key, $raw_data );
			}
		}
	}

	public function activate_theme() {

		// Verify Nonce.
		check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

		if ( ! current_user_can( 'customize' ) ) {
			wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
		}

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		error_log( print_r( 'activate_theme ', true ) );
		switch_theme( 'onedirectory' );

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		wp_send_json_success(
			[
				'success' => true,
				'message' => __( 'Theme Activated', 'templatiq' ),
			]
		);
	}

	public function reset_terms_and_forms() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		$terms = templatiq_sites_get_reset_term_data();

		if ( ! empty( $terms ) ) {
			foreach ( $terms as $key => $term_id ) {
				$term_id = absint( $term_id );
				if ( $term_id ) {
					$term = get_term( $term_id );
					if ( ! is_wp_error( $term ) && ! empty( $term ) && is_object( $term ) ) {

						do_action( 'templatiq_sites_before_delete_imported_terms', $term_id, $term );

						$message = 'Deleted - Term ' . $term_id . ' - ' . $term->name . ' ' . $term->taxonomy;
						Templatiq_Sites_Importer_Log::add( $message );
						wp_delete_term( $term_id, $term->taxonomy );
					}
				}
			}
		}

		$forms = templatiq_sites_get_reset_form_data();

		if ( ! empty( $forms ) ) {
			foreach ( $forms as $key => $post_id ) {
				$post_id = absint( $post_id );
				if ( $post_id ) {

					do_action( 'templatiq_sites_before_delete_imported_wp_forms', $post_id );

					$message = 'Deleted - Form ID ' . $post_id . ' - ' . get_post_type( $post_id ) . ' - ' . get_the_title( $post_id );
					Templatiq_Sites_Importer_Log::add( $message );
					wp_delete_post( $post_id, true );
				}
			}
		}

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}
	}

	public function reset_posts() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		// Suspend bunches of stuff in WP core.
		wp_defer_term_counting( true );
		wp_defer_comment_counting( true );
		wp_suspend_cache_invalidation( true );

		$posts = json_decode( stripslashes( sanitize_text_field( $_POST['ids'] ) ), true );

		if ( ! empty( $posts ) ) {
			foreach ( $posts as $key => $post_id ) {
				$post_id = absint( $post_id );
				if ( $post_id ) {
					$post_type = get_post_type( $post_id );
					$message   = 'Deleted - Post ID ' . $post_id . ' - ' . $post_type . ' - ' . get_the_title( $post_id );

					if ( 'elementor_library' === $post_type ) {
						$_GET['force_delete_kit'] = true;
					}

					// do_action( 'templatiq_sites_before_delete_imported_posts', $post_id, $post_type );

					wp_delete_post( $post_id, true );

					Templatiq_Sites_Importer_Log::add( $message );
				}
			}
		}

		// Re-enable stuff in core.
		wp_suspend_cache_invalidation( false );
		wp_cache_flush();
		foreach ( get_taxonomies() as $tax ) {
			delete_option( "{$tax}_children" );
			_get_term_hierarchy( $tax );
		}

		wp_defer_term_counting( false );
		wp_defer_comment_counting( false );

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}

		error_log( 'reset_posts done' );
		wp_send_json_error( 'wp_send_json_error - hello' );
	}

	public function get_deleted_post_ids() {
		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}
		wp_send_json_success( templatiq_sites_get_reset_post_data() );
	}

	public function get_reset_data() {

		if ( wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'You are not allowed to perform this action', 'templatiq' ) );
			}
		}

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		$data = [
			'reset_posts'    => templatiq_sites_get_reset_post_data(),
			'reset_wp_forms' => templatiq_sites_get_reset_form_data(),
			'reset_terms'    => templatiq_sites_get_reset_term_data(),
		];

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		if ( wp_doing_ajax() ) {
			wp_send_json_success( $data );
		}

		return $data;
	}

	public function backup_settings() {
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( __( 'User does not have permission!', 'templatiq' ) );
			}
		}

		$file_name    = 'templatiq-sites-backup-' . gmdate( 'd-M-Y-h-i-s' ) . '.json';
		$old_settings = get_option( 'templatiq-settings', [] );
		$upload_dir   = Templatiq_Sites_Importer_Log::get_instance()->log_dir();
		$upload_path  = trailingslashit( $upload_dir['path'] );
		$log_file     = $upload_path . $file_name;
		$file_system  = $this->get_filesystem();

		// If file system fails? Then take a backup in site option.
		if ( false === $file_system->put_contents( $log_file, wp_json_encode( $old_settings ), FS_CHMOD_FILE ) ) {
			update_option( 'templatiq_sites_' . $file_name, $old_settings, 'no' );
		}

		if ( wp_doing_ajax() ) {
			wp_send_json_success();
		}
	}

	public function get_theme_status() {

		$theme = wp_get_theme();

		// Theme installed and activate.
		if ( 'One Directory' === $theme->name || 'One Directory' === $theme->parent_theme ) {
			return 'installed-and-active';
		}

		// Theme installed but not activate.
		foreach ( (array) wp_get_themes() as $theme_dir => $theme ) {
			if ( 'One Directory' === $theme->name || 'One Directory' === $theme->parent_theme ) {
				return 'installed-but-inactive';
			}
		}

		return 'not-installed';
	}

	public static function get_api_domain() {
		return defined( 'STARTER_TEMPLATES_REMOTE_URL' ) ? STARTER_TEMPLATES_REMOTE_URL : apply_filters( 'templatiq_sites_api_domain', 'https://templatiq.com/' );
	}

	public function get_api_url() {
		return $this->api_url;
	}

	public function required_plugin_activate( $init = '', $options = [] ) {

		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'install_plugins' ) || ! isset( $_POST['init'] ) || ! sanitize_text_field( $_POST['init'] ) ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => __( 'Error: You don\'t have the required permissions to install plugins.', 'templatiq' ),
					]
				);
			}
		}

		Templatiq_Sites_Error_Handler::get_instance()->start_error_handler();

		$plugin_init = ( isset( $_POST['init'] ) ) ? esc_attr( sanitize_text_field( $_POST['init'] ) ) : $init;
		$activate    = activate_plugin( $plugin_init, '', false, false );

		Templatiq_Sites_Error_Handler::get_instance()->stop_error_handler();

		if ( is_wp_error( $activate ) ) {
			if ( wp_doing_ajax() ) {
				wp_send_json_error(
					[
						'success' => false,
						'message' => $activate->get_error_message(),
					]
				);
			}
		}

		$options = templatiq_get_site_data( 'templatiq-site-options-data' );
		$this->after_plugin_activate( $plugin_init, $options );

		if ( wp_doing_ajax() ) {
			wp_send_json_success(
				[
					'success' => true,
					'message' => __( 'Plugin Activated', 'templatiq' ),
				]
			);
		}
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
			$php_version = Setup::init()->get_php_version();
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
			(  ( ! current_user_can( 'install_plugins' ) && ! empty( $response['notinstalled'] ) ) || ( ! current_user_can( 'activate_plugins' ) && ! empty( $response['inactive'] ) ) ) ) {
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

	public function required_plugin( $required_plugins = [], $options = [] ) {

		// Verify Nonce.
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );
			if ( ! current_user_can( 'edit_posts' ) ) {
				wp_send_json_error();
			}
		}

		$response = [
			'active'       => [],
			'inactive'     => [],
			'notinstalled' => [],
		];

		$id     = isset( $_POST['id'] ) ? absint( $_POST['id'] ) : '';
		$screen = isset( $_POST['screen'] ) ? sanitize_text_field( $_POST['screen'] ) : '';

		if ( 'elementor' === $screen ) {
			$options            = [];
			$imported_demo_data = get_option( 'templatiq_sites_import_elementor_data_' . $id, [] );
			$required_plugins = isset( $imported_demo_data['site-pages-required-plugins'] ) ? $imported_demo_data['site-pages-required-plugins'] : [];
		} else {
			$options          = templatiq_get_site_data( 'templatiq-site-options-data' );
			$required_plugins = templatiq_get_site_data( 'required-plugins' );
		}

		$data = $this->get_required_plugins_data( $response, $required_plugins );

		if ( wp_doing_ajax() ) {
			wp_send_json_success( $data );
		} else {
			return $data;
		}
	}

	public function after_plugin_activate( $plugin_init = '', $options = [] ) {
		$data = [
			'templatiq_site_options' => $options,
		];

		do_action( 'templatiq_sites_after_plugin_activation', $plugin_init, $data );
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

	public static function get_filesystem() {
		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';

		WP_Filesystem();

		return $wp_filesystem;
	}

	public function filesystem_permission() {
		if ( ! defined( 'WP_CLI' ) && wp_doing_ajax() ) {
			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			if ( ! current_user_can( 'customize' ) ) {
				wp_send_json_error( __( 'You do not have permission to perform this action.', 'templatiq' ) );
			}
		}
		$wp_upload_path = wp_upload_dir();
		$permissions    = [
			'is_readable' => false,
			'is_writable' => false,
		];

		foreach ( $permissions as $file_permission => $value ) {
			$permissions[$file_permission] = $file_permission( $wp_upload_path['basedir'] );
		}

		$permissions['is_wp_filesystem'] = true;
		if ( ! WP_Filesystem() ) {
			$permissions['is_wp_filesystem'] = false;
		}

		wp_send_json_success(
			[
				'permissions' => $permissions,
				'directory'   => $wp_upload_path['basedir'],
			]
		);

	}
}