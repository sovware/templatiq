import { useState, useRef, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import Dropdown from '@components/Dropdown';
import checkedClickedOutside from '@helper/checkClickedOutside';

import {
	Link,
	NavLink,
	useNavigate
} from 'react-router-dom';

import { HeaderStyle, HeaderNavStyle, HeaderActionStyle } from "./style";

import Logo from "@images/logo.svg";
import Fav from "@images/fav.svg";

import userIcon from "@icon/user-alt.svg";
import fileIcon from "@icon/file-solid.svg";
import pagesIcon from "@icon/pages.svg";
import blocksIcon from "@icon/blocks.svg";
import avatar from "@images/avatar.svg";

import chevronIcon from "@icon/chevron-down-solid.svg";
import backIcon from "@icon/arrow-left.svg";
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";

import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import logoutIcon from "@icon/logout.svg";
import settingsIcon from "@icon/settings.svg";
import downloadIcon from "@icon/download-alt.svg";

const Header = (props) =>  {
	const { type } = props;
	const [isAuthorInfoVisible, setAuthorInfoVisible] = useState(false);

	let isLoggedIn = false;

	let editorItems = [
		{
			icon: elementorIcon,
			text: 'Elementor',
			url: '#',
		},
		{
			icon: directoristIcon,
			text: 'Direrctorist',
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
						<NavLink to="/template-pack" className={`templatiq__header__link`} activeClassName="active">
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
									Adam
								</a>
								{
									isAuthorInfoVisible &&
									<div className="templatiq__header__author__info">
										<div className="templatiq__header__author__info__item">
											<a href="#" className="templatiq__header__author__info__link active">
												<ReactSVG src={ heartIcon } width={14} height={14} />
												My Favorites
											</a>
										</div>
										<div className="templatiq__header__author__info__item">
											<a href="#" className="templatiq__header__author__info__link">
												<ReactSVG src={ downloadIcon } width={14} height={14} />
												My Downloads
											</a>
										</div>
										<div className="templatiq__header__author__info__item">
											<a href="#" className="templatiq__header__author__info__link">
												<ReactSVG src={ cartIcon } width={14} height={14} />
												My Purchase
											</a>
										</div>
										<div className="templatiq__header__author__info__item">
											<a href="#" className="templatiq__header__author__info__link">
												<ReactSVG src={ settingsIcon } width={14} height={14} />
												Manage Account
											</a>
										</div>
										<div className="templatiq__header__author__info__item templatiq__header__author__info__item--logout">
											<a href="#" className="templatiq__header__author__info__link">
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
