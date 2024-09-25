<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Bricks;

use Templatiq\Utils\Singleton;

class Compatibility {
	use Singleton;

	public function __construct() {
		if ( ! wp_doing_ajax() || ( defined( 'BRICKS_VERSION' ) && version_compare( BRICKS_VERSION, '1.10.0', '>=' ) ) ) {
			add_filter( 'templatiq_import_post_meta', [$this, 'on_templatiq_import_post_meta'] );
			add_filter( 'templatiq_wxr_importer.pre_process.post_meta', [$this, 'on_wxr_importer_pre_process_post_meta'] );
		}
	}

	public function on_templatiq_import_post_meta( $post_meta ) {
		if ( ! is_array( $post_meta ) || empty( $post_meta ) ) {
			return [];
		}

		foreach ( $post_meta as &$meta ) {
			if ( '_bricks_page_content_2' === $meta['key'] ) {
				$meta['value'] = wp_slash( $meta['value'] );
				break;
			}
		}

		return $post_meta;
	}

	public function on_wxr_importer_pre_process_post_meta( $post_meta ) {
		if ( '_bricks_page_content_2' === $post_meta['key'] ) {
			$post_meta['value'] = wp_slash( $post_meta['value'] );
		}

		return $post_meta;
	}
}