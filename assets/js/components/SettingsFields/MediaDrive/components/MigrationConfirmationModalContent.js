import { useState, useEffect } from '@wordpress/element';
import { useQueryClient } from '@tanstack/react-query';
import ReactSVG from 'react-inlinesvg';
import arrowRight from '@icon/arrow-right.svg';

import MigrationConfirmationModalContentStyle from './styles/MigrationConfirmationModalContentStyle';
import useFetchData from '@hooks/useFetchData';
import usePostMutation from '@hooks/usePostMutation';

export default function MigrationConfirmationModalContent( props ) {
	const {
		fromDriveKey,
		toDriveKey,
		driveFields,
		apiRoutes,
		onClose,
		forceUpdateMigrationStatus,
	} = props;

	const queryClient = useQueryClient();

	const storageStatusRoute = apiRoutes.storageStatusRoute
		? apiRoutes.storageStatusRoute
		: '';
	const [ transferErrorMessage, setTransferErrorMessage ] = useState( '' );
	const [ totalFilesToTransfer, setTotalFilesToTransfer ] = useState( 0 );

	let fromDrive = null;
	let toDrive = null;

	if ( driveFields.hasOwnProperty( fromDriveKey ) ) {
		fromDrive = driveFields[ fromDriveKey ];
		fromDrive.iconClass = fromDrive.iconClass ? fromDrive.iconClass : '';
	}

	if ( driveFields.hasOwnProperty( toDriveKey ) ) {
		toDrive = driveFields[ toDriveKey ];
		toDrive.iconClass = toDrive.iconClass ? toDrive.iconClass : '';
	}

	if ( ! fromDrive || ! toDrive ) {
		return (
			<MigrationConfirmationModalContentStyle className="helpgent-media-migration-confirmation-modal-content">
				No media drive found
			</MigrationConfirmationModalContentStyle>
		);
	}

	const {
		data,
		isLoading: isLoadingStorageStatus,
		isFetching: isFetchingStorageStatus,
		errorMessage: storageStatusErrorMessage,
		isError: hasErrorStorageStatus,
	} = useFetchData( [ 'storageStatus' ], storageStatusRoute );

	const startMigrationRoute = apiRoutes.startMigrationRoute
		? `${ apiRoutes.startMigrationRoute }?migrate_from=${ fromDriveKey }&migrate_to=${ toDriveKey }`
		: '';

	const { mutateAsync: startMigration, isLoading: isStartingMigration } =
		usePostMutation( `/${ startMigrationRoute }` );

	useEffect( () => {
		queryClient.invalidateQueries( { queryKey: [ 'storageStatus' ] } );
	}, [] );

	useEffect( () => {
		if ( data && data[ fromDriveKey ] ) {
			setTotalFilesToTransfer(
				parseInt( data[ fromDriveKey ].total_files )
			);
		} else {
			setTotalFilesToTransfer( 0 );
		}
	}, [ data ] );

	if ( isLoadingStorageStatus || isFetchingStorageStatus ) {
		return (
			<MigrationConfirmationModalContentStyle className="helpgent-media-migration-confirmation-modal-content">
				Loading...
			</MigrationConfirmationModalContentStyle>
		);
	}

	if ( hasErrorStorageStatus ) {
		return (
			<MigrationConfirmationModalContentStyle className="helpgent-media-migration-confirmation-modal-content">
				{ storageStatusErrorMessage
					? storageStatusErrorMessage
					: 'Something went wrong please try again.' }
			</MigrationConfirmationModalContentStyle>
		);
	}

	if ( totalFilesToTransfer < 1 ) {
		return (
			<MigrationConfirmationModalContentStyle className="helpgent-media-migration-confirmation-modal-content">
				There is no files in your { fromDrive.label } to transfer
			</MigrationConfirmationModalContentStyle>
		);
	}

	async function transfer() {
		if ( isStartingMigration ) {
			return;
		}

		try {
			await startMigration();
			forceUpdateMigrationStatus();
			onClose();
		} catch ( error ) {
			setTransferErrorMessage( error.message );
		}
	}

	return (
		<MigrationConfirmationModalContentStyle className="helpgent-media-migration-confirmation-modal-content">
			<div className="helpgent-media-migration-confirmation-modal-icons">
				<div
					className={ `helpgent-media-migration-confirmation-modal-drive-icon helpgent-icon ${ fromDrive.iconClass }` }
				>
					{ fromDrive.icon }
				</div>

				<div className="helpgent-media-migration-confirmation-modal-arrow-icon">
					<ReactSVG src={ arrowRight } />
				</div>

				<div
					className={ `helpgent-media-migration-confirmation-modal-drive-icon helpgent-icon ${ toDrive.iconClass }` }
				>
					{ toDrive.icon }
				</div>
			</div>

			<div className="helpgent-media-migration-confirmation-modal-description">
				There { totalFilesToTransfer > 1 ? 'are' : 'is' }{ ' ' }
				{ totalFilesToTransfer }{ ' ' }
				{ totalFilesToTransfer > 1 ? 'attachments' : 'attachment' } on
				your { fromDrive.label }, would you like to transfer{ ' ' }
				{ totalFilesToTransfer > 1 ? 'them' : 'it' } to{ ' ' }
				{ toDrive.label }?
			</div>

			<div className="helpgent-media-migration-confirmation-modal-actions">
				<div className="helpgent-media-migration-confirmation-modal-action">
					<button
						type="button"
						className="helpgent-btn helpgent-btn-gray"
						onClick={ onClose }
					>
						Cancel
					</button>
				</div>

				<div className="helpgent-media-migration-confirmation-modal-action">
					<button
						type="button"
						className="helpgent-btn helpgent-btn-primary"
						onClick={ transfer }
					>
						{ isStartingMigration ? 'Transferring' : 'Transfer' }
					</button>
				</div>
			</div>

			{ transferErrorMessage && (
				<div className="helpgent-media-migration-confirmation-modal-status-message --has-error">
					{ transferErrorMessage }
				</div>
			) }
		</MigrationConfirmationModalContentStyle>
	);
}
