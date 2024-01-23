// import { PremiumBadge } from '@brainstormforce/starter-templates-components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useStateValue } from '../../store/store';
import './style.scss';
import ICONS from '../../icons';
import { sendPostMessage } from '../../utils/functions';

const ChangeTemplate = () => {
	const [
		{
			selectedTemplateName,
			currentIndex,
			licenseStatus,
			selectedTemplateType,
		},
		dispatch,
	] = useStateValue();

	const goToShowcase = () => {
		sendPostMessage( {
			param: 'clearPreviewAssets',
			data: {},
		} );

		setTimeout( () => {
			dispatch( {
				type: 'set',
				currentIndex: currentIndex - 1,
				currentCustomizeIndex: 0,
			} );
		}, 300 );
	};

	return (
		<></>
	);
};
export default ChangeTemplate;
