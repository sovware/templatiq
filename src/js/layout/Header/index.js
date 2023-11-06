import ReactSVG from 'react-inlinesvg';

import { HeaderStyle, HeaderNavStyle, HeaderActionStyle } from "./style";

import Logo from "@images/logo.svg";

import userIcon from "@icon/user-solid.svg";
import fileIcon from "@icon/file-solid.svg";
import elementorIcon from "@icon/elementor.svg";

const Header = () =>  {

	let isLoggedIn = false;

	return (
		<HeaderStyle className="templatiq__header">
			<div className="templatiq__header__logo">
				<a href="#">
					<img src={Logo} alt="Logo" />
				</a>
			</div>
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
							<ReactSVG src={ fileIcon } width={18} height={18} />
							Pages
						</a>
					</li>
					<li className="templatiq__header__item">
						<a href="/blocks" className={`templatiq__header__link`}>
							<ReactSVG src={ fileIcon } width={18} height={18} />
							Blocks
						</a>
					</li>
				</HeaderNavStyle>
				<HeaderActionStyle className="templatiq__header__action">
					<div className="templatiq__header__action__item">
						<a href="#" className="templatiq__header__action__link">
							<ReactSVG src={ elementorIcon } width={24} height={24} />
							Elementor
						</a>
					</div>
					<div className="templatiq__header__action__item">
						{isLoggedIn ? 
							<a href="#" className="templatiq__header__action__link">
								<ReactSVG src={ userIcon } width={12} height={12} />
								Logout
							</a> : 
							<a href="#" className="templatiq__header__action__link">
								<ReactSVG src={ userIcon } width={12} height={12} />
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
