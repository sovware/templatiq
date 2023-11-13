import React from 'react';
import Header from '@layout/Header';

const TemplateDetailsLayout = ({ children }) => {

	return (
		<div className="templatiq">
			<Header 
				type="detailsHeader"
			/>
			{ children }
		</div>
	);
};

export default TemplateDetailsLayout;

