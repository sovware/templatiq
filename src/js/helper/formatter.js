function formatDate( formatType, date, options ) {
	const dataObject = new Date( date );
	const formattedDate = dataObject.toLocaleDateString( formatType, options );
	return formattedDate;
}

function formatTimeAsPlayer( time ) {
	if ( typeof time !== 'number' || isNaN( time ) ) {
		return '';
	}

	const minutes = Math.floor( time / 60 );
	const seconds = Math.ceil( time % 60 );

	const formattedMinutes = String( minutes ).padStart( 2, '0' );
	const formattedSeconds = String( seconds ).padStart( 2, '0' );

	return `${ formattedMinutes }:${ formattedSeconds }`;
}

function formatBytes( bytes ) {
	let numberByte = parseFloat( bytes );
	let sizes = [ 'bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
	let index = 0;
	if ( numberByte !== 0 ) {
		index = Math.floor( Math.log( numberByte ) / Math.log( 1024 ) );
	}
	let formatedBytes = {
		value: ( numberByte / Math.pow( 1024, index ) ).toFixed( 2 ) * 1,
		size: sizes[ index ],
	};

	return `${ ( numberByte / Math.pow( 1024, index ) ).toFixed( 2 ) * 1 } ${
		sizes[ index ]
	}`;
}

// function formatSecondsAsCountdown(timeInSeconds) {
//     if (typeof timeInSeconds !== 'number') {
//         return '';
//     }

//     const seconds = Math.ceil(timeInSeconds % 60);
//     const minutes = Math.floor(timeInSeconds / 60);

//     const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
//     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

export { formatDate, formatTimeAsPlayer, formatBytes };
