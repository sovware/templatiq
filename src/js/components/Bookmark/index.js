import AuthModal from '@components/Popup/AuthModal';
import handleMaximumCount from '@helper/handleMaximumCount';
import postData from '@helper/postData';
import store from '@store/index';
import { dispatch, select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import heartSolidIcon from '@icon/heart-solid.svg';
import heartIcon from '@icon/heart.svg';

const Bookmark = ( props ) => {
	let { template_id, slug, number_of_bookmarks } = props.item;
	const [ type, setType ] = useState( props.type ? props.type : '' );

	const addBookmarkEndPoint = 'templatiq/bookmark/add';
	const removeBookmarkEndPoint = 'templatiq/bookmark/remove';

	const { isLoggedIn, bookmarks } = select( store ).getUserInfo();
	const cloudStarted =  select( store ).getCloudStarted();
	const isActive = bookmarks && bookmarks.includes( template_id );

	const [ authModalOpen, setAuthModalOpen ] = useState( false );
	const [ currentFavoriteCount, setCurrentFavoriteCount ] =
		useState( number_of_bookmarks );
	const [ addedToFavorite, addFavorite ] = useState( isActive );
	const [ isFavProcessing, setIsFavProcessing ] = useState( false );

	const addAuthModal = ( e ) => {
		e.preventDefault();
		document
			.querySelector( '.templatiq' )
			.classList.add( 'templatiq-overlay-enable' );
		setAuthModalOpen( true );
	};

	// Update the state when the modal is closed
	const handleAuthModalClose = () => {
		setAuthModalOpen( false );
	};

	// Add Bookmark
	const addBookmark = ( template_id ) => {
		postData( addBookmarkEndPoint, { template_id } ).then( ( data ) => {
			dispatch( store ).setBookmark( data.body.bookmarks );
		} );
	};

	// Remove Bookmark
	const removeBookmark = ( template_id ) => {
		postData( removeBookmarkEndPoint, { template_id } ).then( ( data ) => {
			dispatch( store ).setBookmark( data.body.bookmarks );
		} );
	};

	const handleFavorite = ( e ) => {
		e.preventDefault();
		setIsFavProcessing( true );
		if ( ! addedToFavorite ) {
			addBookmark( template_id );
			const addedCount = Number( currentFavoriteCount ) + 1;
			setCurrentFavoriteCount( addedCount );
			addFavorite( true );
		} else {
			removeBookmark( template_id );
			setCurrentFavoriteCount( number_of_bookmarks );
			addFavorite( false );
		}

		setTimeout( () => {
			setIsFavProcessing( false );
		}, 300 );

		// Trigger the callback function from the parent component if it exists
		props.onFavoriteCountUpdate?.( addedToFavorite );
	};

	useEffect( () => {
		// Set the current favorite count based on addedToFavorite
		setCurrentFavoriteCount(
			addedToFavorite
				? Number( number_of_bookmarks ) + 1
				: number_of_bookmarks
		);
	}, [] );

	return (
		<>
			{ type === 'single' ? (
				<a
					href="#"
					className={ `templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white ${
						addedToFavorite ? 'active' : ''
					} ${isFavProcessing ? 'disabled' : ''} `}
					onClick={ ( e ) =>
						handleFavorite( e, number_of_bookmarks )
					}
				>
					<ReactSVG
						src={ addedToFavorite ? heartSolidIcon : heartIcon }
						width={ 16 }
						height={ 16 }
					/>
					{
						isFavProcessing && (
							<span className="image-loader"></span>
						)
					}

				</a>
			) : ! isLoggedIn ? (
				<>
					{ authModalOpen ? (
						<AuthModal
							slug={ slug }
							modalEnable={ true }
							onClose={ handleAuthModalClose }
						/>
					) : (
						''
					) }
					<a
						href="#"
						className="templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip"
						data-info={__( 'Add to Favourite', 'templatiq' )}
						onClick={ addAuthModal }
					>
						<ReactSVG
							src={ heartIcon }
							width={ 14 }
							height={ 14 }
						/>
						{ number_of_bookmarks ? handleMaximumCount(number_of_bookmarks) : '' }
					</a>
				</>
			) : (
				<a
					href="#"
					className={ `templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip ${
						addedToFavorite ? 'active' : ''}
						${isFavProcessing ? 'disabled' : ''}
					` }
					data-info={
						addedToFavorite
							? __( 'Click to Unfavorite', 'templatiq' )
							: __( 'Add to Favourite', 'templatiq' ) 
					}
					onClick={ handleFavorite }
				>
					<ReactSVG
						src={ addedToFavorite ? heartSolidIcon : heartIcon }
						width={ 14 }
						height={ 14 }
					/>
					{ currentFavoriteCount ? currentFavoriteCount : '' }
					{
						isFavProcessing && (
							<span className="image-loader"></span>
						)
					}
				</a>
			) }
		</>
	);
};

export default Bookmark;