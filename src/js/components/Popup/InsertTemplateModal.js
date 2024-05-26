import postData from '@helper/postData';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertTemplateModal = ( { item, onClose, required_plugins } ) => {
	const { template_id, builder, directory_page_type } = item;

	const directoryType = template_market_obj?.directory_types;

	const installPluginEndPoint = 'templatiq/dependency/install';
	const importAsPageEndPoint = 'templatiq/template/import-as-page';

	const freePlugins = required_plugins?.length > 0 ? required_plugins.filter(
		( plugin ) => ! plugin.hasOwnProperty( 'is_pro' ) || plugin.is_pro === false
	) : [];
	const proPlugins = required_plugins?.length > 0 ? required_plugins.filter(
		( plugin ) => plugin.hasOwnProperty( 'is_pro' ) && plugin.is_pro === true
	) : [];

	let [ selectedPlugins, setSelectedPlugins ] = useState( [] );
	let [ selectedTypes, setSelectedTypes ] = useState( [] );
	let [ submittedTypes, setSubmittedTypes ] = useState( [] );
	let [ disableButtonType, setDisableButtonType ] = useState( true );
	let [ pageTitle, setPageTitle ] = useState( '' );
	let [ loading, setLoading ] = useState( false );
	let [ errorMsg, setErrorMsg ] = useState( false );

	const [ installablePlugins, setInstallablePlugins ] = useState( freePlugins || [] );
	const [ installingPlugins, setInstallingPlugins ] = useState( [] );
	const [ installedPlugins, setInstalledPlugins ] = useState( [] );
	const [ disableButtonInstall, setDisableButtonInstall ] = useState( true );

	const [ allPluginsInstalled, setAllPluginsInstalled ] = useState( true );
	const [ importedData, setImportedData ] = useState( false );
	const [ elementorEditorEnabled, setElementorEditorEnabled ] = useState( false );

	let closeInsertTemplateModal = ( e ) => {
		e && e.preventDefault();
		let templatiqRoot = document.querySelector( '.templatiq' );

		templatiqRoot &&
			templatiqRoot.classList.remove( 'templatiq-overlay-enable' );

		onClose();
	};

	const handlePageTitle = ( e ) => {
		e.preventDefault();
		setPageTitle( e.target.value );
	};

	const handlePluginChange = ( plugin ) => {
		const updatedPlugins = selectedPlugins.includes( plugin )
			? selectedPlugins.filter( ( item ) => item !== plugin )
			: [ ...selectedPlugins, plugin ];

		setSelectedPlugins( updatedPlugins );

		setDisableButtonInstall( updatedPlugins?.length === 0 );

		return updatedPlugins;
	};

	const handleTypeChange = ( type ) => {
		const updatedTypes = selectedTypes.includes( type )
			? selectedTypes.filter( ( c ) => c !== type )
			: [ ...selectedTypes, type ];

		setSelectedTypes( updatedTypes );

		setDisableButtonType( updatedTypes?.length === 0 );

		return updatedTypes;
	};

	const handlePopUpForm = async ( e ) => {
		e.preventDefault();

		for ( const plugin of selectedPlugins ) {
			// Install current plugin
			await installPlugin( plugin );
		}

		if ( elementorEditorEnabled ) {
			importElementorData( template_id );
		}
	};

	const installPlugin = async ( plugin ) => {
		setLoading( true );
		setDisableButtonInstall( true );
		setInstallingPlugins( ( prevInstalling ) => [
			...prevInstalling,
			plugin.slug,
		] );
		try {
			const installResponse = await new Promise( ( resolve, reject ) => {
				postData( installPluginEndPoint, { plugin } ).then( ( res ) => {
					setLoading( false );
					if ( res.success ) {
						setInstalledPlugins( ( prevInstalled ) => [
							...prevInstalled,
							plugin.slug,
						] );
						setSelectedPlugins(
							selectedPlugins.filter(
								( selected ) => selected.slug !== plugin.slug
							)
						);
						resolve( res ); // Resolve the Promise when installation is successful
					} else {
						reject( new Error( 'Installation failed' ) ); // Reject the Promise if installation fails
					}
				} );
			} );
		} catch ( error ) {
			console.error( 'Error installing plugin:', error );
			setLoading( false );
		}
	};

	const handleSelectedType = ( e ) => {
		e.preventDefault();
		setSubmittedTypes( selectedTypes );
	};

	const requestTemplateData = async ( template_id, ajaxOptions ) => {
		var options = {
			unique_id: template_id,
			data: {
				edit_mode: true,
				display: true,
				template_id: template_id,
			},
		};

		if ( ajaxOptions ) {
			jQuery.extend( true, options, ajaxOptions );
		}

		elementorCommon.ajax.addRequest(
			'get_templatiq_template_data',
			options
		);
	};

	const importData = async ( pageTitle, template_id, builder, pageType, directoryTypes ) => {
		setLoading( true );
		console.log('Importing Data', pageTitle, template_id, builder, pageType, directoryTypes)
		postData( importAsPageEndPoint, {
			title: pageTitle,
			template_id: template_id,
			builder,
			pageType,
			directoryTypes
		} ).then( ( res ) => {
			setLoading( false );
			if ( res.post_id ) {
				setImportedData( res );
			}
		} );
	};

	const importElementorData = async ( template_id ) => {
		await requestTemplateData( template_id, {
			success: function ( data ) {
				
				const templateData = data.data;
				console.log( templateData);

				// if (self.atIndex !== -1) {
				//     options.at = self.atIndex;
				// }
				//
				const Model = Backbone.Model.extend({
						defaults: {
							title: '',
							type: ''
						},
				});


				$e.run('document/elements/import', {
				    model: (new Model),
				    data: templateData,
				  //   options: {
						// 		at: -1 // Set the position after which section you want to add the imported section(s)
						// }
				});

				// self.atIndex = -1;
			},
			error: function ( data ) {
				console.log( 'Error: ', data );
			},
			complete: function ( data ) {
				console.log( 'Complete: ', data, window.elementor.$previewContents.find('.elementor-add-section .elementor-add-section-close') );
				closeInsertTemplateModal()
				// self.getModal().hideLoadingView();
				// window.elementor.$previewContents.find('.elementor-add-section .elementor-add-section-close').click();
			},
		} );
	};

	const requiredPluginStatusCheck = () => {
		if(installablePlugins && installablePlugins?.length === 0) {
			setAllPluginsInstalled( true );
			setSelectedPlugins( [] );
		} else {
			const allRequiredPluginsInstalled = installablePlugins && installablePlugins.every(
				( plugin ) => installedPlugins.includes( plugin.slug )
			);

			const missingPlugins = installablePlugins.filter(
				(plugin) => !installedPlugins.includes(plugin.slug)
			);
	
			if ( allRequiredPluginsInstalled ) {
				setAllPluginsInstalled( true );
				setSelectedPlugins( [] );
			} else {
				setInstallablePlugins( missingPlugins );
				setAllPluginsInstalled( false );
				// setErrorMsg( 'Something went wrong, Please Try again.' );
			}
		}
		
	}

	// Check if all requiredPlugins are available in installedPlugins
	useEffect( () => {
		requiredPluginStatusCheck();
	}, [ installedPlugins ] );

	useEffect( () => {
		requiredPluginStatusCheck();
		setInstallablePlugins( freePlugins );

		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains('elementor-editor-active');

		// Set the state variable based on the presence of Elementor Editor
		setElementorEditorEnabled( isElementorEditorActive );

		if ( isElementorEditorActive && installablePlugins?.length === 0 ) {
			importElementorData( template_id );
		}
	}, [] );

	return (
		<>
			<InsertTemplateModalStyle
				className={ `templatiq__modal templatiq__modal--required ${
					loading && allPluginsInstalled ? 'templatiq__loading' : ''
				}` }
			>
				<form
					className="templatiq__modal__form"
					onSubmit={ handlePopUpForm }
				>
					<div className="templatiq__modal__content">
						{ !importedData && ! errorMsg ? (
							<>
								<h2 className="templatiq__modal__title">
									{ !allPluginsInstalled
                                        ? 'Required Plugins'
                                        : directoryType?.length > 1 && !submittedTypes?.length > 0 && !elementorEditorEnabled 
                                        ? 'Available Directory Type'
                                        : elementorEditorEnabled
                                        ? 'Importing...'
                                        : 'Enter Page Title' }
								</h2>
								{ allPluginsInstalled && !directoryType?.length > 1 && !elementorEditorEnabled ? (
									<p className="templatiq__modal__desc">
										To import this item you need to install
										all the Plugin listed below.
									</p>
								) : null }
								<div className="templatiq__modal__plugins">
									{ ! allPluginsInstalled && ! elementorEditorEnabled ? (
										<div className="templatiq__modal__plugins">
											{ installablePlugins &&
												installablePlugins.map(
													( plugin, index ) => {
														let currentInstalling = installingPlugins.includes( plugin.slug );
														let currentInstalled = installedPlugins.includes( plugin.slug );
														let installStatus = '';
														if ( currentInstalled ) {
															installStatus = 'Installed';
														} else if ( currentInstalling ) {
															installStatus = 'Installing...';
														}
														return (
															<div
																key={ index }
																className="templatiq__modal__plugin templatiq__checkbox"
															>
																<input
																	id={
																		'plugin_' + template_id +
																		'_' +
																		index
																	}
																	name={
																		'plugin_' + template_id + '_' + index
																	}
																	type="checkbox"
																	className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
																	onChange={ () =>
																		handlePluginChange(
																			plugin
																		)
																	}
																	checked={selectedPlugins.includes(plugin)}
																	disabled={
																		currentInstalling ||
																		installStatus !== ''
																	}
																/>

																<label
																	htmlFor={
																		'plugin_' + template_id + '_' + index
																	}
																	className="templatiq__modal__plugin__label templatiq__checkbox__label"
																>
																	<a
																		href="#"
																		className="templatiq__modal__plugin__link"
																	>
																		{
																			plugin.name
																		}
																	</a>
																</label>

																<span className="templatiq__modal__plugin__status">
																	{
																		installStatus
																	}
																</span>
															</div>
														);
													}
												) 
											}
											{ proPlugins &&
												proPlugins.map(
													( plugin, index ) => {
														return (
															<div
																key={ index }
																className="templatiq__modal__plugin templatiq__checkbox"
															>
																<input
																	id={
																		'plugin_' + template_id + '_pro_' + index
																	}
																	name={
																		'plugin_' + template_id + '_pro_' + index
																	}
																	type="checkbox"
																	className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
																	disabled={
																		true
																	}
																/>

																<label
																	htmlFor={
																		'plugin_' + template_id + '_pro_' + index
																	}
																	className="templatiq__modal__plugin__label templatiq__checkbox__label"
																>
																	<a
																		href="#"
																		className="templatiq__modal__plugin__link"
																	>
																		{
																			plugin.name
																		}
																	</a>
																</label>

																<span className="templatiq__modal__plugin__status">
																	It's Pro Plugin
																</span>
															</div>
														);
													}
												) 
											}
										</div>
									) : directoryType?.length > 1 && ! submittedTypes?.length > 0 && ! elementorEditorEnabled ? (
										<>
											<p className="templatiq__modal__desc">
												Choose the directories where you'd like to include this page. You can choose multiple directories.
											</p>
											<div className="templatiq__modal__plugins">
												{ directoryType.map(( type, index ) => {
													return (
														<div
															key={ index }
															className="templatiq__modal__plugin templatiq__checkbox"
														>
															<input
																id={
																	'type_' + template_id + '_' + index
																}
																name={
																	'type_' + template_id + '_' + index
																}
																type="checkbox"
																className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
																onChange={ () =>
																	handleTypeChange(
																		type
																	)
																}
															/>

															<label
																htmlFor={
																	'type_' + template_id + '_' + index
																}
																className="templatiq__modal__plugin__label templatiq__checkbox__label"
															>
																<a
																	href="#"
																	className="templatiq__modal__plugin__link"
																>
																	{
																		type.name
																	}
																</a>
															</label>
														</div>
													)}
												)}
											</div>
										</>
									) :
										<div className="templatiq__modal__page">
											{ ! elementorEditorEnabled ? (
												<>
													<input
														type="text"
														className="templatiq__modal__page__title"
														placeholder="Enter Page Title"
														onChange={ ( e ) =>
															handlePageTitle( e )
														}
													/>
													<button
														type="button"
														className="templatiq__modal__page__button templatiq-btn templatiq-btn-primary"
														onClick={() => 
															importData(
															  pageTitle,
															  template_id,
															  builder,
															  directory_page_type,
															  { submittedTypes: submittedTypes.length > 0 ? submittedTypes : directoryType }
															)
														}														  
														disabled={
															pageTitle === ''
														}
													>
														Create a Page
													</button>
												</>
											) : (
												<p className="templatiq__modal__desc">
													Elementor Content Importing...
												</p>
											) }
										</div>
									}
								</div>
								{ allPluginsInstalled && !directoryType?.length > 1 && ! elementorEditorEnabled ? (
									<p className="templatiq__modal__desc">
										<strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.
									</p>
								) : (
									''
								) }
								<div className="templatiq__modal__actions">
									{ ! allPluginsInstalled ? (
										<>
											<button
												type="submit"
												disabled={ disableButtonInstall }
												className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary"
											>
												Install and Proceed to Import
											</button>
											<button
												className="templatiq__modal__action templatiq__modal__action--cancel templatiq-btn"
												onClick={ closeInsertTemplateModal }
											>
												Cancel
											</button>
										</>
									) : ! elementorEditorEnabled && ! submittedTypes?.length && directoryType?.length > 1 ? (
										<button
											disabled={ disableButtonType }
											className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-success"
											onClick={ (e) => ( handleSelectedType(e))}
										>
											Insert Page
										</button>
									) : null}
								</div>
							</>
						) : importedData ? (
							<>
								<h2 className="templatiq__modal__title">
									Imported Successfully
								</h2>
								<p className="templatiq__modal__desc">
									You can edit or preview the template or you
									can push it to Templatiq cloud to share with
									your team.
								</p>
								<div className="templatiq__modal__actions">
									<a
										href={
											importedData.elementor_edit_link
										}
										target="_blank"
										className="templatiq-btn templatiq-btn-primary"
									>
										Edit Template with Elementor
									</a>
									<a
										href={ importedData.visit }
										target="_blank"
										className="templatiq-btn templatiq-btn-primary"
									>
										View Template
									</a>
								</div>
							</>
						) : (
							<>
								<h2 className="templatiq__modal__title text-center">
									Error
								</h2>
								<p className="templatiq__modal__desc text-danger text-center">
									{ errorMsg }
								</p>
							</>
						) }
					</div> 
				</form>

				<button
					className="templatiq__modal__cancel__button"
					onClick={ closeInsertTemplateModal }
				>
					<ReactSVG src={ closeIcon } width={ 20 } height={ 20 } />
				</button>
			</InsertTemplateModalStyle>
		</>
	);
};

export default InsertTemplateModal;
