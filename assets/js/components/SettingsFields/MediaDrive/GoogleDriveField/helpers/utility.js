import { revokeAccount } from './googleAPI';

export const deactivate = async ( props ) => {
	const { fieldKey, inputKey, form, defaultDriveKey, activeDriveKey, save } =
		props;

	const value = form.getValues( inputKey );
	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	if ( ! isObject( value ) ) {
		return;
	}

	if ( ! value.refreshToken ) {
		return;
	}

	await revokeAccount( value.refreshToken );
	const activeDriver = form.getValues( activeDriveKey );

	if ( fieldKey === activeDriver ) {
		form.setValue( activeDriveKey, defaultDriveKey );
	}

	form.setValue( inputKey, null );

	save();
};
