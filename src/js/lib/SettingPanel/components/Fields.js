import { useSettingsState } from '../context/SettingsContext';
import { getErrorMessage } from '../helpers/utility';
import ErrorMessage from './ErrorMessage';

export default function Fields( { fields, form, save, onSubmit } ) {
	const { settingsState, setSettingsState } = useSettingsState();

	function getInputKey( fieldKey ) {
		return `${ settingsState.prefix }${ fieldKey }`;
	}

	return (
		<>
			{ fields.map( ( fieldKey, index ) => {
				if ( ! settingsState.fields.hasOwnProperty( fieldKey ) ) {
					return '';
				}

				if (
					! settingsState.fieldComponents.hasOwnProperty(
						settingsState.fields[ fieldKey ].type
					)
				) {
					return '';
				}

				const Field =
					settingsState.fieldComponents[
						settingsState.fields[ fieldKey ].type
					];
				const fieldData = settingsState.fields[ fieldKey ];
				const rules =
					fieldData.rules &&
					typeof fieldData.rules === 'object' &&
					! Array.isArray( fieldData.rules )
						? fieldData.rules
						: {};
				const inputKey = `${ settingsState.prefix }${ fieldKey }`;

				return (
					<div
						key={ index }
						id={ `template-market-settings-panel-${ fieldKey }-field-item` }
						className={ `template-market-settings-panel-field-item template-market-settings-panel-${ fieldKey }-field-item` }
					>
						<Field
							{ ...settingsState.fields[ fieldKey ] }
							prefix={ settingsState.prefix }
							getInputKey={ getInputKey }
							fieldKey={ fieldKey }
							inputKey={ inputKey }
							settingsState={ settingsState }
							setSettingsState={ setSettingsState }
							form={ form }
							rules={ rules }
							save={ save }
							onSubmit={ onSubmit }
							getErrorMessage={ getErrorMessage }
							ErrorMessage={ ErrorMessage }
						/>
					</div>
				);
			} ) }
		</>
	);
}
