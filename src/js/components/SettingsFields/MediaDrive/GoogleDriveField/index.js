import ActivateDriver from './components/ActivateDriver';
import MediaDriver from './components/MediaDriver';

export default function GoogleDriveField( props ) {
	const {
		fieldKey,
		inputKey,
		form,
		defaultDriver,
		activeDriverFieldKey,
		getInputKey,
	} = props;

	const value = form.watch( inputKey );
	const activeMideaDriver = form.getValues(
		getInputKey( activeDriverFieldKey )
	);
	const isEnabled = fieldKey === activeMideaDriver;
	const isDriverActivated = isActivated( value );

	if ( ! isDriverActivated && isEnabled ) {
		form.setValue( getInputKey( activeDriverFieldKey ), defaultDriver );
	}

	function isActivated( token ) {
		const isObject = ( value ) =>
			value && typeof value === 'object' && ! Array.isArray( value );

		if ( ! isObject( token ) ) {
			return false;
		}

		return token.accessToken && token.refreshToken;
	}

	return isDriverActivated ? (
		<MediaDriver { ...props } />
	) : (
		<ActivateDriver { ...props } />
	);
}
