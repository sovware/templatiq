import AppLayout from "@layout/AppLayout";
import MyDownloadsModule from "@modules/Dashboard/Downloads";

export default function MyDownloads() {

	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<MyDownloadsModule />
			</div>
		</AppLayout>
	);
}
