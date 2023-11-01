export default function addAnchorTagToUrl( text ) {
	// Regular expression to match URLs in the text
	const urlRegex = /(https?:\/\/[^\s]+)/g;

	// Replace each matched URL with an anchor tag
	const replacedText = text.replace(
		urlRegex,
		'<a href="$1" target="_blank">$1</a>'
	);

	return replacedText;
}
