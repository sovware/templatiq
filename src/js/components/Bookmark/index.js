import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import AuthModal from '@components/Popup/AuthModal';
import store from '../../store';

import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";

const Bookmark = ( props ) => {
    let { template_id, number_of_bookmarks } = props.item;

	const { isLoggedIn } = select( store ).getUserInfo();
    const favCountList = select( store ).getFav(template_id);
    const isTemplateActive = select( store ).getTemplateStatus(template_id);

	const [authModalOpen, setAuthModalOpen] = useState(false);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(number_of_bookmarks);
	const [addedToFavorite, addFavorite] = useState(isTemplateActive ? isTemplateActive : false);
    
    const addAuthModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        setAuthModalOpen(true);
    }

    const handleAuthModalClose = () => {
        // Callback function to update the state when the modal is closed
        setAuthModalOpen(false);
    };

    let handleFavorite = (e) => {
        e.preventDefault();
        addFavorite((prevAddedToFavorite) => {
            const newAddedToFavorite = !prevAddedToFavorite;
            const updatedCount = newAddedToFavorite ? Number(currentFavoriteCount) + 1 : Number(number_of_bookmarks);
        
            // Use the updated state immediately in the dispatch
            dispatch(store).setFav(template_id, updatedCount);
            dispatch(store).toggleTemplateStatus(template_id, newAddedToFavorite);

            setCurrentFavoriteCount(updatedCount)

            // Return the new value to update the state
            return newAddedToFavorite;
        });
    };
    
    useEffect(() => {
        // This will be triggered whenever addedToFavorite changes
        setCurrentFavoriteCount(addedToFavorite ? currentFavoriteCount : number_of_bookmarks );
    }, [addedToFavorite]);
    
    useEffect(() => {
        // This will be triggered once when the component mounts
        setCurrentFavoriteCount(favCountList);
    }, []);  // Add favCountList to the dependency array


    return (
        <>
            {
                !isLoggedIn ?
                <>
                    {authModalOpen ? <AuthModal modalEnable={true} onClose={handleAuthModalClose} /> : ''}
                    <a href="#" className='templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip' data-info='Add to Favourite' onClick={addAuthModal}>
                        <ReactSVG src={ heartIcon } width={14} height={14} />
                        {favCountList ? favCountList : ''}
                    </a>
                </> :
                <a href="#" className={`templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip ${addedToFavorite ? 'active' : ''}`} data-info={addedToFavorite ? 'Added to Favourite' : 'Add to Favourite'} onClick={handleFavorite}>
                    <ReactSVG src={ addedToFavorite ? heartSolidIcon : heartIcon } width={14} height={14} />
                    {currentFavoriteCount ? currentFavoriteCount : ''}
                </a>
            }
        </>
    )
}

export default Bookmark;