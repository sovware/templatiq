import { useState } from '@wordpress/element';
import { useSettingsState } from '../context/SettingsContext';
import {
	sanitizePath,
	generateBreadcrumb,
	hasMathInText,
} from '../helpers/utility';

export default function SearchBar() {
	const { settingsState } = useSettingsState();
	const [ searchResults, setSearchResults ] = useState( [] );
	const [ keyword, setKeyword ] = useState( '' );

	function handleSearch( e ) {
		setKeyword( e.target.value );
		setSearchResults( [] );

		if ( ! e.target.value ) {
			return;
		}

		prepareSearchResult( e.target.value );
	}

	function prepareSearchResult( keyword ) {
		keyword = keyword.toLowerCase();
		searchFields( keyword );
		searchMenu( keyword );
	}

	function serchFieldInMenu( fieldKey, menus ) {
		for ( const menu of menus ) {
			if ( 'submenu' === menu.type ) {
				const submenu = serchFieldInMenu( fieldKey, menu.submenu );

				if ( submenu ) {
					return submenu;
				}

				continue;
			}

			if ( 'menu' === menu.type ) {
				const hasInField =
					menu.fields && menu.fields.includes( fieldKey );
				let hasInFieldGroups = false;

				if ( menu.fieldGroups ) {
					const filteredFieldGroups = menu.fieldGroups.filter(
						( fieldGroup ) =>
							fieldGroup.fields &&
							fieldGroup.fields.includes( fieldKey )
					);

					hasInFieldGroups = filteredFieldGroups.length;
				}

				if ( hasInField || hasInFieldGroups ) {
					return menu;
				}
			}
		}

		return null;
	}

	function searchFields( keyword ) {
		const fieldKeys = Object.keys( settingsState.fields );
		for ( const fieldKey of fieldKeys ) {
			if ( ! settingsState.fields[ fieldKey ].label ) {
				continue;
			}

			const hasMatch = hasMathInText(
				keyword,
				settingsState.fields[ fieldKey ].label
			);

			if ( ! hasMatch ) {
				continue;
			}

			const menu = serchFieldInMenu( fieldKey, settingsState.menus );

			if ( ! menu ) {
				return;
			}

			const path = sanitizePath(
				settingsState.rootRoutePath + '/' + menu.path
			);

			const resultItem = {
				label: settingsState.fields[ fieldKey ].label,
				link: `#/${ path }?field=${ fieldKey }`,
				breadcrumb: generateBreadcrumb( path ),
			};

			setSearchResults( ( currentValue ) => {
				return [ ...currentValue, resultItem ];
			} );
		}
	}

	function searchMenu( keyword ) {
		const searchLabelInMenu = ( menus ) => {
			for ( const menu of menus ) {
				if ( 'submenu' === menu.type ) {
					if ( hasMathInText( keyword, menu.label ) ) {
						return menu;
					}

					const subMenu = searchLabelInMenu( menu.submenu );

					if ( subMenu ) {
						return subMenu;
					}

					continue;
				}

				if ( 'menu' === menu.type ) {
					if ( hasMathInText( keyword, menu.label ) ) {
						return menu;
					}
				}
			}

			return null;
		};

		const menu = searchLabelInMenu( settingsState.menus );

		if ( ! menu ) {
			return;
		}

		let path =
			'submenu' === menu.type && menu.grandChildPath
				? menu.grandChildPath
				: menu.path;
		path = sanitizePath( settingsState.rootRoutePath + '/' + path );

		const resultItem = {
			label: menu.label,
			link: `#/${ path }`,
			breadcrumb: generateBreadcrumb( path ),
		};

		setSearchResults( ( currentValue ) => {
			return [ ...currentValue, resultItem ];
		} );
	}

	function reset() {
		setKeyword( '' );
		setSearchResults( [] );
	}

	return (
		<div className="template-market-settings-panel-search">
			<input
				type="text"
				value={ keyword }
				onChange={ handleSearch }
				className="template-market-settings-panel-search-input"
				placeholder="Search settings here..."
			/>

			<div className="template-market-settings-panel-search-results">
				{ searchResults.map( ( item ) => (
					<a
						href={ item.link }
						onClick={ reset }
						className="template-market-settings-panel-search-result-link"
					>
						<p className="template-market-settings-panel-search-result-label">
							{ item.label }
						</p>
						<p className="template-market-settings-panel-search-result-breadcrumb">
							{ item.breadcrumb }
						</p>
					</a>
				) ) }
			</div>
		</div>
	);
}
