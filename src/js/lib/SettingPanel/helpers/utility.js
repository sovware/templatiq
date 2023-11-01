export const genarateRoutes = ( menus, parent ) => {
	let routes = [];

	if ( ! Array.isArray( menus ) ) {
		return routes;
	}

	const generatePath = ( label ) => label.toLowerCase().replace( /\s/g, '-' );

	menus.forEach( ( menu ) => {
		if ( ! isObject( menu ) ) {
			return;
		}

		if ( 'menu' === menu.type ) {
			let routePath = menu.label ? generatePath( menu.label ) : '';

			if ( parent && parent.label ) {
				routePath = `${ generatePath( parent.label ) }/${ routePath }`;
			}

			menu.path = routePath;
			routes.push( { ...menu, path: routePath } );
		}

		if ( 'submenu' === menu.type && Array.isArray( menu.submenu ) ) {
			const subRoutes = genarateRoutes( menu.submenu, menu );
			menu.path = menu.label ? generatePath( menu.label ) : '';
			menu.grandChildPath = subRoutes.length ? subRoutes[ 0 ].path : '';
			routes = [ ...routes, ...subRoutes ];
		}
	} );

	return routes;
};

export const isObject = ( data ) => {
	if ( ! data ) {
		return false;
	}

	if ( typeof data !== 'object' ) {
		return false;
	}

	if ( Array.isArray( data ) ) {
		return false;
	}

	return true;
};

export const titleCase = ( item ) =>
	item.charAt( 0 ).toUpperCase() + item.substring( 1 ).toLowerCase();
const slugToLabel = ( item ) => item.split( '-' ).map( titleCase ).join( ' ' );

export const sanitizePath = ( path ) => {
	return path.replace( /^\/+/, '' ).replace( /\/+$/, '' );
};

export const generateBreadcrumb = ( path ) => {
	return path.split( '/' ).map( slugToLabel ).join( ' > ' );
};

export const hasMathInText = ( keyword, text ) => {
	const matches = keyword.split( ' ' ).filter( ( keywordPart ) => {
		if ( ! keywordPart ) {
			return false;
		}

		const matches = text
			.toLowerCase()
			.split( ' ' )
			.map( ( item ) => item.match( keywordPart ) )
			.filter( ( item ) => item );

		return matches.length;
	} );

	return matches.length ? true : false;
};

export function getErrorMessage( inputKey, form, rules ) {
	const {
		formState: { errors },
	} = form;

	if ( typeof errors[ inputKey ] === 'undefined' ) {
		return '';
	}

	const error = errors[ inputKey ];
	const rule = rules[ error.type ] ? rules[ error.type ] : '';

	const errorMessages = {
		required: `The input is required`,
		min: `The input must be at least ${ rule }`,
		max: `The input must not greater then ${ rule }`,
		minLength: `The input length must be at least ${ rule }`,
		maxLength: `The input length must not greater then ${ rule }`,
		pattern: `The input has invalid data`,
		validate: `The input has invalid data`,
	};

	if ( ! errorMessages[ error.type ] ) {
		return '';
	}

	return errorMessages[ error.type ];
}

export default {
	genarateRoutes,
	isObject,
	titleCase,
	sanitizePath,
	generateBreadcrumb,
	hasMathInText,
	getErrorMessage,
};
