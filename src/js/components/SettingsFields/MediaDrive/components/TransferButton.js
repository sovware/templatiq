import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import Dropdown from '@components/Dropdown';
import ModalTemplate from '@components/ModalTemplate';
import Modal from '@components/Modal';
import chevronDownSolid from '@icon/chevron-down-solid.svg';
import MigrationConfirmationModalContent from './MigrationConfirmationModalContent';

export default function TransferButton( props ) {
	const {
		driveFields,
		currentDrive,
		activeDriver,
		defaultDriveKey,
		apiRoutes,
		form,
		getInputKey,
		forceUpdateMigrationStatus,
	} = props;

	const [ modalData, setModalData ] = useState( null );
	const [ isActiveModal, setIsActiveModal ] = useState( false );

	const generateMigrationOptions = () => {
		const activeDrive = driveFields.hasOwnProperty( activeDriver )
			? driveFields[ activeDriver ]
			: null;

		if ( ! activeDrive ) {
			return [];
		}

		if ( activeDriver !== currentDrive.key ) {
			return [
				{
					name: currentDrive.key,
					toDriveKey: activeDriver,
					text: `${ currentDrive.label } to ${ activeDrive.label }`,
				},
			];
		}

		const hasValue = ( value ) => {
			if ( typeof value === 'undefined' ) {
				return false;
			}

			if ( value === '' ) {
				return false;
			}

			if ( value === null ) {
				return false;
			}

			return true;
		};

		const filterFieldsHasNoValue = ( fieldKey ) => {
			if ( fieldKey === defaultDriveKey ) {
				return true;
			}

			if ( fieldKey === currentDrive.key ) {
				return false;
			}

			const fieldValue = form.getValues( getInputKey( fieldKey ) );
			return hasValue( fieldValue );
		};

		return Object.keys( driveFields )
			.filter( filterFieldsHasNoValue )
			.map( ( fieldKey ) => {
				const from = driveFields[ fieldKey ].label
					? driveFields[ fieldKey ].label
					: fieldKey;
				const to = currentDrive.label
					? currentDrive.label
					: currentDrive.key;

				return {
					name: fieldKey,
					toDriveKey: currentDrive.key,
					text: `${ from } to ${ to }`,
				};
			} );
	};

	let migrationOptions = generateMigrationOptions();

	function onSelect( event, value ) {
		const selectedOption = migrationOptions.filter(
			( item ) => item.name === value
		)[ 0 ];

		const data = {
			title: `${ selectedOption.text } Migration`,
			fromDriveKey: value,
			toDriveKey: selectedOption.toDriveKey,
			apiRoutes,
			driveFields,
			forceUpdateMigrationStatus,
		};

		setModalData( data );
		setIsActiveModal( true );
	}

	function closeModal() {
		setModalData( null );
		setIsActiveModal( false );
	}

	return (
		<>
			<Dropdown
				dropDownText={
					<button
						type="button"
						className="helpgent-btn helpgent-dropdown-btn helpgent-btn-dark"
					>
						Transfer
						<span className="helpgent-btn-addon">
							<ReactSVG src={ chevronDownSolid } />
						</span>
					</button>
				}
				placement="left"
				dropdownList={ migrationOptions }
				handleDropdownTrigger={ onSelect }
			/>

			<Modal
				isActive={ isActiveModal }
				onChange={ ( state ) => {
					setIsActiveModal( state );
				} }
			>
				{ isActiveModal && (
					<ModalTemplate
						title={
							modalData && modalData.title
								? modalData.title
								: 'Transfer'
						}
						onClose={ closeModal }
					>
						<MigrationConfirmationModalContent
							{ ...modalData }
							onClose={ closeModal }
						/>
					</ModalTemplate>
				) }
			</Modal>
		</>
	);
}
