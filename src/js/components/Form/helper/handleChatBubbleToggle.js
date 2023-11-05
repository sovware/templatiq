export default function handleChatBubbleToggle(
	setDisplayChatBubble,
	setValue,
	displayChatBubble,
	setToggleSwitch,
	toggleSwitch
) {
	setDisplayChatBubble( ! displayChatBubble );
	setValue( 'displayChatBubble', ! displayChatBubble );
	setToggleSwitch( toggleSwitch === '0' ? '1' : '0' );
}
