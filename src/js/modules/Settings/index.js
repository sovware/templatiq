import { useState, useEffect, lazy, Suspense } from '@wordpress/element';
import { doAction } from '@wordpress/hooks';

import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../../queryStore';

const SettingsPanel = lazy( () => import( '@lib/SettingPanel' ) );
import ContentLoading from '@components/ContentLoading';

import useFetchData from '@hooks/useFetchData';
import usePostMutation from '@hooks/usePostMutation';

import fields from './data/fields';
import menus from './data/menus';
import fieldComponents from './data/fieldComponents';

function Settings( { Route, Routes, NavLink, routeLocation, navigate } ) {
	const [ data, setData ] = useState( {} );
	const {
		data: settingsData,
		isLoading: isLoadingSettingsData,
		isError: isErrorSettingsData,
	} = useFetchData( [ `helpgent-setings` ], '/helpgent/admin/settings' );

	useEffect( () => {
		if ( isLoadingSettingsData ) {
			return;
		}

		if ( isErrorSettingsData ) {
			return;
		}

		if (
			settingsData.settings &&
			typeof settingsData.settings === 'object' &&
			! Array.isArray( settingsData.settings )
		) {
			setData( settingsData.settings );
		}
	}, [ isLoadingSettingsData ] );

	const { mutateAsync: saveSettings, isLoading: isSavingSettings } =
		usePostMutation( `/helpgent/admin/settings` );

	const onSave = async ( values ) => {
		if ( isSavingSettings ) {
			return;
		}

		try {
			const status = await saveSettings( { settings: values } );

			doAction( 'helpgent-toast', {
				message: status.message
					? status.message
					: 'Settings have been saved successfully.',
				type: 'success',
			} );

			return { success: true };
		} catch ( error ) {
			doAction( 'helpgent-toast', {
				message: error.message
					? error.message
					: 'Could not save the settings, please try again.',
				type: 'error',
			} );

			return { success: false };
		}
	};

	return (
		<div className="helpgent-page-inner">
			<h1 className="helpgent-page-header-title helpgent-page-header-title--settings">
				Settings
			</h1>

			<Suspense fallback={ <ContentLoading /> }>
				<SettingsPanel
					menus={ menus }
					fields={ fields }
					fieldComponents={ fieldComponents }
					data={ data }
					isLoading={ isLoadingSettingsData }
					loader={ ContentLoading }
					onSave={ onSave }
					rootRoutePath="settings"
					Route={ Route }
					Routes={ Routes }
					NavLink={ NavLink }
					routeLocation={ routeLocation }
					navigate={ navigate }
				/>
			</Suspense>
		</div>
	);
}

export default function SettingsModule( props ) {
	return (
		<QueryClientProvider client={ queryStore }>
			<Settings { ...props } />
		</QueryClientProvider>
	);
}
