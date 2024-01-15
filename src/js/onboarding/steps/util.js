import CustomizeSite from './customize-site';
import ImportSite from './import-site';

export const STEPS = [
	{
		content: <CustomizeSite />,
		class: 'step-customizer',
	},
	{
		title: 'We are building your website...',
		content: <ImportSite />,
		class: 'step-import-site',
	},
];
