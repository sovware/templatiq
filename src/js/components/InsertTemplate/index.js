import { useState, useEffect, useRef } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import Popup from '@components/Popup';
import downloadIcon from "@icon/download-alt.svg";

const InsertTemplate = ({item, templateRef, className, innerText}) => {
    let { required_plugins } = item;

    const [isModalOpen, setModalOpen] = useState(false);
    const [installablePlugins, setInstallablePlugins] = useState([]);

    let addModal = async (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        
        // Add the class to the root div using templateRef
        if (templateRef && templateRef.current) {
            templateRef.current.classList.add('modal-open');
        }
    
        try {
            await handlePlugins(required_plugins);
            setModalOpen(true);
        } catch (error) {
            // Handle error if needed
            console.error('Error fetching installable plugins:', error);
        }
    }

    useEffect(() => {
        setModalOpen(false);

    }, [ setModalOpen]);

	const handlePlugins = async (plugins) => {
        const response = await fetch(`${template_market_obj.rest_args.endpoint}/dependency/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: JSON.stringify({
                plugins: plugins
            }),
        });
    
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
    
        const data = await response.json();
        setInstallablePlugins(data);
    }; 


    useEffect(() => {
        handlePlugins(required_plugins);
    }, [required_plugins]);


    return (
        <>
            {isModalOpen && installablePlugins && (
                <Popup item={item} installable_plugins={installablePlugins} onClose={() => setModalOpen(false)} />
            )}

            
            <a 
                href="#" 
                className={ className ? className : 'templatiq__template__single__info__action__link insert-btn'} 
                onClick={(e) => addModal(e)}
            >
                <ReactSVG src={ downloadIcon } width={14} height={14} />
                {innerText ? innerText : 'Insert'}
            </a>
        </>
    )
}

export default InsertTemplate;