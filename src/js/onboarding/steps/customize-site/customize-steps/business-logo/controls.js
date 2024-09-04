import { __ } from '@wordpress/i18n';
import Button from '../../../../components/button/button';
import MediaUploader from '../../../../components/media-uploader';
import { useStateValue } from '../../../../store/store';

const BusinessLogoControls = () => {
	const [
		{ siteLogo, currentIndex, templateId },
		dispatch,
	] = useStateValue();
	const nextStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex + 1,
		} );
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
		</>
	);
};

export default BusinessLogoControls;