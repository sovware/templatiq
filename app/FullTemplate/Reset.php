<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Utils\Singleton;

class Reset {
	use Singleton;

	public function posts( $ids ) {
		ErrorHandler::get_instance()->start_error_handler();

		// Suspend bunches of stuff in WP core.
		wp_defer_term_counting( true );
		wp_defer_comment_counting( true );
		wp_suspend_cache_invalidation( true );

		$posts = json_decode( stripslashes( $ids ), true );

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

					ImporterLog::add( $message );
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

		ErrorHandler::get_instance()->stop_error_handler();
	}

	public function terms_and_forms() {
		ErrorHandler::get_instance()->start_error_handler();

		$terms = templatiq_sites_get_reset_term_data();

		if ( ! empty( $terms ) ) {
			foreach ( $terms as $key => $term_id ) {
				$term_id = absint( $term_id );
				if ( $term_id ) {
					$term = get_term( $term_id );
					if ( ! is_wp_error( $term ) && ! empty( $term ) && is_object( $term ) ) {

						do_action( 'templatiq_sites_before_delete_imported_terms', $term_id, $term );

						$message = 'Deleted - Term ' . $term_id . ' - ' . $term->name . ' ' . $term->taxonomy;
						ImporterLog::add( $message );
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
					ImporterLog::add( $message );
					wp_delete_post( $post_id, true );
				}
			}
		}

		ErrorHandler::get_instance()->stop_error_handler();
	}

	public function get_data() {
		ErrorHandler::get_instance()->start_error_handler();

		$data = [
			'reset_posts'    => templatiq_sites_get_reset_post_data(),
			'reset_wp_forms' => templatiq_sites_get_reset_form_data(),
			'reset_terms'    => templatiq_sites_get_reset_term_data(),
		];

		ErrorHandler::get_instance()->stop_error_handler();

		return $data;
	}
}