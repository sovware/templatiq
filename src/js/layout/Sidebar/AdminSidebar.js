import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { NavLink } from 'react-router-dom';
import { AdminSidebarStyle } from './style';

import cartIcon from '@icon/cart.svg';
import downloadIcon from '@icon/download-alt.svg';
import heartIcon from '@icon/heart.svg';
import settingsIcon from '@icon/settings.svg';

const AdminSidebar = () => {
	return (
		<AdminSidebarStyle className="templatiq__dashboard__sidebar">
			<div className="templatiq__sidebar__wrapper">
				<div
					className="templatiq__sidebar__nav templatiq__sidebar__nav--admin"
					activeclassname="active"
				>
					<NavLink
						to="/dashboard/favorites"
						className="templatiq__sidebar__nav__link"
					>
						<ReactSVG
							src={ heartIcon }
							width={ 16 }
							height={ 16 }
						/>
						{__( 'My Favorites', 'templatiq' )}
					</NavLink>
					<NavLink
						to="/dashboard/downloads"
						className="templatiq__sidebar__nav__link"
						activeclassname="active"
					>
						<ReactSVG
							src={ downloadIcon }
							width={ 16 }
							height={ 16 }
						/>
						{__( 'My Downloads', 'templatiq' )}
					</NavLink>
					<NavLink
						to="/dashboard/purchase"
						className="templatiq__sidebar__nav__link"
						activeclassname="active"
					>
						<ReactSVG src={ cartIcon } width={ 16 } height={ 16 } />
						{__( 'My Purchase', 'templatiq' )}
					</NavLink>
					<a
						// href={ templatiq_obj.account_url }
						href='https://templatiq.com/'
						target='_blank'
						className="templatiq__sidebar__nav__link"
					>
						<ReactSVG
							src={ settingsIcon }
							width={ 16 }
							height={ 16 }
						/>
						{__( 'My Account', 'templatiq' )}
					</a>
				</div>
			</div>
		</AdminSidebarStyle>
	);
};

export default AdminSidebar;