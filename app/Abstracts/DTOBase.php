<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Abstracts;

use ReflectionClass;

abstract class DTOBase {
	public function to_array() {
		$reflection = new ReflectionClass( $this );
		$values     = [];

		foreach ( $reflection->getProperties() as $property ) {
			$property_name          = $property->getName();
			$values[$property_name] = $this->{"get_{$property_name}"}();
		}

		return $values;
	}
}