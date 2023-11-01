import { lazy } from "@wordpress/element";

const WPPageSelectFieldMain = lazy( () => import( '@components/WPPageSelectField' ) );

export default function WPPageSelectField( props ) {
	const { label, inputKey, form, rules, ErrorMessage } = props;

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
				<WPPageSelectFieldMain
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
