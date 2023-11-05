export default function Badge( { type, text, modifier } ) {
	return (
		<span
			className={ ` template-market-badge template-market-badge-${ type } ${ modifier }` }
		>
			{ text }
		</span>
	);
}
