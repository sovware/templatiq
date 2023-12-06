import { Suspense, useState, useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { useQuery } from '@tanstack/react-query';
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
import { updateGlobalState } from '@helper/utils';
import { ThemeProvider } from 'styled-components';

import { dispatch } from '@wordpress/data';
import store from '../store';

import Preloader from '@components/Preloader';
import ContentLoading from '@components/ContentLoading';

import TemplatePack from './pages/TemplatePack';
import TemplateDetails from './pages/TemplateDetails';

import Pages from './pages/Pages'; 
import Blocks from './pages/Blocks';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

import MyFavorites from "./pages/dashboard/Favorites";
import MyDownloads from "./pages/dashboard/Downloads";
import MyPurchase from "./pages/dashboard/Purchase";
import MyAccount from "./pages/dashboard/Account";

export default function App() { 
	const [ dir, setDir ] = useState( 'ltr' );
	const [ loading, setLoading ] = useState(false);

	const theme = {
		direction: dir,
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/data`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': template_market_obj.rest_args.nonce,
				},
			});
	
			if (!response.ok) {
				throw new Error('Error Occurred');
			}
	
			if (response.ok) {
				const responseData = await response.json();
				const data = responseData.body;

				const updatedUserInfo = {
					isLoggedIn: data.token ? true : false,
					userEmail: data.user_email,
					userDisplayName: data.user_display_name,
					bookmarks: data.bookmarks,
					downloads: data.downloads,
					purchased: data.purchased,
				};
	
				// Dispatch the action to update the login status in the store
				dispatch(store).setUserInfo(updatedUserInfo);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in getUserInfo:', error);
		}
	};

	const { isLoading, error, data } = useQuery(['templates'], () => fetch(
        `${template_market_obj.rest_args.endpoint}/template/library`, 
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            }
        }).then(res => res.json() )
    );

	useEffect(() => {
        if (data) {
			setLoading(false)
            const templateData = data.templates ? data.templates : [];
			// Dispatch the action to update data in the store
			dispatch(store).setTemplates(templateData);
			dispatch(store).setLibraryData(data);
        } else {
			setLoading(true)
            console.log('Initially No Data')
            dispatch(store).setTemplates([]);
            dispatch(store).setLibraryData({});
        }

    }, [isLoading]);

	useEffect( () => {
		getUserInfo();

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
	
	if (loading) 
    return (
        <ContentLoading />
    );
	
	if (isLoading) 
    return (
        <Preloader />
    );

	if (error) 
    return (
        <>
            {error.message}
        </>
    );

	const adminRoutes = applyFilters( 'templatiq_admin_routes', [
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
		{
			path: `/template/:slug`,
			element: <TemplateDetails />,
		},
		{
			path: `/signin`,
			element: <SignIn />,
		},
		{
			path: `/signup`,
			element: <SignUp />,
		},
		{
			path: `/dashboard`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/favorites`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/downloads`,
			element: <MyDownloads />,
		},
		{
			path: '/dashboard/purchase',
			element: <MyPurchase />,
		},
		{
			path: `/dashboard/account`,
			element: <MyAccount />,
		},
	] );

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
		{
			path: `/template/:slug`,
			element: <TemplateDetails />,
		},
		{
			path: `/signin`,
			element: <SignIn />,
		},
		{
			path: `/signup`,
			element: <SignUp />,
		},
		{
			path: `/dashboard`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/favorites`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/downloads`,
			element: <MyDownloads />,
		},
		{
			path: '/dashboard/purchase',
			element: <MyPurchase />,
		},
		{
			path: `/dashboard/account`,
			element: <MyAccount />,
		},
	] ;

	return (
		<>
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
		</>
	);
}
