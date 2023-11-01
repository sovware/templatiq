import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import xmarkSolid from '@icon/xmark-solid.svg';
import circleCheckRegular from '@icon/circle-check-regular.svg';
import MigrationProgressStyle from './styles/MigrationProgressStyle';

import usePostMutation from '@hooks/usePostMutation';

export default function MigrationProcess( props ) {
	const {
		isLoading,
		isFetching,
		status,
		route,
		transferQueueStatus,
		apiRoutes,
		driveFields,
	} = props;

	const fromDriveKey = findObjectItem( 'from', route, '' );
	const toDriveKey = findObjectItem( 'to', route, '' );

	// API - Reset Migration
	const { mutateAsync: resetMigration, isLoading: isResetingMigration } =
		usePostMutation(
			apiRoutes.resetMigrationRoute ? apiRoutes.resetMigrationRoute : ''
		);

	// API - Retry Migration
	const { mutateAsync: retryMigration, isLoading: isRetryingMigration } =
		usePostMutation(
			apiRoutes.retryMigrationRoute ? apiRoutes.retryMigrationRoute : ''
		);

	// API - Stop Migration
	const { mutateAsync: stopMigration, isLoading: isStopingMigration } =
		usePostMutation(
			apiRoutes.stopMigrationRoute ? apiRoutes.stopMigrationRoute : ''
		);

	const fromLabel = findObjectItem(
		`${ fromDriveKey }.label`,
		driveFields,
		'Unknown'
	);
	const toLabel = findObjectItem(
		`${ toDriveKey }.label`,
		driveFields,
		'Unknown'
	);

	const totalFiles = findObjectItem(
		'totalFilesStatus.totalFiles',
		transferQueueStatus,
		0
	);
	const totalFileSize = findObjectItem(
		'totalFilesStatus.totalFileSize',
		transferQueueStatus,
		0
	);

	const transferredFiles = findObjectItem(
		'transferredFilesStatus.totalFiles',
		transferQueueStatus,
		0
	);
	const transferredFileSize = findObjectItem(
		'transferredFilesStatus.totalFileSize',
		transferQueueStatus,
		0
	);

	const completedPercentage = getPercentage( transferredFiles, totalFiles );
	const isDone = completedPercentage === 100;

	const [ state, setState ] = useState( {
		hasError: false,
		errorMessage: '',
	} );

	useEffect( () => {
		if ( isDone ) {
			handleResetMigration();
		}
	}, [ isDone ] );

	async function handleResetMigration() {
		try {
			await resetMigration();
		} catch ( error ) {
			console.log( { error } );
		}
	}

	async function handleCancelMigration( e ) {
		e.preventDefault();
		const confirmCancellation = confirm( 'Are you sure' );

		if ( ! confirmCancellation ) {
			return;
		}

		try {
			await stopMigration();
		} catch ( error ) {
			alert( error.message );
		}
	}

	async function handleTryAgain() {
		try {
			await retryMigration();

			setState( {
				...state,
				hasError: false,
				errorMessage: '',
			} );
		} catch ( error ) {
			alert( error.message );
		}
	}

	function getPercentage( done, total ) {
		if ( total < done ) {
			return 0;
		}

		const r = done / total;

		if ( isNaN( r ) ) {
			return 0;
		}

		return r * 100;
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

	function findObjectItem( path, data, defaultValue ) {
		const isObject = ( data ) =>
			data && typeof data === 'object' && ! Array.isArray( data );

		if ( ! isObject( data ) ) {
			return defaultValue;
		}

		const pathList = path.split( '.' );

		let targetItem = data;

		for ( const pathKey of pathList ) {
			if ( ! targetItem.hasOwnProperty( pathKey ) ) {
				return defaultValue;
			}

			targetItem = targetItem[ pathKey ];
		}

		return targetItem;
	}

	if ( isLoading ) {
		<MigrationProgressStyle className="helpgent-media-driver-migration-progress">
			Loading...
		</MigrationProgressStyle>;
	}

	return (
		<MigrationProgressStyle className="helpgent-media-driver-migration-progress">
			<div className="helpgent-media-driver-migration-progress-header">
				<h2 className="helpgent-media-driver-migration-progress-header-title">
					{ fromLabel } to { toLabel } Migration Process
				</h2>
			</div>

			{ ! state.hasError ? (
				<>
					<div className="helpgent-media-driver-migration-progress-status">
						<div className="helpgent-media-driver-migration-progress-status-content">
							<div className="helpgent-media-driver-migration-progress-status-content-header">
								<div className="helpgent-media-driver-migration-progress-status-text --is-success">
									{ completedPercentage }% complete
								</div>

								<div className="helpgent-media-driver-migration-progress-status-text">
									Transferring files { transferredFiles }/
									{ totalFiles }
								</div>
							</div>

							<div className="helpgent-media-driver-migration-progress-status-content-body">
								<div className="helpgent-media-driver-migration-progress-status-bar">
									<div
										style={ {
											width: completedPercentage + '%',
										} }
										className="helpgent-media-driver-migration-progress-status-bar-fill"
									></div>
								</div>
							</div>

							<div className="helpgent-media-driver-migration-progress-status-content-footer">
								<div className="helpgent-media-driver-migration-progress-status-text">
									{ ! isDone ? (
										`${ prettySize(
											transferredFileSize
										) } of ${ prettySize( totalFileSize ) }`
									) : (
										<>
											<span className="helpgent-media-driver-migration-progress-text-icon --is-success">
												<ReactSVG
													src={ circleCheckRegular }
												/>
											</span>
											Successfully { fromLabel } to{ ' ' }
											{ toLabel } migration done
										</>
									) }
								</div>
							</div>
						</div>

						{ ! isDone && (
							<div className="helpgent-media-driver-migration-progress-status-action">
								<a
									href="#"
									className="helpgent-media-driver-migration-progress-action-link"
									onClick={ handleCancelMigration }
								>
									<span className="helpgent-media-driver-migration-progress-close-icon">
										<ReactSVG src={ xmarkSolid } />
									</span>
								</a>
							</div>
						) }
					</div>

					{ ! isDone && (
						<div className="helpgent-media-driver-migration-progress-description">
							Please don't do any major modifications on your site
							while the backup is running.
						</div>
					) }
				</>
			) : (
				<>
					<div className="helpgent-status --is-error">
						<span className="helpgent-status-icon">
							<ReactSVG src={ xmarkSolid } />
						</span>
						Migration failed
					</div>

					{ state.errorMessage && (
						<div className="helpgent-media-driver-migration-progress-description">
							{ state.errorMessage }
						</div>
					) }

					<div className="helpgent-media-driver-migration-progress-footer-actions">
						<button
							type="button"
							className="helpgent-btn helpgent-btn-primary"
							onClick={ handleTryAgain }
						>
							{ isRetryingMigration ? 'Retrying' : 'Try Again' }
						</button>
					</div>
				</>
			) }
		</MigrationProgressStyle>
	);
}
