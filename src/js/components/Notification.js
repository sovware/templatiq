import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import { addAction } from '@wordpress/hooks';
import { useState, useCallback, useEffect } from '@wordpress/element';
import { ToastContainer, toast, Slide, Bounce } from 'react-toastify';

const Notification = () => {
	const [ toastConfig, setToastConfig ] = useState( {} );

	const pushNotification = useCallback( ( data ) => {
		const config = Object.assign(
			{
				position: 'bottom-right',
				message: 'template-market Notification',
				type: 'success',
				autoClose: 2000,
				pauseOnFocusLoss: false,
				transition: Bounce,
			},
			data || {}
		);

		setToastConfig( config );

		toast[ config.type ](
			<div dangerouslySetInnerHTML={ { __html: config.message } } />
		);
	}, [] );

	useEffect( () => {
		addAction(
			'template-market-toast',
			'component-template-market-toast',
			pushNotification
		);
	}, [ pushNotification ] );

	return <ToastContainer { ...toastConfig } />;
};

domReady( () => {
	const container = document.createElement( 'div' );
	container.setAttribute( 'id', 'template-market-toast' );
	container.setAttribute( 'style', 'position: absolute; z-index: 99999' );
	document.body.appendChild( container );

	const root = createRoot( container );
	root.render( <Notification /> );
} );
