import Bookmark from '@components/Bookmark';
import ContentLoading from '@components/ContentLoading';
import InsertTemplate from '@components/InsertTemplate';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
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

	const [ isDropdownOpen, setDropdownOpen ] = useState( false );
	const [ displayedCategories, setDisplayedCategories ] = useState( [] );
	const [ dropdownCategories, setDropdownCategories ] = useState( [] );

	const { purchased, unlocked } = select(store).getUserInfo();

	const [ imageLoaded, setImageLoaded ] = useState( false );
	const [isPurchased, setIsPurchased] = useState(false);
	const [isUnlocked, setIsUnlocked] = useState(false);

	const requiredPlugins = required_plugins.filter(item => item?.init);

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
		const libraryData = select( store ).getLibraryData();

		const availableCategories = categories.map(
			( key ) => libraryData.categories[ key ]
		);

		const visibleCategories =
			availableCategories.length < 3
				? availableCategories
				: availableCategories.slice( 0, 2 );

		// Categories for the dropdown (if any)
		const hiddenCategories = availableCategories.slice( 2 );

		setDisplayedCategories( visibleCategories );
		setDropdownCategories( hiddenCategories );

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
						{ price > 0 ? (
							<span className="templatiq__template__single__info__meta__item pro-item">
								<ReactSVG
									src={ crownIcon }
									width={ 16 }
									height={ 16 }
								/>
								Pro
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
									Purchased
								</span>
							)
						}
						{
							isUnlocked && (
								<span
									className="templatiq__template__single__info__meta__item unlocked-item templatiq-tooltip"
									data-info="Unlocked"
								>
									Unlocked
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
							Live Demo
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
					<div className="templatiq__template__single__info__required">
						{ requiredPlugins &&
							requiredPlugins.map( ( plugin, index ) => (
								<a
									key={ index }
									href="#"
									className="templatiq__template__single__info__required__item templatiq-tooltip"
									data-info={ plugin?.name }
								>
									<img
										src={ `${ template_market_obj.assets_url }/svg/icon/${ plugin?.slug }.svg` }
										width={ 28 }
										height={ 28 }
										onError={(e) => {
											e.target.onerror = null; // prevents looping
											e.target.src = `${template_market_obj.assets_url}/svg/icon/wordpress-plugin.png`;
										}}
									/>
								</a>
							) ) }
					</div>
				</div>
			</div>
			<div className="templatiq__template__single__content">
				<h3 className="templatiq__template__single__title">
					<Link to={ `/template/${ slug }` }>
						{ title ? title : 'DDoctors' }
					</Link>
				</h3>
				<div className="templatiq__template__single__cat">
					{ displayedCategories.map( ( category, index ) => (
						<a
							key={ index }
							href="#"
							className="templatiq__template__single__cat__link"
						>
							{ category }
						</a>
					) ) }
					{ dropdownCategories.length > 0 && (
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
									{ dropdownCategories.map(
										( category, index ) => (
											<a
												key={ index }
												href="#"
												className="templatiq__template__single__cat__link"
											>
												{ category }
											</a>
										)
									) }
								</div>
							) }
						</div>
					) }
				</div>
				<div className="templatiq__template__single__quickmeta">
					{ price > 0 ? (
						<span className="templatiq__template__single__quickmeta__item pro-item">
							{ `${ price ? '$' + price : '' }` }
						</span>
					) : (
						<span className="templatiq__template__single__quickmeta__item free-item">
							Free
						</span>
					) }

					<span
						className="templatiq__template__single__quickmeta__item templatiq-tooltip"
						data-info="Total Downloads"
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
			</div>
		</SingleTemplateStyle>
	);
};

export default SingleTemplate;
