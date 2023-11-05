import { useEffect } from '@wordpress/element';
import { useSettingsState } from '../context/SettingsContext';
import { genarateRoutes, isObject } from '../helpers/utility';

export default function useSettingsRoutes( {
	menus,
	prefix,
	fields,
	fieldComponents,
	rootRoutePath,
	routeLocation,
	navigate,
	NavLink,
} ) {
	const { settingsState, setSettingsState } = useSettingsState();

	rootRoutePath = rootRoutePath ? '/' + rootRoutePath : '/';
	const currentRoutePath = routeLocation.pathname;

	const routeList = genarateRoutes( menus );

	useEffect( () => {
		if ( ! routeList.length ) {
			return;
		}

		let newSettingsState = settingsState;

		newSettingsState.rootRoutePath = rootRoutePath;
		newSettingsState.routeLocation = routeLocation;
		newSettingsState.navigate = navigate;
		newSettingsState.NavLink = NavLink;

		if ( Array.isArray( menus ) ) {
			newSettingsState = { ...newSettingsState, menus };
		}

		if ( typeof prefix === 'string' ) {
			newSettingsState = { ...newSettingsState, prefix };
		}

		if ( isObject( fields ) ) {
			newSettingsState = { ...newSettingsState, fields };
		}

		if ( isObject( fieldComponents ) ) {
			newSettingsState = { ...newSettingsState, fieldComponents };
		}

		setSettingsState( newSettingsState );

		const sanitizePath = ( path ) =>
			path.replace( /^\/+/, '' ).replace( /\/+$/, '' );

		const rootPath = sanitizePath( rootRoutePath );
		const currentPath = sanitizePath( currentRoutePath );

		if ( rootPath === currentPath ) {
			navigate( routeList[ 0 ].path );
		}
	}, [] );

	return {
		routeList,
		rootRoutePath,
		currentRoutePath,
	};
}
