// import { PremiumBadge } from '@brainstormforce/starter-templates-components';
import { useStateValue } from '../../store/store';
import { sendPostMessage } from '../../utils/functions';
import './style.scss';

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
