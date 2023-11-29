import { useState, useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import AuthModal from '@components/Popup/AuthModal';
import store from '../../store';

import InsertTemplateModal from '@components/Popup/InsertTemplateModal';
import downloadIcon from "@icon/download-alt.svg";

const InsertTemplate = ({item, templateRef, className, innerText}) => {
    let { required_plugins } = item;
    
	const { isLoggedIn } = select( store ).getUserInfo();
    const [insertModalOpen, setInsertModalOpen] = useState(false);
	const [authModalOpen, setAuthModalOpen] = useState(false);
    const [requiredPlugins, setRequiredPlugins] = useState([]);

    const addInsertModal = async (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        
        // Add the class to the root div using templateRef
        if (templateRef && templateRef.current) {
            templateRef.current.classList.add('insert-modal-open');
        }
    
        try {
            await handlePlugins(required_plugins);
            setInsertModalOpen(true);
        } catch (error) {
            // Handle error if needed
            console.error('Error fetching installable plugins:', error);
        }
    }

    const addAuthModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        setAuthModalOpen(true);
    }

    const handleInsertModalClose = () => {
        // Callback function to update the state when the modal is closed
        setInsertModalOpen(false);
    };

    const handleAuthModalClose = () => {
        // Callback function to update the state when the modal is closed
        setAuthModalOpen(false);
    };


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

        setRequiredPlugins(data);
    }; 

    useEffect(() => {
        handlePlugins(required_plugins);
    }, [required_plugins]);

    return (
        <>
            {insertModalOpen && requiredPlugins && (
                <InsertTemplateModal item={item} required_plugins={requiredPlugins} onClose={handleInsertModalClose} />
            )}
            {authModalOpen && <AuthModal modalEnable={true} onClose={handleAuthModalClose} />}
            <a 
                href="#" 
                className={ className ? className : 'templatiq__template__single__info__action__link insert-btn'} 
                onClick={(e) => !isLoggedIn ? addAuthModal(e) : addInsertModal(e)}
            >
                <ReactSVG src={ downloadIcon } width={14} height={14} />
                {innerText ? innerText : 'Insert'}
            </a>
        </>
    )
}

export default InsertTemplate;