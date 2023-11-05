import Image from '@components/Image.js';
import { ChatBubbleStyle } from '../style';
import chatBubblePlaceholder from '../../../assets/img/chat-bubble-placeholder.gif';
export default function ChatBubble( props ) {
	const { moduleState, setModuleState } = props;
	const { bubbleSettings, isClientModeActive } = props;
	const {
		shape,
		position,
		overlay_text,
		size,
		offset_x,
		offset_y,
		border,
		background_type,
	} = bubbleSettings;
	const { color, upload } = background_type;
	const bubbleStyles = {
		'--template-market-bubble-border-color':
			border.has_border === '1' ? border.color : 'none',
		'--template-market-bubble-box-shadow':
			border.has_border === '1'
				? 'inset 0 3px 6px rgba(0, 0, 0, 0.16)'
				: 'none',
		'--template-market-bubble-offset-x': `${ offset_x }px`,
		'--template-market-bubble-offset-y': `${ offset_y }px`,
		'--template-market-bubble-bg-color': color || '#fff',
	};
	// console.log(moduleState);

	function handleTriggerChatBubble() {
		setModuleState( {
			...moduleState,
			chatBubble: {
				...moduleState.chatBubble,
				isChatFormActive: true,
			},
		} );
	}

	const CustomChatBubble =
		moduleState &&
		moduleState.customChatBubble &&
		moduleState.customChatBubble.App
			? moduleState.customChatBubble.App
			: null;

	if ( CustomChatBubble ) {
		return (
			<CustomChatBubble
				{ ...props }
				moduleState={ moduleState }
				setModuleState={ setModuleState }
			/>
		);
	}

	return (
		<ChatBubbleStyle
			className={ `template-market-chat-bubble template-market-chat-bubble--${ shape } template-market-chat-bubble--${ position } template-market-chat-bubble--${ size }` }
			style={ bubbleStyles }
			onClick={ isClientModeActive ? handleTriggerChatBubble : null }
		>
			{ overlay_text !== '' && (
				<span className="template-market-chat-bubble__overlay-text">
					{ overlay_text }
				</span>
			) }
			{ upload?.media?.url !== '' && upload?.media?.type !== '' && (
				<div
					className={ `template-market-chat-bubble__background template-market-chat-bubble__background--${
						upload?.media?.type
							? upload?.media?.type
							: 'placeholder'
					} ${
						color !== ''
							? 'template-market-chat-bubble__background--colored'
							: ''
					}` }
				>
					{ upload?.media?.type === 'image' ? (
						<Image
							src={ upload?.media?.url }
							alt="template-market Media"
						/>
					) : upload?.media?.type === 'video' ? (
						<video autoPlay>
							<source
								src={ upload?.media?.url }
								type="video/mp4"
							/>
						</video>
					) : color === '' ? (
						<Image
							src={ chatBubblePlaceholder }
							alt="template-market Media"
						/>
					) : null }
				</div>
			) }

			{ color === '' &&
				upload?.media?.url === '' &&
				upload?.media?.type === '' && (
					<div
						className={ `template-market-chat-bubble__background template-market-chat-bubble__background--placeholder` }
					>
						<Image
							src={ chatBubblePlaceholder }
							alt="template-market Media"
						/>
					</div>
				) }
		</ChatBubbleStyle>
	);
}
