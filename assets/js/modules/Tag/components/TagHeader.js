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
		usePostMutation( `/helpgent/admin/tag` );
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
		<div className="helpgent-crud-header helpgent-d-flex">
			<div className="helpgent-crud-header__left">
				<h4 className="helpgent-crud-header__title">
					All Tags <span className="helpgent-count">{ total }</span>{ ' ' }
				</h4>
				<a
					href="#"
					className="helpgent-crud-header__add-btn helpgent-btn helpgent-btn-dark"
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
						className="helpgent-add-tag-modal"
					>
						<TagAddModal
							tagMutation={ createTag }
							mutationLoading={ tagCreating }
							setPopupState={ setIsActiveTagPopup }
						/>
					</PopUp>
				) }
			</div>

			<div className="helpgent-crud-header__right">
				<div className="helpgent-form-group helpgent-form-icon-left">
					<span className="helpgent-input-icon">
						<ReactSVG src={ search } />
					</span>
					<input
						type="text"
						className="helpgent-form-group__element"
						placeholder="Search"
						value={ searchText }
						onChange={ ( e ) => setSearchText( e.target.value ) }
					/>
				</div>
			</div>
		</div>
	);
}
