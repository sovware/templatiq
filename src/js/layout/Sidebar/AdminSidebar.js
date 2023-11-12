import ReactSVG from 'react-inlinesvg';

import { SidebarStyle } from './style';

import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import settingsIcon from "@icon/settings.svg";
import downloadIcon from "@icon/download-alt.svg";

const AdminSidebar = () => {
	return (
		<SidebarStyle className="templatiq__sidebar">
			<div className="templatiq__sidebar__wrapper">
				<div className="templatiq__sidebar__nav templatiq__sidebar__nav--admin">
					<a href="#" className="templatiq__sidebar__nav__link active">
						<ReactSVG src={ heartIcon } width={16} height={16} />
						Favorites
					</a>
					<a href="#" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ downloadIcon } width={16} height={16} />
						Downloads
					</a>
					<a href="#" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ cartIcon } width={16} height={16} />
						My Purchase
					</a>
					<a href="#" className="templatiq__sidebar__nav__link">
						<ReactSVG src={ settingsIcon } width={16} height={16} />
						My Account
					</a>
				</div>
			</div>
		</SidebarStyle>
	);
}

export default AdminSidebar;
