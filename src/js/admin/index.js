import { createRoot } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../queryStore';
import AdminApp from './App';

document.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('.templatiq-root');
	if (!container) {
		return;
	}

	if (createRoot) {
		const root = createRoot(container);

		root.render(
			<QueryClientProvider client={queryStore}>
				<AdminApp />
			</QueryClientProvider>
		);
	} else {
		render(
			<QueryClientProvider client={queryStore}>
				<AdminApp />
			</QueryClientProvider>,
			container
		);
	}
});
document.addEventListener( 'DOMContentLoaded', function () {
	const container = document.querySelector( '.templatiq-root' );
	if ( ! container ) {
		return;
	}

	if ( createRoot ) {
		const root = createRoot( container );

		root.render(
			<QueryClientProvider client={ queryStore }>
				<AdminApp />
			</QueryClientProvider>
		);
	} else {
		render(
			<QueryClientProvider client={ queryStore }>
				<AdminApp />
			</QueryClientProvider>,
			container
		);
	}
} );
