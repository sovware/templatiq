import { createRoot } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../queryStore';
import App from './App';

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
}

document.addEventListener('DOMContentLoaded', function () {
	initializeApp();
});

initializeApp();

