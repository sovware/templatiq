import React from 'react';

// Import all steps.
import PageBuilder from './page-builder';
import SiteList from './site-list';
import SiteListHeader from './site-list/header';
import CustomizeSite from './customize-site';
import ImportSite from './import-site';
import Survey from './survey';

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
