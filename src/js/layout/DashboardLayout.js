import Header from '@layout/Header';
import AdminSidebar from '@layout/Sidebar/AdminSidebar';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { useNavigate } from 'react-router-dom';

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
			<Header type="dashboard" />
			<LayoutStyle className="templatiq__wrapper">
				<AdminSidebar />
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default DashboardLayout;
