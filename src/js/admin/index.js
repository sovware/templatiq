import { createRoot, lazy, Suspense } from '@wordpress/element';
import { addAction } from '@wordpress/hooks';
import Preloader from '@components/Preloader';
const App = lazy( () => import( './App' ) ); 

function initializeApp( container ) {

	if (createRoot) {
		const root = createRoot(container);

		root.render(
			<div>
				<Suspense fallback={ <Preloader /> }>
					<App />
				</Suspense>
			</div>
		);
	} else {
		render(
			<div>
				<Suspense fallback={ <Preloader /> }>
					<App />
				</Suspense>
			</div>,
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