import Bookmark from '@components/Bookmark';
import ContentLoading from '@components/ContentLoading';
import InsertTemplate from '@components/InsertTemplate';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { SingleTemplateStyle } from './style';

import crownIcon from '@icon/crown.svg';
import downloadIcon from '@icon/download-alt.svg';

const SingleTemplate = ( item ) => {
	let {
		template_id,
		slug,
		preview_link,
		thumbnail,
		title,
		price,
		number_of_downloads,
		categories,
		required_plugins,
	} = item;

	const { purchased, unlocked } = select(store).getUserInfo();

	const [ isDropdownOpen, setDropdownOpen ] = useState( false );
	const [ imageLoaded, setImageLoaded ] = useState( false );
	const [ isPurchased, setIsPurchased ] = useState(false);
	const [ isUnlocked, setIsUnlocked ] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded( true );
	};

	const isItemPurchased = (itemId) => {
		// Check if any object in purchasedItems contains the itemId as a key
		return purchased && purchased.some(item => itemId in item);
	};

	const isItemUnlocked = (itemId) => {
		// Check if any object in unlockedItems contains the itemId as a key
		return unlocked && unlocked.some(item => itemId in item);
	};

	const templateRef = useRef( null );

	useEffect( () => {
		setIsUnlocked(isItemUnlocked(template_id));
		setIsPurchased(isItemPurchased(template_id));
	}, [] );

	return (
		<SingleTemplateStyle
			className="templatiq__template__single"
			ref={ templateRef }
		>
			<div className="templatiq__template__single__img">
				{ imageLoaded ? (
					<img src={ thumbnail } alt={ title } />
				) : (
					<>
						<ContentLoading
							style={ { margin: 0, minHeight: 'unset' } }
						/>
						<img
							src={ thumbnail }
							alt={ title }
							onLoad={ handleImageLoad }
							style={ { display: 'none' } }
						/>
					</>
				) }
				<div className="templatiq__template__single__overlay"></div>
				<div className="templatiq__template__single__info">
					<div className="templatiq__template__single__info__meta">
						{ price > 0 && !isUnlocked ? (
							<span className="templatiq__template__single__info__meta__item pro-item">
								<ReactSVG
									src={ crownIcon }
									width={ 16 }
									height={ 16 }
								/>
								{__( "Pro", 'templatiq' )}
							</span>
						) : (
							''
						) }
						{
							price > 0 && isPurchased && (
								<span
									className="templatiq__template__single__info__meta__item purchased-item templatiq-tooltip"
									data-info="Unlocked"
								>
									{__( "Purchased", 'templatiq' )}
								</span>
							)
						}
						{
							isUnlocked && (
								<span
									className="templatiq__template__single__info__meta__item unlocked-item templatiq-tooltip"
									data-info="Unlocked"
								>
									{__( "Unlocked", 'templatiq' )}
								</span>
							)
						}
					</div>
					<div className="templatiq__template__single__info__action">
						<a
							href={ preview_link }
							target="_blank"
							className="templatiq__template__single__info__action__link"
						>
							{__( "Live Demo", 'templatiq' )}
						</a>
						<InsertTemplate
							item={ item }
							isPro={ parseFloat(price) > 0 }
							templateRef={ templateRef }
							className={
								'templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button'
							}
						/>
					</div>
					<div className="templatiq__template__single__info__required"></div>
				</div>
			</div>
			<div className="templatiq__template__single__content">
				<h3 className="templatiq__template__single__title">
					<Link to={ `/template/${ slug }` }>
						{ title ? title : __( 'dDoctors', 'templatiq' ) }
					</Link>
				</h3>
				{ categories.length > 0 &&
					<div className="templatiq__template__single__cat">
						{ categories.map( ( category, index ) => (
							<a
								key={ index }
								href="#"
								className="templatiq__template__single__cat__link"
							>
								{ category }
							</a>
						) ).slice( 0, 2 ) }
						{ categories.length > 2 && (
							<div className="templatiq__template__single__cat__dropdown">
								<button
									className={ `templatiq__template__single__cat__button` }
									onClick={ () =>
										setDropdownOpen( ! isDropdownOpen )
									}
								>
									...
								</button>
								{ isDropdownOpen && (
									<div className="templatiq__template__single__cat__dropdown-content">
										{ categories.map(
											( category, index ) => (
												<a
													key={ index }
													href="#"
													className="templatiq__template__single__cat__link"
												>
													{ category }
												</a>
											)
										).slice( 2 ) }
									</div>
								) }
							</div>
						) }
					</div>
				}
				<div className="templatiq__template__single__quickmeta-wrapper">
					<div className="templatiq__template__single__quickmeta">
						{ price > 0 ? (
							<span className="templatiq__template__single__quickmeta__item pro-item">
								{ `${ price ? '$' + price : '' }` }
							</span>
						) : (
							<span className="templatiq__template__single__quickmeta__item free-item">
								{__( "Free", 'templatiq' )}
							</span>
						) }

						<span
							className="templatiq__template__single__quickmeta__item templatiq-tooltip"
							data-info={__( "Total Downloads", 'templatiq' )}
						>
							<ReactSVG
								src={ downloadIcon }
								width={ 14 }
								height={ 14 }
							/>
							{ number_of_downloads ? number_of_downloads : '' }
						</span>

						<Bookmark item={ item } />
					</div>
					<Link to={ `/template/${ slug }` } className="templatiq-btn templatiq-btn-primary-transparent">
						{ __( 'View Details', 'templatiq' ) }
					</Link>
				</div>
			</div>
		</SingleTemplateStyle>
	);
};

export default SingleTemplate;