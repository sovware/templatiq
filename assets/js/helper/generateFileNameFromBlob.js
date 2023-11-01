export default function generateFileNameFromBlob( blob ) {
	if ( ! blob instanceof Blob ) {
		return '';
	}

	const matchExt = blob.type.match( /^\w+\/([^;]+)/ );
	const ext = matchExt ? matchExt[ 1 ] : '';

	if ( ! ext ) {
		return '';
	}

	return Date.now() + '.' + ext;
}
