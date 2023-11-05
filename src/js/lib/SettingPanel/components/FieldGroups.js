import Fields from './Fields';

export default function FieldGroups( { fieldGroups, form, save } ) {
	return (
		<>
			{ fieldGroups.map( ( fieldGroup, index ) => {
				if ( ! fieldGroup.fields ) {
					return '';
				}

				return (
					<div
						className="template-market-settings-panel-field-group"
						key={ index }
					>
						{ fieldGroup.label && (
							<div className="template-market-settings-panel-field-group-header">
								<h2>{ fieldGroup.label }</h2>
							</div>
						) }

						<div className="template-market-settings-panel-field-group-contents">
							<Fields
								fields={ fieldGroup.fields }
								form={ form }
								save={ save }
							/>
						</div>
					</div>
				);
			} ) }
		</>
	);
}
