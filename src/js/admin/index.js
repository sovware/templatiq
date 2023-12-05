import { createRoot, lazy, Suspense } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../queryStore';
const App = lazy( () => import( './App' ) );



function initializeApp() {
	console.log('initializeApp');
	const container = document.querySelector('.templatiq-root');
	if (!container) {
		return;
	}

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
	initializeApp();
});

initializeApp();

