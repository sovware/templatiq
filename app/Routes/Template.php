<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Plugin;
use Templatiq\Abstracts\RouteBase;
use Templatiq\Model\Elementor;
use Templatiq\Model\Importer;
use Templatiq\Model\Library;
use Templatiq\Utils\Hookable;
use Templatiq\Utils\Response;

class Template extends RouteBase {
	private $endpoint = 'template';
	use Hookable;

	public function __construct() {
		$this->action( 'elementor/ajax/register_actions', 'elementor_editor_ajax' );
		$this->action( 'elementor/editor/footer', 'print_template_views' );
		$this->action( 'rest_api_init', 'register_routes' );
	}

	public function print_template_views() {
		include_once TEMPLATIQ_PATH . '/templates/template-library/templates.php';
	}

	public function register_routes(): void {
		$this->post( $this->endpoint . '/import-as-page', [$this, 'import_as_page'] );
		$this->get( $this->endpoint . '/library', [$this, 'library'] );
	}

	/**
	 * Import as page from plugin dashboard area
	 */
	public function import_as_page() {
		$template_id = $this->get_param( 'template_id', 0, 'intval' );
		$title       = $this->get_param( 'title' );
		$builder     = $this->get_param( 'builder', 'elementor' );

		if ( 0 === $template_id ) {
			return Response::error( 'invalid_template_id', __( 'Invalid ID is provided.', 'templatiq' ), 'import/page', 404 );
		}

		$importer    = new Importer;
		$inserted_id = $importer->import_as_page( $template_id, $title, $builder );

		if ( is_wp_error( $inserted_id ) ) {
			return Response::error(
				'import_failed',
				__( 'Import Failed', 'templatiq' ),
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

	public function library() {
		return ( new Library )->data();
	}

	public function elementor_editor_ajax( Ajax $ajax ) {
		$ajax->register_ajax_action( 'get_tm_library_data', function ( $data ) {
			if ( ! current_user_can( 'edit_posts' ) ) {
				throw new \Exception( 'Access Denied' );
			}

			if ( ! empty( $data['editor_post_id'] ) ) {
				$editor_post_id = absint( $data['editor_post_id'] );

				if ( ! get_post( $editor_post_id ) ) {
					throw new \Exception( __( 'Post not found.', 'templatiq' ) );
				}

				\Elementor\Plugin::instance()->db->switch_to_post( $editor_post_id );
			}

			$result = ( new Elementor )->get_library_data();

			return $result;
		} );

		$ajax->register_ajax_action( 'get_tm_template_data', function ( $data ) {

			if ( ! current_user_can( 'edit_posts' ) ) {
				throw new \Exception( 'Access Denied' );
			}

			if ( empty( $data['template_id'] ) ) {
				throw new \Exception( 'Item ID Missing' );
			}

			$template_id = (int) $data['template_id'];
			$importer    = new Importer;
			$result      = $importer->get_template_data( $template_id );

			unset( $result['type'] );

			return $result;
		} );
	}

	private function prepare_args( string $type ) {
		$args = [
			'template_id' => [
				'description' => 'The selected template id',
				'type'        => 'int',
				'required'    => true,
			],
			'title'       => [
				'description' => 'Page title',
				'type'        => 'string',
				'required'    => true,
			],
			'builder'     => [
				'description' => 'The selected builder like elementor',
				'type'        => 'string',
				'required'    => true,
			],
		];

		$_args = [];
		switch ( $type ) {
			case 'import_as_page':
				$_args = [
					'template_id' => $args['template_id'],
					'title'       => $args['title'],
					'builder'     => $args['builder'],
				];
				break;
		}

		return $_args;
	}
}