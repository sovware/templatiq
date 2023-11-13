
import AppLayout from "@layout/AppLayout";
import MyFavorites from "./Favorites";

export default function DashboardModule() {
	return (
		<AppLayout>
			<div className="templatiq__content">
				<MyFavorites />
			</div>
		</AppLayout>
	);
}
