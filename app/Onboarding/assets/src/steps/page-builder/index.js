import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { DefaultStep, PreviousStepLink } from '../../components/index';
import { useStateValue } from '../../store/store';
import './style.scss';
const { imageDir, isBrizyEnabled, isElementorDisabled } = starterTemplates;

const PageBuilder = () => {
	const [ { currentIndex }, dispatch ] = useStateValue();

	useEffect( () => {
		const startTime = localStorage.getItem( 'st-import-start' );
		const endTime = localStorage.getItem( 'st-import-end' );

		if ( startTime || endTime ) {
			localStorage.removeItem( 'st-import-start' );
			localStorage.removeItem( 'st-import-end' );
		}
	} );

	const update = ( builder ) => {
		const content = new FormData();
		content.append( 'action', 'templatiq-sites-change-page-builder' );
		content.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );
		content.append( 'page_builder', builder );

		fetch( ajaxurl, {
			method: 'post',
			body: content,
		} );

		dispatch( {
			type: 'set',
			builder,
			currentIndex: currentIndex + 1,
		} );
	};

	const handleKeyPress = ( e, value ) => {
		e = e || window.event;

		if ( e.keyCode === 37 ) {
			//Left Arrow
			if ( e.target.previousSibling ) {
				e.target.previousSibling.focus();
			}
		} else if ( e.keyCode === 39 ) {
			//Right Arrow
			if ( e.target.nextSibling ) {
				e.target.nextSibling.focus();
			}
		} else if ( e.key === 'Enter' ) {
			//Enter
			update( value );
		}
	};

	return (
		<DefaultStep
			content={
				<div className="page-builder-screen-wrap middle-content">
					<h1>{ __( 'Select Page Builder', 'templatiq-sites' ) }</h1>
					<p className="screen-description">
						{ __(
							'Please choose your preferred page builder from the list below.',
							'templatiq-sites'
						) }
					</p>
					<div className="page-builder-wrap ist-fadeinUp">
						<div
							className="page-builder-item d-flex-center-align"
							onClick={ () => {
								update( 'gutenberg' );
							} }
							tabIndex="0"
							onKeyDown={ ( event ) =>
								handleKeyPress( event, 'gutenberg' )
							}
						>
							<div className="elementor-image-wrap image-wrap">
								<img
									src={ `${ imageDir }block-editor.svg` }
									alt={ __( 'Block Editor', 'templatiq-sites' ) }
								/>
							</div>
							<h6>{ __( 'Block Editor', 'templatiq-sites' ) }</h6>
						</div>
						{ isElementorDisabled === '' && (
							<div
								className="page-builder-item d-flex-center-align"
								onClick={ () => {
									update( 'elementor' );
								} }
								tabIndex="0"
								onKeyDown={ ( event ) =>
									handleKeyPress( event, 'elementor' )
								}
							>
								<div className="elementor-image-wrap image-wrap">
									<img
										src={ `${ imageDir }elementor.svg` }
										alt={ __( 'Elementor', 'templatiq-sites' ) }
									/>
								</div>
								<h6>{ __( 'Elementor', 'templatiq-sites' ) }</h6>
							</div>
						) }
						<div
							className="page-builder-item d-flex-center-align"
							onClick={ () => {
								update( 'beaver-builder' );
							} }
							tabIndex="0"
							onKeyDown={ ( event ) =>
								handleKeyPress( event, 'beaver-builder' )
							}
						>
							<div className="beaver-builder-image-wrap image-wrap">
								<img
									src={ `${ imageDir }beaver-builder.svg` }
									alt={ __(
										'Beaver Builder',
										'templatiq-sites'
									) }
								/>
							</div>
							<h6>{ __( 'Beaver Builder', 'templatiq-sites' ) }</h6>
						</div>
						{ isBrizyEnabled === '1' && (
							<div
								className="page-builder-item d-flex-center-align"
								onClick={ () => {
									update( 'brizy' );
								} }
								tabIndex="0"
								onKeyDown={ ( event ) =>
									handleKeyPress( event, 'brizy' )
								}
							>
								<div className="brizy-image-wrap image-wrap">
									<img
										src={ `${ imageDir }brizy.svg` }
										alt={ __( 'Brizy', 'templatiq-sites' ) }
									/>
								</div>
								<h6>{ __( 'Brizy', 'templatiq-sites' ) }</h6>
							</div>
						) }
					</div>
				</div>
			}
			actions={
				<>
					<PreviousStepLink
						before
						customizeStep={ true }
						onClick={ () => {
							window.location.href = starterTemplates.adminUrl;
						} }
					>
						{ __( 'Back', 'templatiq-sites' ) }
					</PreviousStepLink>
				</>
			}
		/>
	);
};

export default PageBuilder;
