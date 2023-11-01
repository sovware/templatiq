import Switch from '@components/Switch';

export default function HeaderActionToggleEnable( props ) {
	const {
		fieldKey,
		defaultDriveKey,
		activeDriverFieldKey,
		form,
		getInputKey,
	} = props;

	const activeMideaDriver = form.watch( getInputKey( activeDriverFieldKey ) );
	const isEnabled = fieldKey === activeMideaDriver;

	function toggleEnableStatus() {
		const value = isEnabled ? defaultDriveKey : fieldKey;
		form.setValue( getInputKey( activeDriverFieldKey ), value );
	}

	return (
		<Switch
			isActive={ isEnabled ? '1' : '0' }
			handleToggle={ toggleEnableStatus }
		/>
	);
}
