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

class Dependency extends RouteBase {

	private $endpoint = 'dependency';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/check', [$this, 'check'] );
		$this->post( $this->endpoint . '/install', [$this, 'install'] );
	}

	public function check() {
		/**
		 * Need to sanitize the array.
		 */
		$plugins = $this->get_param( 'plugins', [], false );

		return Plugin::dependencies( $plugins );
	}

	public function install() {
		/**
		 * Need to sanitize the array.
		 */
		$plugin = $this->get_param( 'plugin', [], false );

		if ( empty( $plugin ) ) {
			return Response::error(
				'invalid_plugins',
				__( 'You have supplied an invalid requirements. Please reload the page and try again.' ),
				'/install',
				400
			);
		}

		return Plugin::installer( $plugin );
	}
}