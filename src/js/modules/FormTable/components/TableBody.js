import { lazy, Suspense, useState } from '@wordpress/element';
import { Spinner, FormToggle } from '@wordpress/components';
import { formatDate } from '@helper/formatter';
import useUpdateMutation from '@hooks/useUpdateMutation.js';
import TitleBox from './TitleBox';
import TableActions from './TableActions';
import handleUpdateFormStatus from '../helper/handleUpdateFormStatus';
import { getGlobalState } from '@helper/utils';
import FormTableStatus from './FormTableStatus';
import WelcomeBox from './WelcomeBox';
import { WelcomeBoxStyleWrap } from './style';
import handleTextSelect from '../helper/handleTextSelect';
export default function TableBody( props ) {
	const { routeLink: Link } = getGlobalState(
		'template-market_router_references',
		null
	);
	const { forms, renameFormId, setRenameFormId, isFetchError, baseApiRoute } =
		props;
	if ( isFetchError ) {
		return <span>{ formErrorMessage }</span>;
	}

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	function handleToggleFormStatus( id, status ) {
		const { mutateAsync: updateStatusFormMutation, isLoading } =
			useUpdateMutation( `${ baseApiRoute }/${ id }/status` );

		handleUpdateFormStatus( id, updateStatusFormMutation, forms, status );
	}

	return forms.length !== 0 ? (
		forms.map( ( form ) => (
			<tr key={ form.id }>
				<td>
					<TitleBox
						renameFormId={ renameFormId }
						setRenameFormId={ setRenameFormId }
						form={ form }
						baseApiRoute={ baseApiRoute }
					/>
				</td>
				<td className="template-market-form-shortcode">
					<label>
						<input
							type="text"
							readOnly
							value={ `[template-market-form id="${ form.id }"]` }
							onClick={ handleTextSelect }
						/>
					</label>
				</td>
				<td className="template-market-form-responses">
					<Link to={ `/forms/${ form.id }/responses` }>
						{ form.total_responses }
					</Link>
				</td>
				<td className="template-market-form-date">
					{ formatDate(
						'en-US',
						form.created_at,
						dateFormatOptions
					) }
				</td>
				<td className="template-market-form-status">
					<FormTableStatus
						id={ form.id }
						status={ form.status }
						baseApiRoute={ baseApiRoute }
					/>
				</td>
				<td>
					<TableActions
						id={ form.id }
						form={ form }
						setRenameFormId={ setRenameFormId }
					/>
				</td>
			</tr>
		) )
	) : (
		<tr className="template-market-welcome-wrapper">
			<td colSpan={ 7 }>
				<WelcomeBoxStyleWrap>
					<Suspense fallback={ <Spinner /> }>
						<WelcomeBox
						// isCreatePopupOpen={ isCreatePopupOpen }
						// setCreatePopupStatus={ setCreatePopupStatus }
						/>
					</Suspense>
				</WelcomeBoxStyleWrap>
			</td>
		</tr>
	);
}
