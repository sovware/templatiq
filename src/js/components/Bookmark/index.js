import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import postData from '@helper/postData';
import ReactSVG from 'react-inlinesvg';
import AuthModal from '@components/Popup/AuthModal';
import store from '@store/index';

import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";

const Bookmark = ( props) => {
    let { template_id, number_of_bookmarks } = props.item;
    const [ type, setType ] = useState(props.type ? props.type : '');

    const addBookmarkEndPoint = 'templatiq/bookmark/add';
    const removeBookmarkEndPoint = 'templatiq/bookmark/remove';

	const { isLoggedIn, bookmarks } = select( store ).getUserInfo();
    const isActive = bookmarks && bookmarks.includes(template_id);

	const [authModalOpen, setAuthModalOpen] = useState(false);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(number_of_bookmarks);
	const [addedToFavorite, addFavorite] = useState(isActive);

    const addAuthModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        setAuthModalOpen(true);
    }

    // Update the state when the modal is closed
    const handleAuthModalClose = () => {
        setAuthModalOpen(false);
    };

    // Add Bookmark
    const addBookmark = (template_id) => {
        postData( addBookmarkEndPoint, { template_id } ).then( ( data ) => {
            dispatch( store ).setBookmark( data.body.bookmarks );
        });
    }

    // Remove Bookmark
    const removeBookmark = (template_id) => {
        postData( removeBookmarkEndPoint, { template_id } ).then( ( data ) => {
            dispatch( store ).setBookmark( data.body.bookmarks );
        });
    }
    
    const handleFavorite = (e) => {
        e.preventDefault();
        
        if (!addedToFavorite) {
            addBookmark(template_id);
            const addedCount = Number(currentFavoriteCount) + 1;
            setCurrentFavoriteCount(addedCount)
            addFavorite(true);
        } else {
            removeBookmark(template_id);
            setCurrentFavoriteCount(number_of_bookmarks)
            addFavorite(false);
        }
        
        // Trigger the callback function from the parent component if it exists
        props.onFavoriteCountUpdate?.(addedToFavorite);
    };
    
    useEffect(() => {
        // Set the current favorite count based on addedToFavorite
        setCurrentFavoriteCount(addedToFavorite ? Number(number_of_bookmarks) + 1 : number_of_bookmarks );
    }, []);  


    return (
        <>
            {
                type === 'single' ? 
                    <a href="#" className={`templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white ${addedToFavorite ? 'active' : ''}`} onClick={(e) => handleFavorite(e, number_of_bookmarks)}>
                        <ReactSVG src={ addedToFavorite ? heartSolidIcon : heartIcon } width={16} height={16} />
                    </a> :
                    !isLoggedIn ?
                        <>
                            {authModalOpen ? <AuthModal modalEnable={true} onClose={handleAuthModalClose} /> : ''}
                            <a href="#" className='templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip' data-info='Add to Favourite' onClick={addAuthModal}>
                                <ReactSVG src={ heartIcon } width={14} height={14} />
                                {number_of_bookmarks ? number_of_bookmarks : ''}
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