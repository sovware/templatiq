import ReactSVG from 'react-inlinesvg';
import { addQueryArgs } from '@wordpress/url';
import Dropdown from '@components/Dropdown';
import Image from '@components/Image.js';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, Fragment } from '@wordpress/element';
import useFetchData from '@hooks/useFetchData.js';
import { getGlobalState } from '@helper/utils';
import arrowLeft from '@icon/arrow-small-left.svg';
import pencil from '@icon/pencil.svg';
import box from '@icon/box.svg';
import ellipsisH from '@icon/ellipsis-h.svg';
import rotateRight from '@icon/rotate-right.svg';
import times from '@icon/times.svg';
export default function ConversationSidebarTop( {
	isArchiveAvailable,
	moduleState,
	setModuleState,
	queryClient,
} ) {
	const {
		navigationHook: useNavigate,
		paramsHook: useParams,
		routeLink: Link,
		routerNavLink: NavLink,
	} = getGlobalState( 'helpgent_router_references', null );
	const { id } = useParams();
	const { status, responseQueryKey, messageQueryKey, formFetchingEnabled } =
		moduleState;
	const navigate = useNavigate();
	const { data, isLoading, isError, errorMessage, isFetching } = useFetchData(
		[ 'helpgent-response-form' ],
		addQueryArgs( '/helpgent/admin/response/form', {
			form_id: id,
		} ),
		{
			queryConfig: {
				refetchOnWindowFocus: false,
				keepPreviousData: true,
				staleTime: 10000,
				enabled: formFetchingEnabled,
			},
		}
	);

	if ( isError ) {
		navigate( `/forms` );
	}

	useEffect( () => {
		if ( ! data ) {
			return;
		}

		setModuleState( ( currentValue ) => ( {
			...currentValue,
			formResponse: data.form,
		} ) );
	}, [ data ] );

	const totalResponseCount =
		data &&
		parseInt( data.form.total_response.completed ) +
			parseInt( data.form.total_response.incompleted );

	const getDropdownOption = () => {
		let moreDropdown = [
			{
				name: 'archive',
				icon: box,
				text: 'Archive',
			},
		];

		return moreDropdown;
	};

	function handleRefreshResponse( e ) {
		e.preventDefault();
		queryClient.invalidateQueries( [
			`helpgent-responses-${ responseQueryKey }`,
		] );
		queryClient.invalidateQueries( [ `helpgent-response-form` ] );
		queryClient.invalidateQueries( [ `helpgent-${ messageQueryKey }` ] );
	}

	function handleQuickActionDropdown( e, name ) {
		e.preventDefault();
		switch ( name ) {
			case 'archive':
				setModuleState( {
					...moduleState,
					status: 'archive',
					responseQueryKey: 'archive',
				} );
				queryClient.invalidateQueries( [
					`helpgent-responses-${ responseQueryKey }`,
				] );
				queryClient.invalidateQueries( [
					`helpgent-${ messageQueryKey }`,
				] );
				break;
			default:
				break;
		}
	}

	function handleCloseArchive() {
		setModuleState( {
			...moduleState,
			status: null,
			responseQueryKey: 'all',
		} );
		queryClient.invalidateQueries( [
			`helpgent-responses-${ responseQueryKey }`,
		] );
		queryClient.invalidateQueries( [ `helpgent-${ messageQueryKey }` ] );
	}

	return (
		<div className="helpgent-sidebar__top">
			<Link to="/forms" className="helpgent-sidebar__back">
				<ReactSVG src={ arrowLeft } /> Back to all forms
			</Link>
			<div className="helpgent-sidebar__content helpgent-d-flex helpgent-space-between">
				<div className="helpgent-sidebar__question helpgent-d-flex">
					{ data && data.form.featured_image ? (
						<Image
							src={ data?.form?.featured_image }
							alt="Helpgent Media"
						/>
					) : (
						<span
							className="helpgent-form-color-box"
							style={ {
								backgroundColor: data && data?.form?.color,
							} }
						></span>
					) }

					<span className="helpgent-sidebar__question-title">
						{ data && data.form.title }
					</span>
				</div>
				<div className="helpgent-sidebar__action">
					<Link to={ `/forms/${ id }/edit` }>
						<ReactSVG src={ pencil } />
					</Link>
				</div>
			</div>
			{ status !== 'archive' && (
				<div className="helpgent-sidebar__navigation-wrap helpgent-d-flex">
					<div className="helpgent-sidebar__navigation">
						<NavLink
							to={ `/forms/${ id }/responses` }
							className={ ( { isActive } ) =>
								isActive ? 'helpgent-active' : ''
							}
						>
							Responses ({ totalResponseCount })
						</NavLink>
						<NavLink
							to={ `/forms/${ id }/summary` }
							className={ ( { isActive } ) =>
								isActive ? 'helpgent-active' : ''
							}
						>
							Summary
						</NavLink>
					</div>
					{  }
					<div className="helpgent-sidebar__quick-action helpgent-d-flex">
						<Link
							to={ '#' }
							className="helpgent-sidebar__quick-action-link helpgent-sidebar__quick-action-refresh"
							onClick={ ( e ) => handleRefreshResponse( e ) }
						>
							<ReactSVG src={ rotateRight } />
						</Link>
						{ isArchiveAvailable && (
							<div className="helpgent-sidebar__quick-action-link helpgent-sidebar__quick-action-dropdown">
								<Dropdown
									className="helpgent-quick-action-dropdown"
									dropDownIcon={ ellipsisH }
									dropdownList={ getDropdownOption() }
									placement={ 'left' }
									handleDropdownTrigger={
										handleQuickActionDropdown
									}
									Link={ Link }
								/>
							</div>
						) }
					</div>
				</div>
			) }

			{ status === 'archive' && isArchiveAvailable && (
				<div className="helpgent-sidebar__archive helpgent-d-flex">
					<span className="helpgent-sidebar__archive-title">
						<ReactSVG src={ box } />
						<span>Archive</span>
					</span>
					<div
						className="helpgent-sidebar__archive-remove"
						onClick={ handleCloseArchive }
					>
						<ReactSVG src={ times } />
					</div>
				</div>
			) }
		</div>
	);
}
