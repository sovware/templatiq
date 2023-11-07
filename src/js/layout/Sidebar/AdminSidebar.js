
import { SidebarStyle } from './style';

const AdminSidebar = () => {
	return (
		<SidebarStyle className="templatiq__sidebar">
			<div className="templatiq__sidebar__wrapper">
				<div className="templatiq__sidebar__nav">
					<a href="#" className="templatiq__sidebar__nav__link active">Favorites</a>
					<a href="#" className="templatiq__sidebar__nav__link">Downloads</a>
					<a href="#" className="templatiq__sidebar__nav__link">Purchased</a>
					<a href="#" className="templatiq__sidebar__nav__link">My Account</a>
				</div>
			</div>
		</SidebarStyle>
	);
}

export default AdminSidebar;
