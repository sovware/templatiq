const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { log } = require( 'console' );
const TEMPLATIQ_NAMESPACE = '@templatiq/';

const devHost = 'templatiq.test';

/**
 * Given a string, returns a new string with dash separators converted to
 * camelCase equivalent. This is not as aggressive as `_.camelCase` in
 * converting to uppercase, where Lodash will also capitalize letters
 * following numbers.
 *
 * @param {string} string Input dash-delimited string.
 * @return {string} Camel-cased string.
 */
function camelCaseDash( string ) {
	return string.replace( /-([a-z])/g, ( _, letter ) => letter.toUpperCase() );
}

module.exports = {
	...defaultConfig,
	entry: {
		'js/admin': './src/js/admin/index.js',
		'js/index': './src/js/frontend/index.js',
		'css/global': './src/sass/global.scss',
	},
	output: {
		path: path.resolve( __dirname, './assets' ),
		filename: '[name].js',
		clean: false,
	},
	plugins: [
		...defaultConfig.plugins.filter(
			( plugin ) =>
				plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
		),
		new DependencyExtractionWebpackPlugin( {
			requestToExternal( request ) {
				if ( request.startsWith( TEMPLATIQ_NAMESPACE ) ) {
					return [
						'templatiq',
						camelCaseDash(
							request.substring( TEMPLATIQ_NAMESPACE.length )
						),
					];
				}
			},
			requestToHandle( request ) {
				if ( request.startsWith( TEMPLATIQ_NAMESPACE ) ) {
					return `templatiq/${ camelCaseDash(
						request.substring( TEMPLATIQ_NAMESPACE.length )
					) }`;
				}
			},
		} ),
	],
	resolve: {
		alias: {
			'@templatiq/queryStore': path.resolve(
				__dirname,
				'src/js/queryStore'
			),
			'@modules': path.resolve( __dirname, 'src/js/modules' ),
			'@constants': path.resolve( __dirname, 'src/js/constants.js' ),
			'@lib': path.resolve( __dirname, 'src/js/lib' ),
			'@root/style': path.resolve( __dirname, 'src/js/style.js' ),
			// '@context': path.resolve( __dirname, 'src/js/Context' ),
			'@components': path.resolve( __dirname, 'src/js/components' ),
			'@layout': path.resolve( __dirname, 'src/js/layout' ),
			'@hooks': path.resolve( __dirname, 'src/js/hooks' ),
			'@helper': path.resolve( __dirname, 'src/js/helper' ),
			'@store': path.resolve( __dirname, 'src/js/store' ),
			'@data': path.resolve( __dirname, 'src/js/data' ),
			'@icon': path.resolve( __dirname, 'src/svg/icon' ),
			'@images': path.resolve( __dirname, 'src/images' ),
			'@assets': path.resolve( __dirname, 'assets' ),
		},
	},
	devServer: {
		devMiddleware: {
			writeToDisk: true,
		},
		allowedHosts: 'auto',
		port: 8887,
		host: devHost,
		proxy: {
			'./build': {
				pathRewrite: {
					'^./build': '',
				},
			},
		},
		headers: { 'Access-Control-Allow-Origin': '*' },
	},
};
