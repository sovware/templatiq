<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Repositories\FileSystemRepository;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ImporterLog {

	private static $instance = null;
	private static $log_file = null;

	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		// Check file read/write permissions.
		if ( current_user_can( 'edit_posts' ) ) {
			add_action( 'admin_init', [$this, 'has_file_read_write'] );
		}

	}

	public function has_file_read_write() {

		$upload_dir = self::log_dir();

		$file_created = ( new FileSystemRepository )->get_filesystem()->put_contents( $upload_dir['path'] . 'index.html', '' );
		if ( ! $file_created ) {
			add_action( 'admin_notices', [$this, 'file_permission_notice'] );

			return;
		}

		// Set log file.
		self::set_log_file();

		// Initial AJAX Import Hooks.
		add_action( 'templatiq_sites_import_start', [$this, 'start'], 10, 2 );
	}

	public function file_permission_notice() {
		$upload_dir  = self::log_dir();
		$plugin_name = 'Templatiq';

		/* translators: %1$s refers to the plugin name */
		$notice = sprintf( __( 'Required File Permissions to import the templates from %s are missing.', 'templatiq' ), $plugin_name );
		?>
			<div class="notice notice-error templatiq-sites-must-notices templatiq-sites-file-permission-issue">
				<p><?php echo esc_html( $notice ); ?></p>
				<?php if ( defined( 'FS_METHOD' ) ) {?>
					<p><?php esc_html_e( 'This is usually due to inconsistent file permissions.', 'templatiq' );?></p>
					<p><code><?php echo esc_html( $upload_dir['path'] ); ?></code></p>
				<?php } else {?>
					<p><?php esc_html_e( 'You can easily update permissions by adding the following code into the wp-config.php file.', 'templatiq' );?></p>
					<p><code>define( 'FS_METHOD', 'direct' );</code></p>
				<?php }?>
			</div>
	<?php }

	public static function current_time() {
		return gmdate( 'H:i:s' ) . ' ' . date_default_timezone_get();
	}

	public function start( $data = [], $demo_api_uri = '' ) {
		self::add( 'Started Import Process' );

		self::add( '# System Details: ' );
		self::add( "Debug Mode \t\t: " . self::get_debug_mode() );
		self::add( "Operating System \t: " . self::get_os() );
		self::add( "Software \t\t: " . self::get_software() );
		self::add( "MySQL version \t\t: " . self::get_mysql_version() );
		self::add( "XML Reader \t\t: " . self::get_xmlreader_status() );
		self::add( "PHP Version \t\t: " . self::get_php_version() );
		self::add( "PHP Max Input Vars \t: " . self::get_php_max_input_vars() );
		self::add( "PHP Max Post Size \t: " . self::get_php_max_post_size() );
		self::add( "PHP Extension GD \t: " . self::get_php_extension_gd() );
		self::add( "PHP Max Execution Time \t: " . self::get_max_execution_time() );
		self::add( "Max Upload Size \t: " . size_format( wp_max_upload_size() ) );
		self::add( "Memory Limit \t\t: " . self::get_memory_limit() );
		self::add( "Timezone \t\t: " . self::get_timezone() );
		self::add( PHP_EOL . '-----' . PHP_EOL );
		self::add( 'Importing Started! - ' . self::current_time() );

		self::add( '---' . PHP_EOL );
		self::add( 'WHY IMPORT PROCESS CAN FAIL? READ THIS - ' );
		self::add( 'https://templatiq.com/docs/?p=1314&utm_source=demo-import-panel&utm_campaign=import-error&utm_medium=wp-dashboard' . PHP_EOL );
		self::add( '---' . PHP_EOL );

	}

	public static function log_dir( $dir_name = 'templatiq-sites' ) {
		$upload_dir = wp_upload_dir();

		// Build the paths.
		$dir_info = [
			'path' => $upload_dir['basedir'] . '/' . $dir_name . '/',
			'url'  => $upload_dir['baseurl'] . '/' . $dir_name . '/',
		];

		// Create the upload dir if it doesn't exist.
		if ( ! file_exists( $dir_info['path'] ) ) {

			// Create the directory.
			wp_mkdir_p( $dir_info['path'] );

			$file_system = ( new FileSystemRepository );

			// Add an index file for security.
			$file_system->get_filesystem()->put_contents( $dir_info['path'] . 'index.html', '' );

			// Add an .htaccess for security.
			$file_system->get_filesystem()->put_contents( $dir_info['path'] . '.htaccess', 'deny from all' );
		}

		return $dir_info;
	}

	public static function set_log_file() {
		$upload_dir = self::log_dir();

		$upload_path = trailingslashit( $upload_dir['path'] );

		// File format e.g. 'import-31-Oct-2017-06-39-12-hashcode.log'.
		self::$log_file = $upload_path . 'import-' . gmdate( 'd-M-Y-h-i-s' ) . '-' . wp_hash( 'templatiq-library-log' ) . '.log';

		if ( ! get_option( 'templatiq_sites_recent_import_log_file', false ) ) {
			update_option( 'templatiq_sites_recent_import_log_file', self::$log_file, 'no' );
		}
	}

	public static function add( $content ) {
		if ( get_option( 'templatiq_sites_recent_import_log_file', false ) ) {
			$log_file = get_option( 'templatiq_sites_recent_import_log_file', self::$log_file );
		} else {
			$log_file = self::$log_file;
		}

		if ( ! $log_file ) {
			return;
		}

		$file_system   = ( new FileSystemRepository );
		$existing_data = '';
		if ( file_exists( $log_file ) ) {
			$existing_data = $file_system->get_filesystem()->get_contents( $log_file );
		}

		// Style separator.
		$separator = PHP_EOL;

		$file_system->get_filesystem()->put_contents( $log_file, $existing_data . $separator . $content, FS_CHMOD_FILE );
	}

	public static function get_debug_mode() {
		if ( WP_DEBUG ) {
			return __( 'Enabled', 'templatiq' );
		}

		return __( 'Disabled', 'templatiq' );
	}

	public static function get_memory_limit() {
		$required_memory                = '64M';
		$memory_limit_in_bytes_current  = wp_convert_hr_to_bytes( WP_MEMORY_LIMIT );
		$memory_limit_in_bytes_required = wp_convert_hr_to_bytes( $required_memory );

		if ( $memory_limit_in_bytes_current < $memory_limit_in_bytes_required ) {
			return sprintf(
				/* translators: %1$s Memory Limit, %2$s Recommended memory limit. */
				_x( 'Current memory limit %1$s. We recommend setting memory to at least %2$s.', 'Recommended Memory Limit', 'templatiq' ),
				WP_MEMORY_LIMIT,
				$required_memory
			);
		}

		return WP_MEMORY_LIMIT;
	}

	public static function get_timezone() {
		$timezone = get_option( 'timezone_string' );

		if ( ! $timezone ) {
			return get_option( 'gmt_offset' );
		}

		return $timezone;
	}

	public static function get_os() {
		return PHP_OS;
	}

	public static function get_software() {
		return isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( $_SERVER['SERVER_SOFTWARE'] ) : '';
	}

	public static function get_mysql_version() {
		global $wpdb;

		return $wpdb->db_version();
	}

	public static function get_xmlreader_status() {
		if ( class_exists( 'XMLReader' ) ) {
			return __( 'Yes', 'templatiq' );
		}

		return __( 'No', 'templatiq' );
	}

	public static function get_php_version() {
		if ( version_compare( PHP_VERSION, '5.4', '<' ) ) {
			return _x( 'We recommend to use php 5.4 or higher', 'PHP Version', 'templatiq' );
		}

		return PHP_VERSION;
	}

	public static function get_php_max_input_vars() {
		return ini_get( 'max_input_vars' ); // phpcs:disable PHPCompatibility.IniDirectives.NewIniDirectives.max_input_varsFound
	}

	public static function get_php_max_post_size() {
		return ini_get( 'post_max_size' );
	}

	public static function get_max_execution_time() {
		return ini_get( 'max_execution_time' );
	}

	public static function get_php_extension_gd() {
		if ( extension_loaded( 'gd' ) ) {
			return __( 'Yes', 'templatiq' );
		}

		return __( 'No', 'templatiq' );
	}
}