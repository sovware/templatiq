import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

<h2>Front ChatForm</h2>
// domReady( () => {
// 	const containers = document.querySelectorAll( '.helpgent-form' );

// 	if ( containers.length === 0 ) {
// 		return;
// 	}

// 	containers.forEach( ( container ) => {
// 		const singleForm = container.dataset.form_data;
// 		const isLoggedIn = container.dataset.is_user_logged_in;
// 		// if ( createRoot ) {
// 		// 	const root = createRoot( container );
// 		// 	root.render(
// 		// 		<ChatShortCodeModule
// 		// 			data={ singleForm }
// 		// 			isLoggedIn={ isLoggedIn }
// 		// 		/>
// 		// 	);
// 		// } else {
// 		// 	render(
// 		// 		<ChatShortCodeModule
// 		// 			data={ singleForm }
// 		// 			isLoggedIn={ isLoggedIn }
// 		// 		/>,
// 		// 		container
// 		// 	);
// 		// }
// 	} );
// } );
