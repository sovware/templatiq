import { useState, useEffect, useRef } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import Popup from '@components/Popup';
import { TemplateDetailsHeaderStyle } from './style';
import store from '../../store';

import crownIcon from '@icon/crown.svg';
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";
import downloadIcon from "@icon/download.svg";
import downloadAltIcon from "@icon/download-alt.svg";

const TemplateDetailsHeader = (props) => {
	const {
		slug,
		title,
		price,
		number_of_downloads,
		number_of_bookmarks,
		required_plugins,
		purchase_url,
		preview_link,
	} = props.item;


    const [isModalOpen, setModalOpen] = useState(false);
    const [installablePlugins, setInstallablePlugins] = useState([]);

    const favCountList = select( store ).getFav(slug);
    const isTemplateActive = select( store ).getTemplateStatus(slug);
	const [addedToFavorite, addFavorite] = useState(isTemplateActive ? isTemplateActive : false);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(favCountList ? favCountList : '');

	let handleFavorite = (e) => {
        e.preventDefault();
        addFavorite((prevAddedToFavorite) => {
            const newAddedToFavorite = !prevAddedToFavorite;
        
            // Use the updated state immediately in the dispatch
            dispatch(store).setFav(
                slug,
                newAddedToFavorite
                    ? Number(currentFavoriteCount) + 1
                    : favCountList
                );

            dispatch(store).toggleTemplateStatus(slug, newAddedToFavorite);
        
            // Return the new value to update the state
            return newAddedToFavorite;
        });
    };

    useEffect(() => {
        // This will be triggered whenever addedToFavorite changes
        setCurrentFavoriteCount(addedToFavorite ? Number(currentFavoriteCount) + 1 : Number(currentFavoriteCount));
    }, [addedToFavorite]);

    const templateRef = useRef(null);
	let addModal = async (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
    
        // Add the class to the root div using templateRef
        if (templateRef.current) {
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
		<TemplateDetailsHeaderStyle className="templatiq__details__header">
			{isModalOpen && installablePlugins && (
                <Popup item={props.item} installable_plugins={installablePlugins} onClose={() => setModalOpen(false)} />
            )}
			<div className="templatiq__details__header__info">
				<h2 className="templatiq__details__header__title">{title}</h2>
				<div className="templatiq__details__header__meta">
					{
						number_of_downloads ? 
						<span className="templatiq__details__header__meta__item">
							<ReactSVG src={ downloadAltIcon } width={16} height={16} />
							Used by {number_of_downloads} people
						</span> :
						''
					}
					{
						number_of_bookmarks ? 
						<span className="templatiq__details__header__meta__item">
							<ReactSVG src={ heartIcon } width={16} height={16} />
							Loved by {currentFavoriteCount ? currentFavoriteCount : ''} people
						</span> :
						''
					}
					
				</div>
			</div>
			<div className="templatiq__details__header__action">
				{
					price > 0 ? 
					<span className="templatiq__details__header__action__link templatiq-badge templatiq-badge-dark">
						<ReactSVG src={ crownIcon } width={16} height={16} />
						PRO
					</span> :
					''
				}
				<a href="#" className={`templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white ${addedToFavorite ? 'active' : ''}`} onClick={(e) => handleFavorite(e, number_of_bookmarks)}>
					<ReactSVG src={ addedToFavorite ? heartSolidIcon : heartIcon } width={16} height={16} />
				</a>
				<a href={preview_link} className="templatiq__details__header__action__link live-demo-btn templatiq-btn templatiq-btn-white">
					Live Demo
				</a> 
				{
					price > 0 ?
					<a href={purchase_url} className="templatiq__details__header__action__link purchase-btn templatiq-btn templatiq-btn-primary">
						<ReactSVG src={ cartIcon } width={16} height={16} />
						Buy this item  ${price}
					</a> :
					<a href="#" className="templatiq__details__header__action__link insert-btn templatiq-btn templatiq-btn-success" onClick={addModal}>
						<ReactSVG src={ downloadIcon } width={16} height={16} />
						Insert
					</a>
				}
				
				
			</div>
		</TemplateDetailsHeaderStyle>
	);
};

export default TemplateDetailsHeader;

