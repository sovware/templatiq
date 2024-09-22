<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Utils;

class Http {
	private string $url;
	private array $headers;
	private array $body;
	public $response;

	public function __construct( string $url, array $body = [], array $headers = [] ) {
		$this->url( $url );
		$this->body( $body );
		$this->headers( $headers );
	}

	public function url( string $url = '' ) {
		$this->url = $url ?? $this->url;

		return $this;
	}

	public function headers( array $args = [] ) {
		$_headers = $this->headers ?? [
			'Content-Type'    => 'application/json',
			'x-templatiq-ip'  => Helper::get_ip(),
			'x-templatiq-url' => home_url( '/' ),
		];

		$this->headers = wp_parse_args( $args, $_headers );

		return $this;
	}

	public function body( array $args = [] ) {
		$builder = get_option( '_templatiq_selected_builder', 'elementor' );

		$args['time']    = time();
		$args['builder'] = $builder;
		$args['version'] = TEMPLATIQ_VERSION;

		$this->body = $args ?? $this->body;

		return $this;
	}

	public function post() {
		$args = [
			'headers' => $this->headers,
			'body'    => wp_json_encode( $this->body ),
			'timeout' => 120,
		];

		$this->response = wp_remote_post(
			$this->url,
			$args
		);

		return $this;
	}

	public function get() {
		$this->response = wp_remote_get(
			$this->url,
			[
				'headers' => $this->headers,
				'body'    => $this->body,
			]
		);

		return $this;
	}

	public function response() {
		return $this->response;
	}

	public function log() {
		Helper::log( $this->url, 'URL' );
		Helper::log( $this->headers, 'HEADERS' );
		Helper::log( $this->body, 'ARGS' );

		Helper::log( 'RAW RESPONSE: ' );
		Helper::log( $this->response );
		Helper::log( 'END RAW RESPONSE' );

		return $this;
	}
}