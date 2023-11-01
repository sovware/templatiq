export default function SaveButton( { buttonRef, isSaving, message } ) {
	const statusMessageClass = 'helpgent-settings-panel-save-status';

	return (
		<div className="helpgent-settings-panel-save-action">
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
				className="helpgent-btn helpgent-btn-primary"
			>
				{ isSaving ? 'Saving' : 'Save Settings' }
			</button>
		</div>
	);
}
