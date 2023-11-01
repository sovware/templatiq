import ReactSVG from 'react-inlinesvg';
import times from '@icon/times.svg';
import minusSolid from '@icon/minus-solid.svg';

export default function ChatFormClose( props ) {
	const { moduleState, setModuleState } = props;
	function handleCloseChatForm( e ) {
		e.preventDefault();
		setModuleState( {
			...moduleState,
			chatBubble: {
				...moduleState.chatBubble,
				isChatFormActive: moduleState.chatBubble.canCloseChatForm
					? false
					: true,
				isChatFormMinimized: moduleState.chatBubble.canCloseChatForm
					? false
					: true,
			},
		} );
	}

	return (
		<a
			href="#"
			className="helpgent-chatForm-close-btn"
			onClick={ ( e ) => handleCloseChatForm( e ) }
		>
			<ReactSVG
				src={
					moduleState.chatBubble.canCloseChatForm ? times : minusSolid
				}
			/>
		</a>
	);
}
