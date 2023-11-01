import CreatePopupHeader from './CreatePopupHeader';
import CreatePopupAction from './CreatePopupAction';
import Pencil from '@icon/pencil-plus.svg';
import template from '@icon/template.svg';
export default function CreatePopupInitial( props ) {
	const { moduleState, setModuleState } = props;
	const actionsData = [
		{
			icon: Pencil,
			text: 'Create From Scratch',
			step: 'scratch' /* step/url */,
		},
		{
			icon: template,
			text: 'Start From A Template',
			url: 'pre-made-templates' /* step/url */,
		},
	];

	return (
		<div className="helpgent-createPopup">
			<CreatePopupHeader
				title="Create a New Form"
				subtitle="You can select a template to assist you, or start from scratch."
			/>
			<div className="helpgent-createPopup__body">
				<div className="helpgent-createPopup__actions">
					{ actionsData.map( ( item, index ) => {
						return (
							<CreatePopupAction
								icon={ item.icon }
								text={ item.text }
								step={ item.step }
								url={ item.url }
								moduleState={ moduleState }
								setModuleState={ setModuleState }
								key={ index }
							/>
						);
					} ) }
				</div>
			</div>
		</div>
	);
}

CreatePopupInitial.propTypes = {};
