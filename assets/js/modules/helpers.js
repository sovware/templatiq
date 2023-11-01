import { applyFilters as wpApplyFilters } from '@wordpress/hooks';

export function registerModule( key, value ) {
	if ( ! window.helpgent ) {
		window.helpgent = {};
	}

	if ( ! window.helpgent[ key ] ) {
		window.helpgent[ key ] = value;
	}
}

export function applyFilter( hook, content = {}, ...args ) {
	if ( typeof hook !== 'string' ) {
		throw new Error( 'Invalid input parameters' );
	}

	const items = wpApplyFilters( hook, content, ...args );

	return Object.values( items ).map( function ( item, index ) {
		if ( typeof item === 'object' ) {
			return item;
		} else {
			const Component = item;
			return <Component key={ index } />;
		}
	} );
}
