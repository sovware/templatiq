import { useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { getGlobalState } from '@helper/utils.js';
import PropTypes from 'prop-types';
import { TableStyle } from './style.js';
import { template-marketTableStyle } from '@root/style';
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
			<div className="template-market-table-wrap template-market-table-forms-list template-market-table-responsive">
				<template-marketTableStyle className="template-market-table">
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
									<div className="template-market-table-loader">
										<Spinner />
									</div>
								</td>
							</tr>
						) }
					</tbody>
				</template-marketTableStyle>
			</div>
			{ total > perPage && (
				<ReactPaginate
					breakLabel="..."
					onPageChange={ handlePageClick }
					nextLabel={ <ReactSVG src={ angleRight } /> }
					previousLabel={ <ReactSVG src={ angleLeft } /> }
					pageRangeDisplayed={ 3 }
					pageCount={ Math.ceil( total / perPage ) }
					previousClassName="template-market-pagination__item"
					previousLinkClassName="template-market-pagination__link template-market-pagination__control"
					nextClassName="template-market-pagination__item"
					nextLinkClassName="template-market-pagination__link template-market-pagination__control"
					containerClassName="template-market-pagination"
					pageClassName="template-market-pagination__item"
					pageLinkClassName="template-market-pagination__link"
					activeLinkClassName="template-market-pagination__active"
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
