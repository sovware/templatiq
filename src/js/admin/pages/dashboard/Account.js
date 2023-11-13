import AppLayout from "@layout/AppLayout";
import MyAccountModule from "@modules/Dashboard/Account";

export default function MyAccount() {
	
	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<MyAccountModule />
			</div>
		</AppLayout>
	);
}
