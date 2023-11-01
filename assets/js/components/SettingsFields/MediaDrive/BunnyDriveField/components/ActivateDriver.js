import ConnectMediaDrive from '../../components/ConnectMediaDrive';
import useBunnyConnect from '../hooks/useBunnyConnect';

export default function ActivateDriver( props ) {
	const { inputKey, form, save } = props;

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );
	const values = form.watch( inputKey );
	const formFields = isObject( values ) ? values : {};

	const { modalData, isActiveModal, toggleModal, Modal } = useBunnyConnect( {
		title: 'Connect',
		buttonLabel: 'Connect',
		formFields,
		inputKey,
		form,
		save,
	} );

	function onConnect() {
		toggleModal();
	}

	return (
		<>
			<ConnectMediaDrive
				{ ...props }
				onConnect={ onConnect }
				isConnecting={ isActiveModal }
			/>

			<Modal
				modalData={ modalData }
				isActiveModal={ isActiveModal }
				toggleModal={ toggleModal }
			/>
		</>
	);
}
