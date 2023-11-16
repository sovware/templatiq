<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Routes;

use Templatiq\Abstracts\RouteBase;
use Templatiq\Utils\Plugin;
use Templatiq\Utils\Response;

class Dependency extends RouteBase {

	private $endpoint = 'dependency';

	public function register_routes(): void {
		$this->post( $this->endpoint . '/check', [$this, 'check'], $this->prepare_args( 'check' ) );
		$this->post( $this->endpoint . '/install', [$this, 'install'], $this->prepare_args( 'install' ) );
	}

	public function check() {
		/**
		 * Need to sanitize the array.
		 */
		$plugins = $this->get_param( 'plugins', [], false );
		
		// return $plugins;
		return Plugin::dependencies( $plugins );
	}

	public function install() {
		/**
		 * Need to sanitize the array.
		 */
		$plugin = $this->get_param( 'plugin', [], false );
return $plugin;
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

	private function prepare_args( string $type ) {
		$args = [
			'plugins' => [
				'description' => 'Send the list of plugins array',
				'type'        => 'array',
				'required'    => true,
			],
			'plugin'  => [
				'description' => 'Send the plugin array',
				'type'        => 'array',
				'required'    => true,
			],
		];

		$_args = [];
		switch ( $type ) {
			case 'check':
				$_args = [
					'plugins' => $args['plugins'],
				];
				break;

			case 'install':
				$_args = [
					'plugin' => $args['plugin'],
				];
				break;
		}

		return $_args;
	}
}