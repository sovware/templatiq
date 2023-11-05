import { useSettingsState } from '../context/SettingsContext';
import MenuItem from './MenuItem';

import ReactSVG from 'react-inlinesvg';
import caretDown from '@icon/caret-down.svg';

export default function DropDownMenuItem( { menu } ) {
	const { settingsState } = useSettingsState();
	const { routeLocation, NavLink } = settingsState;

	const rootRoutePath = settingsState.rootRoutePath;
	const currentRoutePath = routeLocation.pathname;

	const activeMenuClass = ( { isActive }, menu ) => {
		const baseClass = 'template-market-settings-panel-nav-menu-link';

		if ( isActive ) {
			return `${ baseClass } --is-active`;
		}

		for ( const submenu of menu.submenu ) {
			const path = rootRoutePath
				? `${ rootRoutePath }/${ submenu.path }`
				: '/' + submenu.path;
			if ( path === currentRoutePath ) {
				return `${ baseClass } --is-active`;
			}
		}

		return baseClass;
	};

	const menuIconClass = ( menu ) => {
		const baseClass = 'template-market-settings-panel-nav-menu-icon template-market-icon';
		return menu.iconClass
			? `${ baseClass } ${ menu.iconClass }`
			: baseClass;
	};

	return (
		<div className="template-market-settings-panel-nav-menu-item --has-dropdown">
			<NavLink
				to={ `${
					menu.grandChildPath ? menu.grandChildPath : menu.path
				}` }
				className={ ( data ) => activeMenuClass( data, menu ) }
			>
				<span className={ menuIconClass( menu ) }>{ menu.icon }</span>
				{ menu.label }

				<span className="template-market-settings-panel-nav-menu-action">
					<ReactSVG src={ caretDown } />
				</span>
			</NavLink>

			<div className="template-market-settings-panel-nav-menu-dropdown">
				{ menu.submenu.map( ( submenu, index ) => (
					<MenuItem menu={ submenu } key={ index } />
				) ) }
			</div>
		</div>
	);
}
