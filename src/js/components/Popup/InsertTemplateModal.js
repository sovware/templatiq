import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from "@icon/close.svg";

const InsertTemplateModal = ({item, installable_plugins, onClose}) => {
    const { template_id, builder, slug } = item;
    
	let [selectedPlugins, setSelectedPlugins] = useState([]);
	let [pageTitle, setPageTitle] = useState('');
	
    const [installingPlugins, setInstallingPlugins] = useState({});
    const [installedPlugins, setInstalledPlugins] = useState({});

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
            setInstallingPlugins((prevStatus) => {
                const updatedStatus = { ...prevStatus };
                updatedStatus[plugin.template_id] = true;
                return updatedStatus;
            });
    
            // Install the current plugin
            await installPlugin(plugin);
        }

        // Set the state to indicate that all plugins are installed
        setAllPluginsInstalled(true);
    };

    const installPlugin = async (plugin) => {
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

        // Update the status for the plugin
        setInstallingPlugins((prevStatus) => {
            const updatedStatus = { ...prevStatus };
            updatedStatus[plugin.template_id] = true;
            return updatedStatus;
        });


        if(data.success) {
            let installed = data.template_id;

            // Update the status for the plugin
            setInstalledPlugins((prevStatus) => {
                const updatedStatus = { ...prevStatus };
                updatedStatus[installed] = true;
                return updatedStatus;
            });
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

    return (
        <> 
            <InsertTemplateModalStyle className="templatiq__modal templatiq__modal--required">
                <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                    <div className="templatiq__modal__content">
                        {!importedData ? 
                            <>
                                <h2 className="templatiq__modal__title">Required Plugins</h2>
                                <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
                                <div className="templatiq__modal__plugins">
                                    {
                                        !allPluginsInstalled ?
                                        installable_plugins && installable_plugins.map((plugin, index) => {
                                            const isInstalling = installingPlugins[plugin.template_id];
                                            const isInstalled = installedPlugins[plugin.template_id];
                                    
                                            let installStatus = '';
                                            if (isInstalled) {
                                                installStatus = 'Installed';
                                            } else if (isInstalling) {
                                                installStatus = 'Installing';
                                            }
                    
                                            return (
                                                <div key={index} className="templatiq__modal__plugin templatiq__checkbox">
                                                    <input 
                                                        id={template_id + '_' + plugin.template_id}
                                                        name={template_id + '_' + plugin.template_id}
                                                        type="checkbox" 
                                                        className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
                                                        onChange={() => handlePluginChange(plugin)}
                                                        disabled = {plugin.is_pro}
                                                    />

                                                    <label 
                                                        htmlFor={template_id + '_' + plugin.template_id}
                                                        className="templatiq__modal__plugin__label templatiq__checkbox__label"
                                                    >
                                                        <a href="#" className="templatiq__modal__plugin__link">{plugin.name}</a>
                                                    </label>
                                                    
                                                    <span className="templatiq__modal__plugin__status">{installStatus}</span>
                                                    
                                                </div>
                                            );
                                        }) : 
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
                                        <button type="submit" className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary">Install and Proceed to Import</button> : ''
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