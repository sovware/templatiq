import { useState, useEffect } from '@wordpress/element';
import { maybeUpdateAccessToken, getAccountInfo } from '../helpers/googleAPI';
import ContentLoading from '@components/ContentLoading';
import TransferButton from '../../components/TransferButton';

export default function MediaDriverCardBody( props ) {
	const {
		icon,
		iconClass,
		label,
		activeDriver,
		defaultDriveKey,
		apiRoutes,
		fieldKey,
		inputKey,
		getInputKey,
		form,
		driveFields,
		isActiveMigration,
		forceUpdateMigrationStatus,
	} = props;

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	const value = form.watch( inputKey );
	const { accessToken } = isObject( value )
		? value
		: { accessToken: '', refreshToken: '' };

	const currentDrive = {
		key: fieldKey,
		label,
		icon,
		iconClass,
	};

	const [ accountInfo, setAccountInfo ] = useState( null );
	const [ isLoading, setIsLoading ] = useState( true );

	useEffect( () => {
		const init = async () => {
			setIsLoading( true );

			const newAccessToken = await maybeUpdateAccessToken(
				value,
				updateAccessToken
			);
			await fetchAccoutInfo(
				newAccessToken ? newAccessToken : accessToken
			);

			setIsLoading( false );
		};

		init();
	}, [ value ] );

	function updateAccessToken( data ) {
		form.setValue( inputKey, { ...value, accessToken: data.access_token } );
	}

	async function fetchAccoutInfo( accessToken ) {
		if ( ! accessToken ) {
			return;
		}

		const response = await getAccountInfo( accessToken );

		if ( ! response.success ) {
			return;
		}

		setAccountInfo( response.data );
	}

	function getStorageInfo() {
		const used = prettySize( accountInfo.storageQuota.usage );
		const limit = prettySize( accountInfo.storageQuota.limit );

		return `${ used } used of ${ limit }`;
	}

	function prettySize( bytes ) {
		const sizeInKB = bytes / 1024;

		const isFloat = ( n ) => {
			return Number( n ) === n && n % 1 !== 0;
		};

		if ( sizeInKB < 1024 ) {
			const size = isFloat( sizeInKB ) ? sizeInKB.toFixed( 2 ) : sizeInKB;
			return `${ size } KB`;
		}

		const sizeInMB = sizeInKB / 1024;

		if ( sizeInMB < 1024 ) {
			const size = isFloat( sizeInMB ) ? sizeInMB.toFixed( 2 ) : sizeInKB;
			return `${ size } MB`;
		}

		const sizeInGB = sizeInMB / 1024;

		const size = isFloat( sizeInGB ) ? sizeInGB.toFixed( 2 ) : sizeInGB;
		return `${ size } GB`;
	}

	function getStorageUsageInPercentage() {
		return (
			( accountInfo.storageQuota.usage /
				accountInfo.storageQuota.limit ) *
			100
		);
	}

	if ( isLoading ) {
		return <ContentLoading style={ { margin: 0, minHeight: 'unset' } } />;
	}

	return (
		<>
			<div className="helpgent-user-profile">
				<div className="helpgent-user-profile-thumbnail">
					<img
						className="helpgent-user-profile-thumbnail-img"
						alt="user-avater"
						src={ accountInfo.user.photoLink }
					/>
				</div>

				<div className="helpgent-user-profile-meta">
					<h3 className="helpgent-user-profile-meta-title">
						{ accountInfo.user.displayName }
					</h3>
					<p className="helpgent-user-profile-meta-subtitle">
						{ accountInfo.user.emailAddress }
					</p>
				</div>
			</div>

			<div className="helpgent-storage-status-bar-container">
				<div className="helpgent-storage-status-bar">
					<div
						className="helpgent-storage-status-bar-fill"
						style={ { width: getStorageUsageInPercentage() + '%' } }
					></div>
				</div>

				<p className="helpgent-storage-status-bar-label">
					{ getStorageInfo() }
				</p>
			</div>

			{ ! isActiveMigration && (
				<div className="helpgent-actions">
					<div className="helpgent-action-item">
						<TransferButton
							inputKey={ inputKey }
							getInputKey={ getInputKey }
							form={ form }
							driveFields={ driveFields }
							currentDrive={ currentDrive }
							activeDriver={ activeDriver }
							defaultDriveKey={ defaultDriveKey }
							apiRoutes={ apiRoutes }
							forceUpdateMigrationStatus={
								forceUpdateMigrationStatus
							}
						/>
					</div>
				</div>
			) }
		</>
	);
}
