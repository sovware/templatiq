<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Route;

use Elementor\Plugin;
use TemplateMarket\Abstracts\RouteBase;
use TemplateMarket\Model\Importer;
use TemplateMarket\Utils\Response;

class Import extends RouteBase {
	private $endpoint = 'import';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/page', [$this, 'import_as_page'] );
		$this->post( $this->endpoint . '/template', [$this, 'insert_template'] );
	}

	public function import_as_page() {
		$item_id = $this->get_param( 'item_id', 0, 'intval' );
		$title   = $this->get_param( 'title' );
		$builder = $this->get_param( 'builder', 'elementor' );

		if ( 0 === $item_id ) {
			return Response::error( 'invalid_item_id', __( 'Invalid ID is provided.', 'template-market' ), 'import/page', 404 );
		}

		$importer    = new Importer;
		$inserted_id = $importer->import_as_page( $item_id, $title, $builder );

		if ( is_wp_error( $inserted_id ) ) {
			return Response::error(
				'import_failed',
				__( 'Import Failed', 'template-market' ),
				'import/page'
			);
		}

		return [
			'post_id'             => $inserted_id,
			'edit_link'           => get_edit_post_link( $inserted_id, 'internal' ),
			'elementor_edit_link' => Plugin::$instance->documents->get( $inserted_id )->get_edit_url(),
			'visit'               => get_permalink( $inserted_id ),
			'right_access_ache'   => current_user_can( 'publish_posts' ),
		];
	}

	public function insert_template() {
		$item_id = $this->get_param( 'item_id', 0, 'intval' );
		$builder = $this->get_param( 'builder', 'elementor' );

		if ( 0 === $item_id ) {
			return Response::error( 'invalid_item_id', __( 'Invalid ID is provided.', 'template-market' ), 'import/page', 404 );
		}

		$importer    = new Importer;
		$inserted_id = $importer->insert_template( $item_id, $builder );

		if ( is_wp_error( $inserted_id ) ) {
			return Response::error(
				'import_failed',
				__( 'Import Failed', 'template-market' ),
				'import/template'
			);
		}

		return [
			'post_id'             => $inserted_id,
			'edit_link'           => get_edit_post_link( $inserted_id, 'internal' ),
			'elementor_edit_link' => Plugin::$instance->documents->get( $inserted_id )->get_edit_url(),
			'visit'               => get_permalink( $inserted_id ),
		];
	}
}