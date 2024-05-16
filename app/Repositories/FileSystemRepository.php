<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

class FileSystemRepository {

	public function get_filesystem() {
		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';

		WP_Filesystem();

		return $wp_filesystem;
	}

	public function check_permission() {
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

		return [
			'permissions' => $permissions,
			'directory'   => $wp_upload_path['basedir'],
		];
	}
}