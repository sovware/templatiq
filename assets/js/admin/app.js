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


import FormEdit from './pages/FormEdit.js';

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

	// const adminRoutes = applyFilters( 'helpgent_admin_routes', [
	// 	{
	// 		path: `/*`,
	// 		element: <FormEdit />,
	// 	},
	// 	{
	// 		path: `/settings/*`,
	// 		element: <Settings />,
	// 	},
	// 	{
	// 		path: '/forms/:id/edit',
	// 		element: <FormEdit />,
	// 	},
	// 	{
	// 		path: '/forms/:id/responses',
	// 		element: <Response />,
	// 	},
	// 	{
	// 		path: '/forms/:id/summary',
	// 		element: <Summary />,
	// 	},
	// 	{
	// 		path: '/tags',
	// 		element: <Tags />,
	// 	},
	// ] );

	return (
		<div className="template-market-app-wrap">
			<h2>Admin App</h2>
			<HashRouter>
				<Suspense fallback={ <></> }>
					<ThemeProvider theme={ theme }>
						<Routes>
							{/* { adminRoutes.map( ( routeItem, index ) => {
								return (
									<Route
										key={ index }
										path={ routeItem.path }
										element={ routeItem.element }
									></Route>
								);
							} ) } */}
						</Routes>
					</ThemeProvider>
				</Suspense>
			</HashRouter>
		</div>
	);
}
