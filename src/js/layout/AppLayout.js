
import { select } from '@wordpress/data';
import store from '../store';

import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';
import AdminSidebar from '@layout/Sidebar/AdminSidebar';

import { LayoutStyle } from './style.js';

const AppLayout = ({ children }) => {
	const { isLoggedIn } = select( store ).getUserInfo();

	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				{
					isLoggedIn ?
					<AdminSidebar /> :
					<Sidebar />
				}
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default AppLayout;

