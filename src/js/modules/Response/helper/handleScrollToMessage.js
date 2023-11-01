export default function handleScrollToMessage( id ) {
	const messageItem = document.getElementById( id );
	if ( messageItem ) {
		messageItem.scrollIntoView( {
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		} );
		messageItem.classList.add( 'wpwax-vm-message-focused' );
		setTimeout( () => {
			messageItem.classList.remove( 'wpwax-vm-message-focused' );
		}, '1000' );
	}
}
