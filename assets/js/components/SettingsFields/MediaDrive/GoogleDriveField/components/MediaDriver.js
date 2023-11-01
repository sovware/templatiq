import { useState, useEffect, useRef } from '@wordpress/element';
import { useQueryClient } from '@tanstack/react-query';
import useFetchData from '@hooks/useFetchData';
import trashSolid from '@icon/trash-solid.svg';

import MediaDriverCard from '../../components/MediaDriverCard';
import HeaderActionToggleEnable from '../../components/HeaderActionToggleEnable';
import HeaderActionDropdown from '../../components/HeaderActionDropdown';
import MigrationProcess from '../../components/MigrationProcess';
import MediaDriverCardBody from './MediaDriverCardBody';
import { deactivate } from '../helpers/utility';
import {
	isActiveMigration as checkIsActiveMigration,
	findObjectItem,
} from '../../helpers/utility';

export default function MediaDriver( props ) {
	const {
		icon,
		iconClass,
		fieldKey,
		inputKey,
		label,
		defaultDriveKey,
		activeDriverFieldKey,
		apiRoutes,
		form,
		getInputKey,
		save,
		settingsState,
		setSettingsState,
	} = props;

	const statusCheckInterval = 5; // Second
	const migrationStatusCheckTimer = useRef();
	const queryClient = useQueryClient();

	const isActiveMigration =
		typeof settingsState.isActiveMigration === 'boolean'
			? settingsState.isActiveMigration
			: false;

	const activeDriver = form.watch( getInputKey( activeDriverFieldKey ) );
	const driveFields = Object.keys( settingsState.fields )
		.filter(
			( fieldKey ) =>
				settingsState.fields[ fieldKey ].group === 'media-drive'
		)
		.reduce( ( previousValue, currentValue ) => {
			previousValue[ currentValue ] =
				settingsState.fields[ currentValue ];
			return previousValue;
		}, {} );

	const storageStatusRoute = apiRoutes.storageStatusRoute
		? apiRoutes.storageStatusRoute
		: '';
	const migrationStatusCheckRoute = apiRoutes.migratioStatusRoute
		? apiRoutes.migratioStatusRoute
		: '';

	const [ migrationStatus, setMigrationStatus ] = useState( {} );
	const [ isEnabled, setIsEnabled ] = useState(
		fieldKey === form.getValues( getInputKey( activeDriverFieldKey ) )
	);
	const [ forceShowMigrationStatus, setForceShowMigrationStatus ] =
		useState( false );

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	const isValidMigration = ( migrationStatus ) => {
		if ( ! isObject( migrationStatus ) ) {
			return false;
		}

		if ( ! Object.keys( migrationStatus ).length ) {
			return false;
		}

		if ( ! isObject( migrationStatus.route ) ) {
			return false;
		}

		const route = migrationStatus.route;

		const isTransferringFromDefaultDrive =
			route.to === fieldKey && route.from === defaultDriveKey;
		const isTransferringToOthertDrive = route.from === fieldKey;

		return isTransferringFromDefaultDrive || isTransferringToOthertDrive;
	};

	const canShowMigration = () => {
		if ( forceShowMigrationStatus ) {
			return true;
		}

		if ( ! isValidMigration( migrationStatus ) ) {
			return false;
		}

		if ( migrationStatus.status === 'idle' ) {
			return false;
		}

		return true;
	};

	const { data: storageStatusData } = useFetchData(
		[ 'storageStatus' ],
		storageStatusRoute
	);

	const {
		data: migrationStatusData,
		isLoading: isLoadingMigrationStatus,
		isFetching: isFetchingMigrationStatus,
	} = useFetchData( [ 'migrationStatusCheck' ], migrationStatusCheckRoute );

	useEffect( () => {
		return () => {
			if ( migrationStatusCheckTimer.current ) {
				clearInterval( migrationStatusCheckTimer.current );
			}
		};
	}, [] );

	useEffect( () => {
		setSettingsState( {
			...settingsState,
			isActiveMigration: checkIsActiveMigration( migrationStatusData ),
		} );

		queryClient.invalidateQueries( { queryKey: [ 'storageStatus' ] } );

		if ( ! isValidMigration( migrationStatusData ) ) {
			setForceShowMigrationStatus( false );
			return;
		}

		setMigrationStatus( migrationStatusData );
		setForceShowMigrationStatus( false );

		if ( migrationStatusCheckTimer.current ) {
			clearInterval( migrationStatusCheckTimer.current );
		}

		if ( [ 'pending', 'running' ].includes( migrationStatusData.status ) ) {
			migrationStatusCheckTimer.current = setInterval(
				updateMigrationStatus,
				statusCheckInterval * 1000
			);
		}
	}, [ migrationStatusData ] );

	function updateMigrationStatus() {
		queryClient.invalidateQueries( {
			queryKey: [ 'migrationStatusCheck' ],
		} );
	}

	function forceUpdateMigrationStatus() {
		if ( migrationStatusCheckTimer.current ) {
			clearInterval( migrationStatusCheckTimer.current );
		}

		setForceShowMigrationStatus( true );
		updateMigrationStatus();
	}

	const dropdownMenuItems = [
		{
			icon: trashSolid,
			className: 'helpgent-danger',
			name: 'removeAccount',
			text: 'Remove Account',
			callback: () => {
				if ( isEnabled ) {
					alert(
						'Please disable the driver first before removing it'
					);
					return;
				}

				const confirmed = confirm( 'Are you sure?' );

				if ( ! confirmed ) {
					return;
				}

				if ( ! storageStatusData ) {
					alert(
						'The necessary data is loading, please wait and try again.'
					);
					return;
				}

				const totalFiles = parseInt(
					findObjectItem(
						`${ fieldKey }.total_files`,
						storageStatusData,
						0
					)
				);
				const isPlural = totalFiles > 1;

				if ( totalFiles > 0 ) {
					alert(
						`The current drive has ${ totalFiles } attachment${
							isPlural ? 's' : ''
						}, please migrate ${
							isPlural ? 'them' : 'it'
						} before removing the account.`
					);
					return;
				}

				deactivate( {
					fieldKey,
					inputKey,
					form,
					defaultDriveKey,
					activeDriveKey: getInputKey( activeDriverFieldKey ),
					save,
				} );
			},
		},
	];

	return (
		<>
			<MediaDriverCard
				label={ label }
				icon={ icon }
				iconClass={ iconClass }
				isActiveMigration={ isActiveMigration }
				storageStatusData={ storageStatusData }
				headerActions={ [
					() => (
						<HeaderActionToggleEnable
							fieldKey={ fieldKey }
							getInputKey={ getInputKey }
							form={ form }
							defaultDriveKey={ defaultDriveKey }
							activeDriverFieldKey={ activeDriverFieldKey }
						/>
					),
					() => (
						<HeaderActionDropdown menuItems={ dropdownMenuItems } />
					),
				] }
			>
				<MediaDriverCardBody
					icon={ icon }
					iconClass={ iconClass }
					label={ label }
					fieldKey={ fieldKey }
					inputKey={ inputKey }
					getInputKey={ getInputKey }
					form={ form }
					activeDriver={ activeDriver }
					driveFields={ driveFields }
					defaultDriveKey={ defaultDriveKey }
					apiRoutes={ apiRoutes }
					isActiveMigration={ isActiveMigration }
					migrationStatus={ migrationStatus }
					forceUpdateMigrationStatus={ forceUpdateMigrationStatus }
				/>
			</MediaDriverCard>

			{ canShowMigration() && (
				<MigrationProcess
					{ ...migrationStatus }
					isLoading={
						isLoadingMigrationStatus ||
						( forceShowMigrationStatus &&
							isFetchingMigrationStatus )
					}
					isFetching={ isFetchingMigrationStatus }
					apiRoutes={ apiRoutes }
					driveFields={ driveFields }
				/>
			) }
		</>
	);
}
