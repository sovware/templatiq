<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\DTO\ImportAsPageDTO;

class BlockBuilderRepository {
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

			$processed_content = $this->process_images( $template_content, $inserted_id );

			$updated_post = [
				'ID'           => $inserted_id,
				'post_content' => wp_slash( $processed_content['content'] ),
			];

			wp_update_post( $updated_post );

			return $inserted_id;

		} catch ( \Throwable $th ) {
			throw $th;
		}
	}

	public function process_images( $template_content, $postId = 0 ) {
		// Instantiate GutenbergHelper
		$helper = new GutenbergHelper();

		// Organize URLs from the content
		$organizedUrls = $helper->parse_images( $template_content );

		// Define template settings
		$template_settings = [
			'post_id'       => $postId,
			'__attachments' => $organizedUrls,
		];

		// Map post IDs and disable logging
		$helper->map_post_ids[$postId] = $postId;
		$helper->shouldLog             = false;

		// Prepare the helper with the data and settings
		$helper->prepare( $template_content, $template_settings );

		// Update the content in the data array

		return wp_unslash( $helper->get_content() );
	}
}