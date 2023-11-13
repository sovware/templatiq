import AppLayout from "@layout/AppLayout";

import MyFavorites from "./Favorites";
import MyDownloads from "./Downloads";
import MyPurchase from "./Purchase";
import MyAccount from "./Account";

export default function DashboardModule() {
	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				{/* <MyFavorites /> */}
				{/* <MyDownloads /> */}
				{/* <MyPurchase /> */}
				<MyAccount />
			</div>
		</AppLayout>
	);
}
