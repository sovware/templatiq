import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import DefaultStep from '../../components/default-step';
import SitePreview from '../../components/site-preview';
import { useStateValue } from '../../store/store';
import { CustomizeSteps } from './customize-steps';


import {
	checkFileSystemPermissions,
	checkRequiredPlugins,
	getDemo,
} from '../import-site/import-utils';

const currentUrlParams = new URLSearchParams( window.location.search );
const template_id = currentUrlParams.get( 'template_id' ) || '';

const CustomizeSite = () => {

	useEffect( () => {
		
		const itemData ={
			type: 'set',
			currentIndex: 0,
			selectedTemplateName: 'hello',
			selectedTemplateID: template_id,
			selectedTemplateType: 'free',
		}

		dispatch( itemData );

	}, []);

	useEffect(() => {
		const fetchData = async () => {
			// Step 1: getDemo
			const demoData = await getDemo(template_id, dispatch);
		
			// Step 2: checkRequiredPlugins
			const requiredPluginsData = await checkRequiredPlugins(dispatch);

			// Step 3: checkFileSystemPermissions
			const fileSystemPermissionsData = await checkFileSystemPermissions(dispatch);
		};
		
		fetchData(); // Call the function to start the chain of async functions
		
	}, [template_id]);

	const [ { currentCustomizeIndex, currentIndex, builder }, dispatch ] = useStateValue();

	const currentStepObject = CustomizeSteps[ currentCustomizeIndex ];
	let CurrentStepContent;
	let CurrentStepControls;

	if ( typeof currentStepObject !== 'undefined' ) {
		CurrentStepContent = currentStepObject.content;
		CurrentStepControls = currentStepObject.controls;
	} 

	useEffect( () => {
		const previousIndex = parseInt( currentCustomizeIndex ) - 1;
		const nextIndex = parseInt( currentCustomizeIndex ) + 1;

		if ( nextIndex > 0 && nextIndex < CustomizeSteps.length ) {
			document.body.classList.remove( CustomizeSteps[ nextIndex ].class );
		}

		if ( previousIndex >= 0 ) {
			document.body.classList.remove(
				CustomizeSteps[ previousIndex ].class
			);
		}

		document.body.classList.add(
			CustomizeSteps[ currentCustomizeIndex ]?.class
		);
	} );

	const setNextStep = () => {
		if ( CustomizeSteps.length - 1 === currentCustomizeIndex ) {
			return null;
		}
		if ( builder === 'beaver-builder' || builder === 'brizy' ) {
			dispatch( {
				type: 'set',
				currentIndex: currentIndex + 1,
			} );
		} else {
			dispatch( {
				type: 'set',
				currentCustomizeIndex: currentCustomizeIndex + 1,
			} );
		}
	};

	const setPreviousStep = () => {
		if ( 0 === currentCustomizeIndex ) {
			return null;
		}
		dispatch( {
			type: 'set',
			currentCustomizeIndex: currentCustomizeIndex - 1,
		} );
	};

	const preventRefresh = ( event ) => {
		event.returnValue = __(
			'Are you sure you want to cancel the site import process?',
			'templatiq-sites'
		);
		return event;
	};

	useEffect( () => {
		window.addEventListener( 'beforeunload', preventRefresh ); // eslint-disable-line
		return () =>
			window.removeEventListener( 'beforeunload', preventRefresh ); // eslint-disable-line
	} );

	return (
		<DefaultStep
			stepName={ CustomizeSteps[ currentCustomizeIndex ]?.class }
			content={
				CurrentStepContent &&
				<CurrentStepContent
					customizeStep={ true }
					onNextClick={ setNextStep }
					onPreviousClick={ setPreviousStep }
				/>
			}
			controls={
				CurrentStepControls && 
				<CurrentStepControls
					customizeStep={ true }
					onNextClick={ setNextStep }
					onPreviousClick={ setPreviousStep }
				/>
				
			}
			actions={ null }
			preview={ <SitePreview /> }
		/>
	);
};

export default CustomizeSite;