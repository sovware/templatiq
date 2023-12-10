import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ReactSVG from 'react-inlinesvg';
import { CacheClearBtnStyle } from './style';

import cacheClearIcon from "@icon/fire.svg";

const CacheClearBtn = (props) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleCacheClear = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const cacheData = await apiFetch({
				path: 'templatiq/cache/clear',
				method: 'POST',
			}).then( ( res ) => {
                setIsLoading(false);
            } );
            return cacheData;
		} catch (error) {
			// Handle errors here
			console.error('Error fetching data:', error);
			throw error; // rethrow the error if needed
		}
	};

    return (
        <CacheClearBtnStyle className="templatiq__cache-clear">
            <a 
                href="#" 
                className="templatiq__header__action__link templatiq-btn" 
                onClick={handleCacheClear}
            >
                {isLoading ? 'Clearing...' : <ReactSVG src={ cacheClearIcon } width={14} height={14} />}
                
            </a>
        </CacheClearBtnStyle>
    )
}

export default CacheClearBtn;