import Logo from '@images/logo.svg';
import { useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import DefaultStep from '../../components/default-step/index';
import ErrorScreen from '../../components/error/index';
import ImportLoader from '../../components/import-steps/import-loader';
import PreviousStepLink from '../../components/util/previous-step-link/index';
import ICONS from '../../icons';
import { useStateValue } from '../../store/store';
import {
	checkRequiredPlugins,
	divideIntoChunks,
	setSiteLogo
} from './import-utils';
import sseImport from './sse-import';
const { reportError } = starterTemplates;
let sendReportFlag = reportError;
const successMessageDelay = 8000; // 8 seconds delay for fully assets load.

import './style.scss';

import ImportLoaderImage from '@images/onboarding/import-loader.gif';

const ImportSite = () => {
	const storedState = useStateValue();
	const [
		{
			importStart,
			importEnd,
			importPercent,
			templateResponse,
			reset,
			importError,
			siteLogo,
			currentIndex,
			importPersonaData,
			importPersonaDataDone,
			widgetImportFlag,
			contentImportFlag,
			requiredPluginsDone,
			requiredPlugins,
			notInstalledList,
			notActivatedList,
			currentActivatingPluginSlug,
			tryAgainCount,
			xmlImportDone,
			pluginInstallationAttempts,
		},
		dispatch,
	] = storedState;
	
	const prevStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex - 1
		} );
	};

	let percentage = importPercent;


	const importPersonaWise = async () => {
		const content = new FormData();
		content.append( 'action', 'templatiq_sites_import_content_persona_wise' );
		content.append( 'import_data', JSON.stringify( importPersonaData ) );
		content.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const data = await fetch( ajaxurl, {
			method: 'post',
			body: content,
		} );

		const response = await data.json();

		if( response.data?.ajax_action) { 
			const nextAjax = new FormData();
			nextAjax.append( 'action', response.data.ajax_action );
			nextAjax.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );
	
			const nextAjaxData = await fetch( ajaxurl, {
				method: 'post',
				body: nextAjax,
			} );
		}

		dispatch( {
			type: 'set',
			importPersonaDataDone: true,
		} );
	};

	const setStartFlag = () => {
		const content = new FormData();
		content.append( 'action', 'templatiq-sites-set-start-flag' );
		content.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		fetch( ajaxurl, {
			method: 'post',
			body: content,
		} );
	};

	/**
	 *
	 * @param {string} primary   Primary text for the error.
	 * @param {string} secondary Secondary text for the error.
	 * @param {string} text      Text received from the AJAX call.
	 * @param {string} code      Error code received from the AJAX call.
	 * @param {string} solution  Solution provided for the current error.
	 */
	const report = (
		primary = '',
		secondary = '',
		text = '',
		code = '',
		solution = '',
		stack = ''
	) => {
		dispatch( {
			type: 'set',
			importError: true,
			importErrorMessages: {
				primaryText: primary,
				secondaryText: secondary,
				errorCode: code,
				errorText: text,
				solutionText: solution,
				tryAgain: true,
			},
		} );

		localStorage.removeItem( 'st-import-start' );
		localStorage.removeItem( 'st-import-end' );

		sendErrorReport(
			primary,
			secondary,
			text,
			code,
			solution,
			stack,
			tryAgainCount
		);
	};

	const sendErrorReport = (
		primary = '',
		secondary = '',
		text = '',
		code = '',
		solution = '',
		stack = ''
	) => {
		if ( ! sendReportFlag ) {
			return;
		}
		const reportErr = new FormData();
		reportErr.append( 'action', 'report_error' );
		reportErr.append(
			'error',
			JSON.stringify( {
				primaryText: primary,
				secondaryText: secondary,
				errorCode: code,
				errorText: text,
				solutionText: solution,
				tryAgain: true,
				stack,
				tryAgainCount,
			} )
		);
		reportErr.append( 'id', templateResponse.id );
		reportErr.append( 'plugins', JSON.stringify( requiredPlugins ) );
		fetch( ajaxurl, {
			method: 'post',
			body: reportErr,
		} );
	};

	/**
	 * Start Import Part 1.
	 */
	const importPart1 = async () => {
		let resetStatus = false;
		let directoryTypes = false;

		resetStatus = await resetOldSite();

		if ( resetStatus ) {
			directoryTypes = await importDirectoryTypes();
		}

		if ( directoryTypes ) {
			await importSiteContent();
		}
	};

	/**
	 * Start Import Part 2.
	 */
	const importPart2 = async () => {
		let optionsStatus = false;
		let widgetStatus = false;
		let customizationsStatus = false;
		let finalStepStatus = false;

		optionsStatus = await importSiteOptions();

		if ( optionsStatus ) {
			widgetStatus = await importWidgets();
		}

		if ( widgetStatus ) {
			customizationsStatus = await customizeWebsite();
			percentage += 5;
			dispatch( {
				type: 'set',
				importPercent: percentage,
			} );
		}

		if ( customizationsStatus ) {
			finalStepStatus = await importDone();
			percentage += 5;
			dispatch( {
				type: 'set',
				importPercent: percentage,
			} );
		}
	};

	/**
	 * Install Required plugins.
	 */
	const installRequiredPlugins = () => {
		// Filter the plugins that are not pro (is_pro: false)
		const installablePlugins = notInstalledList.filter(plugin => !plugin.is_pro || plugin.pro_unlocked);

		// Install Bulk.
		if ( installablePlugins.length <= 0 ) {
			return;
		}

		percentage += 2;
		dispatch( {
			type: 'set',
			importStatus: __( 'Installing Required Plugins.', 'templatiq-sites' ),
			importPercent: percentage,
		} );

		installablePlugins.forEach((plugin) => {
		
			// Check if the plugin is self-hosted by looking for a direct URL
			if (plugin.action && plugin.action.includes('directorist.com')) {
				console.log( plugin.slug + ' - installing from self hosted' );
				// For self-hosted plugins, use AJAX to call the custom PHP handler
				jQuery.ajax({
					url: ajaxurl, // Ensure the ajax_url is available in your script localization
					method: 'POST',
					data: {
						action: 'templatiq_install_self_hosted_plugin',
						plugin: plugin, // Use plugin.action for the URL
						_ajax_nonce: templatiqSitesVars._ajax_nonce
					},
					success(response) {
						if (response.success) {
							dispatch({
								type: 'set',
								importStatus: sprintf(
									// translators: Plugin Name.
									__(
										'%1$s plugin installed successfully.',
										'templatiq-sites'
									),
									plugin.name
								),
							});
		
							console.log( plugin.slug + ' - installed' );

							const inactiveList = notActivatedList;
							inactiveList.push(plugin);
		
							dispatch({
								type: 'set',
								notActivatedList: inactiveList,
							});
		
							const notInstalledPluginList = installablePlugins;
							notInstalledPluginList.forEach((singlePlugin, index) => {
								if (singlePlugin.slug === plugin.slug) {
									notInstalledPluginList.splice(index, 1);
								}
							});
							dispatch({
								type: 'set',
								notInstalledList: notInstalledPluginList,
							});
						} else {
							console.log( plugin.slug + ' - not installed' + response );

							console.error(response.data.errorMessage);
						}
					},
					error(err) {
						console.error('An error occurred:', err);
					}
				});
			} else {
				console.log( plugin.slug + ' - installing from wp.org' );

				// For WordPress.org hosted plugins, use wp.updates API
				wp.updates.queue.push({
					action: 'install-plugin', // Required action.
					data: {
						slug: plugin.slug,
						init: plugin.init,
						name: plugin.name,
						clear_destination: true,
						ajax_nonce: templatiqSitesVars._ajax_nonce,
						success() {

							console.log( plugin.slug + ' - installed' );

							dispatch({
								type: 'set',
								importStatus: sprintf(
									// translators: Plugin Name.
									__(
										'%1$s plugin installed successfully.',
										'templatiq-sites'
									),
									plugin.name
								),
							});
		
							const inactiveList = notActivatedList;
							inactiveList.push(plugin);
		
							dispatch({
								type: 'set',
								notActivatedList: inactiveList,
							});
		
							const notInstalledPluginList = installablePlugins;
							notInstalledPluginList.forEach((singlePlugin, index) => {
								if (singlePlugin.slug === plugin.slug) {
									notInstalledPluginList.splice(index, 1);
								}
							});
							dispatch({
								type: 'set',
								notInstalledList: notInstalledPluginList,
							});
						},
						error(err) {
							console.error('An error occurred:', err);
						}
					}
				});
		
				// Required to set queue.
				wp.updates.queueChecker();
			}
		});		
	};

	/**
	 * Activate Plugin
	 */
	const activatePlugin = ( plugin ) => {
		percentage += 2;
		dispatch( {
			type: 'set',
			importStatus: sprintf(
				// translators: Plugin Name.
				__( 'Activating %1$s plugin.', 'templatiq-sites' ),
				plugin.name
			),
			importPercent: percentage,
		} );
		console.log( plugin.slug + ' - activating' );

		const activatePluginOptions = new FormData();
		activatePluginOptions.append( 'action', 'templatiq-required-plugin-activate' );
		activatePluginOptions.append( 'init', plugin.init );
		activatePluginOptions.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		fetch( ajaxurl, {
			method: 'post',
			body: activatePluginOptions,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				let cloneResponse = [];
				let errorReported = false;
				try {
					const response = JSON.parse( text );
					cloneResponse = response;
					if ( response.success ) {
						const notActivatedPluginList = notActivatedList;
						notActivatedPluginList.forEach(
							( singlePlugin, index ) => {
								if ( singlePlugin.slug === plugin.slug ) {
									notActivatedPluginList.splice( index, 1 );
								}
							}
						);
						dispatch( {
							type: 'set',
							notActivatedList: notActivatedPluginList,
						} );
						percentage += 2;
						dispatch( {
							type: 'set',
							importStatus: sprintf(
								// translators: Plugin Name.
								__( '%1$s activated.', 'templatiq-sites' ),
								plugin.name
							),
							importPercent: percentage,
							currentActivatingPluginSlug: '',
						} );

						console.log( plugin.slug + ' - plugin activated' );

					}

				} catch ( error ) {
				
					console.log( plugin.name + ' : 1 pluginInstallationAttempts plugin.name: ',  error );

					report(
						sprintf(
							// translators: Plugin name.
							__(
								`JSON_Error: Could not activate the required plugin - %1$s.`,
								'templatiq-sites'
							),
							plugin.name
						),
						'',
						error,
						'',
						sprintf(
							// translators: Support article URL.
							__(
								'<a href="%1$s">Read article</a> to resolve the issue and continue importing template.',
								'templatiq-sites'
							),
							'https://templatiq.com/docs/enable-debugging-in-wordpress/#how-to-use-debugging'
						),
						text
					);

					errorReported = true;
				}

				if ( ! cloneResponse.success && errorReported === false ) {
					throw cloneResponse;
				}
			} )
			.catch( ( error ) => {

				console.log( plugin.name  + ' : 2 pluginInstallationAttempts plugin.name: ',  pluginInstallationAttempts );
				
				dispatch( {
					type: 'set',
					pluginInstallationAttempts: pluginInstallationAttempts + 1,
				} );

				report(
					sprintf(
						// translators: Plugin name.
						__(
							`Could not activate the required plugin - %1$s.`,
							'templatiq-sites'
						),
						plugin.name
					),
					'',
					error?.data?.message,
					'',
					sprintf(
						// translators: Support article URL.
						__(
							'<a href="%1$s">Read article</a> to resolve the issue and continue importing template.',
							'templatiq-sites'
						),
						'https://wptemplatiq.com/docs/enable-debugging-in-wordpress/#how-to-use-debugging'
					),
					error
				);
			} );
	};

	/**
	 * 1. Reset.
	 * The following steps are covered here.
	 * 		1. Settings backup file store.
	 * 		2. Reset Customizer
	 * 		3. Reset Site Options
	 * 		4. Reset Widgets
	 * 		5. Reset Forms and Terms
	 * 		6. Reset all posts
	 */
	const resetOldSite = async () => {
		if ( ! reset ) {
			return true;
		}
		percentage += 2;
		dispatch( {
			type: 'set',
			importStatus: __( 'Resetting site.', 'templatiq-sites' ),
			importPercent: percentage,
		} );

		let backupFileStatus = false;
		let resetCustomizerStatus = false;
		let resetOptionsStatus = false;
		let resetTermsStatus = false;
		let resetPostsStatus = false;

		/**
		 * Settings backup file store.
		 */
		backupFileStatus = await performSettingsBackup();
		console.log('Settings backup file store' );
		/**
		 * Reset Customizer.
		 */
		if ( backupFileStatus ) {
			resetCustomizerStatus = await performResetCustomizer();
			console.log('Reset Customizer.' );
		}

		/**
		 * Reset Site Options.
		 */
		if ( resetCustomizerStatus ) {
			resetOptionsStatus = await performResetSiteOptions();
			console.log('Reset Site Options.' );
		}

		/**
		 * Reset Terms, Forms.
		 */
		if ( resetOptionsStatus ) {
			resetTermsStatus = await performResetTermsAndForms();
			console.log('Reset Terms, Forms.' );
		}

		/**
		 * Reset Posts.
		 */
		if ( resetTermsStatus ) {
			resetPostsStatus = await performResetPosts();
			console.log('Reset Posts.' );
		}

		if (
			! (
				resetCustomizerStatus &&
				resetOptionsStatus &&
				resetTermsStatus &&
				resetPostsStatus
			)
		) {
			return false;
		}

		percentage += 10;
		dispatch( {
			type: 'set',
			importPercent: percentage >= 50 ? 50 : percentage,
			importStatus: __( 'Reset for old website is done.', 'templatiq-sites' ),
		} );

		console.log('Reset for old website is done.')
		return true;
	};

	/**
	 * Reset a chunk of posts.
	 */
	const performPostsReset = async ( chunk ) => {
		const data = new FormData();
		data.append( 'action', 'templatiq-sites-get-deleted-post-ids' );
		data.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		dispatch( {
			type: 'set',
			importStatus: __( `Resetting posts.`, 'templatiq-sites' ),
		} );

		const formOption = new FormData();
		formOption.append( 'action', 'templatiq-sites-reset-posts' );
		formOption.append( 'ids', JSON.stringify( chunk ) );
		formOption.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		await fetch( ajaxurl, {
			method: 'post',
			body: formOption,
		} )
			.then( ( resp ) => resp.text() )
			.then( ( text ) => {
				let cloneData = [];
				let errorReported = false;
				
				try {
					const result = JSON.parse( text );
					cloneData = result;
					if ( result.success ) {
						percentage += 2;
						dispatch( {
							type: 'set',
							importPercent: percentage >= 50 ? 50 : percentage,
						} );
					} else {
						throw result;
					}
				} catch ( error ) {
					report(
						__( 'Resetting posts failed.', 'templatiq-sites' ),
						'',
						error,
						'',
						'',
						text
					);

					errorReported = true;
					return false;
				}

				if ( ! cloneData.success && errorReported === false ) {
					throw cloneData.data;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Resetting posts failed.', 'templatiq-sites' ),
					'',
					error?.message,
					'',
					'',
					error
				);
				return false;
			} );
		return true;
	};

	/**
	 * 1.1 Perform Settings backup file stored.
	 */
	const performSettingsBackup = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Taking settings backup.', 'templatiq-sites' ),
		} );

		const customizerContent = new FormData();
		customizerContent.append( 'action', 'templatiq-sites-backup-settings' );
		customizerContent.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: customizerContent,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				const response = JSON.parse( text );
				if ( response.success ) {
					percentage += 2;
					dispatch( {
						type: 'set',
						importPercent: percentage,
					} );
					return true;
				}
				throw response.data;
			} )
			.catch( ( error ) => {
				report(
					__( 'Taking settings backup failed.', 'templatiq-sites' ),
					'',
					error?.message,
					'',
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 1.2 Perform Reset for Customizer.
	 */
	const performResetCustomizer = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Resetting customizer.', 'templatiq-sites' ),
		} );

		const customizerContent = new FormData();
		customizerContent.append(
			'action',
			'templatiq-sites-reset-customizer-data'
		);
		customizerContent.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: customizerContent,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const response = JSON.parse( text );
					if ( response.success ) {
						percentage += 2;
						dispatch( {
							type: 'set',
							importPercent: percentage,
						} );
						return true;
					}
					throw response.data;
				} catch ( error ) {
					report(
						__( 'Resetting customizer failed.', 'templatiq-sites' ),
						'',
						error?.message,
						'',
						'',
						text
					);

					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Resetting customizer failed.', 'templatiq-sites' ),
					'',
					error?.message,
					'',
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 1.3 Perform reset Site options
	 */
	const performResetSiteOptions = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Resetting site options.', 'templatiq-sites' ),
		} );

		const siteOptions = new FormData();
		siteOptions.append( 'action', 'templatiq-sites-reset-site-options' );
		siteOptions.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: siteOptions,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					if ( data.success ) {
						percentage += 2;
						dispatch( {
							type: 'set',
							importPercent: percentage,
						} );
						return true;
					}
					throw data.data;
				} catch ( error ) {
					report(
						__( 'Resetting site options Failed.', 'templatiq-sites' ),
						'',
						error?.message,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Resetting site options Failed.', 'templatiq-sites' ),
					'',
					error?.message,
					'',
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 1.4 Reset Terms and Forms.
	 */
	const performResetTermsAndForms = async () => {
		const formOption = new FormData();
		formOption.append( 'action', 'templatiq-sites-reset-terms-and-forms' );
		formOption.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		dispatch( {
			type: 'set',
			importStatus: __( 'Resetting terms and forms.', 'templatiq-sites' ),
		} );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: formOption,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const response = JSON.parse( text );
					if ( response.success ) {
						percentage += 2;
						dispatch( {
							type: 'set',
							importPercent: percentage,
						} );
						return true;
					}
					throw response.data;
				} catch ( error ) {
					report(
						__(
							'Resetting terms and forms failed.',
							'templatiq-sites'
						),
						'',
						error,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Resetting terms and forms failed.', 'templatiq-sites' ),
					'',
					error?.message,
					'',
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 1.5 Reset Posts.
	 */
	const performResetPosts = async () => {
		const data = new FormData();
		data.append( 'action', 'templatiq-sites-get-deleted-post-ids' );
		data.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		dispatch( {
			type: 'set',
			importStatus: __( 'Gathering posts for deletions.', 'templatiq-sites' ),
		} );

		let err = '';

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: data,
		} )
			.then( ( response ) => response.json() )
			.then( async ( response ) => {
				if ( response.success ) {
					const chunkArray = divideIntoChunks( 10, response.data );

					console.log('performResetPosts chunkArray : ', chunkArray );

					if ( chunkArray.length > 0 ) {
						for (
							let index = 0;
							index < chunkArray.length;
							index++
						) {
							await performPostsReset( chunkArray[ index ] );
						}
					}
					return true;
				}
				err = response;
				return false;
			} );

		if ( status ) {
			dispatch( {
				type: 'set',
				importStatus: __( 'Resetting posts done.', 'templatiq-sites' ),
			} );
		} else {
			report( __( 'Resetting posts failed.', 'templatiq-sites' ), '', err );
		}
		return status;
	};

	/**
	 * 2. Import Directory Types
	 */
	const importDirectoryTypes = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Importing Directory Types.', 'templatiq-sites' ),
		} );

		const types = new FormData();
		types.append( 'action', 'templatiq-sites-import-directory-types' );
		types.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: types,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					if ( data.success ) {
						percentage += 2;
						dispatch( {
							type: 'set',
							importPercent: percentage,
						} );
						return true;
					}
					throw data.data;
				} catch ( error ) {
					report(
						__(
							'Importing Directory Types failed due to parse JSON error.',
							'templatiq-sites'
						),
						'',
						error,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Importing Directory Types Failed.', 'templatiq-sites' ),
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 3. Import Site Content XML.
	 */
	const importSiteContent = async () => {
		if ( ! contentImportFlag ) {
			percentage += 20;
			dispatch( {
				type: 'set',
				importPercent: percentage,
				xmlImportDone: true,
			} );
			return true;
		}

		const wxrUrl =
			encodeURI( templateResponse[ 'templatiq-site-wxr-path' ] ) || '';
		if ( 'null' === wxrUrl || '' === wxrUrl ) {
			const errorTxt = __(
				'The XML URL for the site content is empty.',
				'templatiq-sites'
			);
			report(
				__( 'Importing Site Content Failed', 'templatiq-sites' ),
				'',
				errorTxt,
				'',
				templatiqSitesVars.support_text,
				wxrUrl
			);
			return false;
		}

		dispatch( {
			type: 'set',
			importStatus: __( 'Importing Site Content.', 'templatiq-sites' ),
		} );

		const content = new FormData();
		content.append( 'action', 'templatiq-sites-import-prepare-xml' );
		content.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: content,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					percentage += 20;
					dispatch( {
						type: 'set',
						importPercent: percentage,
					} );
					if ( false === data.success ) {
						const errorMsg = data.data.error || data.data;
						throw errorMsg;
					} else {
						importXML( data.data );
					}
					return true;
				} catch ( error ) {
					report(
						__(
							'Importing Site Content failed due to parse JSON error.',
							'templatiq-sites'
						),
						'',
						error,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Importing Site Content Failed.', 'templatiq-sites' ),
					'',
					error
				);
				return false;
			} );

		return status;
	};

	/**
	 * Imports XML using EventSource.
	 *
	 * @param {JSON} data JSON object for all the content in XML
	 */
	const importXML = ( data ) => {
		// Import XML though Event Source.
		sseImport.data = data;
		sseImport.render( dispatch, percentage );

		const evtSource = new EventSource( sseImport.data.url );
		evtSource.onmessage = ( message ) => {
			const eventData = JSON.parse( message.data );
			switch ( eventData.action ) {
				case 'updateDelta':
					sseImport.updateDelta( eventData.type, eventData.delta );
					break;

				case 'complete':
					if ( false === eventData.error ) {
						evtSource.close();
						percentage += 10;
						dispatch( {
							type: 'set',
							xmlImportDone: true,
							importPercent: percentage,
						} );
					} else {
						report(
							templatiqSitesVars.xml_import_interrupted_primary,
							'',
							templatiqSitesVars.xml_import_interrupted_error,
							'',
							templatiqSitesVars.xml_import_interrupted_secondary
						);
					}
					break;
			}
		};

		evtSource.onerror = ( error ) => {
			evtSource.close();
			report(
				__(
					'Importing Site Content Failed. - Import Process Interrupted',
					'templatiq-sites'
				),
				'',
				error
			);
		};

		evtSource.addEventListener( 'log', function ( message ) {
			const eventLogData = JSON.parse( message.data );
			let importMessage = eventLogData.message || '';
			if ( importMessage && 'info' === eventLogData.level ) {
				importMessage = importMessage.replace( /"/g, function () {
					return '';
				} );
			}

			dispatch( {
				type: 'set',
				importStatus: sprintf(
					// translators: Response importMessage
					__( 'Importing - %1$s', 'templatiq-sites' ),
					importMessage
				),
			} );
		} );
	};

	/**
	 * 4. Import Site Option table values.
	 */
	const importSiteOptions = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Importing Site Options.', 'templatiq-sites' ),
		} );

		const siteOptions = new FormData();
		siteOptions.append( 'action', 'templatiq-sites-import-options' );
		siteOptions.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: siteOptions,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					if ( data.success ) {
						percentage += 10;
						dispatch( {
							type: 'set',
							importPercent: percentage >= 90 ? 90 : percentage,
						} );
						return true;
					}
					throw data.data;
				} catch ( error ) {
					report(
						__(
							'Importing Site Options failed due to parse JSON error.',
							'templatiq-sites'
						),
						'',
						error,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Importing Site Options Failed.', 'templatiq-sites' ),
					'',
					error
				);
				return false;
			} );

		return status;
	};

	/**
	 * 5. Import Site Widgets.
	 */
	const importWidgets = async () => {
		if ( ! widgetImportFlag ) {
			percentage.current += 3;
			dispatch( {
				importPercent:
					percentage.current >= 83 ? 83 : percentage.current,
			} );
			return true;
		}
		dispatch( {
			importStatus: __( 'Importing Widgets.', 'ai-builder' ),
		} );

		const widgets = new FormData();
		widgets.append( 'action', 'templatiq-sites-import-widgets' );
		widgets.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: widgets,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					if ( data.success ) {
						dispatch( {
							importPercent:
								percentage.current >= 85
									? 85
									: percentage.current,
						} );
						return true;
					}
					throw data.data;
				} catch ( error ) {
					report(
						__(
							'Importing Widgets failed due to parse JSON error.',
							'ai-builder'
						),
						'',
						error,
						'',
						'',
						text
					);
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Importing Widgets Failed.', 'ai-builder' ),
					'',
					error
				);
				return false;
			} );
		return status;
	};

	/**
	 * 6. Update the website as per the customizations selected by the user.
	 * The following steps are covered here.
	 * 		a. Update Logo
	 * 		b. Update Color Palette
	 * 		c. Update Typography
	 */
	const customizeWebsite = async () => {
		await setSiteLogo( siteLogo );
		return true;
	};

	/**
	 * 7. Final setup - Invoking Batch process.
	 */
	const importDone = async () => {
		dispatch( {
			type: 'set',
			importStatus: __( 'Final finishing.', 'templatiq-sites' ),
		} );

		const finalSteps = new FormData();
		finalSteps.append( 'action', 'templatiq-sites-import-end' );
		finalSteps.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

		const status = await fetch( ajaxurl, {
			method: 'post',
			body: finalSteps,
		} )
			.then( ( response ) => response.text() )
			.then( ( text ) => {
				try {
					const data = JSON.parse( text );
					if ( data.success ) {
						percentage += 10;
						localStorage.setItem( 'st-import-end', +new Date() );
						setTimeout( function () {
							dispatch( {
								type: 'set',
								importPercent: 100,
								importEnd: true,
							} );
						}, successMessageDelay );
						return true;
					}
					throw data.data;
				} catch ( error ) {
					report(
						__(
							'Final finishing failed due to parse JSON error.',
							'templatiq-sites'
						),
						'',
						error,
						'',
						'',
						text
					);
					setTimeout( function () {
						dispatch( {
							type: 'set',
							importPercent: 100,
							importEnd: true,
						} );
					}, successMessageDelay );

					localStorage.setItem( 'st-import-end', +new Date() );
					return false;
				}
			} )
			.catch( ( error ) => {
				report(
					__( 'Final finishing failed.', 'templatiq-sites' ),
					'',
					error
				);
				return false;
			} );

		return status;
	};

	const preventRefresh = ( event ) => {
		if ( importPercent < 100 ) {
			event.returnValue = __(
				'Are you sure you want to cancel the site import process?',
				'templatiq-sites'
			);
			return event;
		}
	};
	
	useEffect( () => {
		if (importPercent < 100) {
            // Add beforeunload event listener to prevent leaving during import
            window.addEventListener('beforeunload', preventRefresh);
        } else {
            // Remove the listener and update URL in the address bar
            window.removeEventListener('beforeunload', preventRefresh);
            localStorage.setItem('importComplete', 'true');
            window.history.pushState(null, '', templatiqSitesVars.dashboard_url);
        }

        return () => {
            // Cleanup event listener on component unmount
            window.removeEventListener('beforeunload', preventRefresh);
        };
	}, [ importPercent ] ); // Add importPercent as a dependency.

	// Add a useEffect to remove the event listener when importPercent is 100%.
	useEffect( () => {
		if ( importPercent === 100 ) {
			window.removeEventListener( 'beforeunload', preventRefresh );
		}
	}, [ importPercent ] );

	/**
	 * When try again button is clicked:
	 * There is a possibility that few/all the required plugins list is already installed.
	 * We cre-check the status of the required plugins here.
	 */
	useEffect( () => {
		if ( tryAgainCount > 0 ) {
			checkRequiredPlugins( dispatch );
		}
	}, [ tryAgainCount ] );

	/**
	 * Start the pre import process.
	 * Install Required Plugins.
	 */
	useEffect(() => {
		/**
		 * Do not process when Import is already going on.
		 */
		if (importStart || importEnd) {
			return;
		}

		setStartFlag();
		importPersonaWise();

		if (!importError) {
			localStorage.setItem('st-import-start', +new Date());
			percentage += 5;

			dispatch({
				type: 'set',
				importStart: true,
				importPercent: percentage,
				importStatus: __('Starting Import.', 'templatiq-sites'),
			});

			dispatch({
				type: 'set',
				themeStatus: true,
			});
		};

		sendReportFlag = false;
		installRequiredPlugins();
	}, [templateResponse]);

	/**
	 * Start the process only when:
	 * Required plugins are installed and activated.
	 */
	useEffect( () => {
		if ( requiredPluginsDone && importPersonaDataDone ) {
			sendReportFlag = reportError;
			importPart1();
		}
	}, [ requiredPluginsDone, importPersonaDataDone ] );

	/**
	 * Start Part 2 of the import once the XML is imported successfully.
	 */
	useEffect( () => {
		if ( xmlImportDone ) {
			importPart2();
		}
	}, [ xmlImportDone ] );

	// This checks if all the required plugins are installed and activated.
	useEffect( () => {
		// Skip PRO Plugin for Install
		const installablePlugins = notInstalledList.filter(plugin => !plugin.is_pro || plugin.pro_unlocked);

		if ( notActivatedList.length <= 0 && installablePlugins.length <= 0 ) {
			dispatch( {
				type: 'set',
				requiredPluginsDone: true,
			} );
		}

		console.log('installablePlugins.length : ', installablePlugins.length );

	}, [ notActivatedList.length, notInstalledList.length ] );

	// Whenever a plugin is installed, this code sends an activation request.
	useEffect( () => {
		// Installed all required plugins.
		if ( notActivatedList.length > 0 && ! currentActivatingPluginSlug ) {
			activatePlugin( notActivatedList[ 0 ] );
		}
	}, [ notActivatedList.length ] );

	return (
		<DefaultStep
			content={
				<div className="fullsite-setup-wizard">
					<div className="fullsite-setup-wizard__header">
						<div className="fullsite-setup-wizard__logo">
							{ importPercent === 100 ? (
								<a 
									href={templatiqSitesVars.dashboard_url}
								>
									<img src={ Logo } alt="Logo" />
								</a>
							) : 
								<img src={ Logo } alt="Logo" />
							}
						</div>
						<div className="fullsite-setup-wizard__header__step">
							<ul className="fullsite-setup-wizard__header__step__wrapper">
								<li className="fullsite-setup-wizard__header__step__single completed" data-step="1">
									Choose Template
								</li>
								<li className={`fullsite-setup-wizard__header__step__single ${ importPercent === 100 ? 'completed' : 'active'}`} data-step="2">
									Insert Content
								</li>
								<li className={`fullsite-setup-wizard__header__step__single ${ importPercent === 100 ? 'completed' : ''}`} data-step="3">
									Done
								</li>
							</ul>
						</div>
						<div className="fullsite-setup-wizard__close remove-close">
							<a
								href={templatiqSitesVars. st_page_url} 
								className="fullsite-setup-wizard__close__btn"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.998" viewBox="1237 31 12 11.998"><path d="m1244.409 36.998 4.295-4.286a1.003 1.003 0 0 0-1.418-1.418L1243 35.59l-4.286-4.296a1.003 1.003 0 0 0-1.418 1.418l4.295 4.286-4.295 4.286a.999.999 0 0 0 0 1.419.999.999 0 0 0 1.418 0l4.286-4.296 4.286 4.296a1 1 0 0 0 1.418 0 .999.999 0 0 0 0-1.419l-4.295-4.286Z" fill="#b7b7b7" fillRule="evenodd" data-name="times"></path></svg>
							</a>
						</div>
					</div>
					<div className="middle-content middle-content-import">
						{ importPercent === 100 ? (
							<h1 className="import-done-congrats">
								{ __( 'Congratulations', 'templatiq-sites' ) }
								<span>{ ICONS.tada }</span>
							</h1>
						) : (
							<h1>
								{ __(
									'We are building your website…',
									'templatiq-sites'
								) }
							</h1>
						) }
						{ importError && (
							<div className="ist-import-process-step-wrap">
								<ErrorScreen />
							</div>
						) }
						{ ! importError && (
							<>
								<div className="ist-import-process-step-wrap">
									<ImportLoader />
								</div>
								{ importPercent !== 100 && (
									<div className="ist-insert-content-wrap">
										<img className="ist-insert-content-image" src={ ImportLoaderImage } alt="Import Progress" />

										<span className="import-progress-warning">Please Don't Reload The Page</span>
									</div>
								) }
							</>
						) }
					</div>
				</div>
			}
			actions={
				<>
					<PreviousStepLink before disabled customizeStep={ true }>
						{ __( 'Back', 'templatiq-sites' ) }
					</PreviousStepLink>
				</>
			}
		/>
	);
};

export default ImportSite;