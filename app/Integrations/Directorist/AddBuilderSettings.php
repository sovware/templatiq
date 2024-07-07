<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Utils\Singleton;

class AddBuilderSettings {
	use Singleton;

	public function __construct() {
		add_filter( 'atbdp_listing_type_settings_field_list', [$this, 'listing_form_setting_fields'] );
		add_filter( 'atbdp_submission_form_settings', [$this, 'listing_form_custom_template'] );
		add_filter( 'the_content', [$this, 'addListingCustomContent'] );
	}

	public function addListingCustomContent( $content ) {
		if ( ! atbdp_is_page( 'add_listing' ) ) {
			return $content;
		}

		$isMultiDirectory = directorist_is_multi_directory_enabled() && count( get_listing_types() ) > 1;

		if ( $isMultiDirectory ) {
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			if ( ! isset( $_GET['directory_type'] ) ) {
				return $content;
			}

			if ( is_plugin_active( 'directorist-pricing-plans/directorist-pricing-plans.php' ) ) {
				// phpcs:ignore WordPress.Security.NonceVerification.Recommended
				if ( ! isset( $_GET['plan'] ) ) {
					return $content;
				}
			}

            // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$term   = get_term_by( 'slug', esc_html( $_GET['directory_type'] ), ATBDP_TYPE );
			$termId = $term ? $term->term_id : null;

		} else {
			if ( is_plugin_active( 'directorist-pricing-plans/directorist-pricing-plans.php' ) ) {
				// phpcs:ignore WordPress.Security.NonceVerification.Recommended
				if ( ! isset( $_GET['plan'] ) ) {
					return $content;
				}
			}

			$termId = default_directory_type();
		}

		if ( empty( $termId ) ) {
			return $content;
		}

		$enableTemplate = get_directorist_type_option( $termId, 'enable_add_listing_custom_template' );
		$pageId         = ! empty( $enableTemplate ) ? get_directorist_type_option( $termId, 'custom_add_listing_template' ) : '';

		// Bail if custom add listing page is disabled
		if ( empty( $pageId ) ) {
			return $content;
		}

		// Bail if selected custom add listing page is not really a page
		$post = get_post( $pageId );
		if ( ! $post || 'page' !== $post->post_type ) {
			return $content;
		}

		return get_the_content( null, null, $pageId );
	}

	public function listing_form_setting_fields( $args ) {
		$args['enable_add_listing_custom_template'] = [
			'type'      => 'toggle',
			'label'     => __( 'Custom Add Listing Page', 'templatiq' ),
			'labelType' => 'h3',
			'value'     => false,
		];

		$args['custom_add_listing_template'] = [
			'label'             => __( 'Select page', 'templatiq' ),
			'type'              => 'select',
			'value'             => '',
			'showDefaultOption' => true,
			'options'           => directorist_get_all_page_list(),
			'show_if'           => [
				'where'      => 'enable_add_listing_custom_template',
				'conditions' => [
					['key' => 'value', 'compare' => '=', 'value' => true],
				],
			],
		];

		return $args;
	}

	public function listing_form_custom_template( $args ) {
		$args['listing_form_custom_template'] = [
			'title'     => __( 'Listing Form Custom Template [Templatiq]', 'templatiq' ),
			'container' => 'short-width',
			'fields'    => [
				'enable_add_listing_custom_template',
				'custom_add_listing_template',
			],
		];

		return $args;
	}
}