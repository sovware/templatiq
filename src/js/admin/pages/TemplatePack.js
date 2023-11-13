
import TemplatePackModule from '@modules/TemplatePack';
import TemplateDetailsModule from '@modules/TemplateDetails';
import DashboardModule from '@modules/Dashboard';

export default function TemplatePack() {
	let isDetailsPage = false;
	let isDashboardPage = true;

	return (
		<>
			{
				isDetailsPage ?
				<TemplateDetailsModule /> :
				isDashboardPage ?
				<DashboardModule /> :
				<TemplatePackModule />
			}
		</>
	);
}
