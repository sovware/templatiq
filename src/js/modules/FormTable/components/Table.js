import { useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { getGlobalState } from '@helper/utils.js';
import PropTypes from 'prop-types';
import { TableStyle } from './style.js';
import { templatiqTableStyle } from '@root/style';
import TableBody from './TableBody.js';
import TableHead from './TableHead.js';
import ReactPaginate from 'react-paginate';
import ReactSVG from 'react-inlinesvg';
import angleLeft from '@icon/angle-left.svg';
import angleRight from '@icon/angle-right.svg';

export default function Table( props ) {
	const {
		forms,
		total,
		isFetchError,
		formErrorMessage,
		baseApiRoute,
		perPage,
		handlePageClick,
	} = props;
	const [ renameFormId, setRenameFormId ] = useState( null );
	return (
		<TableStyle>
			<div className="templatiq-table-wrap templatiq-table-forms-list templatiq-table-responsive">
				<templatiqTableStyle className="templatiq-table">
					<thead>
						<TableHead />
					</thead>
					<tbody>
						{ forms ? (
							<TableBody
								forms={ forms }
								renameFormId={ renameFormId }
								setRenameFormId={ setRenameFormId }
								isFetchError={ isFetchError }
								baseApiRoute={ baseApiRoute }
							/>
						) : (
							<tr>
								<td colSpan={ 7 }>
									<div className="templatiq-table-loader">
										<Spinner />
									</div>
								</td>
							</tr>
						) }
					</tbody>
				</templatiqTableStyle>
			</div>
			{ total > perPage && (
				<ReactPaginate
					breakLabel="..."
					onPageChange={ handlePageClick }
					nextLabel={ <ReactSVG src={ angleRight } /> }
					previousLabel={ <ReactSVG src={ angleLeft } /> }
					pageRangeDisplayed={ 3 }
					pageCount={ Math.ceil( total / perPage ) }
					previousClassName="templatiq-pagination__item"
					previousLinkClassName="templatiq-pagination__link templatiq-pagination__control"
					nextClassName="templatiq-pagination__item"
					nextLinkClassName="templatiq-pagination__link templatiq-pagination__control"
					containerClassName="templatiq-pagination"
					pageClassName="templatiq-pagination__item"
					pageLinkClassName="templatiq-pagination__link"
					activeLinkClassName="templatiq-pagination__active"
					renderOnZeroPageCount={ null }
				/>
			) }
		</TableStyle>
	);
}

Table.propTypes = {
	forms: PropTypes.array,
	isFetchError: PropTypes.bool,
	formErrorMessage: PropTypes.string,
	isCreatePopupOpen: PropTypes.bool,
	setCreatePopupStatus: PropTypes.func,
};
