import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { SidebarStyle } from './style';

import filterIcon from '@icon/box.svg';

const SidebarLayout = ({ children }) => {
	return (
		<SidebarStyle className="templatiq__sidebar">
			<div className="templatiq__sidebar__filter">
				<h3 className="templatiq__sidebar__filter__title">
					<ReactSVG src={ filterIcon } width={18} height={18} />
					Filter
				</h3>
				<a href="#" className="templatiq__sidebar__filter__clear">Clear</a>
			</div>
			<div className="templatiq__sidebar__wrapper">
				<div className="templatiq__sidebar__nav">
					<a href="#" className="templatiq__sidebar__nav__link active">Plugins</a>
					<a href="#" className="templatiq__sidebar__nav__link">Categories</a>
				</div>
				
				{ children }
			</div>
		</SidebarStyle>
	);
};

export default SidebarLayout;
