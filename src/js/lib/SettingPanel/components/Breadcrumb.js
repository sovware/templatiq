export default function Breadcrumb( {
	routeLocation,
	routeList,
	rootRoutePath,
} ) {
	const currentRoutePath = routeLocation.pathname;

	const activeRoutes = routeList.filter( ( route ) => {
		let routePath = `${ rootRoutePath }/${ route.path }`;
		return routePath === currentRoutePath;
	} );

	if ( ! activeRoutes.length ) {
		return '';
	}

	const titleCase = ( item ) =>
		item.charAt( 0 ).toUpperCase() + item.substring( 1 ).toLowerCase();
	const wordCase = ( item ) => item.split( '-' ).map( titleCase ).join( ' ' );

	const activeRoute = activeRoutes[ 0 ];
	const activeRoutePath = `${ rootRoutePath }/${ activeRoute.path }`;
	const routes = activeRoutePath
		.split( '/' )
		.filter( ( item ) => item )
		.map( wordCase );

	return (
		<div className="templatiq-settings-panel-breadcrumb">
			{ routes.map( ( routeLabel, index, items ) => {
				const isLastItem = index + 1 === items.length;

				return (
					<div key={ index }>
						<span
							className={ `templatiq-breadcrumb-label${
								isLastItem ? ' --is-active' : ''
							}` }
						>
							{ routeLabel }
						</span>

						{ ! isLastItem && (
							<span className="templatiq-breadcrumb-label templatiq-breadcrumb-separator">
								&#x3E;
							</span>
						) }
					</div>
				);
			} ) }
		</div>
	);
}
