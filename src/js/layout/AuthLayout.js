import React from 'react';
import Header from '@layout/Header';


const AuthLayout = ({ children }) => {

	return (
		<div className="templatiq">
			<Header />
			{ children }
		</div>
	);
};

export default AuthLayout;

