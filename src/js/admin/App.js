import { lazy, Suspense, useState, useEffect } from '@wordpress/element';
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

import AppLayout from '../layout/AppLayout.js';

import Favorites from './pages/Favorites.js';
import Downloads from './pages/Downloads.js';
import Purchase from './pages/Purchase.js';
import Account from './pages/Account.js';

export default function AdminApp() {
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
		updateGlobalState( 'templatiq_router_references', {
			navigationHook: useNavigate,
			routeLink: Link,
			routerNavLink: NavLink,
			paramsHook: useParams,
			locationHook: { useLocation },
		} );
	}, [] );

	const adminRoutes = [
		{
			path: `/*`,
			element: <Favorites />,
		},
		{
			path: '/downloads',
			element: <Downloads />,
		},
		{
			path: `/purchase`,
			element: <Purchase />,
		},
		{
			path: `/account`,
			element: <Account />,
		},
	] ;

	return (
		<AppLayout>
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
		</AppLayout>
	);
}
