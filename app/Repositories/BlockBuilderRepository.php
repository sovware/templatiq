<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;
use Templatiq\FullTemplate\ImageImporter;

class BlockBuilderRepository {
	const IMAGE_URL_PATTERN = '/(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/';
	public array $organized_urls;
	public array $imported_urls;
	public $template_content;
	public $content;
	public $inserted_id;
	public $template_settings;
	protected static $attachment_ids = [];
	public array $url_remap          = [];

	public function create_page( ImportAsPageDTO $DTO ) {

		try {

			$this->template_content = $DTO->get_template_data()['content'] ?? '';

			$this->inserted_id = wp_insert_post( [
				'post_status'  => 'draft',
				'post_type'    => 'page',
				'post_title'   => $DTO->get_title(),
				'post_content' => wp_slash( $this->template_content ),
			] );

			if ( is_wp_error( $this->inserted_id ) ) {
				throw new \Exception(
					$this->inserted_id->get_error_message(),
					'import-as-page-failed'
				);
			}

			$processed_content = $this->process_images();

			if ( is_wp_error( $processed_content ) ) {
				throw new \Exception(
					$processed_content->get_error_message(),
					'import-as-page-processed-content-failed'
				);
			}

			// error_log( '$processed_content : ' . print_r( $processed_content, true ) );

			$updated_post = [
				'ID'           => $this->inserted_id,
				'post_content' => $processed_content,
			];

			wp_update_post( $updated_post );

			return $this->inserted_id;

		} catch ( \Throwable $th ) {
			throw new \Exception(
				$th->getMessage(),
				'import-as-page-create-page-failed'
			);
		}
	}

	public function process_images() {

		try {
			$this->organized_urls = $this->parse_images(); // Organize URLs from the content
			$this->imported_urls  = $this->import_images(); // Import Images from the demo site

			return $this->prepare();

		} catch ( \Throwable $th ) {
			throw new \Exception(
				$th->getMessage(),
				'import-as-page-process-images-failed'
			);
		}
	}

	public function parse_images() {
		// Find all image URLs in the post content
		preg_match_all( self::IMAGE_URL_PATTERN, $this->template_content, $matches );

		// Check if $matches[0] exists and contains values
		if ( empty( $matches[0] ) ) {
			return []; // Return an empty array if no matches are found
		}

		$urls           = $matches[0];
		$organized_urls = [];

		foreach ( $urls as $url ) {
			// Remove the size suffix from the URL
			$base_url = preg_replace( '/-\d+x\d+(?=\.[a-zA-Z]+$)/', '', $url );

			// Check if the URL already exists in the array
			if ( ! isset( $organized_urls[$base_url] ) || ! in_array( $url, $organized_urls[$base_url] ) ) {
				// Add the URL to the array under the base URL key
				$organized_urls[$base_url][] = $url;
			}
		}

		return $organized_urls;
	}

	public function import_images() {
		set_time_limit( 0 );

		$return = [];
		foreach ( $this->organized_urls as $base_url => $urls ) {
			$image = $this->import_image( $base_url );

			if ( $image instanceof \WP_Error ) {
				$return[] = $image->get_error_message();
			} else {
				$return[] = $image;

				// Map the old URL (base_url) to the new one (imported URL)
				$this->url_remap[$base_url] = $image['url'];
			}
		}

		return $return;
	}

	public function import_image( string $image_url ) {
		try {
			// Download the image using the ImageImporter
			$downloaded_image = ImageImporter::get_instance()->import(
				[
					'url' => $image_url,
					'id'  => 0,
				]
			);

			// Check if the result is a WP_Error object
			if ( is_wp_error( $downloaded_image ) ) {
				throw new \Exception( 'Image import failed: ' . $downloaded_image->get_error_message() );
			}

			// Check if the $downloaded_image is an array and contains 'url'
			if ( ! is_array( $downloaded_image ) || ! isset( $downloaded_image['url'] ) ) {
				// Log the issue for debugging
				// error_log( 'Unexpected $downloaded_image format: ' . print_r( $downloaded_image, true ) );
				throw new \Exception( 'Unexpected image import result. Missing URL.' );
			}

			// Store the attachment ID for the image
			self::$attachment_ids[$image_url] = $downloaded_image['id'];

			return $downloaded_image;

		} catch ( \Throwable $th ) {
			// error_log( 'Error in import_image: ' . $th->getMessage() );
			throw new \Exception( $th->getMessage(), 'import-image-failed' );
		}
	}

