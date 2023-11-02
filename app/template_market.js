jQuery.ajax( {
    url:'http://template-market.local/wp-json/template-market/import/page/',
    method: 'POST',
    beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', template_market_obj.rest_args.nonce );
    },
    data:{
        'title' : 'OneBase - Gaming',
		'item_id' : 696,
		'builder' : 'elementor'
    }
} ).done( function ( response ) {
    console.log( response );
} );