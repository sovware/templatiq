let frame;

export default function handlePictureUpload() {
	// If the media frame already exists, reopen it.
	if ( frame && frame.el ) {
		frame.remove();
		frame = undefined;
	}

	// Create a new media frame
	frame = wp.media( {
		title: 'Select or Upload Media Of Your Chosen Persuasion',
		button: {
			text: 'Use this media',
		},
		library: {
			type: [ 'image' ],
		},
		multiple: false, // Set to true to allow multiple files to be selected
		uploader: {
			params: {
				type: 'image', // Restrict to image files
			},
		},
	} );

    const isValid = ( attachment ) => {
        return true;
    };

	frame.on( 'select', function () {
		let attachment =
			frame.state().get( 'selection' ).first() &&
			frame.state().get( 'selection' ).first().toJSON();


        if ( ! isValid( attachment ) ) {
            return;
        }

        

		frame = undefined;
        return attachment;
	} );

	// Finally, open the modal on click
	frame.open();
}