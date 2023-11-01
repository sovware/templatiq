import { useState, useEffect } from '@wordpress/element';
import AsyncSelectField from '@components/AsyncSelectField.js';
import fetchWPPages from '@helper/fetchWPPages';

export default function WPPageSelectField( props ) {
	const { label, inputKey, form, rules, ErrorMessage } = props;
	const [ defaultPages, setDefaultPages ] = useState( [] );

	useEffect( () => {
		const fetchDefaultPages = async () => {
			setDefaultPages( await fetchWPPages() );
		};

		fetchDefaultPages();
	}, [] );

	return (
		<div className="helpgent-form-row">
			<div className="helpgent-form-row-left">
				<label
					htmlFor="helpgent-page-select"
					className="helpgent-form__label"
				>
					{ label }
				</label>
			</div>

			<div className="helpgent-form-row-right">
				<AsyncSelectField
					name={ inputKey }
					control={ form.control }
					rules={ rules }
					isMulti={
						typeof props.isMulti === 'boolean'
							? props.isMulti
							: false
					}
					isClearable={
						typeof props.isClearable === 'boolean'
							? props.isClearable
							: false
					}
					closeMenuOnSelect={
						typeof props.closeMenuOnSelect === 'boolean'
							? props.closeMenuOnSelect
							: false
					}
					hideSelectedOptions={
						typeof props.hideSelectedOptions === 'boolean'
							? props.hideSelectedOptions
							: false
					}
					allowSelectAll={
						typeof props.allowSelectAll === 'boolean'
							? props.allowSelectAll
							: false
					}
					loadOptions={ fetchWPPages }
					defaultOptions={ defaultPages }
				/>

				<ErrorMessage
					inputKey={ inputKey }
					form={ form }
					rules={ rules }
				/>
			</div>
		</div>
	);
}
