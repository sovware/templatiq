import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import store from '@store/index';
import { select } from '@wordpress/data';

import Bookmark from '@components/Bookmark';
import InsertTemplate from '@components/InsertTemplate';
import { TemplateDetailsHeaderStyle } from './style';

import cartIcon from '@icon/cart.svg';
import crownIcon from '@icon/crown.svg';
import downloadAltIcon from '@icon/download-alt.svg';
import heartIcon from '@icon/heart.svg';

import getPurchaseConnectAccountURL from '@helper/purchaseConnectAccountURL';

const TemplateDetailsHeader = ( props ) => {
	const {
		slug,
		template_id,
		title,
		price,
		number_of_downloads,
		number_of_bookmarks,
		preview_link,
	} = props.item;

	const { purchased, unlocked, hasAllAccess } = select(store).getUserInfo();
	const cloudStarted =  select( store ).getCloudStarted();
	const [ isPurchased, setIsPurchased ] = useState(false);
	const [ isUnlocked, setIsUnlocked ] = useState(false);

	const [ currentFavoriteCount, setCurrentFavoriteCount ] = useState(
		number_of_bookmarks ? Number( number_of_bookmarks ) + 1 : ''
	);

	const countFavorite = ( addedToFavorite ) => {
		const isAddedToFavorite = ! addedToFavorite ? true : false;
		setCurrentFavoriteCount(
			isAddedToFavorite
				? Number( number_of_bookmarks ) + 1
				: number_of_bookmarks
		);
	};

	const isItemPurchased = (itemId) => {
		// Check if any object in purchasedItems contains the itemId as a key
		return purchased && purchased.some(item => itemId in item);
	};

	const isItemUnlocked = (itemId) => {
		// Check if any object in unlockedItems contains the itemId as a key
		return unlocked && unlocked.some(item => itemId in item);
	};

	useEffect( () => {
		setIsPurchased(isItemPurchased(template_id));
		setIsUnlocked(isItemUnlocked(template_id));
	}, [] );

	return (
		<TemplateDetailsHeaderStyle className="templatiq__details__header">
			<div className="templatiq__details__header__info">
				<h2 className="templatiq__details__header__title">{ title }</h2>
				<div className="templatiq__details__header__meta">
					{ number_of_downloads ? (
						<span className="templatiq__details__header__meta__item">
							<ReactSVG
								src={ downloadAltIcon }
								width={ 16 }
								height={ 16 }
							/>
							{__( "Used by", 'templatiq' )} { number_of_downloads } {__( "people", 'templatiq' )}
						</span>
					) : (
						''
					) }
					{ number_of_bookmarks ? (
						<span className="templatiq__details__header__meta__item">
							<ReactSVG
								src={ heartIcon }
								width={ 16 }
								height={ 16 }
							/>
							{__( "Loved by", 'templatiq' )}{ ' ' }
							{ currentFavoriteCount
								? currentFavoriteCount
								: '0' }{ ' ' }
							{__( "people", 'templatiq' )} 
						</span>
					) : (
						''
					) }
				</div>
			</div>
			<div className="templatiq__details__header__action">
				{
					!cloudStarted && 
					<>
						{ price > 0 && !isUnlocked ? (
							<span className="templatiq__details__header__action__link templatiq-badge templatiq-badge-dark">
								<ReactSVG
									src={ crownIcon }
									width={ 16 }
									height={ 16 }
								/>
								{__( "PRO", 'templatiq' )}
							</span>
						) : (
							''
						) }

						<Bookmark
							item={ props.item }
							type="single"
							onFavoriteCountUpdate={ countFavorite }
						/> 
					</>
				}

				<a
					href={ preview_link }
					target="_blank"
					className={`templatiq__details__header__action__link live-demo-btn templatiq-btn ${!cloudStarted ? 'templatiq-btn-white' : 'templatiq-btn-primary'}`}
				>
					{__( "Live Demo", 'templatiq' )}
				</a>
				
				{ price > 0 && !(isPurchased || isUnlocked || hasAllAccess) ? (
					<a
						href={getPurchaseConnectAccountURL( slug, template_id, cloudStarted )} target='_blank'
						className="templatiq__details__header__action__link purchase-btn templatiq-btn templatiq-btn-primary"
					>
						<ReactSVG src={ cartIcon } width={ 16 } height={ 16 } />
						{__( "Buy this item", 'templatiq' )} ${ price }
					</a>
				) : (
					!cloudStarted ?
					<InsertTemplate
						item={ props.item }
						className={
							'templatiq__details__header__action__link insert-btn templatiq-btn templatiq-btn-success'
						}
					/> : null
				) }
			</div>
		</TemplateDetailsHeaderStyle>
	);
};

export default TemplateDetailsHeader;