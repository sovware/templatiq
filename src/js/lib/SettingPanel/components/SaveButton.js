export default function SaveButton( { buttonRef, isSaving, message } ) {
	const statusMessageClass = 'template-market-settings-panel-save-status';

	return (
		<div className="template-market-settings-panel-save-action">
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
				className="template-market-btn template-market-btn-primary"
			>
				{ isSaving ? 'Saving' : 'Save Settings' }
			</button>
		</div>
	);
}
