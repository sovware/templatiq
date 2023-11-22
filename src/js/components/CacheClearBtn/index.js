import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { CacheClearBtnStyle } from './style';

import cacheClearIcon from "@icon/fire.svg";

const CacheClearBtn = (props) => {
	const [isLoading, setIsLoading] = useState(false);

    const handleCacheClear = async () => {
		setIsLoading(true);
		const response = await fetch(`${template_market_obj.rest_args.endpoint}/cache/clear`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': template_market_obj.rest_args.nonce,
			},
		});
	
		if (response.ok) {
			setIsLoading(false);
			console.log('Cache Cleared')
		}

		if (!response.ok) {
			setIsLoading(false);
			throw new Error('Cache Clear failed');
		}

		const data = response.json();
		console.log('Cache Clear Response: ', data)
	
		return data;
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