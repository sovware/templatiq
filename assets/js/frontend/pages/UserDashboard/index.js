import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import Dashboard from './Dashboard';

<h2>Front Dashboard</h2>

// domReady( () => {
// 	const containers = document.querySelectorAll( '.template-market-user-dashboard' );

// 	if ( containers.length === 0 ) {
// 		return;
// 	}

// 	containers.forEach( ( container ) => {
// 		if ( createRoot ) {
// 			const root = createRoot( container );
// 			root.render( <Dashboard /> );
// 		} else {
// 			render( <Dashboard />, container );
// 		}
// 	} );
// } );
