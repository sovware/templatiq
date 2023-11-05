import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { useDebounce } from '@hooks/useDebounce';
import { useTagState } from '../context/TagStateContext';
import PopUp from '@components/PopUp';
import usePostMutation from '@hooks/usePostMutation';
import TagAddModal from './TagAddModal';
import search from '@icon/search.svg';

export default function TagHeader( props ) {
	const { total } = props;
	const { tagState, setTagState } = useTagState();
	const { currentPage } = tagState;
	const { mutateAsync: createTag, isLoading: tagCreating } =
		usePostMutation( `/template-market/admin/tag` );
	const [ searchText, setSearchText ] = useState( '' );
	const [ isActiveTagPopup, setIsActiveTagPopup ] = useState( false );
	const debouncedSearchText = useDebounce( searchText, 250 );

	function handleCancelPopup() {
		setIsActiveTagPopup( false );
	}

	useEffect( () => {
		setTagState( {
			...tagState,
			tagSearchText: debouncedSearchText,
		} );
	}, [ debouncedSearchText ] );

	return (
		<div className="template-market-crud-header template-market-d-flex">
			<div className="template-market-crud-header__left">
				<h4 className="template-market-crud-header__title">
					All Tags <span className="template-market-count">{ total }</span>{ ' ' }
				</h4>
				<a
					href="#"
					className="template-market-crud-header__add-btn template-market-btn template-market-btn-dark"
					onClick={ ( e ) => {
						e.preventDefault();
						setIsActiveTagPopup( true );
					} }
				>
					Add New Tag
				</a>
				{ isActiveTagPopup && (
					<PopUp
						title={ 'Add Tag' }
						onCancel={ handleCancelPopup }
						isActiveSubmit
						isActiveFormSubmit
						isDisableAction
						className="template-market-add-tag-modal"
					>
						<TagAddModal
							tagMutation={ createTag }
							mutationLoading={ tagCreating }
							setPopupState={ setIsActiveTagPopup }
						/>
					</PopUp>
				) }
			</div>

			<div className="template-market-crud-header__right">
				<div className="template-market-form-group template-market-form-icon-left">
					<span className="template-market-input-icon">
						<ReactSVG src={ search } />
					</span>
					<input
						type="text"
						className="template-market-form-group__element"
						placeholder="Search"
						value={ searchText }
						onChange={ ( e ) => setSearchText( e.target.value ) }
					/>
				</div>
			</div>
		</div>
	);
}
