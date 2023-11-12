import React, { useState } from 'react';
import ReactSVG from 'react-inlinesvg';
import Dropdown from '@components/Dropdown';

import { HeaderStyle, HeaderNavStyle, HeaderActionStyle } from "./style";

import Logo from "@images/logo.svg";
import Fav from "@images/fav.svg";

import userIcon from "@icon/user-alt.svg";
import fileIcon from "@icon/file-solid.svg";
import pagesIcon from "@icon/pages.svg";
import blocksIcon from "@icon/blocks.svg";

import chevronIcon from "@icon/chevron-down-solid.svg";
import backIcon from "@icon/arrow-left.svg";
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";


const Header = () =>  {

	let isLoggedIn = true;
	let templateDetailsPage = false;

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

	return (
		<HeaderStyle className="templatiq__header">
			{
				templateDetailsPage ?
				<div className="templatiq__header__details">
					<a href="#" className="templatiq__header__details__logo">
						<img src={Fav} alt="Logo" />
					</a>
					<a href="#" className="templatiq__header__details__return">
						<ReactSVG src={ backIcon } width={12} height={12} />
						Back to Library
					</a>
				</div> : 
				<div className="templatiq__header__logo">
					<a href="#">
						<img src={Logo} alt="Logo" />
					</a>
				</div>
			}
				
			<div className="templatiq__header__content">
				<HeaderNavStyle className="templatiq__header__nav">
					<li className="templatiq__header__item">
						<a href="/template-pack" className={`templatiq__header__link active`}>
							<ReactSVG src={ fileIcon } width={18} height={18} />
							Template Pack
						</a>
					</li>
					<li className="templatiq__header__item">
						<a href="/pages" className={`templatiq__header__link`}>
							<ReactSVG src={ pagesIcon } width={18} height={18} />
							Pages
						</a>
					</li>
					<li className="templatiq__header__item">
						<a href="/blocks" className={`templatiq__header__link`}>
							<ReactSVG src={ blocksIcon } width={18} height={18} />
							Blocks
						</a>
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
							<a href="#" className="templatiq__header__action__link templatiq-btn">
								<ReactSVG src={ userIcon } width={14} height={14} />
								Logout
							</a> : 
							<a href="#" className="templatiq__header__action__link templatiq-btn">
								<ReactSVG src={ userIcon } width={14} height={14} />
								Login
							</a> 
						}
					</div>
				</HeaderActionStyle>
			</div>
		</HeaderStyle>
	);
}

export default Header;
