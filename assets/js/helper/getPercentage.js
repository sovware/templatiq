export default function getPercentageValue( currentValue, totalValue ) {
	if ( isNaN( currentValue ) || isNaN( totalValue ) || totalValue === 0 ) {
		return 0;
	}

	const percentage = ( currentValue / totalValue ) * 100;
	return percentage.toFixed( 2 ).replace( /\.00$/, '' );
}
