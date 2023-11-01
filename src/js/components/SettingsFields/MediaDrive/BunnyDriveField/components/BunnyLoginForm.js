import { useState } from '@wordpress/element';
import { validateCredential } from '../helpers/bunnyDriveAPI';

export default function BunnyLoginForm( props ) {
	const { buttonLabel, formFields: formFieldsValues, onConnect } = props;

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	const initialFields = fillDefaultValues(
		{
			hostname: {
				type: 'value',
				label: 'Hostname',
				value: '',
				required: true,
				hasError: false,
				message: '',
			},
			username: {
				type: 'value',
				label: 'Username',
				value: '',
				required: true,
				hasError: false,
				message: '',
			},
			password: {
				type: 'password',
				label: 'Password',
				value: '',
				required: true,
				hasError: false,
				message: '',
			},
		},
		formFieldsValues
	);

	const [ isConnecting, setIsConnecting ] = useState( false );
	const [ formFields, setFormFields ] = useState( initialFields );
	const [ formStatus, setFormStatus ] = useState( {
		hasError: false,
		message: '',
	} );

	async function connect() {
		if ( isConnecting ) {
			return;
		}

		setFormStatus( { hasError: false, message: '' } );

		const isValidForm = validateFormData();

		if ( ! isValidForm ) {
			return;
		}

		const formData = Object.keys( formFields ).reduce(
			( data, fieldKey ) => {
				data[ fieldKey ] = formFields[ fieldKey ].value;
				return data;
			},
			{}
		);

		setIsConnecting( true );
		const status = await validateCredential( formData );
		setIsConnecting( false );

		if ( ! status.success ) {
			setFormStatus( {
				...formStatus,
				hasError: true,
				message: status.message,
			} );
			return;
		}

		if ( typeof onConnect === 'function' ) {
			onConnect( formData );
		}
	}

	function validateFormData() {
		let errorCount = 0;
		let currentFormFields = formFields;

		for ( const fieldKey of Object.keys( currentFormFields ) ) {
			const field = validateFormField( currentFormFields[ fieldKey ] );
			currentFormFields[ fieldKey ] = field;

			if ( field.hasError ) {
				errorCount++;
			}
		}

		setFormFields( currentFormFields );

		return errorCount ? false : true;
	}

	function handleUpdateFieldValue( e ) {
		const fielfKey = e.target.name;

		let field = formFields[ fielfKey ];
		field.value = e.target.value;

		field = validateFormField( field );

		setFormFields( {
			...formFields,
			[ fielfKey ]: field,
		} );
	}

	function validateFormField( field ) {
		const hasError = field.required && field.value === '';
		const message = hasError ? 'This field is required' : '';

		field.hasError = hasError;
		field.message = message;

		return field;
	}

	function fillDefaultValues( initialFields, defaultValue ) {
		if ( ! isObject( initialFields ) || ! isObject( defaultValue ) ) {
			return initialFields;
		}

		for ( const fieldKey of Object.keys( defaultValue ) ) {
			if ( ! initialFields.hasOwnProperty( fieldKey ) ) {
				continue;
			}
			initialFields[ fieldKey ].value = defaultValue[ fieldKey ];
		}

		return initialFields;
	}

	return (
		<div className="helpgent-form" style={ { minWidth: '300px' } }>
			{ Object.keys( formFields ).map( ( fieldkey ) => (
				<div className="helpgent-field-element">
					<div className="helpgent-field-element__top">
						<label
							className="helpgent-field-element__label"
							for={ fieldkey }
						>
							{ formFields[ fieldkey ].label }{ ' ' }
							{ formFields[ fieldkey ].required ? '*' : '' }
						</label>
					</div>

					<div className="helpgent-field-element__content">
						<div className="helpgent-form-group">
							<input
								type={ formFields[ fieldkey ].type }
								required={
									typeof formFields[ fieldkey ].required ===
									'boolean'
										? formFields[ fieldkey ].required
										: 'false'
								}
								className="helpgent-form-group__element"
								id={ fieldkey }
								name={ fieldkey }
								value={ formFields[ fieldkey ].value }
								onChange={ handleUpdateFieldValue }
							/>

							{ formFields[ fieldkey ].hasError && (
								<span className="helpgent-validate-danger">
									{ formFields[ fieldkey ].message }
								</span>
							) }
						</div>
					</div>
				</div>
			) ) }

			<div>
				<button
					type="button"
					className="helpgent-btn helpgent-btn-block helpgent-btn-primary"
					onClick={ connect }
				>
					{ isConnecting ? 'Please wait...' : buttonLabel }
				</button>

				{ formStatus.message && (
					<div className="helpgent-status helpgent--justify-center --is-error">
						{ formStatus.message }
					</div>
				) }
			</div>
		</div>
	);
}
