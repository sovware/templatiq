import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import Dashboard from './Dashboard';

domReady( () => {
	const containers = document.querySelectorAll( '.helpgent-user-dashboard' );

	if ( containers.length === 0 ) {
		return;
	}

	containers.forEach( ( container ) => {
		if ( createRoot ) {
			const root = createRoot( container );
			root.render( <Dashboard /> );
		} else {
			render( <Dashboard />, container );
		}
	} );
} );
