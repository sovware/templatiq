import { lazy, Suspense, useState, useEffect } from '@wordpress/element';
// import { applyFilters } from '@wordpress/hooks';
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


import TemplatePack from './pages/TemplatePack.js';

import AppLayout from '../layout/AppLayout.js';
import Pages from './pages/Pages.js';
import Blocks from './pages/Blocks.js';

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
		updateGlobalState( 'templatiq_router_references', {
			navigationHook: useNavigate,
			routeLink: Link,
			routerNavLink: NavLink,
			paramsHook: useParams,
			locationHook: { useLocation },
		} );
	}, [] );

	const templateRoutes = [
		{
			path: `/*`,
			element: <TemplatePack />,
		},
		{
			path: '/pages',
			element: <Pages />,
		},
		{
			path: `/blocks`,
			element: <Blocks />,
		},
	] ;

	return (
		<AppLayout>
			<HashRouter>
				<Suspense fallback={ <></> }>
					<ThemeProvider theme={ theme }>
						<Routes>
							{ templateRoutes.map( ( routeItem, index ) => {
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
