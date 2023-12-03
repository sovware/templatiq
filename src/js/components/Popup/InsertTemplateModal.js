import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from "@icon/close.svg";

const InsertTemplateModal = ({item, required_plugins, onClose}) => {
    const { template_id, builder } = item;

    const installablePlugins = required_plugins.filter(plugin => plugin.is_pro === "false");
    const proPlugins = required_plugins.filter(plugin => plugin.is_pro === "true");

	let [selectedPlugins, setSelectedPlugins] = useState([]);
	let [pageTitle, setPageTitle] = useState('');
	
    const [isInstalling, setIsInstalling] = useState(false);
    const [installingPlugins, setInstallingPlugins] = useState([]);
    const [installedPlugins, setInstalledPlugins] = useState([]);

    const [allPluginsInstalled, setAllPluginsInstalled] = useState(false);
    const [importedData, setImportedData] = useState(false);

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
    
        // Set the installing status for each selected plugin
        for (const plugin of selectedPlugins) {
            // Set installing status for the current plugin
            setInstallingPlugins((prevInstalling) => [...prevInstalling, plugin.slug]);

            // Install the current plugin
            await installPlugin(plugin);
        }

    };

    const installPlugin = async (plugin) => {
        setIsInstalling(true);
        const response = await fetch(`${template_market_obj.rest_args.endpoint}/dependency/install`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: JSON.stringify({
                plugin: plugin
            }),
        });
    
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
    
        const data = await response.json();

        if(data.success) {
            // Update the status for the plugin
            setInstalledPlugins((prevInstalled) => [...prevInstalled, plugin.slug]);
            setIsInstalling(false);
        }
    }; 

    const importData = async (pageTitle, template_id, builder) => {
        const response = await fetch(`${template_market_obj.rest_args.endpoint}/template/import-as-page`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: JSON.stringify({
                title: pageTitle,
                template_id: template_id,
                builder: builder,
            }),
        });
    
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
    
        const data = await response.json();

        if(data.post_id) {
            setImportedData(data) 
        }
    
    }; 

    // Check if all required plugins are available in installedPlugins
    useEffect(() => {
        const allRequiredPluginsInstalled = installablePlugins.every((plugin) =>
            installedPlugins.includes(plugin.slug)
        );

        if (allRequiredPluginsInstalled) {
            setAllPluginsInstalled(true);
        }
    }, [installedPlugins, installablePlugins]);

    return (
        <> 
            <InsertTemplateModalStyle className="templatiq__modal templatiq__modal--required">
                <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                    <div className="templatiq__modal__content">
                        {!importedData ? 
                            <>
                                <h2 className="templatiq__modal__title">{!allPluginsInstalled ? 'Required Plugins' : 'Enter Page Title'}</h2>
                                <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
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
                                            <input 
                                                type="text" 
                                                className="templatiq__modal__page__title" 
                                                placeholder="Enter Page Title" 
                                                onChange={(e) => handlePageTitle(e)}
                                            />
                                            <button 
                                                onClick={() => importData(pageTitle, template_id, builder)} 
                                                className="templatiq__modal__page__button templatiq-btn templatiq-btn-primary"
                                            >
                                                Create a Page
                                            </button>
                                        </div>
                                    }

                                </div>
                                <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
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