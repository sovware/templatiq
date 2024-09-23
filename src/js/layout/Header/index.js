import postData from '@helper/postData';
import { dispatch, select } from '@wordpress/data';
import { Suspense, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import CacheClearBtn from '@components/CacheClearBtn';
import ContentLoading from '@components/ContentLoading';
import Dropdown from '@components/Dropdown';
import checkedClickedOutside from '@helper/checkClickedOutside';
import store from '@store/index';


import { HeaderActionStyle, HeaderStyle } from './style';

import avatar from '@images/avatar.svg';
import Fav from '@images/fav.svg';
import Logo from '@images/logo.svg';

import userIcon from '@icon/user-alt.svg';

import backIcon from '@icon/arrow-left.svg';
import bricksIcon from '@icon/bricks.svg';
import chevronIcon from '@icon/chevron-down-solid.svg';
import elementorIcon from '@icon/elementor.svg';
import gutenbergIcon from '@icon/gutenberg.svg';

import Searchform from '@components/Searchform';
import cartIcon from '@icon/cart.svg';
import downloadIcon from '@icon/download-alt.svg';
import heartIcon from '@icon/heart.svg';
import logoutIcon from '@icon/logout.svg';
import settingsIcon from '@icon/settings.svg';

const base64Url = btoa(templatiq_obj.dashboard_url);
const connectUlr = templatiq_obj.cloud_url + '?connect=true&return_to=' + base64Url

const Header = ( props ) => {
	const { type } = props;

	const { isLoggedIn, userDisplayName } = select( store ).getUserInfo();
	const [ isAuthorInfoVisible, setAuthorInfoVisible ] = useState( false );
	const [ isLogoutLoading, setLogoutLoading ] = useState( false );
	const [ editorEnabled, setEditorEnabled ] = useState( false );
	const [ selectedEditor, setSelectedEditor ] = useState( templatiq_obj.builder );

	const logOutEndPoint = 'templatiq/account/logout';

	// Log Out
	const handleLogOut = async () => {
		setLogoutLoading( true );
		postData( logOutEndPoint ).then( () => {
			setTimeout( () => {
				dispatch( store ).logOut();
				setLogoutLoading( false );
				navigate( '/' );
			}, 300 );
		} );
	};

	let editorItems = [
		{
			icon: elementorIcon,
			name: "elementor",
			text: __( 'Elementor', 'templatiq' ),
			url: '#',
			type: 'available'
		},
		{
			icon: gutenbergIcon,
			name: "block",
			text: __( 'Block Editor', 'templatiq' ),
			url: '#',
			type: 'available'
		},
		{
			icon: bricksIcon,
			name: "bricks",
			text: __( 'Bricks Builder', 'templatiq' ),
			url: '#',
			type: 'upcoming'
		},
	];

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate( -1 );
	};

	const ref = useRef( null );
	const handleToggleAuthorInfo = ( e ) => {
		e.preventDefault();
		setAuthorInfoVisible( ! isAuthorInfoVisible );
	};

	// Handle selected item from Dropdown
	const handleDropdownChange = (selectedItem) => {
		setSelectedEditor(selectedItem.name); 

		if(selectedEditor !== selectedItem.name) {
			dispatch( store ).setIsLoading( true );
			postData( `templatiq/template/set-builder?builder=${selectedItem.name}` )
			.then( ( res ) => {
				dispatch( store ).setTemplates( res.templates );
				dispatch( store ).setLibraryData( res );
				dispatch( store ).setIsLoading( false );
			} )
		} 	
	};

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isAuthorInfoVisible, setAuthorInfoVisible, ref );
	}, [ isAuthorInfoVisible ] );

	useEffect( () => {
		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains(
			'elementor-editor-active'
		);

		const editorName = isElementorEditorActive ? "elementor" : "";

		// Set the state variable based on the presence of Elementor Editor
		setEditorEnabled( editorName );
	}, [] );

	return (
		<HeaderStyle className="templatiq__header">
			{ type == 'detailsHeader' ? (
				<div className="templatiq__header__details">
					<Suspense
						fallback={
							<ContentLoading 
								type="single" 
								style={{ "maxHeight": "unset" }} 
							/>
						}
					>
						<Link to="/" className="templatiq__header__details__logo">
							<img src={ Fav } alt="Logo" />
						</Link>
						<button
							className="templatiq__header__details__return"
							onClick={ handleGoBack }
						>
							<ReactSVG src={ backIcon } width={ 12 } height={ 12 } />
							{__( 'Back to Library', 'templatiq' )}
						</button>
					</Suspense>
				</div>
			) : (
				<div className="templatiq__header__logo">
					<Suspense
						fallback={
							<ContentLoading 
								type="single" 
								style={{ "maxHeight": "unset" }} 
							/>
						}
					>
						<Link to="/">
							<img src={ Logo } alt="Logo" />
						</Link>
						<sub>0.0.5</sub>
					</Suspense>
				</div>
			) }

			<div className="templatiq__header__content">
				<div className="templatiq__header__content__left">
					<Suspense
						fallback={
							<ContentLoading 
								type="single" 
								style={{ "maxHeight": "unset", "margin-left": "32px" }} 
							/>
						}
					>
						{
						!editorEnabled &&
							<div className="templatiq__header__action__item">
								<Dropdown
									className="templatiq__dropdown"
									dropDownText={__('Select Editor', 'templatiq')}
									dropDownIcon={chevronIcon}
									dropdownList={editorItems}
									defaultSelect={editorItems.find(editor => editor.name === templatiq_obj.builder)}
									dropDownChange={handleDropdownChange}
								/>
							</div>
						}

						<div className="templatiq__content__top__search">
							<Searchform />
						</div>
					</Suspense>
				</div>

				<HeaderActionStyle className="templatiq__header__action">
					<Suspense
						fallback={
							<ContentLoading 
								type="single" 
								style={{ "maxHeight": "unset" }} 
							/>
						}
					>
						<div className="templatiq__header__action__item">
							<CacheClearBtn />
						</div>

						<div className="templatiq__header__action__item">
							{ isLoggedIn ? (
								<div
									className="templatiq__header__author__wrapper"
									ref={ ref }
								>
									<a
										href="#"
										className="templatiq__header__action__author"
										onClick={ handleToggleAuthorInfo }
									>
										<img src={ avatar } alt="Avatar" />
										{ userDisplayName }
									</a>
									{ isAuthorInfoVisible && (
										<div className="templatiq__header__author__info">
											<div className="templatiq__header__author__info__item">
												<NavLink
													activeclassname="active"
													to="/dashboard/favorites"
													className="templatiq__header__author__info__link"
												>
													<ReactSVG
														src={ heartIcon }
														width={ 14 }
														height={ 14 }
													/>
													{__( 'My Favorites', 'templatiq' )}
												</NavLink>
											</div>
											{ ! editorEnabled && (
												<>
													<div className="templatiq__header__author__info__item">
														<NavLink
															activeclassname="active"
															to="/dashboard/downloads"
															className="templatiq__header__author__info__link"
														>
															<ReactSVG
																src={ downloadIcon }
																width={ 14 }
																height={ 14 }
															/>
															{__( 'My Downloads', 'templatiq' )}
														</NavLink>
													</div>
													<div className="templatiq__header__author__info__item">
														<NavLink
															activeclassname="active"
															to="/dashboard/purchase"
															className="templatiq__header__author__info__link"
														>
															<ReactSVG
																src={ cartIcon }
																width={ 14 }
																height={ 14 }
															/>
															{__( 'My Purchase', 'templatiq' )}
														</NavLink>
													</div>
													<div className="templatiq__header__author__info__item">
														<NavLink
															activeclassname="active"
															to="/dashboard/account"
															className="templatiq__header__author__info__link"
														>
															<ReactSVG
																src={ settingsIcon }
																width={ 14 }
																height={ 14 }
															/>
															{__( 'Manage Account', 'templatiq' )}
														</NavLink>
													</div>
												</>
											) }
											<div className="templatiq__header__author__info__item templatiq__header__author__info__item--logout">
												<button
													className={ `templatiq__header__author__info__link templatiq__logout ${
														isLogoutLoading
															? 'templatiq__loading templatiq__loading--btn'
															: ''
													}` }
													onClick={ handleLogOut }
												>
													<ReactSVG
														src={ logoutIcon }
														width={ 14 }
														height={ 14 }
													/>
													{__( 'Log Out', 'templatiq' )}
												</button>
											</div>
										</div>
									) }
								</div>
							) : (
								<a
									href={connectUlr}
									target="_blank"
									// to="/signin"
									className="templatiq__header__action__link templatiq-btn"
								>
									<ReactSVG
										src={ userIcon }
										width={ 14 }
										height={ 14 }
									/>
									{__( 'Connect Account', 'templatiq' )}
								</a>
							) }
						</div>
					</Suspense>
				</HeaderActionStyle>
			</div>
		</HeaderStyle>
	);
};

export default Header;