<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Route;

use TemplateMarket\Abstracts\RouteBase;
use TemplateMarket\Utils\Http;
use TemplateMarket\Utils\Response;

class Template extends RouteBase {
	private $endpoint = 'template';

	public function register_routes(): void {
		$this->get( $this->endpoint . '/items', [$this, 'items'] );
		$this->get( $this->endpoint . '/item', [$this, 'item'] );
	}

	public function items() {
		$type     = $this->get_param( 'type', 'blocks' );
		$builder  = $this->get_param( 'builder', 'elementor' );
		$page     = $this->get_param( 'page', 1, 'intval' );
		$per_page = $this->get_param( 'per_page', 40, 'intval' );

		$funcArgs = [
			'page'     => $page,
			'per_page' => $per_page,
			'builder'  => $builder,
		];

		$query = 'total_page, current_page, data { id, name, price, rating, downloads, type, template_type{ slug }, slug, favourite_count, dependencies{ id, name, icon, plugin_file, plugin_original_slug, is_pro, link }, thumbnail }';
		$http  = new Http;

		return $http->query(
			$type,
			$query,
			$funcArgs
		)->post();
	}

	public function item() {
		$item_id = $this->get_param( 'item_id' );

		if ( empty( $item_id ) ) {
			return Response::error(
				'invalid_item_slug',
				__( 'Items slug cannot be empty.', 'templately' ),
				'items/:slug',
				'400'
			);
		}
		$http = new Http;

		$response = $http->query( $item_id, [] )->post();

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( empty( $response['data'] ) ) {
			return Response::error(
				'invalid_response',
				__( 'Item data not found', 'templately' ),
				'/items\/' . $item_id,
				'404'
			);
		}

		return current( $response['data'] );
	}
}