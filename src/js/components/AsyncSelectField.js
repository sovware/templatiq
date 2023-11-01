import { useEffect, useState, useRef } from '@wordpress/element';
import { Controller } from 'react-hook-form';
import AsyncSelect from 'react-select/async';
import CheckboxOption from './CheckboxOption';

export default function AsyncSelectField( props ) {
	const { name, onChange: onChangeValue, control, rules } = props;
	const debounceTimer = useRef();

	const defaultOptions = {
		className: 'helpgent-select',
		classNamePrefix: 'helpgent-select',
		isMulti: false,
		isClearable: false,
		closeMenuOnSelect: true,
		hideSelectedOptions: false,
		allowSelectAll: true,
		loadPreSelectedOptions: null,
		loadOptions: () => {},
		defaultOptions: {},
		components: { Option: CheckboxOption },
		outputAsArray: true,
	};

	let options = { ...defaultOptions, ...props };
	options = sanitizeOptions( options, defaultOptions );

	function sanitizeOptions( options, defaultOptions ) {
		return Object.keys( options ).reduce( ( updatedOptions, optionKey ) => {
			if ( ! defaultOptions.hasOwnProperty( optionKey ) ) {
				updatedOptions[ optionKey ] = options[ optionKey ];
				return updatedOptions;
			}

			if (
				typeof defaultOptions[ optionKey ] === 'boolean' &&
				typeof options[ optionKey ] !== 'boolean'
			) {
				updatedOptions[ optionKey ] = defaultOptions[ optionKey ];
				return updatedOptions;
			}

			updatedOptions[ optionKey ] = options[ optionKey ];
			return updatedOptions;
		}, {} );
	}

	if ( options.isMulti ) {
		options.closeMenuOnSelect = false;
	}

	async function loadOptions( data ) {
		if ( typeof options.loadOptions !== 'function' ) {
			return [];
		}

		try {
			const response = await debounce( options.loadOptions, data, 400 );
			return response;
		} catch ( error ) {
			return [];
		}
	}

	async function debounce( callback, data, timer ) {
		timer = timer ? timer : 300;

		return new Promise( ( resolve, reject ) => {
			if ( debounceTimer.current ) {
				clearTimeout( debounceTimer.current );
			}

			debounceTimer.current = setTimeout( async () => {
				try {
					const response = await callback( data );
					resolve( response );
				} catch ( error ) {
					reject( error );
				}
			}, timer );
		} );
	}

	return (
		<Controller
			control={ control }
			name={ name }
			rules={ rules ? rules : {} }
			render={ ( { field: { onChange, value } } ) => {
				const [ key, setKey ] = useState( 1 );
				const [ defaultValue, setDefaultValue ] = useState( null );
				const [ preSelectedOptions, setPreSelectedOptions ] = useState(
					[]
				);
				const [ defaultOptions, setDefaultOptions ] = useState( [] );

				useEffect( () => {
					loadPreSelectedOptions();
				}, [ value ] );

				useEffect( () => {
					const latestOptions = mergeOptions(
						preSelectedOptions,
						options.defaultOptions
					);
					setDefaultOptions( latestOptions );
				}, [ options.defaultOptions ] );

				useEffect( () => {
					updateDefaultValue( defaultOptions );
					updateKey();
				}, [ defaultOptions ] );

				async function loadPreSelectedOptions() {
					if (
						typeof options.loadPreSelectedOptions !== 'function'
					) {
						return;
					}

					const currentValue = parseValue( value );

					if ( ! currentValue ) {
						return;
					}

					if ( defaultOptions.length ) {
						const selectedOption = getOptionByVaue(
							currentValue,
							defaultOptions
						);

						if ( selectedOption ) {
							return;
						}
					}

					const ids = ! Array.isArray( currentValue )
						? [ currentValue ]
						: currentValue;

					if ( ! ids.length ) {
						return;
					}

					const response =
						await options.loadPreSelectedOptions( ids );

					if ( ! Array.isArray( response ) ) {
						return;
					}

					setPreSelectedOptions( response );
					setDefaultOptions( ( currentValue ) =>
						mergeOptions( response, currentValue )
					);
				}

				function updateDefaultValue( defaultOptions ) {
					const currentValue = parseValue( value );
					const defaultValue = getOptionByVaue(
						currentValue,
						defaultOptions
					);

					setDefaultValue( defaultValue );
				}

				function getOptionByVaue( value, optionList ) {
					const selectedOptions = optionList.filter( ( item ) => {
						if (
							Array.isArray( value ) &&
							value.includes( item.value )
						) {
							return true;
						}

						return `${ item.value }` === `${ value }`;
					} );

					if ( ! selectedOptions.length ) {
						return null;
					}

					return ! options.isMulti
						? selectedOptions[ 0 ]
						: selectedOptions;
				}

				function parseValue( value ) {
					value =
						typeof value === 'string' || typeof value === 'number'
							? `${ value }`.split( ',' )
							: value;
					value = Array.isArray( value ) ? value : [];

					if ( ! options.isMulti ) {
						value = value.length ? value[ 0 ] : '';
					}

					return value;
				}

				function mergeOptions( optionsA, optionsB ) {
					if (
						! Array.isArray( optionsA ) &&
						! Array.isArray( optionsB )
					) {
						return [];
					}

					if ( ! optionsA.length ) {
						return optionsB;
					}

					const optionsBValues = optionsB.map(
						( item ) => `${ item.value }`
					);
					optionsA = optionsA.filter(
						( item ) =>
							! optionsBValues.includes( `${ item.value }` )
					);

					if ( ! optionsA.length ) {
						return optionsB;
					}

					return [ ...optionsA, ...optionsB ];
				}

				function updateKey() {
					setKey( ( currentValue ) => {
						const newKey = currentValue + 1;
						return newKey;
					} );
				}

				function syncSelectedOption( selectedOption ) {
					const maybeAddNewOption = ( option ) => {
						setDefaultOptions( ( currentValue ) => {
							const hasSelectedOption = getOptionByVaue(
								option.value,
								currentValue
							);

							if ( hasSelectedOption ) {
								return currentValue;
							}

							return [ option, ...currentValue ];
						} );
					};

					if ( Array.isArray( selectedOption ) ) {
						selectedOption.forEach( ( option ) => {
							maybeAddNewOption( option );
						} );
						return;
					}

					maybeAddNewOption( selectedOption );
				}

				return (
					<AsyncSelect
						key={ key }
						cacheOptions
						className={ options.className }
						classNamePrefix={ options.classNamePrefix }
						isMulti={ options.isMulti }
						isClearable={ options.isClearable }
						closeMenuOnSelect={ options.closeMenuOnSelect }
						hideSelectedOptions={ options.hideSelectedOptions }
						allowSelectAll={ options.allowSelectAll }
						loadOptions={ loadOptions }
						defaultOptions={ defaultOptions }
						defaultValue={ defaultValue }
						components={ options.components }
						onChange={ ( selectedValue ) => {
							let newValue = selectedValue;

							if ( options.isMulti ) {
								newValue = selectedValue.map(
									( item ) => item.value
								);
								newValue = options.outputAsArray
									? newValue
									: newValue.join( ',' );
							} else {
								newValue = selectedValue.value;
							}

							onChange( newValue );

							if ( typeof onChangeValue === 'function' ) {
								onChangeValue( newValue );
							}

							syncSelectedOption( selectedValue );
						} }
					/>
				);
			} }
		/>
	);
}
