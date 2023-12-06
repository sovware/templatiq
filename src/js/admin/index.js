import { createRoot, lazy, Suspense } from '@wordpress/element';
import { addAction } from '@wordpress/hooks';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../queryStore';
const App = lazy( () => import( './App' ) );

function initializeApp( container ) {
	console.log('initializeApp');

	if (createRoot) {
		const root = createRoot(container);

		root.render(
			<QueryClientProvider client={queryStore}>
				<Suspense fallback={ <></> }>
					<App />
				</Suspense>
			</QueryClientProvider>
		);
	} else {
		render(
			<QueryClientProvider client={queryStore}>
				<Suspense fallback={ <></> }>
					<App />
				</Suspense>
			</QueryClientProvider>,
			container
		);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('.templatiq-root');

	if ( !container ) {
		return;
	}

	initializeApp(container);
});

addAction('templatiq_load_admin_app', 'templatiq', function(container) {
	initializeApp(container);
});