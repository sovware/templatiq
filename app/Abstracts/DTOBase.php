<?php

namespace Templatiq\Abstracts;

use ReflectionClass;

abstract class DTOBase {
	public function to_array( bool $with_id = false ) {
		$reflection = new ReflectionClass( $this );
		$values     = [];

		foreach ( $reflection->getProperties() as $property ) {
			$property_name = $property->getName();
			if ( ! $with_id && 'id' === $property_name ) {
				continue;
			}
			$values[$property_name] = $this->{"get_{$property_name}"}();
		}

		return $values;
	}
}