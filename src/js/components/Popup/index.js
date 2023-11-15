import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { useQuery, useMutation } from '@tanstack/react-query';
import { RequiredPluginStyle } from './style';

import closeIcon from "@icon/close.svg";

const Popup = (template) => {
    const { slug, required_plugins } = template.item;
    
	let [selectedPlugins, setSelectedPlugins] = useState([]);

	const handlePluginChange = (plugin) => {

        const updatedPlugins = selectedPlugins.includes(plugin)
			? selectedPlugins.filter((c) => c !== plugin)
			: [...selectedPlugins, plugin];

    	setSelectedPlugins(updatedPlugins);
	};

    let closeModal = () => {
        let templatiqRoot = document.querySelector(".templatiq");
        let templatiqModalOpen = document.querySelector(".templatiq__template__single.modal-open");

        templatiqRoot && templatiqRoot.classList.remove("templatiq-overlay-enable");
        templatiqModalOpen && templatiqModalOpen.classList.remove("modal-open");
    }

    const handlePopUpForm = (e) => {
		e.preventDefault(); 
		
        console.log('Form values: ', selectedPlugins);
        handlePlugins(selectedPlugins);
	};

    // const { isLoading, error, data } = useQuery(['templates'], () => fetch(
	// 	`${template_market_obj.rest_args.endpoint}/template/library`, 
    //     {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'X-WP-Nonce': template_market_obj.rest_args.nonce,
	// 		}
	// 	}).then(res =>
	// 	res.json()
	// ));

	// if (isLoading) 
    // return (
    //     <div className="templatiq-loader">
    //         <div className="templatiq-loader__spinner">
    //             Loading..
    //         </div>
    //     </div>
    // );

	// if (error) 
    // return (
    //     <div className="templatiq-loader">
    //         <div className="templatiq-loader__spinner">
    //             {error.message}
    //         </div>
    //     </div>
    // );

	// const thisTemplate = data && data.templates.find((template) => template.slug === slug);

    console.log('Required Plugins: ', required_plugins);

    const checkPlugins = async (plugins) => {

        const response = await fetch(`${template_market_obj.rest_args.endpoint}/dependency/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: {
                "plugins": plugins
            },
        });
    
        console.log("Response: ", response);
      
        if (!response.ok) {
            throw new Error('Error Occured');
        }
      
        return response.json();
    };

    const mutation = useMutation(checkPlugins);

	const handlePlugins = async (plugins) => {
		console.log('Plugins: ', plugins)
		try {
			// Call the mutation function with the user's plugins

			const result = await mutation.mutateAsync(plugins);

			console.log('Plugin Result: ', result);

			if (result.body.token) {
				console.log('Plugin FOund');
			} else {
				console.error('Plugin failed', result.message);
			}
		} catch (error) {
		  	console.error('Error', error); // Handle error
		}
	};
      

    return (
        <RequiredPluginStyle className="templatiq__modal templatiq__modal--required">
            <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                <div className="templatiq__modal__content">
                    <h2 className="templatiq__modal__title">Required Plugins</h2>
                    <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
                    <div className="templatiq__modal__plugins">
                        
                        
                        {required_plugins && required_plugins.map((plugin, index) => (
                            <div key={index} className="templatiq__modal__plugin templatiq__checkbox">
                                <input 
                                    id={slug + '_' + plugin.slug}
                                    name={slug + '_' + plugin.slug}
                                    type="checkbox" 
                                    className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
                                    onChange={() => handlePluginChange(slug + '_' + plugin.slug)}
                                />
                                <label 
                                    for={slug + '_' + plugin.slug}
                                    className="templatiq__modal__plugin__label templatiq__checkbox__label"
                                >
                                    <a href="#" className="templatiq__modal__plugin__link">{plugin.name}</a>
                                </label>
                            </div>
                        ))}
                    </div>
                    <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
                </div>
                <div className="templatiq__modal__actions">
                    <button className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary">Install and Proceed to Import</button>
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