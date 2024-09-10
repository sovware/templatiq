<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\DTO;

use Templatiq\Abstracts\DTOBase;

class PluginDTO extends DTOBase {
	public string $name;
	public string $file_name;
	public string $slug;
	public bool $is_pro;

	public function set_name( string $name ) {
		$this->name = $name;

		return $this;
	}

	public function get_name() {
		return $this->name;
	}

	public function set_file_name( string $file_name ) {
		$this->file_name = $file_name;

		return $this;
	}

	public function get_file_name() {
		return $this->file_name;
	}

	public function set_slug( string $slug ) {
		$this->slug = $slug;

		return $this;
	}

	public function get_slug() {
		return $this->slug;
	}

	public function set_is_pro( bool $is_pro ) {
		$this->is_pro = $is_pro;

		return $this;
	}

	public function get_is_pro(): bool {
		return $this->is_pro;
	}
}