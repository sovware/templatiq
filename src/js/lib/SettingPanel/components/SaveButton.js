export default function SaveButton( { buttonRef, isSaving, message } ) {
	const statusMessageClass = 'templatiq-settings-panel-save-status';

	return (
		<div className="templatiq-settings-panel-save-action">
			{ message && (
				<div
					className={
						success
							? `${ statusMessageClass } --has-success`
							: `${ statusMessageClass } --has-error`
					}
				>
					{ message }
				</div>
			) }

			<button
				type="submit"
				ref={ buttonRef }
				className="templatiq-btn templatiq-btn-primary"
			>
				{ isSaving ? 'Saving' : 'Save Settings' }
			</button>
		</div>
	);
}
