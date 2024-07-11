export default function sendPostMessage( data ) {
	const frame = document.getElementById( 'templatiq-library-preview' );

	frame.contentWindow.postMessage(
		{
			call: 'starterTemplatePreviewDispatch',
			value: data,
		},
		'*'
	);
}
