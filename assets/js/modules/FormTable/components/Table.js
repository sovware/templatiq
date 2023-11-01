import { useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { getGlobalState } from '@helper/utils.js';
import PropTypes from 'prop-types';
import { TableStyle } from './style.js';
import { HelpgentTableStyle } from '@root/style';
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
			<div className="helpgent-table-wrap helpgent-table-forms-list helpgent-table-responsive">
				<HelpgentTableStyle className="helpgent-table">
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
									<div className="helpgent-table-loader">
										<Spinner />
									</div>
								</td>
							</tr>
						) }
					</tbody>
				</HelpgentTableStyle>
			</div>
			{ total > perPage && (
				<ReactPaginate
					breakLabel="..."
					onPageChange={ handlePageClick }
					nextLabel={ <ReactSVG src={ angleRight } /> }
					previousLabel={ <ReactSVG src={ angleLeft } /> }
					pageRangeDisplayed={ 3 }
					pageCount={ Math.ceil( total / perPage ) }
					previousClassName="helpgent-pagination__item"
					previousLinkClassName="helpgent-pagination__link helpgent-pagination__control"
					nextClassName="helpgent-pagination__item"
					nextLinkClassName="helpgent-pagination__link helpgent-pagination__control"
					containerClassName="helpgent-pagination"
					pageClassName="helpgent-pagination__item"
					pageLinkClassName="helpgent-pagination__link"
					activeLinkClassName="helpgent-pagination__active"
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
