import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import AuthModal from '@components/Popup/AuthModal';
import store from '../../store';

import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";

const Bookmark = ( props) => {
    let { template_id, number_of_bookmarks } = props.item;
    const [ type, setType ] = useState(props.type ? props.type : '');

	const { isLoggedIn } = select( store ).getUserInfo();

	const [authModalOpen, setAuthModalOpen] = useState(false);
	// const [userFav, setUserFav] = useState([]);
    // const isActive = userFav.includes(template_id);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(number_of_bookmarks);
	const [addedToFavorite, addFavorite] = useState(false);

    
    const addAuthModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
        setAuthModalOpen(true);
    }

    const handleAuthModalClose = () => {
        // Callback function to update the state when the modal is closed
        setAuthModalOpen(false);
    };

    const getUserBookmark = async () => {
		try {
			const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/data`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': template_market_obj.rest_args.nonce,
				},
			});
	
			if (!response.ok) {
				throw new Error('Error Occurred');
			}
	
			if (response.ok) {
				const responseData = await response.json();
				const data = responseData.body;
                // setUserFav(data.bookmarks);

                console.log('Bookmark Data: ', responseData)

                // Check if template_id is in the fetched bookmarks
                const isActive = data.bookmarks.includes(template_id);
                addFavorite(isActive);

                // Set the current favorite count based on isActive
                setCurrentFavoriteCount(isActive ? Number(currentFavoriteCount) + 1 : currentFavoriteCount);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in getUserInfo:', error);
		}
	};

    let favAdd = async (template_id) => {
        const response = await fetch(`${template_market_obj.rest_args.endpoint}/bookmark/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: JSON.stringify({
                template_id: template_id
            }),
        });
    
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
    
        const data = await response.json();

        return data;
    }

    let favRemove = async (template_id) => {
        const response = await fetch(`${template_market_obj.rest_args.endpoint}/bookmark/remove`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            },
            body: JSON.stringify({
                template_id: template_id
            }),
        });
    
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
    
        const data = await response.json();

        return data;
    }

    let handleFavorite = (e) => {
        e.preventDefault();
        
        if (!addedToFavorite) {
            favAdd(template_id);
            const addedCount = Number(currentFavoriteCount) + 1;
            setCurrentFavoriteCount(addedCount)
            addFavorite(true);
            console.log('addedCount:', addedCount)
        } else {
            favRemove(template_id);
            setCurrentFavoriteCount(number_of_bookmarks)
            addFavorite(false);
        }
        
        // Trigger the callback function from the parent component if it exists
        props.onFavoriteCountUpdate?.(addedToFavorite);
    };
    
    useEffect(() => {
        getUserBookmark();
        setCurrentFavoriteCount(addedToFavorite ? Number(number_of_bookmarks) + 1 : number_of_bookmarks );
    }, []);  // Add favCountList to the dependency array


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