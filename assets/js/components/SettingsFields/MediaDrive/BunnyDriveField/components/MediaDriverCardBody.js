import { useState, useEffect } from '@wordpress/element';
import { validateCredential as validateBunnyCredential } from '../helpers/bunnyDriveAPI';
import ContentLoading from '@components/ContentLoading';
import TransferButton from '../../components/TransferButton';
import useBunnyConnect from '../hooks/useBunnyConnect';

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
		save,
	} = props;

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	const value = form.watch( inputKey );
	const defaultValue = { hostname: '', username: '', password: '' };
	const credintials = isObject( value ) ? value : defaultValue;

	const { modalData, isActiveModal, toggleModal, Modal } = useBunnyConnect( {
		title: 'Update',
		buttonLabel: 'Update',
		formFields: credintials,
		inputKey,
		form,
		save,
	} );

	const currentDrive = {
		key: fieldKey,
		label,
		icon,
		iconClass,
	};

	const [ isLoading, setIsLoading ] = useState( true );
	const [ hasValidCredentials, setHasValidCredentials ] = useState( null );

	useEffect( () => {
		const init = async () => {
			setIsLoading( true );
			await validateCredentials();
			setIsLoading( false );
		};

		init();
	}, [ value ] );

	async function validateCredentials() {
		const response = await validateBunnyCredential( credintials );

		if ( ! response.success ) {
			setHasValidCredentials( false );
			return;
		}

		setHasValidCredentials( true );
	}

	if ( isLoading ) {
		return <ContentLoading style={ { margin: 0, minHeight: 'unset' } } />;
	}

	return (
		<>
			<div className="helpgent-form" style={ { marginBottom: '20px' } }>
				<div className="helpgent-field-element">
					<div className="helpgent-field-element__top">
						<p>
							<strong>Hostname:</strong> { credintials.hostname }
						</p>
					</div>
				</div>

				<div className="helpgent-field-element">
					<div className="helpgent-field-element__top">
						<p>
							<strong>Username:</strong> { credintials.username }
						</p>
					</div>
				</div>

				<div className="helpgent-field-element">
					<div className="helpgent-field-element__top">
						<p>
							<strong>Password:</strong> ******
						</p>
					</div>
				</div>
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

					{ /* <div className='helpgent-action-item'>
                        <button type='button' className='helpgent-btn helpgent-btn-primary' onClick={toggleModal}>
                            Update
                        </button>
                    </div>

                    <Modal 
                        modalData={modalData}
                        isActiveModal={isActiveModal}
                        toggleModal={toggleModal}
                    /> */ }
				</div>
			) }
		</>
	);
}
