import { lazy, Suspense, useState, useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	HashRouter,
	Routes,
	Route,
	Link,
	NavLink,
	useNavigate,
	useParams,
	useLocation,
} from 'react-router-dom';
import { updateGlobalState } from '@helper/utils.js';
import { ThemeProvider } from 'styled-components';

import ChatBubble from './pages/ChatBubble';
import ChatForm from './pages/ChatForm';

export default function App() {
	const [ dir, setDir ] = useState( 'ltr' );

	const theme = {
		direction: dir,
	};

	useEffect( () => {
		if ( document.documentElement.getAttribute( 'dir' ) === 'rtl' ) {
			setDir( 'rtl' );
		} else {
			setDir( 'ltr' );
		}
		updateGlobalState( 'helpgent_router_references', {
			navigationHook: useNavigate,
			routeLink: Link,
			routerNavLink: NavLink,
			paramsHook: useParams,
			locationHook: { useLocation },
		} );
	}, [] );

	const adminRoutes = applyFilters( 'helpgent_admin_routes', [
		{
			path: `/chaBubble`,
			element: <ChatBubble />,
		},
		{
			path: '/chatForm',
			element: <ChatForm />,
		},
	] );

	return (
		<div className="template-market-front-wrap">
			<h2>Frontend App</h2>
			<HashRouter>
				<Suspense fallback={ <></> }>
					<ThemeProvider theme={ theme }>
						<Routes>
							{ adminRoutes.map( ( routeItem, index ) => {
								return (
									<Route
										key={ index }
										path={ routeItem.path }
										element={ routeItem.element }
									></Route>
								);
							} ) }
						</Routes>
					</ThemeProvider>
				</Suspense>
			</HashRouter>
		</div>
	);
}
