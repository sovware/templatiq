import FieldGroups from './FieldGroups';
import Fields from './Fields';

export default function FieldSection( { menu, form, save, onSubmit } ) {
	if (
		! ( Array.isArray( menu.fields ) || Array.isArray( menu.fieldGroups ) )
	) {
		return '';
	}

	return (
		<div className="helpgent-settings-panel-field-section">
			{ menu.fields && (
				<div className="helpgent-settings-panel-field-group">
					<div className="helpgent-settings-panel-field-group-contents">
						<Fields
							fields={ menu.fields }
							form={ form }
							save={ save }
							onSubmit={ onSubmit }
						/>
					</div>
				</div>
			) }
			{ menu.fieldGroups && (
				<FieldGroups
					fieldGroups={ menu.fieldGroups }
					form={ form }
					save={ save }
				/>
			) }
		</div>
	);
}
