import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from "@icon/close.svg";

const InsertTemplateModal = ({item, required_plugins, onClose}) => {
    const { template_id, builder } = item;
    // const installablePlugins = required_plugins.filter(plugin => plugin.is_pro === "false");
    // const proPlugins = required_plugins.filter(plugin => plugin.is_pro === "true");
   
    const installablePlugins = required_plugins.filter(plugin => !plugin.hasOwnProperty("is_pro") || plugin.is_pro === "false");
    const proPlugins = required_plugins.filter(plugin => plugin.hasOwnProperty("is_pro") && plugin.is_pro === "true");


    console.log('required_plugins: ', required_plugins, installablePlugins, proPlugins)

	let [selectedPlugins, setSelectedPlugins] = useState([]);
	let [pageTitle, setPageTitle] = useState('');
	let [loading, setLoading] = useState(false);
	
    const [isInstalling, setIsInstalling] = useState(false);
    const [installingPlugins, setInstallingPlugins] = useState([]);
    const [installedPlugins, setInstalledPlugins] = useState([]);

    const [allPluginsInstalled, setAllPluginsInstalled] = useState(false);
    const [importedData, setImportedData] = useState(false);
    const [elementorEditorEnabled, setElementorEditorEnabled] = useState(false);

    let closeInsertTemplateModal = (e) => {
        e.preventDefault();
        let templatiqRoot = document.querySelector(".templatiq");

        templatiqRoot && templatiqRoot.classList.remove("templatiq-overlay-enable");

        onClose();
    }

    const handlePageTitle = (e) => {
        e.preventDefault();
    	setPageTitle(e.target.value);
	};

	const handlePluginChange = (plugin) => {
        const updatedPlugins = selectedPlugins.includes(plugin)
			? selectedPlugins.filter((c) => c !== plugin)
			: [...selectedPlugins, plugin];

    	setSelectedPlugins(updatedPlugins);
	};

    const handlePopUpForm = async (e) => {
        e.preventDefault();

        console.log('selectedPlugins: ', selectedPlugins)
    
        // Set the installing status for each selected plugin
        for (const plugin of selectedPlugins) {
            // Set installing status for the current plugin
            setInstallingPlugins((prevInstalling) => [...prevInstalling, plugin.slug]);

            // Install the current plugin
            await installPlugin(plugin);
        }

    };

    const installPlugin = async (plugin) => {
        setLoading(true);
		apiFetch( { 
			path: 'templatiq/dependency/install',
			method: 'POST',
			data: {
                plugin: plugin,
            },
		}).then( ( res ) => { 
			setLoading(false)
			console.log( 'APIFetch Install data: ', res );

            if(res.success) {
                setInstalledPlugins((prevInstalled) => [...prevInstalled, plugin.slug]);
                setIsInstalling(false);
            }
		} );
	};

    const importData = async (pageTitle, template_id, builder) => {
        setLoading(true);
		apiFetch( { 
			path: 'templatiq/template/import-as-page',
			method: 'POST',
			data: {
                title: pageTitle,
                template_id: template_id,
                builder: builder,
            },
		}).then( ( res ) => { 
			setLoading(false)
			console.log( 'APIFetch Import data: ', res );

            if(res.post_id) {
                setImportedData(res) 
            }
		} );
	};

    const importElementorData = () => {
        console.log('importElementorData Called')
    }

    console.log('installablePlugins: ', required_plugins, installablePlugins)

    // Check if all required plugins are available in installedPlugins
    useEffect(() => {
        console.log('installedPlugins: ', installablePlugins, installedPlugins)
        
        const allRequiredPluginsInstalled = installablePlugins.every((plugin) =>
            installedPlugins.includes(plugin.slug)
        );

        console.log('allRequiredPluginsInstalled: ', allRequiredPluginsInstalled)

        if (allRequiredPluginsInstalled) {
            console.log('All Plugins Installed')
            setAllPluginsInstalled(true);
            importElementorData();
        }
    }, [installedPlugins, installablePlugins]);

    useEffect(() => {
        // Check if the 'elementor-editor-active' class is present on the body element
        const isElementorEditorActive = document.body.classList.contains('elementor-editor-active');

        // Set the state variable based on the presence of the class
        setElementorEditorEnabled(isElementorEditorActive);
    }, []); // The empty dependency array ensures that the effect runs only once

    return (
        <> 
            <InsertTemplateModalStyle className={`templatiq__modal templatiq__modal--required ${loading ? 'templatiq__loading' : ''}`}>
                <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                    <div className="templatiq__modal__content">
                        {!importedData ? 
                            <>
                                <h2 className="templatiq__modal__title">{!allPluginsInstalled ? 'Required Plugins' : !elementorEditorEnabled ? 'Enter Page Title' : 'Importing...'}</h2>
                                {
                                    allPluginsInstalled && !elementorEditorEnabled ?
                                    <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p> :
                                    ''
                                }
                                <div className="templatiq__modal__plugins">
                                    {
                                        !allPluginsInstalled ?
                                        <>
                                            {
                                                installablePlugins && installablePlugins.map((plugin, index) => {
                                                    const isInstalling = installingPlugins.includes(plugin.slug);
                                                    const isInstalled = installedPlugins.includes(plugin.slug);

                                                    let installStatus = '';
                                                    if (isInstalled) {
                                                        installStatus = 'Installed';
                                                    } else if (isInstalling) {
                                                        installStatus = 'Installing...';
                                                    }
                                                    return (
                                                        <div key={index} className="templatiq__modal__plugin templatiq__checkbox">
                                                            <input 
                                                                id={template_id + '_' + index}
                                                                name={template_id + '_' + index}
                                                                type="checkbox" 
                                                                className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
                                                                onChange={() => handlePluginChange(plugin)}
                                                                disabled = {installStatus !== ''}
                                                            />

                                                            <label 
                                                                htmlFor={template_id + '_' + index}
                                                                className="templatiq__modal__plugin__label templatiq__checkbox__label"
                                                            >
                                                                <a href="#" className="templatiq__modal__plugin__link">{plugin.name}</a>
                                                            </label>
                                                            
                                                            <span className="templatiq__modal__plugin__status">{installStatus}</span>
                                                            
                                                        </div>
                                                    );
                                                }) 
                                                
                                            }
                                            {
                                                proPlugins && proPlugins.map((plugin, index) => {
                                                    return (
                                                        <div key={index} className="templatiq__modal__plugin templatiq__checkbox">
                                                            <input 
                                                                id={template_id + '_' + index}
                                                                name={template_id + '_' + index}
                                                                type="checkbox" 
                                                                className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
                                                                disabled = {true}
                                                            />

                                                            <label 
                                                                htmlFor={template_id + '_' + index}
                                                                className="templatiq__modal__plugin__label templatiq__checkbox__label"
                                                            >
                                                                <a href="#" className="templatiq__modal__plugin__link">{plugin.name}</a>
                                                            </label>
                                                            
                                                            <span className="templatiq__modal__plugin__status">It's Pro Plugin</span>
                                                            
                                                        </div>
                                                    );
                                                }) 
                                                
                                            }
                                        </>: 
                                        <div className="templatiq__modal__page">
                                            {
                                                !elementorEditorEnabled ?  
                                                <>
                                                    <input 
                                                        type="text" 
                                                        className="templatiq__modal__page__title" 
                                                        placeholder="Enter Page Title" 
                                                        onChange={(e) => handlePageTitle(e)}
                                                    />
                                                    <button 
                                                        type="submit"
                                                        className="templatiq__modal__page__button templatiq-btn templatiq-btn-primary"
                                                        onClick={() => importData(pageTitle, template_id, builder)} 
                                                        disabled={pageTitle === ''}
                                                    >
                                                        Create a Page
                                                    </button>
                                                </> : 
                                                <p className="templatiq__modal__desc">Elementor Imported</p>
                                            }
                                            
                                        </div>
                                    }

                                </div>
                                {
                                    allPluginsInstalled && !elementorEditorEnabled ? 
                                    <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p> :
                                    ''
                                }
                                <div className="templatiq__modal__actions">
                                    {
                                        !allPluginsInstalled ? 
                                        <button 
                                            type="submit" 
                                            disabled={isInstalling}
                                            className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary"
                                        >
                                            Install and Proceed to Import
                                        </button> : ''
                                    }
                                    <button className="templatiq__modal__action templatiq__modal__action--cancel templatiq-btn" onClick={closeInsertTemplateModal}>Cancel</button>
                                </div>
                            </> :
                            <>
                                <h2 className="templatiq__modal__title">Imported Successfully</h2>
                                <p className="templatiq__modal__desc">You can edit or preview the template or you can push it to Templatiq cloud to share with your team.</p>
                                <div className="templatiq__modal__actions">
                                    <a href={importedData.elementor_edit_link} target='_blank' className="templatiq-btn templatiq-btn-primary">Edit Template with Elementor</a>
                                    <a href={importedData.visit} target='_blank' className="templatiq-btn templatiq-btn-primary">View Template</a>
                                </div>
                            </> 
                        }
                    </div>

                </form>
                
                <button className="templatiq__modal__cancel__button" onClick={closeInsertTemplateModal}>
                    <ReactSVG src={ closeIcon } width={20} height={20} />
                </button>
            </InsertTemplateModalStyle>
        </>
    )
}

export default InsertTemplateModal;