<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Elementor;

use Templatiq\Abstracts\DTOBase;

class TemplateDataDTO extends DTOBase {
	public string $title;
	public string $post_title;
	public string $type;
	public array $content;
	public string $status;
	public array $page_settings;
	public string $version;

	public function set_title( string $title ) {
		$this->title = $title;

		return $this;
	}

	public function get_title() {
		return $this->title;
	}

	public function set_post_title( string $post_title ) {
		$this->post_title = $post_title;

		return $this;
	}

	public function get_post_title() {
		return $this->post_title;
	}

	public function set_type( string $type ) {
		$this->type = $type;

		return $this;
	}

	public function get_type() {
		return $this->type;
	}

	public function set_content( array $content ) {
		$this->content = $content;

		return $this;
	}

	public function get_content() {
		return $this->content;
	}

	public function set_status( string $status ) {
		$this->status = $status;

		return $this;
	}

	public function get_status() {
		return $this->status;
	}

	public function set_page_settings( array $page_settings ) {
		$this->page_settings = $page_settings;

		return $this;
	}

	public function get_page_settings() {
		return $this->page_settings;
	}

	public function set_version( string $version ) {
		$this->version = $version;

		return $this;
	}

	public function get_version() {
		return $this->version;
	}
}