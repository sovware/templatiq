import { __ } from '@wordpress/i18n';
import { Button } from '../../components';
import DefaultStep from '../../components/default-step/index';
import ICONS from '../../icons';
import { useStateValue } from '../../store/store';

import './style.scss';

const InsertContent = () => {
	const [{ currentIndex, designStep, templateId }, dispatch ] = useStateValue();
	const prevStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex - 1
		} );
	};
	const nextStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex + 1,
		} );
	};

	return (
		<DefaultStep
			content={
				<div className="congrats-screen">
					<h1 className="d-flex-center-align">
						{ __( 'Almost There! Just one step', 'templatiq-sites' ) }
						{ ICONS.tada }
					</h1>
					<p className="screen-description p-bold">Insert Content Message</p>
					<Button
						className="view-website-btn"
						after
						onClick={ () => {
							window.open( siteUrl, '_blank' );
						} }
					>
						{ __( 'View Your Website', 'templatiq-sites' ) }
					</Button>
				</div>
			}
			actions={ 
				<>
					<Button
						className={ `ist-button ist-next-step` }
						onClick={ nextStep }
						disabled={ templateId !== 0 ? false : true }
						after
					>
						{ __( 'Continue', 'templatiq-sites' ) }
					</Button>

					<PreviousStepLink onClick={ prevStep }>
						{ __( 'Back', 'templatiq-sites' ) }
					</PreviousStepLink>
				</>
			}
		/>
	);
};

export default InsertContent;
