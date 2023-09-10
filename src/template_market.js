// async function logMovies() {
// 	const response = await fetch("http://one-base-theme.local/wp-json/template-market/import/page/?title=kkkjkjkjkj&id=3434");
// 	const movies = await response.json();
// 	console.log(movies);
//   }

//   logMovies();

console.log(template_market_obj.rest_args)

// jQuery.ajax( {
//     url:'http://one-base-theme.local/wp-json/template-market/import/page/',
//     method: 'GET',
//     beforeSend: function ( xhr ) {
//         xhr.setRequestHeader( 'X-WP-Nonce', template_market_obj.rest_args.nonce );
//     },
//     data:{
//         'title' : 'Hello Moon SUn',
// 		'id': 33333
//     }
// } ).done( function ( response ) {
//     console.log( response );
// } );