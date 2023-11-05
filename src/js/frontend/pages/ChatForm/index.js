import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import QuestionNavigation from '@components/QuestionNavigation';
import { ChatShortCodeModule } from '@template-market/modules';

domReady( () => {
	addFilter( 'template-market_chat_form_navigation', 'template-market', function ( items ) {
		// replace unique_key
		items[ 'template-market_chat_form_navigation' ] = (
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
			root.render(
				<ChatShortCodeModule
					data={ singleForm }
					isLoggedIn={ isLoggedIn }
				/>
			);
		} else {
			render(
				<ChatShortCodeModule
					data={ singleForm }
					isLoggedIn={ isLoggedIn }
				/>,
				container
			);
		}
	} );
} );
