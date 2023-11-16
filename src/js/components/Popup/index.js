import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { RequiredPluginStyle } from './style';

import closeIcon from "@icon/close.svg";

const Popup = (props) => {
    const { slug, required_plugins } = props.item;
    const installable_plugins = props.installable_plugins;
    
	let [selectedPlugins, setSelectedPlugins] = useState([]);
	let [installingPlugins, setInstallingPlugins] = useState([]);
	let [installedPlugins, setInstalledPlugins] = useState([]);

	const handlePluginChange = (plugin) => {

        const updatedPlugins = selectedPlugins.includes(plugin)
			? selectedPlugins.filter((c) => c !== plugin)
			: [...selectedPlugins, plugin];

    	setSelectedPlugins(updatedPlugins);
    	// setInstallingPlugins(updatedPlugins);
	};

    let closeModal = () => {
        let templatiqRoot = document.querySelector(".templatiq");
        let templatiqModalOpen = document.querySelector(".templatiq__template__single.modal-open");

        templatiqRoot && templatiqRoot.classList.remove("templatiq-overlay-enable");
        templatiqModalOpen && templatiqModalOpen.classList.remove("modal-open");
    }

    const handlePopUpForm = (e) => {
		e.preventDefault(); 

        selectedPlugins.map((plugin) => {
            console.log('Proceed to Install: ', plugin.slug)
            console.log('installingPlugins: ', installingPlugins)
            installPlugin(plugin);
        });
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

        console.log('Form Response: ', data); 

        // setInstallingPlugins(...installingPlugins, plugin.slug);
        setInstallingPlugins([...installingPlugins, plugin.slug]);

        if(data.success) {
            let installed = data.slug;
            setInstalledPlugins([...installedPlugins, installed]);
            console.log('Installed: ', installed);
        }

    
    }; 

    // useEffect(() => {
    //     console.log('Use Installing Plugins: ', installingPlugins)
    // }, [installingPlugins]);


    return (
        <RequiredPluginStyle className="templatiq__modal templatiq__modal--required">
            <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                <div className="templatiq__modal__content">
                    <h2 className="templatiq__modal__title">Required Plugins</h2>
                    <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
                    <div className="templatiq__modal__plugins">

                    {installable_plugins && installable_plugins.map((plugin, index) => {
                        console.log('installingPlugins ', installingPlugins, 'installedPlugins ', installedPlugins)
                        
                        const isInstalling = installingPlugins.includes(plugin.slug);
                        // console.log('isInstalling: ', isInstalling, installedPlugins);
                        // isInstalling && console.log( 'IS Installing- ', plugin.slug)

                        const isInstalled = installedPlugins.includes(plugin.slug);
                        // isInstalled && console.log( 'IS Installed- ', plugin.slug)

                        let install_status = isInstalled ? 'installed' : isInstalling ? 'installing' : '';
                        console.log('install_status: ', install_status)
                        return (
                            <div key={index} className={`templatiq__modal__plugin templatiq__checkbox`}>
                                <input 
                                    id={slug + '_' + plugin.slug}
                                    name={slug + '_' + plugin.slug}
                                    type="checkbox" 
                                    className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
                                    onChange={() => handlePluginChange(plugin)}
                                    // disabled = {plugin.is_pro}
                                />

                                <label 
                                    htmlFor={slug + '_' + plugin.slug}
                                    className="templatiq__modal__plugin__label templatiq__checkbox__label"
                                >
                                    <a href="#" className="templatiq__modal__plugin__link">{plugin.name}</a>
                                </label>
                                
                                {
                                    install_status ? 
                                    <span className="templatiq__modal__plugin__pro">{install_status}</span> : ''
                                }
                               
                            </div>
                        );
                    })}

                    </div>
                    <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
                </div>
                <div className="templatiq__modal__actions">
                    <button type="submit" className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary">Install and Proceed to Import</button>
                    <button className="templatiq__modal__action templatiq__modal__action--cancel templatiq-btn" onClick={closeModal}>Cancel</button>
                </div>
            </form>
            
            <button className="templatiq__modal__cancel__button" onClick={closeModal}>
                <ReactSVG src={ closeIcon } width={20} height={20} />
            </button>
        </RequiredPluginStyle>
    )
}

export default Popup;