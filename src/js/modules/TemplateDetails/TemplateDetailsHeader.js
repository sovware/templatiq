import { useEffect, useState } from '@wordpress/element';
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

const TemplateDetailsHeader = ( props ) => {
	const {
		template_id,
		title,
		price,
		number_of_downloads,
		number_of_bookmarks,
		purchase_url,
		preview_link,
	} = props.item;

	const { purchased, unlocked } = select(store).getUserInfo();
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
							Used by { number_of_downloads } people
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
							Loved by{ ' ' }
							{ currentFavoriteCount
								? currentFavoriteCount
								: '0' }{ ' ' }
							people
						</span>
					) : (
						''
					) }
				</div>
			</div>
			<div className="templatiq__details__header__action">
				{ price > 0 && !isUnlocked ? (
					<span className="templatiq__details__header__action__link templatiq-badge templatiq-badge-dark">
						<ReactSVG
							src={ crownIcon }
							width={ 16 }
							height={ 16 }
						/>
						PRO
					</span>
				) : (
					''
				) }

				<Bookmark
					item={ props.item }
					type="single"
					onFavoriteCountUpdate={ countFavorite }
				/>

				<a
					href={ preview_link }
					target="_blank"
					className="templatiq__details__header__action__link live-demo-btn templatiq-btn templatiq-btn-white"
				>
					Live Demo
				</a>
				{ price > 0 && !(isPurchased || isUnlocked) ? (
					<a
						href={`https://templatiq.com/checkout?edd_action=add_to_cart&download_id=${template_id}`} target='_blank'
						className="templatiq__details__header__action__link purchase-btn templatiq-btn templatiq-btn-primary"
					>
						<ReactSVG src={ cartIcon } width={ 16 } height={ 16 } />
						Buy this item ${ price }
					</a>
				) : (
					<InsertTemplate
						item={ props.item }
						className={
							'templatiq__details__header__action__link insert-btn templatiq-btn templatiq-btn-success'
						}
					/>
				) }
			</div>
		</TemplateDetailsHeaderStyle>
	);
};

export default TemplateDetailsHeader;
