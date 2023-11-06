import SidebarLayout from "./SidebarLayout";
import { SidebarCollapseStyle } from './style';

const CategorySidebarItems = () => {
	return (
		<SidebarLayout>
			<h2>Category Sidebar</h2>

			<SidebarCollapseStyle className="templatiq__sidebar__collapse">
				<div className="templatiq__sidebar__collapse__single">
					<h3 className="templatiq__sidebar__collapse__title">Directorist</h3>

					<div className="templatiq__sidebar__collapse__item">
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
					</div>
				</div>
				<div className="templatiq__sidebar__collapse__single">
					<h3 className="templatiq__sidebar__collapse__title">WooCommerce</h3>

					<div className="templatiq__sidebar__collapse__item">
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
					</div>
				</div>
				<div className="templatiq__sidebar__collapse__single">
					<h3 className="templatiq__sidebar__collapse__title">HelpGent</h3>

					<div className="templatiq__sidebar__collapse__item">
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
						<div className="templatiq__sidebar__collapse__item__single">
							<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
							<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
							<span className="templatiq__sidebar__collapse__item__single__count">12</span>
						</div>
					</div>
				</div>
			</SidebarCollapseStyle>
			
		</SidebarLayout>
	);
}

export default CategorySidebarItems;
