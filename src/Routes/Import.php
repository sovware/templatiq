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
		// Development purpose using GET/ but these would be POST request
		$this->get( $this->endpoint . '/page', [$this, 'import_as_page'] );
		$this->get( $this->endpoint . '/template', [$this, 'insert_template'] );
	}

	public function import_as_page() {
		$id      = $this->get_param( 'id', 0, 'intval' );
		$title   = $this->get_param( 'title' );
		$builder = $this->get_param( 'builder', 'elementor' );

		if ( 0 === $id ) {
			return Response::error( 'invalid_item_id', __( 'Invalid ID is provided.', 'template-market' ), 'import/page', 404 );
		}

		$importer    = new Importer;
		$inserted_id = $importer->import_as_page( $id, $title, $builder );

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
		];
	}

	public function insert_template() {
		$id      = $this->get_param( 'id', 0, 'intval' );
		$builder = $this->get_param( 'builder', 'elementor' );

		if ( 0 === $id ) {
			return Response::error( 'invalid_item_id', __( 'Invalid ID is provided.', 'template-market' ), 'import/page', 404 );
		}

		$importer    = new Importer;
		$inserted_id = $importer->insert_template( $id, $builder );

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