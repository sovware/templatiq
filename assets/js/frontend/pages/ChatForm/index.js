import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

domReady( () => {
	addFilter( 'helpgent_chat_form_navigation', 'helpgent', function ( items ) {
		// replace unique_key
		items[ 'helpgent_chat_form_navigation' ] = (
			<QuestionNavigation { ...items.props } />
		);
		return items;
	} );

	const containers = document.querySelectorAll( '.template-market-form' );

	if ( containers.length === 0 ) {
		return;
	}

	containers.forEach( ( container ) => {
		const singleForm = container.dataset.form_data;
		const isLoggedIn = container.dataset.is_user_logged_in;
		if ( createRoot ) {
			const root = createRoot( container );
			root.render();
		} else {
			render(
				container
			);
		}
	} );
} );