	public function prepare() {
		// Define template settings
		$this->template_settings = [
			'post_id'       => $this->inserted_id,
			'__attachments' => $this->organized_urls,
		];

		$parsed_blocks = parse_blocks( $this->template_content );

		$this->replace( $parsed_blocks, [] );

		return wp_slash( serialize_blocks( $parsed_blocks ) );
	}

	private function replace( &$blocks, $request_params = [] ) {
		foreach ( $blocks as &$block ) {

			if ( isset( $this->template_settings['__attachments'] ) ) {
				$block = $this->replace_attachment_url( $block );
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->replace( $block['innerBlocks'], $request_params );
			}
		}
	}

	public function replace_attachment_url( $attrs ) {
		// Check if blockName exists
		if ( ! empty( $attrs['blockName'] ) ) {
			$attrs = $this->replace_attachment_ids( $attrs );
		}

		// If the attribute is a string (e.g., HTML content), replace URLs
		if ( is_string( $attrs ) ) {
			foreach ( $this->url_remap as $old_url => $new_url ) {
				if ( strpos( $attrs, $old_url ) !== false ) {
					$attrs = str_replace( $old_url, $new_url, $attrs );
				}
			}
		}
		// If it's an array, recursively replace URLs
		elseif ( is_array( $attrs ) ) {
			foreach ( $attrs as $key => $attr ) {
				$attrs[$key] = $this->replace_attachment_url( $attr );
			}
		}

		return $attrs;
	}

	protected function replace_attachment_ids( $attrs ) {
		switch ( $attrs['blockName'] ) {
			case 'core/image':
				$attrs = $this->processCoreImage( $attrs, 'id' );
				break;
			case 'core/media-text':
				$attrs = $this->processCoreImage( $attrs, 'mediaId' );
				break;
			case 'core/cover':
				$attrs = $this->processSingleImage( $attrs, 'url' );
				break;
		}

		return $attrs;
	}

	private function processSingleImage( $attrs, $imageKey ) {
		// Check if $attrs['attrs'][$imageKey] is an array and contains 'url'
		if ( isset( $attrs['attrs'][$imageKey] ) && is_array( $attrs['attrs'][$imageKey] ) && isset( $attrs['attrs'][$imageKey]['url'] ) ) {
			$image_url = $attrs['attrs'][$imageKey]['url'];

			// Check if the image URL exists in attachment_ids
			if ( ! empty( self::$attachment_ids[$image_url] ) ) {
				$attrs['attrs'][$imageKey]['id'] = (int) self::$attachment_ids[$image_url];
			}
		} else {
			error_log( 'processSingleImage: Missing or invalid image key: ' . print_r( $attrs, true ) );
		}

		return $attrs;
	}

	private function processCoreImage( $attrs, $idKey ) {
		preg_match( self::IMAGE_URL_PATTERN, $attrs['innerHTML'], $matches );
		if ( ! empty( $matches[0] ) ) {
			$url = $matches[0];
			if ( ! empty( self::$attachment_ids[$url] ) ) {
				$oldId                  = $attrs['attrs'][$idKey];
				$newId                  = (int) self::$attachment_ids[$url];
				$attrs['attrs'][$idKey] = $newId;

				// Replace old ID with new ID in innerHTML and innerContent
				$attrs = $this->updateInnerHTMLAndContent( $attrs, "wp-image-$oldId", "wp-image-$newId" );
			}
		}

		return $attrs;
	}

	private function updateInnerHTMLAndContent( $attrs, $oldValue, $newValue ) {
		$attrs['innerHTML'] = str_replace( $oldValue, $newValue, $attrs['innerHTML'] );
		if ( is_array( $attrs['innerContent'] ) ) {
			foreach ( $attrs['innerContent'] as $i => $content ) {
				$attrs['innerContent'][$i] = str_replace( $oldValue, $newValue, $content );
			}
		} else {
			$attrs['innerContent'] = str_replace( $oldValue, $newValue, $attrs['innerContent'] );
		}

		return $attrs;
	}
}