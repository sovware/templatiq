
import TemplatePackModule from '@modules/TemplatePack';
import TemplateDetailsModule from '@modules/TemplateDetails';
import DashboardModule from '@modules/Dashboard';
import AuthModule from '@modules/Authentication';

export default function TemplatePack() {
	let isLoggedIn = false;
	let isDetailsPage = false;
	let isDashboardPage = true;

	return (
		<>
				{/* <AuthModule />  */}
				{/* <TemplateDetailsModule />  */}
				{/* <DashboardModule />  */}
				<TemplatePackModule />
		</>
	);
}
