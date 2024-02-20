<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Model\Bookmark as ModelBookmark;
use Templatiq\Utils\Response;

class Bookmark extends RouteBase {
	private $endpoint = 'bookmark';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/add', [$this, 'add'] );
		$this->post( $this->endpoint . '/remove', [$this, 'remove'] );
	}

	public function add() {
		$template_id = $this->get_param( 'template_id', 0, 'intval' );
		if ( 0 === $template_id ) {
			return Response::error( 'invalid_template_id', __( 'Invalid ID is provided.', 'templatiq' ), 'bookmark/add', 404 );
		}

		return ( new ModelBookmark )->add( $template_id );
	}

	public function remove() {
		$template_id = $this->get_param( 'template_id', 0, 'intval' );
		if ( 0 === $template_id ) {
			return Response::error( 'invalid_template_id', __( 'Invalid ID is provided.', 'templatiq' ), 'bookmark/remove', 404 );
		}

		return ( new ModelBookmark )->remove( $template_id );
	}
}