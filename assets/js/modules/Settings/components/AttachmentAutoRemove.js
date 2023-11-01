import { useEffect } from '@wordpress/element';
import { findObjectItem } from "@helper/utils";
import Switch from '@components/Switch';

export default function AttachmentAutoRemove(props) {
	const { label, inputKey, form, rules, ErrorMessage, getInputKey } = props;
	const isEnabledAutoRemove = form.watch(inputKey);

	let removeAfterDaysKey = findObjectItem('childFields.removeAfterDays.key', props, '');
	removeAfterDaysKey = removeAfterDaysKey ? getInputKey(removeAfterDaysKey) : '';

	const removeAfterDaysLabel = findObjectItem('childFields.removeAfterDays.label', props, 'Attachment remove after days');
	const removeAfterDaysDefault = findObjectItem('childFields.removeAfterDays.default', props, 30);
	const removeAfterDaysKeyRules = findObjectItem('childFields.removeAfterDays.default', props, {});

	useEffect(() => {
		if (!isEnabledAutoRemove) {
			return;
		}

		const removeAfterDays = parseInt(form.getValues(removeAfterDaysKey));

		if (isNaN(removeAfterDays) || removeAfterDays < 1) {
			form.setValue(removeAfterDaysKey, removeAfterDaysDefault);
		}
	}, []);

	return (
		<>
			<div className="helpgent-form-row helpgent-settings-panel-field-item">
				<div className="helpgent-form-row-left">
					<label
						htmlFor="helpgent-page-select"
						className="helpgent-form__label"
					>
						{label}
					</label>
				</div>

				<div className="helpgent-form-row-right">
					<div className='helpgent-form-group'>
						<Switch
							handleToggle={( event ) => {
								form.setValue( inputKey, event.target.checked );
							}}
							isActive={ isEnabledAutoRemove ? '1' : '0'}
						/>
					</div>
				</div>
			</div>

			{isEnabledAutoRemove && (
				<div className="helpgent-form-row helpgent-settings-panel-field-item">
					<div className="helpgent-form-row-left">
						<label
							htmlFor="helpgent-page-select"
							className="helpgent-form__label"
						>
							{removeAfterDaysLabel}
						</label>
					</div>

					<div className="helpgent-form-row-right">
						<div className='helpgent-form-group'>
							<input type="number" {...form.register(removeAfterDaysKey, removeAfterDaysKeyRules)} />

							<ErrorMessage
								inputKey={removeAfterDaysKey}
								form={form}
								rules={removeAfterDaysKeyRules}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
