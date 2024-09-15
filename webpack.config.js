const path = require( 'path' );
const CopyWebpackPlugin = require('copy-webpack-plugin');
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
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
const chunkUniqueKey = Date.now().toString();

module.exports = {
	...defaultConfig,
	entry: {
		'js/admin': './src/js/admin/index.js',
		'js/index': './src/js/frontend/index.js',
		'js/onboarding': './src/js/onboarding/index.js',
		'css/global': './src/sass/global.scss',
		'vendor/elementor-style': './assets-vendor/elementor-editor.css',
		'vendor/elementor-script': './assets-vendor/elementor-editor.js',
	},
	output: {
		path: path.resolve( __dirname, './assets' ),
		filename: '[name].js',
		chunkFilename: '[name].js?ver=' + chunkUniqueKey,
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
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/svg', to: 'svg' },
			],
		}),
	],
	resolve: {
		alias: {
			'@root/style': path.resolve( __dirname, 'src/js/style.js' ),
			'@components': path.resolve( __dirname, 'src/js/components' ),
			'@modules': path.resolve( __dirname, 'src/js/modules' ),
			'@layout': path.resolve( __dirname, 'src/js/layout' ),
			'@data': path.resolve( __dirname, 'src/js/data' ),
			'@store': path.resolve( __dirname, 'src/js/store' ),
			'@hooks': path.resolve( __dirname, 'src/js/hooks' ),
			'@helper': path.resolve( __dirname, 'src/js/helper' ),
			'@icon': path.resolve( __dirname, 'src/svg/icon' ),
			'@images': path.resolve( __dirname, 'src/svg' ),
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
