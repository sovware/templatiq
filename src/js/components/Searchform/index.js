
import ReactSVG from 'react-inlinesvg';

import { SearchformStyle } from './style';

import searchIcon from "@icon/search.svg";

export default function Searchform() {
	
	return (
		<SearchformStyle className="templatiq__content__top__searchbox">
			<button className="templatiq__content__top__searchbox__button">
				<ReactSVG src={ searchIcon } width={18} height={18} />
			</button>
			<input type="text" className="templatiq__content__top__searchbox__input" placeholder="Search " />
		</SearchformStyle>
	);
}
