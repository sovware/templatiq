<?php
/**
 * Templatiq Sites Page
 *
 * @since 1.0.6
 * @package Templatiq Sites
 */

use Templatiq\FullSite\FullSite;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Templatiq_Sites_Page' ) ) {

	/**
	 * Templatiq Admin Settings
	 */
	class Templatiq_Sites_Page {

		/**
		 * View all actions
		 *
		 * @since 1.0.6
		 * @var array $view_actions
		 */
		public $view_actions = array();

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.3.0
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.3.0
		 */
		public function __construct() {

			if ( ! current_user_can( 'edit_posts' ) ) {
				return;
			}

			add_action( 'wp_ajax_templatiq-sites-change-page-builder', array( $this, 'save_page_builder_on_ajax' ) );
			add_action( 'admin_init', array( $this, 'getting_started' ) );
		}

		/**
		 * Admin notice
		 *
		 * @since 1.3.5
		 *
		 * @return void
		 */
		public function getting_started() {

			$current_screen = get_current_screen();

			// Bail if not on Templatiq Sites screen.
			if ( ! is_object( $current_screen ) && null === $current_screen ) {
				return;
			}

			if ( 'plugins' === $current_screen->base ) {
				$processed    = get_option( '_templatiq_sites_gettings_started', 'no' );
				$product_name = 'Templatiq';

				if ( 'yes' === $processed ) {
					return;
				}

				$arguments = array(
					'page' => 'starter-templates',
				);

				$url = add_query_arg( $arguments, admin_url( 'themes.php' ) );

				?>
				<div class="notice notice-info is-dismissible templatiq-sites-notice templatiq-sites-getting-started-notice">
					<?php /* translators: %1$s is the admin page URL, %2$s is product name. */ ?>
					<p><?php printf( esc_attr__( 'Thank you for choosing %1$s! Check the library of <a class="templatiq-sites-getting-started-btn" href="%2$s">ready starter templates here »</a>', 'templatiq-sites' ), esc_html( $product_name ), esc_url( $url ) ); ?></p>
				</div>
				<?php
			}

		}

		/**
		 * Save Page Builder
		 *
		 * @since 1.4.0 The `$page_builder_slug` was added.
		 *
		 * @param  string $page_builder_slug Page Builder Slug.
		 * @return mixed
		 */
		public function save_page_builder_on_submit( $page_builder_slug = '' ) {

			// Only admins can save settings.
			if ( ! defined( 'WP_CLI' ) && ! current_user_can( 'manage_options' ) ) {
				return;
			}

			if ( ! defined( 'WP_CLI' ) && ( ! isset( $_REQUEST['templatiq-sites-page-builder'] ) || ! wp_verify_nonce( sanitize_text_field( $_REQUEST['templatiq-sites-page-builder'] ), 'templatiq-sites-welcome-screen' ) ) ) {
				return;
			}

			// Stored Settings.
			$stored_data = $this->get_settings();

			$page_builder = isset( $_REQUEST['page_builder'] ) ? sanitize_key( $_REQUEST['page_builder'] ) : sanitize_key( $page_builder_slug );

			if ( ! empty( $page_builder ) ) {
				// New settings.
				$new_data = array(
					'page_builder' => $page_builder,
				);

				// Merge settings.
				$data = wp_parse_args( $new_data, $stored_data );

				// Update settings.
				update_option( 'templatiq_sites_settings', $data );
			}

			if ( ! defined( 'WP_CLI' ) ) {
				wp_safe_redirect( admin_url( '/themes.php?page=templatiq-sites' ) );
				exit;
			}
		}

		/**
		 * Save Page Builder
		 *
		 * @return void
		 */
		public function save_page_builder_on_ajax() {

			check_ajax_referer( 'templatiq-sites', '_ajax_nonce' );

			// Only admins can save settings.
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error();
			}

			// Stored Settings.
			$stored_data = $this->get_settings();

			// New settings.
			$new_data = array(
				'page_builder' => ( isset( $_REQUEST['page_builder'] ) ) ? sanitize_key( $_REQUEST['page_builder'] ) : '',
			);

			// Merge settings.
			$data = wp_parse_args( $new_data, $stored_data );

			// Update settings.
			update_option( 'templatiq_sites_settings', $data, 'no' );

			$sites = $this->get_sites_by_page_builder( $new_data['page_builder'] );

			wp_send_json_success( $sites );
		}

		/**
		 * Get Page Builder Sites
		 *
		 * @since 2.0.0
		 *
		 * @param  string $default_page_builder default page builder slug.
		 * @return array page builder sites.
		 */
		public function get_sites_by_page_builder( $default_page_builder = '' ) {
			$sites_and_pages            = FullSite::init()->get_all_sites();
			$current_page_builder_sites = array();
			if ( ! empty( $sites_and_pages ) ) {
				$page_builder_keys = wp_list_pluck( $sites_and_pages, 'astra-site-page-builder' );
				foreach ( $page_builder_keys as $site_id => $page_builder ) {
					if ( $default_page_builder === $page_builder ) {
						$current_page_builder_sites[ $site_id ] = $sites_and_pages[ $site_id ];
					}
				}
			}

			return $current_page_builder_sites;
		}

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
				return $settings[ $key ];
			}

			return $defaults;
		}

		/**
		 * Get Settings
		 *
		 * @return array Stored settings.
		 */
		public function get_settings() {

			$defaults = array(
				'page_builder' => '',
			);

			$stored_data = get_option( 'templatiq_sites_settings', $defaults );

			return wp_parse_args( $stored_data, $defaults );
		}

		/**
		 * Update Settings
		 *
		 * @param  array $args Arguments.
		 */
		public function update_settings( $args = array() ) {

			$stored_data = get_option( 'templatiq_sites_settings', array() );

			$new_data = wp_parse_args( $args, $stored_data );

			update_option( 'templatiq_sites_settings', $new_data, 'no' );
		}

		/**
		 * Init Nav Menu
		 *
		 * @param mixed $action Action name.
		 * @since 1.0.6
		 */
		public function init_nav_menu( $action = '' ) {

			if ( '' !== $action ) {
				$this->render_tab_menu( $action );
			}
		}

		/**
		 * Render tab menu
		 *
		 * @param mixed $action Action name.
		 * @since 1.0.6
		 */
		public function render_tab_menu( $action = '' ) {
			?>
			<div id="templatiq-sites-menu-page">
				<?php $this->render( $action ); ?>
			</div>
			<?php
		}

		/**
		 * View actions
		 *
		 * @since 1.0.11
		 */
		public function get_view_actions() {

			if ( empty( $this->view_actions ) ) {

				$this->view_actions = apply_filters(
					'templatiq_sites_menu_item',
					array()
				);
			}

			return $this->view_actions;
		}

		/**
		 * Prints HTML content for tabs
		 *
		 * @param mixed $action Action name.
		 * @since 1.0.6
		 */
		public function render( $action ) {

			// Settings update message.
			if ( isset( $_REQUEST['message'] ) && ( 'saved' === $_REQUEST['message'] || 'saved_ext' === $_REQUEST['message'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching GET parameter, no nonce associated with this action.
				?>
					<span id="message" class="notice templatiq-sites-notice notice-success is-dismissive"><p> <?php esc_html_e( 'Settings saved successfully.', 'templatiq-sites' ); ?> </p></span>
				<?php
			}

			if ( isset( $_GET['action'] ) && 'site-import' === $_GET['action'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching GET parameter to start the import process, no nonce associated with this action.

				$status        = Templatiq_Sites_Batch_Site_Import::get_instance()->get_status();
				$import_status = isset( $status['status'] ) ? $status['status'] : '';
				$status_class  = 'invalid_site_id' === $import_status || 'premium_sites' === $import_status ? 'failed' : '';
				$step_class    = '';
				if ( ! empty( $status ) ) {
					$step_class = isset( $status['step'] ) && 'complete' === $status['step'] ? 'success' : '';
				}
				?>
				<div class="templatiq-sites-welcome templatiq-sites-import-screen <?php echo esc_attr( $status_class ); ?>">
					<div class="inner-wrap">
						<div class="inner">
							<div class="header">
								<?php
								$white_label       = false;
								$white_label_class = '';
								if ( is_callable( 'Templatiq_Ext_White_Label_Markup::get_whitelabel_string' ) ) {
									$white_label_title = Templatiq_Ext_White_Label_Markup::get_whitelabel_string( 'templatiq-sites', 'name' );
									if ( $white_label_title ) {
										$white_label       = true;
										$white_label_class = 'white-label-enabled';
									}
								}
								?>
								<span class="logo <?php echo esc_attr( $white_label_class ); ?>">
									<img src="<?php echo esc_url( TEMPLATIQ_SITES_URI . 'inc/assets/images/logo.svg' ); ?>">
									<h3 class="title"><?php esc_html_e( 'Importing Starter Template...', 'templatiq-sites' ); ?></h3>
								</span>
							</div>
							<div class="content">
								<?php if ( 'invalid_site_id' === $import_status ) { ?>
									<p><?php esc_html_e( 'The demo you are importing seems invalid. The site is not found.', 'templatiq-sites' ); ?></p>
								<?php } elseif ( 'premium_sites' === $import_status ) { ?>
									<p><?php esc_html_e( 'The demo you are importing is a premium demo.', 'templatiq-sites' ); ?> <a href="https://wpastra.com/starter-templates-plans/?utm_source=batch-site-import&utm_campaign=templatiq-sites&utm_medium=batch-import" class="" target="_blank"><?php esc_html_e( 'Get Access!', 'templatiq-sites' ); ?><i class="dashicons dashicons-external"></i></a></p>
								<?php } else { ?>
									<p><?php esc_html_e( 'The import process can take a few minutes depending on the size of the site and speed of the connection.', 'templatiq-sites' ); ?></p>
								<?php } ?>
								<ul class="import-steps">
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="preparing">
										<?php esc_html_e( 'Preparing Site Import', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="install_plugins">
										<?php esc_html_e( 'Installing Required Plugins', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="import_contact_forms">
										<?php esc_html_e( 'Importing Contact Forms', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="import_customizer_settings">
										<?php esc_html_e( 'Setting up the Theme', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="import_content">
										<?php esc_html_e( 'Importing Media, Posts, and Pages', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="import_options">
										<?php esc_html_e( 'Importing Site Options', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="import_widgets">
										<?php esc_html_e( 'Importing Sidebar and Widgets', 'templatiq-sites' ); ?>
									</li>
									<li class="import-step <?php echo esc_attr( $step_class ); ?>" data-step="complete">
										<?php esc_html_e( 'Import Complete', 'templatiq-sites' ); ?>
									</li>
								</ul>

								<?php if ( 'success' === $step_class ) { ?>
									<p>
									<?php esc_html_e( 'Site Imported Successfully!', 'templatiq-sites' ); ?>
									<a class="view-site-button" href="<?php echo esc_url( site_url() ); ?>" target="_blank"><?php esc_html_e( 'Visit Site', 'templatiq-sites' ); ?> <i class="dashicons dashicons-external"></i></a>
								</p>
								<?php } ?>
							</div>
						</div>
					</div>
				</div>
				<?php
			}
		}

		/**
		 * Site Filters
		 *
		 * @since 2.0.0
		 *
		 * @return void
		 */
		public function site_filters() {
			?>
			<div class="wp-filter hide-if-no-js">
				<div class="section-left">
					<div class="search-form">
						<?php
						$categories = FullSite::init()->get_api_option( 'templatiq-sites-all-site-categories' );
						if ( ! empty( $categories ) ) {
							?>
						<div id="templatiq-sites__category-filter" class="dropdown-check-list" tabindex="100">
							<span class="templatiq-sites__category-filter-anchor" data-slug=""><?php esc_html_e( 'All', 'templatiq-sites' ); ?></span>
							<ul class="templatiq-sites__category-filter-items">
								<li class="ast-sites__filter-wrap category-active" data-slug=""><?php esc_html_e( 'All', 'templatiq-sites' ); ?> </li>
							<?php
							foreach ( $categories as $key => $value ) {
								if ( 'free' !== $value['slug'] ) {
									?>
								<li class="ast-sites__filter-wrap" data-slug="<?php echo esc_attr( $value['slug'] ); ?>"><?php echo esc_html( $value['name'] ); ?> </li>
									<?php
								}
							}
							?>
								<li class="ast-sites__filter-wrap-checkbox first-wrap">
									<label>
										<input id="radio-all" type="radio" name="ast-sites-radio" class="checkbox active" value="" checked /><?php esc_html_e( 'All', 'templatiq-sites' ); ?>
									</label>
								</li>
								<li class="ast-sites__filter-wrap-checkbox">
									<label>
										<input id="radio-free" type="radio" name="ast-sites-radio" class="checkbox" value="free" /><?php esc_html_e( 'Free', 'templatiq-sites' ); ?>
									</label>
								</li>
								<li class="ast-sites__filter-wrap-checkbox">
									<label>
										<input id="radio-agency" type="radio" name="ast-sites-radio" class="checkbox" value="agency" /><?php esc_html_e( 'Premium', 'templatiq-sites' ); ?>
									</label>
								</li>
							</ul>
						</div>
							<?php
						}
						?>
						<input autocomplete="off" placeholder="<?php esc_attr_e( 'Search...', 'templatiq-sites' ); ?>" type="search" aria-describedby="live-search-desc" id="wp-filter-search-input" class="wp-filter-search">
						<span class="ast-icon-search search-icon"></span>
						<div class="templatiq-sites-autocomplete-result"></div>
					</div>
				</div>
			</div>
			<?php
		}

		/**
		 * Get Default Page Builder
		 *
		 * @since 2.0.0
		 *
		 * @return mixed page builders or empty string.
		 */
		public function get_default_page_builder() {
			$default_page_builder = $this->get_setting( 'page_builder' );

			$page_builders = FullSite::init()->get_page_builders();

			foreach ( $page_builders as $key => $page_builder ) {
				if ( $page_builder['slug'] === $default_page_builder ) {
					return $page_builder;
				}
			}

			return '';
		}

		/**
		 * Get Page Builders
		 *
		 * @since 2.0.0
		 *
		 * @param  string $slug Page Builder Slug.
		 * @return array page builders.
		 */
		public function get_page_builder_image( $slug ) {

			$image = '';

			switch ( $slug ) {

				case 'elementor':
					$image = TEMPLATIQ_SITES_URI . 'inc/assets/images/elementor.jpg';
					break;

				case 'beaver-builder':
					$image = TEMPLATIQ_SITES_URI . 'inc/assets/images/beaver-builder.jpg';
					break;

				case 'gutenberg':
					$image = TEMPLATIQ_SITES_URI . 'inc/assets/images/block-editor.png';
					break;

				case 'brizy':
					$image = TEMPLATIQ_SITES_URI . 'inc/assets/images/brizy.jpg';
					break;
			}

			return $image;
		}

		/**
		 * Page Builder List
		 *
		 * @since 1.4.0
		 * @return array
		 */
		public function get_page_builders() {
			return array(
				'gutenberg'      => array(
					'slug'      => 'gutenberg',
					'name'      => esc_html__( 'Gutenberg', 'templatiq-sites' ),
					'image_url' => TEMPLATIQ_SITES_URI . 'inc/assets/images/block-editor.jpg',
					'title'     => esc_html__( 'The default WordPress editor', 'templatiq-sites' ),
				),
				'elementor'      => array(
					'slug'      => 'elementor',
					'name'      => esc_html__( 'Elementor', 'templatiq-sites' ),
					'image_url' => TEMPLATIQ_SITES_URI . 'inc/assets/images/elementor.jpg',
				),
				'beaver-builder' => array(
					'slug'      => 'beaver-builder',
					'name'      => esc_html__( 'Beaver Builder', 'templatiq-sites' ),
					'image_url' => TEMPLATIQ_SITES_URI . 'inc/assets/images/beaver-builder.jpg',
				),
				'brizy'          => array(
					'slug'      => 'brizy',
					'name'      => esc_html__( 'Brizy', 'templatiq-sites' ),
					'image_url' => TEMPLATIQ_SITES_URI . 'inc/assets/images/brizy.jpg',
				),
			);
		}

		/**
		 * Get and return page URL
		 *
		 * @param string $menu_slug Menu name.
		 * @since 1.0.6
		 * @return  string page url
		 */
		public function get_page_url( $menu_slug ) {

			$current_slug = isset( $_GET['page'] ) ? sanitize_text_field( $_GET['page'] ) : 'starter-templates'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching GET parameter, no nonce associated with this action.
			$parent_page = 'themes.php';

			if ( strpos( $parent_page, '?' ) !== false ) {
				$query_var = '&page=' . $current_slug;
			} else {
				$query_var = '?page=' . $current_slug;
			}

			$parent_page_url = admin_url( $parent_page . $query_var );

			$url = $parent_page_url . '&action=' . $menu_slug;

			return esc_url( $url );
		}

		/**
		 * Converts a period of time in seconds into a human-readable format representing the interval.
		 *
		 * @since  2.0.0
		 *
		 * Example:
		 *
		 *     echo self::interval( 90 );
		 *     // 1 minute 30 seconds
		 *
		 * @param  int $since A period of time in seconds.
		 * @return string An interval represented as a string.
		 */
		public function interval( $since ) {
			// Array of time period chunks.
			$chunks = array(
				/* translators: 1: The number of years in an interval of time. */
				array( 60 * 60 * 24 * 365, _n_noop( '%s year', '%s years', 'templatiq-sites' ) ),
				/* translators: 1: The number of months in an interval of time. */
				array( 60 * 60 * 24 * 30, _n_noop( '%s month', '%s months', 'templatiq-sites' ) ),
				/* translators: 1: The number of weeks in an interval of time. */
				array( 60 * 60 * 24 * 7, _n_noop( '%s week', '%s weeks', 'templatiq-sites' ) ),
				/* translators: 1: The number of days in an interval of time. */
				array( 60 * 60 * 24, _n_noop( '%s day', '%s days', 'templatiq-sites' ) ),
				/* translators: 1: The number of hours in an interval of time. */
				array( 60 * 60, _n_noop( '%s hour', '%s hours', 'templatiq-sites' ) ),
				/* translators: 1: The number of minutes in an interval of time. */
				array( 60, _n_noop( '%s minute', '%s minutes', 'templatiq-sites' ) ),
				/* translators: 1: The number of seconds in an interval of time. */
				array( 1, _n_noop( '%s second', '%s seconds', 'templatiq-sites' ) ),
			);

			if ( $since <= 0 ) {
				return esc_html__( 'now', 'templatiq-sites' );
			}

			/**
			 * We only want to output two chunks of time here, eg:
			 * x years, xx months
			 * x days, xx hours
			 * so there's only two bits of calculation below:
			 */
			$j = count( $chunks );

			// Step one: the first chunk.
			for ( $i = 0; $i < $j; $i++ ) {
				$seconds = $chunks[ $i ][0];
				$name    = $chunks[ $i ][1];

				// Finding the biggest chunk (if the chunk fits, break).
				$count = floor( $since / $seconds );
				if ( $count ) {
					break;
				}
			}

			// Set output var.
			$output = sprintf( translate_nooped_plural( $name, $count, 'templatiq-sites' ), $count );

			// Step two: the second chunk.
			if ( $i + 1 < $j ) {
				$seconds2 = $chunks[ $i + 1 ][0];
				$name2    = $chunks[ $i + 1 ][1];
				$count2   = floor( ( $since - ( $seconds * $count ) ) / $seconds2 );
				if ( $count2 ) {
					// Add to output var.
					$output .= ' ' . sprintf( translate_nooped_plural( $name2, $count2, 'templatiq-sites' ), $count2 );
				}
			}

			return $output;
		}

		/**
		 * Check Cron Status
		 *
		 * Gets the current cron status by performing a test spawn. Cached for one hour when all is well.
		 *
		 * @since 2.0.0
		 *
		 * @param bool $cache Whether to use the cached result from previous calls.
		 * @return true|WP_Error Boolean true if the cron spawner is working as expected, or a WP_Error object if not.
		 */
		public static function test_cron( $cache = true ) {
			global $wp_version;

			if ( defined( 'DISABLE_WP_CRON' ) && DISABLE_WP_CRON ) {
				return new WP_Error( 'templatiq_sites_cron_error', esc_html__( 'ERROR! Cron schedules are disabled by setting constant DISABLE_WP_CRON to true.<br/>To start the import process please enable the cron by setting the constant to false. E.g. define( \'DISABLE_WP_CRON\', false );', 'templatiq-sites' ) );
			}

			if ( defined( 'ALTERNATE_WP_CRON' ) && ALTERNATE_WP_CRON ) {
				return new WP_Error( 'templatiq_sites_cron_error', esc_html__( 'ERROR! Cron schedules are disabled by setting constant ALTERNATE_WP_CRON to true.<br/>To start the import process please enable the cron by setting the constant to false. E.g. define( \'ALTERNATE_WP_CRON\', false );', 'templatiq-sites' ) );
			}

			$cached_status = get_transient( 'templatiq-sites-cron-test-ok' );

			if ( $cache && $cached_status ) {
				return true;
			}

			$sslverify     = version_compare( $wp_version, 4.0, '<' );
			$doing_wp_cron = sprintf( '%.22F', microtime( true ) );

			$cron_request = apply_filters(
				'cron_request',
				array(
					'url'  => site_url( 'wp-cron.php?doing_wp_cron=' . $doing_wp_cron ),
					'key'  => $doing_wp_cron,
					'args' => array(
						'timeout'   => 3,
						'blocking'  => true,
						'sslverify' => apply_filters( 'https_local_ssl_verify', $sslverify ),
					),
				)
			);

			$cron_request['args']['blocking'] = true;

			$result = wp_remote_post( $cron_request['url'], $cron_request['args'] );

			if ( is_wp_error( $result ) ) {
				return $result;
			} elseif ( wp_remote_retrieve_response_code( $result ) >= 300 ) {
				return new WP_Error(
					'unexpected_http_response_code',
					sprintf(
						/* translators: 1: The HTTP response code. */
						__( 'Unexpected HTTP response code: %s', 'templatiq-sites' ),
						intval( wp_remote_retrieve_response_code( $result ) )
					)
				);
			} else {
				set_transient( 'templatiq-sites-cron-test-ok', 1, 3600 );
				return true;
			}

		}
	}

	Templatiq_Sites_Page::get_instance();

}// End if.
