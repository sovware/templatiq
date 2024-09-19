<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;

class BlockBuilderRepository {
	const IMAGE_URL_PATTERN = '/(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/';

	public function create_page( ImportAsPageDTO $DTO ) {

		try {

			$template_content = $DTO->get_template_data()['content'] ?? '';

			$inserted_id = wp_insert_post( [
				'post_status'  => 'draft',
				'post_type'    => 'page',
				'post_title'   => $DTO->get_title(),
				'post_content' => wp_slash( $template_content ),
			] );

			if ( is_wp_error( $inserted_id ) ) {
				throw new \Exception(
					$inserted_id->get_error_message(),
					'import-as-page-failed'
				);
			}

			// $processed_content = $this->process_images( $template_content, $inserted_id );

			// $updated_post = [
			// 	'ID'           => $inserted_id,
			// 	'post_content' => wp_slash( $processed_content['content'] ),
			// ];

			// wp_update_post( $updated_post );

			return $inserted_id;

		} catch ( \Throwable $th ) {
			throw $th;
		}
	}

	public function process_images( $template_content, $postId = 0 ) {
		// Instantiate GutenbergHelper
		$helper = '';

		// Organize URLs from the content
		$organizedUrls = $this->parse_images( $template_content );

		// Define template settings
		$template_settings = [
			'post_id'       => $postId,
			'__attachments' => $organizedUrls,
		];

		// Prepare the helper with the data and settings
		$helper->prepare( $template_content, $template_settings );

		// Update the content in the data array

		return wp_unslash( $helper->get_content() );
	}

	/**
	 * Parses the images from the post content, processes them as attachments, and updates the post with the new attachment URL.
	 * @todo: Parse using parse_blocks instead of regex
	 *
	 * @param int    $post_id      The ID of the post.
	 * @param string $post_content The content of the post.
	 */
	public function parse_images( $post_content ) {
		// Find all image URLs in the post content
		preg_match_all( self::IMAGE_URL_PATTERN, $post_content, $matches );

		$urls          = $matches[0];
		$organizedUrls = [];

		foreach ( $urls as $url ) {
			// Remove the size suffix from the URL
			$base_url = preg_replace( '/-\d+x\d+(?=\.[a-zA-Z]+$)/', '', $url );

			// Check if the URL already exists in the array
			if ( ! isset( $organizedUrls[$base_url] ) || ! in_array( $url, $organizedUrls[$base_url] ) ) {
				// Add the URL to the array under the base URL key
				$organizedUrls[$base_url][] = $url;
			}
		}

		return $organizedUrls;
	}
}