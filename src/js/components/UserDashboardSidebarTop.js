import ReactSVG from 'react-inlinesvg';
import rotateRight from '@icon/rotate-right.svg';
export default function UserDashboardSidebarTop( props ) {
	const { moduleState, queryClient } = props;
	function handleRefreshResponse( e ) {
		e.preventDefault();
		queryClient.invalidateQueries( [
			`template-market-responses-${ moduleState?.responseQueryKey }`,
		] );
		queryClient.invalidateQueries( [ `template-market-response-form` ] );
		queryClient.invalidateQueries( [
			`template-market-${ moduleState?.messageQueryKey }`,
		] );
	}
	return (
		<div className="template-market-user-sidebar-top">
			<h2 className="template-market-sidebar__title">List of Messages</h2>
			<a
				href="#"
				className="template-market-sidebar__quick-action-link template-market-sidebar__quick-action-refresh"
				onClick={ ( e ) => handleRefreshResponse( e ) }
			>
				<ReactSVG src={ rotateRight } />
			</a>
		</div>
	);
}
