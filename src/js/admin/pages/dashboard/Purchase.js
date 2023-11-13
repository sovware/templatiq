import AppLayout from "@layout/AppLayout";
import MyPurchaseModule from "@modules/Dashboard/Purchase";

export default function MyPurchase() {

	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<MyPurchaseModule />
			</div>
		</AppLayout>
	);
}
