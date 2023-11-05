// import App from "./App";
// import { render } from "@wordpress/element";

// import "../../sass/global.scss";


// // Render the App component into the DOM
// render(
// 	<App />, 
// 	document.getElementById("template-market-root")
// );

import { createRoot } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../queryStore';
import App from './app';

document.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('.template-market-root');
	if (!container) {
		return;
	}

	if (createRoot) {
		const root = createRoot(container);

		root.render(
			<QueryClientProvider client={queryStore}>
				<App />
			</QueryClientProvider>
		);
	} else {
		render(
			<QueryClientProvider client={queryStore}>
				<App />
			</QueryClientProvider>,
			container
		);
	}
});
document.addEventListener( 'DOMContentLoaded', function () {
	const container = document.querySelector( '.template-market-root' );
	if ( ! container ) {
		return;
	}

	if ( createRoot ) {
		const root = createRoot( container );

		root.render(
			<QueryClientProvider client={ queryStore }>
				<App />
			</QueryClientProvider>
		);
	} else {
		render(
			<QueryClientProvider client={ queryStore }>
				<App />
			</QueryClientProvider>,
			container
		);
	}
} );
