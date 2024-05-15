<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\DTO;

class ImportAsPageDTO {
	public int $template_id;
	public string $title;
	public string $builder;

	public array $template_data;
	public function set_template_id( int $template_id ) {
		$this->template_id = $template_id;

		return $this;
	}

	public function get_template_id() {
		return $this->template_id;
	}

	public function set_title( string $title ) {
		$this->title = $title;

		return $this;
	}

	public function get_title() {
		return $this->title;
	}

	public function set_builder( string $builder ) {
		$this->builder = $builder;

		return $this;
	}

	public function get_builder() {
		return $this->builder;
	}

	public function set_template_data( array $template_data ) {
		$this->template_data = $template_data;

		return $this;
	}

	public function get_template_data() {
		return $this->template_data;
	}
}