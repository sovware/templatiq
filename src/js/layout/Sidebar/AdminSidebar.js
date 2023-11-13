import { Link } from 'react-router-dom';
import ReactSVG from 'react-inlinesvg';
import { AdminSidebarStyle } from './style';

import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import settingsIcon from "@icon/settings.svg";
import downloadIcon from "@icon/download-alt.svg";

const AdminSidebar = () => {
	return (
		<AdminSidebarStyle className="templatiq__dashboard__sidebar">
			<div className="templatiq__sidebar__wrapper">
				<div className="templatiq__sidebar__nav templatiq__sidebar__nav--admin">
					<Link to="/dashboard/favorites" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ heartIcon } width={16} height={16} />
						My Favorites
					</Link>
					<Link to="/dashboard/downloads" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ downloadIcon } width={16} height={16} />
						My Downloads
					</Link>
					<Link to="/dashboard/purchase" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ cartIcon } width={16} height={16} />
						My Purchase
					</Link>
					<Link to="/dashboard/account" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ settingsIcon } width={16} height={16} />
						My Account
					</Link>
				</div>
			</div>
		</AdminSidebarStyle>
	);
}

export default AdminSidebar;
