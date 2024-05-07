<?php

namespace Templatiq\DTO;

class AccountDTO {
	public string $name;
	public string $username;
	public string $password;
	public string $email;

	public function set_name( string $name ) {
		$this->name = $name;

		return $this;
	}

	public function get_name() {
		return $this->name;
	}

	public function set_username( string $username ) {
		$this->username = $username;

		return $this;
	}

	public function get_username() {
		return $this->username;
	}

	public function set_password( string $password ) {
		$this->password = $password;

		return $this;
	}

	public function get_password() {
		return $this->password;
	}

	public function set_email( string $email ) {
		$this->email = $email;

		return $this;
	}

	public function get_email() {
		return $this->email;
	}
}