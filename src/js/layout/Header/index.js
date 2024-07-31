import postData from '@helper/postData';
import { dispatch, select } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import CacheClearBtn from '@components/CacheClearBtn';
import Dropdown from '@components/Dropdown';
import checkedClickedOutside from '@helper/checkClickedOutside';
import store from '@store/index';

import { HeaderActionStyle, HeaderNavStyle, HeaderStyle } from './style';

import avatar from '@images/avatar.svg';
import Fav from '@images/fav.svg';
import Logo from '@images/logo.svg';

import blocksIcon from '@icon/blocks.svg';
import fileIcon from '@icon/file-solid.svg';
import pagesIcon from '@icon/pages.svg';
import userIcon from '@icon/user-alt.svg';

import backIcon from '@icon/arrow-left.svg';
import chevronIcon from '@icon/chevron-down-solid.svg';
import elementorIcon from '@icon/elementor.svg';
import gutenbergIcon from '@icon/gutenberg.svg';

import cartIcon from '@icon/cart.svg';
import downloadIcon from '@icon/download-alt.svg';
import heartIcon from '@icon/heart.svg';
import logoutIcon from '@icon/logout.svg';
import settingsIcon from '@icon/settings.svg';

const Header = ( props ) => {
	const { type } = props;

	const { isLoggedIn, userDisplayName } = select( store ).getUserInfo();
	const [ isAuthorInfoVisible, setAuthorInfoVisible ] = useState( false );
	const [ isLoading, setLoading ] = useState( false );
	const [ elementorEditorEnabled, setElementorEditorEnabled ] =
		useState( false );

	const logOutEndPoint = 'templatiq/account/logout';

	// Log Out
	const handleLogOut = async () => {
		setLoading( true );
		postData( logOutEndPoint ).then( () => {
			setTimeout( () => {
				dispatch( store ).logOut();
				setLoading( false );
				navigate( '/' );
			}, 300 );
		} );
	};

	let editorItems = [
		{
			icon: elementorIcon,
			text: 'Elementor',
			url: '#',
			type: 'available'
		},
		{
			icon: gutenbergIcon,
			text: 'Block Editor',
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

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isAuthorInfoVisible, setAuthorInfoVisible, ref );
	}, [ isAuthorInfoVisible ] );

	useEffect( () => {
		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains(
			'elementor-editor-active'
		);

		// Set the state variable based on the presence of Elementor Editor
		setElementorEditorEnabled( isElementorEditorActive );
	}, [] );

	return (
		<HeaderStyle className="templatiq__header">
			{ type == 'detailsHeader' ? (
				<div className="templatiq__header__details">
					<Link to="/" className="templatiq__header__details__logo">
						<img src={ Fav } alt="Logo" />
					</Link>
					<button
						className="templatiq__header__details__return"
						onClick={ handleGoBack }
					>
						<ReactSVG src={ backIcon } width={ 12 } height={ 12 } />
						Back to Library
					</button>
				</div>
			) : (
				<div className="templatiq__header__logo">
					<Link to="/">
						<img src={ Logo } alt="Logo" />
					</Link>
				</div>
			) }

			<div className="templatiq__header__content">
				<HeaderNavStyle className="templatiq__header__nav">
					<li className="templatiq__header__item">
						<NavLink
							to={ ! elementorEditorEnabled ? '/pages' : '/' }
							className={ `templatiq__header__link` }
							activeClassName="active"
						>
							<ReactSVG
								src={ pagesIcon }
								width={ 18 }
								height={ 18 }
							/>
							Pages
						</NavLink>
					</li>
					<li className="templatiq__header__item">
						<NavLink
							to="/blocks"
							className={ `templatiq__header__link` }
							activeClassName="active"
						>
							<ReactSVG
								src={ blocksIcon }
								width={ 18 }
								height={ 18 }
							/>
							Blocks
						</NavLink>
					</li>
				</HeaderNavStyle>

				<HeaderActionStyle className="templatiq__header__action">
					<div className="templatiq__header__action__item">
						<CacheClearBtn />
					</div>

					<div className="templatiq__header__action__item">
						<Dropdown
							className="templatiq__dropdown"
							dropDownText="Select Editor"
							dropDownIcon={ chevronIcon }
							dropdownList={ editorItems }
							defaultSelect={ editorItems[ 0 ] }
						/>
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
												activeClassName="active"
												to="/dashboard/favorites"
												className="templatiq__header__author__info__link"
											>
												<ReactSVG
													src={ heartIcon }
													width={ 14 }
													height={ 14 }
												/>
												My Favorites
											</NavLink>
										</div>
										{ ! elementorEditorEnabled && (
											<>
												<div className="templatiq__header__author__info__item">
													<NavLink
														activeClassName="active"
														to="/dashboard/downloads"
														className="templatiq__header__author__info__link"
													>
														<ReactSVG
															src={ downloadIcon }
															width={ 14 }
															height={ 14 }
														/>
														My Downloads
													</NavLink>
												</div>
												<div className="templatiq__header__author__info__item">
													<NavLink
														activeClassName="active"
														to="/dashboard/purchase"
														className="templatiq__header__author__info__link"
													>
														<ReactSVG
															src={ cartIcon }
															width={ 14 }
															height={ 14 }
														/>
														My Purchase
													</NavLink>
												</div>
												<div className="templatiq__header__author__info__item">
													<NavLink
														activeClassName="active"
														to="/dashboard/account"
														className="templatiq__header__author__info__link"
													>
														<ReactSVG
															src={ settingsIcon }
															width={ 14 }
															height={ 14 }
														/>
														Manage Account
													</NavLink>
												</div>
											</>
										) }
										<div className="templatiq__header__author__info__item templatiq__header__author__info__item--logout">
											<button
												className={ `templatiq__header__author__info__link templatiq__logout ${
													isLoading
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
												Log Out
											</button>
										</div>
									</div>
								) }
							</div>
						) : (
							<Link
								to="/signin"
								className="templatiq__header__action__link templatiq-btn"
							>
								<ReactSVG
									src={ userIcon }
									width={ 14 }
									height={ 14 }
								/>
								Sign In
							</Link>
						) }
					</div>
				</HeaderActionStyle>
			</div>
		</HeaderStyle>
	);
};

export default Header;
