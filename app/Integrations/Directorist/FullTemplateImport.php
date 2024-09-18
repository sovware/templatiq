<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class FullTemplateImport {
	use Singleton;

	public function __construct() {
		add_filter( 'templatiq_wxr_importer.pre_process.post', [$this, 'before_listing_import'], 10 );
		add_filter( 'templatiq_wxr_importer.pre_process.post', [$this, 'before_pricing_plan_import'], 10 );

		add_filter( 'templatiq_wxr_importer.pre_process.post_meta', [$this, 'change_listing_directory_type_during_import'], 10, 2 );
		add_action( 'templatiq_wxr_importer.processed.term', [$this, 'set_term_directory_type_during_import'], 10, 2 );

		add_action( 'templatiq_full_template_import_complete', [$this, 'change_term_meta_after_complete'] );
		add_action( 'templatiq_full_template_import_complete', [$this, 'change_listing_pricing_plan_meta_after_complete'] );
		add_action( 'templatiq_full_template_import_complete', [$this, 'remove_mappings_after_complete'] );
	}

	public function before_listing_import( $data ) {
		if ( ! isset( $data['post_type'] ) || 'at_biz_dir' !== $data['post_type'] ) {
			return $data;
		}

		$import_listings = get_option( 'templatiq-import-directorist-listings', false );
		if ( ! $import_listings ) {
			return [];
		}

		return $data;
	}

	public function before_pricing_plan_import( $data ) {
		if ( ! isset( $data['post_type'] ) || 'atbdp_pricing_plans' !== $data['post_type'] ) {
			return $data;
		}

		return [];
	}

	public function set_term_directory_type_during_import( $term_id, $data ) {
		if ( isset( $data['taxonomy'] ) && ( 'at_biz_dir-location' === $data['taxonomy'] || 'at_biz_dir-category' === $data['taxonomy'] ) ) {
			// Get the directory type mappings.
			$types = get_option( 'templatiq_sites_directory_types_ids_mapping', [] );

			if ( ! empty( $types ) ) {
				// Update term meta with directory types.
				update_term_meta( $term_id, '_directory_type', array_values( $types ) );

				// Define a term or terms to associate with the 'atbdp_listing_types' taxonomy.
				$value = array_values( $types ); // Assuming $types is an array of term IDs or slugs for 'atbdp_listing_types'.

				// Ensure $value is not empty before setting terms.
				if ( ! empty( $value ) ) {
					wp_set_object_terms( $term_id, $value, 'atbdp_listing_types' );
				}
			}
		}
	}

	public function change_listing_directory_type_during_import( $meta_item, $post_id ) {
		$key = $meta_item['key'] ?? '';

		// Update Listing Meta
		if ( '_directory_type' === $key ) {
			$types     = get_option( 'templatiq_sites_directory_types_ids_mapping', true );
			$value     = $types[$meta_item['value']] ?? 0; // if no id found then serve the default directory type
			$_pre_type = get_post_meta( $post_id, '_directory_type', true );

			if ( $_pre_type !== $value ) {
				update_post_meta( $post_id, '_directory_type', $value );
				wp_set_object_terms( $post_id, (int) $value, 'atbdp_listing_types' );

				return [];
			}
		}

		return $meta_item;
	}

	public function change_term_meta_after_complete() {
		$attachments_ref = get_option( '_templatiq_imported_attachments', [] );

		if ( empty( $attachments_ref ) ) {
			return;
		}

		// Location update
		$locs = get_terms( ['taxonomy' => 'at_biz_dir-location', 'meta_key' => 'image', 'hide_empty' => false, 'fields' => 'ids'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		if ( ! empty( $locs ) ) {
			foreach ( $locs as $loc ) {
				$attachment_id = $attachments_ref[$loc] ?? 0;
				if ( $attachment_id ) {
					update_term_meta( $loc, 'image', $attachment_id );
				}
			}
		}

		// Category update
		$cats = get_terms( ['taxonomy' => 'at_biz_dir-category', 'meta_key' => 'image', 'hide_empty' => false, 'fields' => 'ids'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		if ( ! empty( $cats ) ) {
			foreach ( $cats as $cat ) {
				$attachment_id = $attachments_ref[$cat] ?? 0;
				if ( $attachment_id ) {
					update_term_meta( $cat, 'image', $attachment_id );
				}
			}
		}

		// Directory Type update
		$types = get_terms( [
			'taxonomy'   => 'atbdp_listing_types',
			'fields'     => 'ids',
			'hide_empty' => false,
		] );

		if ( ! empty( $types ) ) {
			$default_found = false;
			$last_type     = end( $types ); // Get the last term in the array

			// First pass: Check if any type has `_default` set
			foreach ( $types as $type ) {
				$check_default = get_term_meta( (int) $type, '_default', true );
				if ( ! empty( $check_default ) ) {
					$default_found = true;
					break; // Stop the loop as we found a `_default`
				}
			}

			if ( ! $default_found ) {
				update_term_meta( $last_type, '_default', 1 );
			}
		}
	}

	public function change_listing_pricing_plan_meta_after_complete() {

		$listings = get_posts( [
			'post_type' => 'at_biz_dir',
			'meta_key'  => '_templatiq_sites_imported_post',
			'fields'    => 'ids']
		); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		if ( ! empty( $listings ) ) {
			foreach ( $listings as $listing ) {
				update_post_meta( $listing, '_listing_status', 'post_status' );
				update_post_meta( $listing, '_fm_plans', ' ' );
				update_post_meta( $listing, '_listing_order_id', ' ' );
				update_post_meta( $listing, '_featured', '' );
			}
		}
	}

	public function remove_mappings_after_complete() {
		delete_option( 'templatiq_sites_directory_types_ids_mapping' );
	}
}