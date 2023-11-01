import { applyFilters } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import slidersSolid from '@icon/sliders-solid.svg';

let menus = applyFilters( 'helpgent-settings-panel-menus', [
	{
		type: 'menu',
		label: 'General',
		icon: <ReactSVG src={ slidersSolid } />,
		iconClass: 'icon-primary',
		fieldGroups: [
			{
				fields: [ 
					'user_dashboard_page',
					'attachment_auto_remove',
					'allowed_email',
				],
			},
		],
	},
] );

export default menus;
