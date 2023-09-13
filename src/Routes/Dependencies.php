<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Route;

use TemplateMarket\Abstracts\RouteBase;
use TemplateMarket\Utils\Plugin;
use TemplateMarket\Utils\Response;

class Dependencies extends RouteBase {

	private $endpoint = 'dependencies';

	public function register_routes(): void {
		// Development purpose using GET/ but these would be POST request
		$this->get( $this->endpoint . '/check', [$this, 'check'] );
		$this->get( $this->endpoint . '/install', [$this, 'install'] );
	}

	public function check() {
		$item_id = (string) $this->get_param( 'item_id', '', '' );
		// Send a request to cloud, to know what plugins need to activate to run this template
		// after getting response split the dependencies to array. and pass this array to check
		// which plugins are not activated yet. send an array

		$dependencies = [];

		return Plugin::dependencies( $dependencies );
	}

	public function install() {
		$requirements = $this->get_param( 'requirement', [], '' );
		if ( empty( $requirements ) ) {
			return Response::error(
				'invalid_requirements',
				__( 'You have supplied an invalid requirements. Please reload the page and try again.' ),
				'/install',
				400
			);
		}

		return Plugin::installer( $requirements );
	}
}