
import TemplatePackModule from '@modules/TemplatePack';
import TemplateDetailsModule from '@modules/TemplateDetails';
import DashboardModule from '@modules/Dashboard';

export default function TemplatePack() {
	let isLoggedIn = false;
	let isDetailsPage = false;
	let isDashboardPage = true;

	return (
		<>
				{/* <TemplateDetailsModule />  */}
				{/* <DashboardModule />  */}
				<TemplatePackModule />
		</>
	);
}
