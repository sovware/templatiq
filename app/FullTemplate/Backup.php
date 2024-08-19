<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Repositories\FileSystemRepository;
use Templatiq\Utils\Singleton;

class Backup {
	use Singleton;

	public function settings() {

		$file_name    = 'templatiq-sites-backup-' . gmdate( 'd-M-Y-h-i-s' ) . '.json';
		$old_settings = get_option( 'templatiq-settings', [] );
		$upload_dir   = ImporterLog::get_instance()->log_dir();
		$upload_path  = trailingslashit( $upload_dir['path'] );
		$log_file     = $upload_path . $file_name;
		$file_system  = ( new FileSystemRepository )->get_filesystem();

		// If file system fails? Then take a backup in site option.
		if ( false === $file_system->put_contents( $log_file, wp_json_encode( $old_settings ), FS_CHMOD_FILE ) ) {
			update_option( 'templatiq_sites_' . $file_name, $old_settings, 'no' );
		}
	}
}