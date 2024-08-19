import CustomizeSite from './customize-site';
import ImportSite from './import-site';
import InsertContent from './insert-content';

export const STEPS = [
	{
		content: <CustomizeSite />,
		class: 'step-customizer',
	},
	{
		title: 'We are almost there! Just one last step',
		content: <InsertContent />,
		class: 'step-insert-content',
	},
	{
		title: 'We are building your website...',
		content: <ImportSite />,
		class: 'step-import-site',
	},
];
