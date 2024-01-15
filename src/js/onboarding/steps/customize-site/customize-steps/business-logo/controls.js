import { __ } from '@wordpress/i18n';
import Button from '../../../../components/button/button';
import MediaUploader from '../../../../components/media-uploader';
import { useStateValue } from '../../../../store/store';
import PreviousStepLink from '../../../../components/util/previous-step-link/index';
import { sendPostMessage } from '../../../../utils/functions';

const BusinessLogoControls = () => {
	const [
		{ siteLogo, currentCustomizeIndex, currentIndex, designStep, templateId },
		dispatch,
	] = useStateValue();
	const nextStep = () => {
		dispatch( {
			type: 'set',
			currentCustomizeIndex: currentCustomizeIndex + 1,
		} );
	};

	const lastStep = () => {
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
	const disabledClass = templateId === 0 ? 'disabled-btn' : '';
	return (
		<>
			<MediaUploader />
			<Button
				className={ `ist-button ist-next-step ${ disabledClass }` }
				onClick={ nextStep }
				disabled={ templateId !== 0 ? false : true }
				after
			>
				{ '' !== siteLogo.url
					? __( 'Continue', 'templatiq-sites' )
					: __( 'Skip & Continue', 'templatiq-sites' ) }
			</Button>
			{
				!designStep === 1 &&
				<PreviousStepLink onClick={ lastStep }>
					{ __( 'Back', 'templatiq-sites' ) }
				</PreviousStepLink>
			}
		</>
	);
};

export default BusinessLogoControls;
