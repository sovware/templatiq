import { useEffect, lazy, Suspense } from '@wordpress/element';
import { useForm } from 'react-hook-form';

import ContentLoading from '@components/ContentLoading';
import { SettingPanelStyle } from './style';
import { useSettingsState } from './context/SettingsContext';
import useSave from './hooks/useSave';
import { isObject } from './helpers/utility';
import useSettingsRoutes from './hooks/useSettingsRoutes';

import Loader from './components/Loader';
const SaveButton = lazy( () => import( './components/SaveButton' ) );
const Navigation = lazy( () => import( './components/Navigation' ) );
const FieldSection = lazy( () => import( './components/FieldSection' ) );
const Breadcrumb = lazy( () => import( './components/Breadcrumb' ) );
const SearchBar = lazy( () => import( './components/SearchBar' ) );

export default function App( props ) {
	const {
		menus,
		prefix,
		fields,
		fieldComponents,
		data,
		isLoading,
		loader,
		rootRoutePath: baseRootRoutePath,
		onSave,
		NavLink,
		Route,
		Routes,
		routeLocation,
		navigate,
	} = props;

	const { settingsState } = useSettingsState();

	const { routeList, rootRoutePath } = useSettingsRoutes( {
		menus,
		prefix,
		fields,
		fieldComponents,
		rootRoutePath: baseRootRoutePath,
		routeLocation,
		navigate,
		NavLink,
	} );

	if ( ! routeList.length ) {
		return '';
	}

	let LoaderContent = loader ? loader : Loader;
	LoaderContent =
		typeof LoaderContent === 'string' ? () => LoaderContent : LoaderContent;

	const form = useForm( { mode: 'onChange' } );
	const { isSaving, message, buttonRef, submit, onSubmit } =
		useSave( onSave );

	useEffect( () => {
		loadData( data );
	}, [ data ] );

	function loadData( data ) {
		data = isObject( data ) ? data : {};

		const parseValue = ( fieldKey ) => {
			const inputKey = `${ settingsState.prefix }${ fieldKey }`;
			const value =
				typeof settingsState.fields[ fieldKey ].value !== 'undefined'
					? settingsState.fields[ fieldKey ].value
					: '';

			return {
				key: inputKey,
				value: data.hasOwnProperty( inputKey )
					? data[ inputKey ]
					: value,
			};
		};

		const transformToObject = ( previousValue, currentValue ) => {
			return {
				...previousValue,
				[ currentValue.key ]: currentValue.value,
			};
		};

		const defaultValues = Object.keys( settingsState.fields )
			.map( parseValue )
			.reduce( transformToObject, data );

		form.reset( defaultValues );
	}

	return (
		<SettingPanelStyle className="template-market-settings-panel">
			{ isLoading ? (
				<LoaderContent />
			) : (
				<Suspense fallback={ <ContentLoading /> }>
					<form onSubmit={ form.handleSubmit( onSubmit ) }>
						<div className="template-market-settings-panel-header">
							<Breadcrumb
								routeLocation={ routeLocation }
								routeList={ routeList }
								rootRoutePath={ rootRoutePath }
							/>

							<SearchBar />

							<div className="template-market-settings-panel-action">
								<SaveButton
									buttonRef={ buttonRef }
									isSaving={ isSaving }
									message={ message }
								/>
							</div>
						</div>

						<div className="template-market-settings-panel-body">
							<Navigation />

							<div className="template-market-settings-panel-contents">
								<Routes>
									{ routeList.map( ( route, index ) => (
										<Route
											key={ index }
											path={ `${ route.path }/*` }
											element={
												<FieldSection
													menu={ route }
													form={ form }
													save={ submit }
													onSubmit={ onSubmit }
												/>
											}
										></Route>
									) ) }
								</Routes>
							</div>
						</div>

						<div className="template-market-settings-panel-footer">
							<div className="template-market-settings-panel-action">
								<SaveButton
									buttonRef={ buttonRef }
									isSaving={ isSaving }
									message={ message }
								/>
							</div>
						</div>
					</form>
				</Suspense>
			) }
		</SettingPanelStyle>
	);
}
