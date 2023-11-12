import React from 'react';
import Header from '@layout/Header';

import { DashboardWrapperStyle } from './style.js';

const AdminLayout = ({ children }) => {

	return (
		<div className="templatiq">
			<Header />
			<DashboardWrapperStyle className="templatiq__wrapper">
				{ children }
			</DashboardWrapperStyle>
		</div>
	);
};

export default AdminLayout;

