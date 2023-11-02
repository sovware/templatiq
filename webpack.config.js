const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { log } = require( 'console' );
const HELPGENT_NAMESPACE = '@helpgent/';

const devHost = 'helpgent.test';

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
				if ( request.startsWith( HELPGENT_NAMESPACE ) ) {
					return [
						'helpgent',
						camelCaseDash(
							request.substring( HELPGENT_NAMESPACE.length )
						),
					];
				}
			},
			requestToHandle( request ) {
				if ( request.startsWith( HELPGENT_NAMESPACE ) ) {
					return `helpgent/${ camelCaseDash(
						request.substring( HELPGENT_NAMESPACE.length )
					) }`;
				}
			},
		} ),
	],
	resolve: {
		alias: {
			'@helpgent/queryStore': path.resolve(
				__dirname,
				'assets/js/queryStore'
			),
			'@modules': path.resolve( __dirname, 'assets/js/modules' ),
			'@constants': path.resolve( __dirname, 'assets/js/constants.js' ),
			'@lib': path.resolve( __dirname, 'assets/js/lib' ),
			'@root/style': path.resolve( __dirname, 'assets/js/style.js' ),
			'@context': path.resolve( __dirname, 'assets/js/Context' ),
			'@components': path.resolve( __dirname, 'assets/js/components' ),
			'@hooks': path.resolve( __dirname, 'assets/js/hooks' ),
			'@helper': path.resolve( __dirname, 'assets/js/helper' ),
			'@icon': path.resolve( __dirname, 'assets/svg/icon' ),
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
