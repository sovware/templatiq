import { useState } from 'react';
// import avatar from '../../../assets/img/user-placeholder.png';

function Image( { src, alt = '' } ) {
	const [ isError, setIsError ] = useState( false );
	let imageSrc = src;

	// isError ? ( imageSrc = avatar ) : null;

	function onError() {
		setIsError( true );
	}

	return '';

	// return <img src={ imageSrc } alt={ alt } onError={ onError } />;
}

export default Image;
