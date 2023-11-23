import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import store from '../../store';

import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";

const Bookmark = ( item ) => {
    let { slug } = item;

	const { isLoggedIn } = select( store ).getUserInfo();
    const favCountList = select( store ).getFav(slug);
    const isTemplateActive = select( store ).getTemplateStatus(slug);

	const [addedToFavorite, addFavorite] = useState(isTemplateActive ? isTemplateActive : false);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(favCountList ? favCountList : '');
    
    const loginRequired = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
    }

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

    return (
        <>
            {
                !isLoggedIn ?
                <a href="#" className='templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip' data-info='Add to Favourite' onClick={loginRequired}>
                    <ReactSVG src={ heartIcon } width={14} height={14} />
                    {favCountList ? favCountList : ''}
                </a> :
                <a href="#" className={`templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip ${addedToFavorite ? 'active' : ''}`} data-info={addedToFavorite ? 'Added to Favourite' : 'Add to Favourite'} onClick={handleFavorite}>
                    <ReactSVG src={ addedToFavorite ? heartSolidIcon : heartIcon } width={14} height={14} />
                    {currentFavoriteCount ? currentFavoriteCount : ''}
                </a>
            }
        </>
    )
}

export default Bookmark;