import postData from '@helper/postData';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';
import { __ } from '@wordpress/i18n';

import closeIcon from '@icon/close.svg';

export default InsertTemplateModal = ( { item, onClose, required_plugins } ) => {
	const { template_id, builder, directory_page_type } = item;

	const directoryType = templatiq_obj?.directory_types;

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
				const Model = Backbone.Model.extend({
						defaults: {
							title: '',
							type: ''
						},
				});

				$e.run('document/elements/import', {
				    model: (new Model),
				    data: templateData,
				});
			},
			error: function ( data ) {
				console.log( 'Error: ', data );
			},
			complete: function ( data ) {
				closeInsertTemplateModal()
				setTimeout( () => {
					// document.getElementById('tmTemplateLibrary__modal').style.display = 'none';
				}, 300);
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
										? __( 'Required Plugins' , 'helpgent' )
										: directoryType?.length > 1 && !submittedTypes?.length > 0 && !elementorEditorEnabled 
										? __( 'Available Directory Type', 'helpgent' )
										: elementorEditorEnabled
										? __( 'Importing...', 'helpgent' )
										: __( 'Enter Page Title' , 'helpgent' ) }
								</h2>
								{ allPluginsInstalled && !directoryType?.length > 1 && !elementorEditorEnabled ? (
									<p className="templatiq__modal__desc">
										{__( 'To import this item you need to install all the Plugin listed below.', 'helpgent' )}
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
															installStatus = __( 'Installed', 'helpgent' );
														} else if ( currentInstalling ) {
															installStatus = __( 'Installing...', 'helpgent' );
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
																	{__( "It's Pro Plugin", 'helpgent' )}
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
												{__( "Choose the directories where you'd like to include this page. You can choose multiple directories.", 'helpgent' )}
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
														placeholder={__( "Enter Page Title", 'helpgent' )}
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
														{__( "Create a Page", 'helpgent' )}
													</button>
												</>
											) : (
												<p className="templatiq__modal__desc">
													{__( "Elementor Content Importing...", 'helpgent' )}
												</p>
											) }
										</div>
									}
								</div>
								{ allPluginsInstalled && !directoryType?.length > 1 && ! elementorEditorEnabled ? (
									<p className="templatiq__modal__desc">
										<strong>{__( "Note:", 'helpgent' )}</strong>{__( " Make sure you have manually installed & activated the Pro Plugin listed above.", 'helpgent' )}
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
												{__( "Install and Proceed to Import", 'helpgent' )}
											</button>
											<button
												className="templatiq__modal__action templatiq__modal__action--cancel templatiq-btn"
												onClick={ closeInsertTemplateModal }
											>
												{__( "Cancel", 'helpgent' )}
											</button>
										</>
									) : ! submittedTypes?.length && directoryType?.length > 1 && !elementorEditorEnabled ? (
										<button
											disabled={ disableButtonType }
											className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-success"
											onClick={ (e) => ( handleSelectedType(e))}
										>
											{__( "Insert Page", 'helpgent' )}
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
									{__( "You can edit or preview the template or you can push it to Templatiq cloud to share with your team.", 'helpgent' )}
								</p>
								<div className="templatiq__modal__actions">
									<a
										href={
											importedData.elementor_edit_link
										}
										target="_blank"
										className="templatiq-btn templatiq-btn-primary"
									>
										{__( "Edit Template with Elementor", 'helpgent' )}
									</a>
									<a
										href={ importedData.visit }
										target="_blank"
										className="templatiq-btn templatiq-btn-primary"
									>
										{__( "View Template", 'helpgent' )}
									</a>
								</div>
							</>
						) : (
							<>
								<h2 className="templatiq__modal__title text-center">
									{__( "Error", 'helpgent' )}
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