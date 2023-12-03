import { useState, useRef, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Dropdown from '@components/Dropdown';
import CacheClearBtn from '@components/CacheClearBtn';
import checkedClickedOutside from '@helper/checkClickedOutside';
import store from '../../store';

import { HeaderStyle, HeaderNavStyle, HeaderActionStyle } from "./style";

import Fav from "@images/fav.svg";
import Logo from "@images/logo.svg";
import avatar from "@images/avatar.svg";

import pagesIcon from "@icon/pages.svg";
import blocksIcon from "@icon/blocks.svg";
import userIcon from "@icon/user-alt.svg";
import fileIcon from "@icon/file-solid.svg";

import backIcon from "@icon/arrow-left.svg";
import elementorIcon from "@icon/elementor.svg";
import blockEditorIcon from "@icon/directorist.svg";
import chevronIcon from "@icon/chevron-down-solid.svg";

import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import logoutIcon from "@icon/logout.svg";
import settingsIcon from "@icon/settings.svg";
import downloadIcon from "@icon/download-alt.svg";

const Header = (props) =>  {
	const { type } = props;

	const { isLoggedIn, userDisplayName } = select( store ).getUserInfo();

	const [isAuthorInfoVisible, setAuthorInfoVisible] = useState(false);

	const handleLogOut = async () => {
		try {
			const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/logout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': template_market_obj.rest_args.nonce,
				},
			});
	
			if (!response.ok) {
				throw new Error('Error Occurred');
			}
	
			if (response.ok) {
				// Dispatch the action to update the login status in the store
				dispatch(store).logOut();
				navigate('/');
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in Logout:', error);
		}
	}

	let editorItems = [
		{
			icon: elementorIcon,
			text: 'Elementor',
			url: '#',
		},
		{
			icon: blockEditorIcon,
			text: 'Block Editor',
			url: '#',
		},
	];

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const ref = useRef( null );
	const handleToggleAuthorInfo = (e) => {
		e.preventDefault();
		setAuthorInfoVisible(!isAuthorInfoVisible);
	};

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isAuthorInfoVisible, setAuthorInfoVisible, ref );
	}, [ isAuthorInfoVisible ] );

	return (
		<HeaderStyle className="templatiq__header">
			{
				type == 'detailsHeader' ?
				<div className="templatiq__header__details">
					<Link to="/" className="templatiq__header__details__logo">
						<img src={Fav} alt="Logo" />
					</Link>
					<button className="templatiq__header__details__return" onClick={handleGoBack}>
						<ReactSVG src={ backIcon } width={12} height={12} />
						Back to Library
					</button>
				</div> : 
				<div className="templatiq__header__logo">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</div>
			}
				
			<div className="templatiq__header__content">
				<HeaderNavStyle className="templatiq__header__nav">
					<li className="templatiq__header__item">
						<NavLink to="/pack" className={`templatiq__header__link`} activeClassName="active">
							<ReactSVG src={ fileIcon } width={18} height={18} />
							Template Pack
						</NavLink>
					</li>
					<li className="templatiq__header__item">
						<NavLink to="/pages" className={`templatiq__header__link`} activeClassName="active">
							<ReactSVG src={ pagesIcon } width={18} height={18} />
							Pages
						</NavLink>
					</li>
					<li className="templatiq__header__item">
						<NavLink to="/blocks" className={`templatiq__header__link`} activeClassName="active">
							<ReactSVG src={ blocksIcon } width={18} height={18} />
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
							dropDownText= "Select Editor"
							dropDownIcon={ chevronIcon }
							dropdownList={ editorItems }
							defaultSelect = { editorItems[0] }
						/>
					</div>

					<div className="templatiq__header__action__item">
						{isLoggedIn ? 
							<div className="templatiq__header__author__wrapper" ref={ ref }>
								<a 
									href="#" 
									className="templatiq__header__action__author" 
									onClick={handleToggleAuthorInfo}
								>
									<img src={avatar} alt="Avatar" />
									{userDisplayName}
								</a>
								{
									isAuthorInfoVisible &&
									<div className="templatiq__header__author__info">
										<div className="templatiq__header__author__info__item">
											<NavLink activeClassName="active" to="/dashboard/favorites" className="templatiq__header__author__info__link">
												<ReactSVG src={ heartIcon } width={14} height={14} />
												My Favorites
											</NavLink>
										</div>
										<div className="templatiq__header__author__info__item">
											<NavLink activeClassName="active" to="/dashboard/downloads" className="templatiq__header__author__info__link">
												<ReactSVG src={ downloadIcon } width={14} height={14} />
												My Downloads
											</NavLink>
										</div>
										<div className="templatiq__header__author__info__item">
											<NavLink activeClassName="active" to="/dashboard/purchase" className="templatiq__header__author__info__link">
												<ReactSVG src={ cartIcon } width={14} height={14} />
												My Purchase
											</NavLink>
										</div>
										<div className="templatiq__header__author__info__item">
											<NavLink activeClassName="active" to="/dashboard/account" className="templatiq__header__author__info__link">
												<ReactSVG src={ settingsIcon } width={14} height={14} />
												Manage Account
											</NavLink>
										</div>
										<div className="templatiq__header__author__info__item templatiq__header__author__info__item--logout">
											<a 
												href="#" 
												className="templatiq__header__author__info__link templatiq__logout"
												onClick={handleLogOut}	
											>
												<ReactSVG src={ logoutIcon } width={14} height={14} />
												Log Out
											</a>
										</div>
									</div>
								}
								
							</div> : 
							<Link to="/signin" className="templatiq__header__action__link templatiq-btn">
								<ReactSVG src={ userIcon } width={14} height={14} />
								Login
							</Link> 
						}
					</div>
				</HeaderActionStyle>
			</div>
		</HeaderStyle>
	);
}

export default Header;
