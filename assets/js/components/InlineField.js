import Select from 'react-select';
import { InlineFieldStyle } from '../style';
export default function InlineField( props ) {
	const {
		fieldType,
		hasExtension,
		extensionType,
		extensionContent,
		defaultExtensionContent,
		isExtensionDisabled,
		fieldKey,
		label,
		min,
		max,
		value,
		updateFunction,
		fieldObject,
		inputDescription,
	} = props;

	const inputProps = {
		type: fieldType,
		id: `helpgent-field-element-${ fieldKey }`,
		min: parseInt( min ),
		value,
		onChange: ( e ) => updateFunction( fieldKey, e.target.value ),
		className: 'helpgent-form-group__element',
	};
	if ( max !== null ) {
		inputProps.max = max;
	}
	return (
		<InlineFieldStyle className="helpgent-field-element helpgent-field-element--inline">
			<div className="helpgent-field-element__left">
				<label
					htmlFor={ `helpgent-field-element-${ fieldKey }` }
					className="helpgent-field-element__label"
				>
					{ label }
				</label>
			</div>
			<div className="helpgent-field-element__right">
				<div
					className={ `helpgent-form-group ${
						hasExtension
							? ' helpgent-form-group--has-extension'
							: ''
					}` }
				>
					{ ( fieldType === 'text' || fieldType === 'number' ) && (
						<input { ...inputProps } />
					) }
					{ hasExtension && (
						<div className="helpgent-form-group__extension">
							{ extensionType === 'select' ? (
								<Select
									options={ extensionContent }
									value={ defaultExtensionContent }
									defaultValue={ defaultExtensionContent }
									inputId="helpgent-extension-select"
									className="helpgent-select"
									classNamePrefix="helpgent-select"
									isSearchable={ false }
									placeholder={ null }
									isDisabled={ isExtensionDisabled }
									onChange={ ( selectedItem ) =>
										updateFunction(
											fieldKey,
											selectedItem.value,
											'select'
										)
									}
								/>
							) : (
								extensionContent
							) }
						</div>
					) }
				</div>
				{ inputDescription && (
					<div className="helpgent-input-description">
						Leave empty to store as many days as you want.
					</div>
				) }
			</div>
		</InlineFieldStyle>
	);
}
