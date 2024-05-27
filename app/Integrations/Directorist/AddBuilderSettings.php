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
        add_filter( 'the_content', [$this, 'add_listing_custom_content'] );
    }

    public function add_listing_custom_content( $content ) {
        if ( ! atbdp_is_page( 'add_listing' ) ) {
            return $content;
        }

        $term_id = default_directory_type();

        if ( directorist_is_multi_directory_enabled() && ( count( get_listing_types() ) > 1 ) ) {
            $dir_type = isset( $_GET['directory_type'] ) ? $_GET['directory_type'] : '';

            if ( empty( $dir_type ) ) {
                return $content;
            }

            $term     = get_term_by( 'slug', $dir_type, ATBDP_TYPE );
            $term_id  = $term->term_id;
        }

        if ( is_plugin_active('directorist-pricing-plans/directorist-pricing-plans.php') ) {
            $dir_plan = isset( $_GET['plan'] ) ? $_GET['plan'] : '';

            if ( isset( $dir_plan ) && empty( $dir_plan ) ) {
                return $content;
            }
        }

        if ( empty( $term_id ) ) {
            return $content;
        }

        $enable_template = get_directorist_type_option( $term_id, 'enable_custom_template' );
        $page_id         = empty( $enable_template ) ? '' : get_directorist_type_option( $term_id, 'custom_template' );

        // Bail if custom add listing page is disabled
        if ( empty( $page_id ) ) {
            return $content;
        }

        // Bail if selected custom add listing page is not really a page
        if ( 'page' !== get_post( $page_id )->post_type ) {
            return $content;
        }

        return get_the_content( null, null, $page_id );
    }

    public function listing_form_setting_fields( $args ) {
        $args['enable_custom_template'] = [
            'type'      => 'toggle',
            'label'     => __( 'Custom Add Listing Page', 'templatiq' ),
            'labelType' => 'h3',
            'value'     => false,
        ];

        $args['custom_template'] = [
            'label'             => __( 'Select page', 'templatiq' ),
            'type'              => 'select',
            'value'             => '',
            'showDefaultOption' => true,
            'options'           => directorist_get_all_page_list(),
            'show_if'           => [
                'where'      => 'enable_custom_template',
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
                'enable_custom_template',
                'custom_template',
            ],
        ];

        return $args;
    }
}