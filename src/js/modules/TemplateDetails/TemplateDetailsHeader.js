import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import InsertTemplate from '@components/InsertTemplate';
import { TemplateDetailsHeaderStyle } from './style';
import store from '../../store';

import crownIcon from '@icon/crown.svg';
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";
import downloadAltIcon from "@icon/download-alt.svg";

const TemplateDetailsHeader = (props) => {
	const {
		slug,
		title,
		price,
		number_of_downloads,
		number_of_bookmarks,
		purchase_url,
		preview_link,
	} = props.item;


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

	return (
		<TemplateDetailsHeaderStyle className="templatiq__details__header">
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
							Loved by {currentFavoriteCount ? currentFavoriteCount : '0'} people
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
					<InsertTemplate
						item={props.item} 
						innerText={'Insert'}
						className={'templatiq__details__header__action__link insert-btn templatiq-btn templatiq-btn-success'}
					/>
				}
				
				
			</div>
		</TemplateDetailsHeaderStyle>
	);
};

export default TemplateDetailsHeader;

