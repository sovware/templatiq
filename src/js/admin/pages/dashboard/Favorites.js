import AppLayout from "@layout/AppLayout";
import MyFavoritesModule from "@modules/Dashboard/Favorites";

export default function MyFavorites() {

	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<MyFavoritesModule />
			</div>
		</AppLayout>
	);
}
