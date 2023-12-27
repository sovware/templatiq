import { useState } from '@wordpress/element';
import postData from '@helper/postData';
import ReactSVG from 'react-inlinesvg';
import { CacheClearBtnStyle } from './style';

import cacheClearIcon from '@icon/sync.svg';

const CacheClearBtn = ( props ) => {
	const [ isLoading, setIsLoading ] = useState( false );

	const cacheClearEndPoint = 'templatiq/cache/clear';

	// Cache Clear
	const handleCacheClear = async ( e ) => {
		e.preventDefault();
		setIsLoading( true );
		postData( cacheClearEndPoint ).then( ( data ) => {
			setIsLoading( false );
		} );
	};

	return (
		<CacheClearBtnStyle className="templatiq__cache-clear">
			<a
				href="#"
				className="templatiq__header__action__link templatiq-btn"
				onClick={ handleCacheClear }
			>
				<ReactSVG
					src={ cacheClearIcon }
					width={ 14 }
					height={ 14 }
					className={ isLoading ? 'cache-clearing' : '' }
				/>
			</a>
		</CacheClearBtnStyle>
	);
};

export default CacheClearBtn;
