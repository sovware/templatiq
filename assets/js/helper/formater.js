function formatTimeAsCountdown( timeInSeconds ) {
	return typeof timeInSeconds !== 'number'
		? new Date( timeInSeconds * 1000 ).toISOString().substring( 14, 5 )
		: '00:00';
}

function formatSecondsAsCountdown( timeInSeconds ) {
	if ( typeof timeInSeconds !== 'number' ) {
		return '';
	}

	const seconds = Math.ceil( timeInSeconds % 60 );
	const minutes = Math.floor( timeInSeconds / 60 );

	const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

	return `${ formattedMinutes }:${ formattedSeconds }`;
}

function formatTime( timeInSeconds ) {
	const minutes = Math.floor( timeInSeconds / 60 );
	const remainingSeconds = timeInSeconds % 60;

	const minuteString = minutes > 0 ? minutes + ' minutes ' : '';
	const secondString = remainingSeconds + ' seconds';

	return minuteString + secondString;
}

function formatBytes( bytes ) {
	const numberBytes = parseFloat( bytes );
	const sizes = [ 'bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
	let index = 0;

	if ( numberBytes !== 0 ) {
		index = Math.floor( Math.log( numberBytes ) / Math.log( 1024 ) );
	}

	const formattedBytes = {
		value: ( numberBytes / Math.pow( 1024, index ) ).toFixed( 2 ) * 1,
		size: sizes[ index ],
	};

	return formattedBytes;
}

export {
	formatSecondsAsCountdown,
	formatTime,
	formatTimeAsCountdown,
	formatBytes,
};
