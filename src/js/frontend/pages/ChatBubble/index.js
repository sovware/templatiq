import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';
import { lazy, createRoot, Suspense } from '@wordpress/element';
import ChatFormClose from './components/ChatFormClose';
import ChatFormBack from './components/ChatFormBack';
import ContentLoading from '@components/ContentLoading';

import { ChatBubbleModule } from '@template-market/modules';
domReady( () => {
	const containers = document.querySelectorAll(
		'.template-market-chat-bubble-item'
	);

	if ( containers.length === 0 ) {
		return;
	}

	addFilter( 'template-market_chat_form_close', 'template-market', function ( items ) {
		// replace unique_key
		items[ 'template-market_chat_form_close' ] = (
			<ChatFormClose { ...items.props } />
		);
		return items;
	} );

	addFilter( 'template-market_chat_form_back', 'template-market', function ( items ) {
		// replace unique_key
		items[ 'template-market_chat_form_back' ] = (
			<ChatFormBack { ...items.props } />
		);
		return items;
	} );

	containers.forEach( ( container ) => {
		const singleForm = container.dataset.form_data;
		const isLoggedIn = container.dataset.is_user_logged_in;
		if ( createRoot ) {
			const root = createRoot( container );
			root.render(
				<Suspense fallback={ <ContentLoading /> }>
					<ChatBubbleModule
						data={ singleForm }
						isLoggedIn={ isLoggedIn }
						isFloatingForm={ true }
					/>
				</Suspense>
			);
		} else {
			render(
				<ChatBubbleModule
					data={ singleForm }
					isLoggedIn={ isLoggedIn }
					isFloatingForm={ true }
				/>,
				container
			);
		}
	} );
} );
