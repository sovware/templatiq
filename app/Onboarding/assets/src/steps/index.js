import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@brainstormforce/starter-templates-components';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '../store/store';
import ICONS from '../../icons';
import Logo from '../components/logo';
import { storeCurrentState } from '../utils/functions';
import { STEPS } from './util';
const { adminUrl } = starterTemplates;
const $ = jQuery;

const Steps = () => {
	const [ stateValue, dispatch ] = useStateValue();
	const {
		currentIndex,
		currentCustomizeIndex,
		templateResponse,
		designStep,
		importError,
	} = stateValue;
	const [ settingHistory, setSettingHistory ] = useState( true );
	const [ settingIndex, setSettingIndex ] = useState( true );
	const current = STEPS[ currentIndex ];
	const history = useNavigate();

	useEffect( () => {
		const previousIndex = parseInt( currentIndex ) - 1;
		const nextIndex = parseInt( currentIndex ) + 1;

		if ( nextIndex > 0 && nextIndex < STEPS.length ) {
			document.body.classList.remove( STEPS[ nextIndex ].class );
		}

		if ( previousIndex > 0 ) {
			document.body.classList.remove( STEPS[ previousIndex ].class );
		}

		document.body.classList.add( STEPS[ currentsIndex ].class );
	}, [] );

	useEffect( () => {
		if ( importError ) {
			document.body.classList.add( 'st-error' );
		} else {
			document.body.classList.remove( 'st-error' );
		}
	}, [ importError ] );

	useEffect( () => {
		const currentUrlParams = new URLSearchParams( window.location.search );
		const storedStateValue = JSON.parse(
			localStorage.getItem( 'starter-templates-onboarding' )
		);
		const urlIndex = parseInt( currentUrlParams.get( 'ci' ) ) || 0;
		const designIndex = parseInt( currentUrlParams.get( 'designStep' ) ) || 0;

		if ( urlIndex !== 0 ) {
			const stateValueUpdates = {};
			for ( const key in storedStateValue ) {
				stateValueUpdates[ key ] = storedStateValue[ `${ key }` ];
			}

			dispatch( {
				type: 'set',
				currentIndex: urlIndex,
				designStep: designIndex,
				...stateValueUpdates,
			} );
		} else {
			localStorage.removeItem( 'starter-templates-onboarding' );
		}

		setSettingHistory( false );
	}, [ history ] );

	useEffect( () => {
		const currentUrlParams = new URLSearchParams( window.location.search );
		const urlIndex = parseInt( currentUrlParams.get( 'ci' ) ) || 0;
		console.log('urlIndex', urlIndex, currentIndex);

		if ( currentIndex === 0 ) {
			console.log('currentIndex is Zero', currentIndex);
			currentUrlParams.delete( 'ci' );
			history(
				window.location.pathname + '?' + currentUrlParams.toString()
			);
		}

		if (
			( currentIndex !== 0 && urlIndex !== currentIndex ) ||
			templateResponse !== null
		) {
			console.log('currentIndex is not Zero & urlIndex', currentIndex, urlIndex);
			storeCurrentState( stateValue );
			currentUrlParams.set( 'ci', currentIndex );
			history(
				window.location.pathname + '?' + currentUrlParams.toString()
			);
		}

		// Execute only for the last Customization step.
		if (
			designStep !== 0 &&
			urlIndex === STEPS.length - 1 &&
			templateResponse !== null
		) {
			storeCurrentState( stateValue );
			currentUrlParams.set( 'designStep', designStep );
			history(
				window.location.pathname + '?' + currentUrlParams.toString()
			);
		}

		if ( currentIndex === 1 ) {
			dispatch( {
				type: 'set',
				activePalette: {},
				activePaletteSlug: 'default',
				typography: {},
				typographyIndex: 0,
			} );
		}

		setSettingIndex( false );
	}, [ currentIndex, templateResponse, designStep ] );

	const goToShowcase = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex - 2,
			currentCustomizeIndex: 0,
		} );
	};

	return (
		<div className={ `st-step ${ current.class }` }>
			{ currentIndex !== 2 && (
				<div className="step-header">
					{ current.header ? (
						current.header
					) : (
						<div className="row">
							<div className="col">
								<Logo />
							</div>
							<div className="right-col">
								{ currentIndex === 3 && (
									<div
										className="back-to-main"
										onClick={ goToShowcase }
									>
										<Tooltip
											content={ __(
												'Back to Templates',
												'templatiq-sites'
											) }
										>
											{ ICONS.cross }
										</Tooltip>
									</div>
								) }
								<div className="col exit-link">
									<a href={ adminUrl }>
										<Tooltip
											content={ __(
												'Exit to Dashboard',
												'templatiq-sites'
											) }
										>
											{ ICONS.dashboard }
										</Tooltip>
									</a>
								</div>
							</div>
						</div>
					) }

					<canvas
						id="ist-bashcanvas"
						width={ window.innerWidth }
						height={ window.innerHeight }
					/>
				</div>
			) }
			{ settingHistory === false && settingIndex === false && current
				? current.content
				: null }
		</div>
	);
};

export default Steps;