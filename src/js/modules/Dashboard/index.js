import ReactSVG from 'react-inlinesvg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { SidebarStyle } from "./style";
import AdminLayout from "./layout/AdminLayout";

import MyFavorites from "./Favorites";
import MyDownloads from "./Downloads";
import MyPurchase from "./Purchase";
import MyAccount from "./Account";

import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import settingsIcon from "@icon/settings.svg";
import downloadIcon from "@icon/download-alt.svg";

export default function DashboardModule() {
	return (
		<AdminLayout>
			<Tabs className="templatiq__dashboard__wrapper">
				<SidebarStyle className="templatiq__dashboard__sidebar">
					<div className="templatiq__sidebar__wrapper">
						<TabList className="templatiq__sidebar__nav templatiq__sidebar__nav--admin">
							<Tab className="templatiq__sidebar__nav__item">
								<a href="#" className="templatiq__sidebar__nav__link active">
									<ReactSVG src={ heartIcon } width={16} height={16} />
									My Favorites
								</a>
							</Tab>
							<Tab className="templatiq__sidebar__nav__item">
								<a href="#" className="templatiq__sidebar__nav__link">
									<ReactSVG src={ downloadIcon } width={16} height={16} />
									My Downloads
								</a>
							</Tab>
							<Tab className="templatiq__sidebar__nav__item">
								<a href="#" className="templatiq__sidebar__nav__link">
									<ReactSVG src={ cartIcon } width={16} height={16} />
									My Purchase
								</a>
							</Tab>
							<Tab className="templatiq__sidebar__nav__item">
								<a href="#" className="templatiq__sidebar__nav__link">
									<ReactSVG src={ settingsIcon } width={16} height={16} />
									My Account
								</a>
							</Tab>
						</TabList>
					</div>
				</SidebarStyle>
				<div className="templatiq__dashboard__content">
					<TabPanel>
						<MyFavorites />
					</TabPanel>
					<TabPanel>
						<MyDownloads />
					</TabPanel>
					<TabPanel>
						<MyPurchase />
					</TabPanel>
					<TabPanel>
						<MyAccount />
					</TabPanel>
				</div>
			</Tabs>
		</AdminLayout>
	);
}
