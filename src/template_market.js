return;

jQuery.ajax( {
    url:'http://template-market.local/wp-json/template-market/import/page/',
    method: 'GET',
    beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', template_market_obj.rest_args.nonce );
    },
    data:{
        'title' : 'dClassified',
		'id': 64,
		'builder' : 'elementor'
    }
} ).done( function ( response ) {
    console.log( response );
} );