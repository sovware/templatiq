import { useSettingsState } from '../context/SettingsContext';
import MenuItem from './MenuItem';
import DropDownMenuItem from './DropDownMenuItem';

export default function Navigation() {
	const { settingsState } = useSettingsState();

	return (
		<div className="templatiq-settings-panel-nav">
			<div className="templatiq-settings-panel-nav-menu">
				{ settingsState.menus.map( ( menu, index ) => {
					if ( 'menu' === menu.type ) {
						return <MenuItem menu={ menu } key={ index } />;
					}
					return <DropDownMenuItem menu={ menu } key={ index } />;
				} ) }
			</div>
		</div>
	);
}
