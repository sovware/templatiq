export default function Badge( { type, text, modifier } ) {
	return (
		<span
			className={ ` helpgent-badge helpgent-badge-${ type } ${ modifier }` }
		>
			{ text }
		</span>
	);
}
