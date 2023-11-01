export default function TextField( props ) {
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
				<input type="text" { ...form.register( inputKey ) } />

				<ErrorMessage
					inputKey={ inputKey }
					form={ form }
					rules={ rules }
				/>
			</div>
		</div>
	);
}
