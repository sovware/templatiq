import { HeaderStyle, HeaderNavStyle, HeaderActionStyle } from "./style";

import Logo from "@images/logo.svg";

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
					<ul className="templatiq__header__items">
						<li className="templatiq__header__item">
							<a href="/template-pack" className={`templatiq__header__link`}>Template Pack</a>
						</li>
						<li className="templatiq__header__item">
							<a href="/pages" className={`templatiq__header__link}`}>Pages</a>
						</li>
						<li className="templatiq__header__item">
							<a href="/blocks" className={`templatiq__header__link`}>Blocks</a>
						</li>
					</ul>
				</HeaderNavStyle>
				<HeaderActionStyle className="templatiq__header__action">
					<div className="templatiq__header__action__item">
						<a href="#" className="templatiq__header__action__link">Elementor</a>
					</div>
					<div className="templatiq__header__action__item">
						{isLoggedIn ? 
							<a href="#" className="templatiq__header__action__link"><i className="fa fa-user"></i>Logout</a> : 
							<a href="#" className="templatiq__header__action__link"><i className="fa fa-user"></i>Login</a> 
						}
					</div>
				</HeaderActionStyle>
			</div>
		</HeaderStyle>
	);
}

export default Header;
