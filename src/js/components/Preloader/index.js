
import { PreloaderStyle } from './Style';

import Fav from '@images/fav.svg';

const Preloader = ( { style } ) => {
	const defaultStyle = { minHeight: '500px' };
	style = style ? { ...defaultStyle, ...style } : defaultStyle;

	return (
		<PreloaderStyle style={ style } className="templatiq-preloader">
			<img 
				src={ Fav } 
				alt="Logo" 
				className="templatiq-preloader__logo"
			/>
			<div className="loader"></div>
		</PreloaderStyle>
	);
};

export default Preloader;
