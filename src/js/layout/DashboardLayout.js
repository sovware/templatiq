import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '@layout/Sidebar/AdminSidebar';
import Header from '@layout/Header';
import store from '@store/index';

import { LayoutStyle } from './style.js';

const DashboardLayout = ( { children } ) => {
	const navigate = useNavigate();
	const { isLoggedIn } = select( store ).getUserInfo();

	useEffect( () => {
		if ( ! isLoggedIn ) {
			navigate( '/' );
		}
	}, [] );

	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				<AdminSidebar />
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default DashboardLayout;
