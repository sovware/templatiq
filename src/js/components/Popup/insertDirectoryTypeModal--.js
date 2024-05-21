import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertDirectoryTypeModal = ( { item, onClose } ) => {
	const { template_id } = item;
	const directoryType = template_market_obj?.directory_types;

	let [ selectedTypes, setSelectedTypes ] = useState( [] );

	let closeInsertTemplateModal = ( e ) => {
		e.preventDefault();
		let templatiqRoot = document.querySelector( '.templatiq' );

		templatiqRoot && templatiqRoot.classList.remove( 'templatiq-overlay-enable' );

		onClose();
	};

	const handleTypeChange = ( type ) => {
		const updatedTypes = selectedTypes.includes( type )
			? selectedTypes.filter( ( c ) => c !== type )
			: [ ...selectedTypes, type ];

		setSelectedTypes( updatedTypes );

		return updatedTypes;
	};

	const handlePopUpForm = async ( e ) => {
		e.preventDefault();

		for ( const type of selectedTypes ) {
			// Install current type
			await installDirectoryType( type );
		}
	};

	const installDirectoryType = async ( type ) => {
		return type;
	};

	return (
		<>
			<InsertTemplateModalStyle
				className='templatiq__modal templatiq__modal--required'
			>
				<form
					className="templatiq__modal__form"
					onSubmit={ handlePopUpForm }
				>
					<div className="templatiq__modal__content">
						<h2 className="templatiq__modal__title">
							Available Directory Type
						</h2>
						<p className="templatiq__modal__desc">
							Choose the directories where you'd like to include this page. You can choose multiple directories.
						</p>
						<div className="templatiq__modal__plugins">
						{ directoryType &&
							directoryType.map(
								( type, index ) => {
									return (
										<div
											key={ index }
											className="templatiq__modal__plugin templatiq__checkbox"
										>
											<input
												id={
													'directory_' + template_id + '_' + index
												}
												name={
													'directory_' + template_id + '_' + index
												}
												type="checkbox"
												className="templatiq__modal__plugin__checkbox templatiq__checkbox__input"
												onChange={ () =>
													handleTypeChange(
														type
													)
												}
											/>

											<label
												htmlFor={
													'directory_' + template_id + '_' + index
												}
												className="templatiq__modal__plugin__label templatiq__checkbox__label"
											>
												<a
													href="#"
													className="templatiq__modal__plugin__link"
												>
													{
														type.name
													}
												</a>
											</label>
										</div>
									);
								}
							) 
						}
						</div>
						<div className="templatiq__modal__actions">
							<button
								type="submit"
								className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-success"
							>
								Insert Page
							</button>
						</div>
					</div>
				</form>

				<button
					className="templatiq__modal__cancel__button"
					onClick={ closeInsertTemplateModal }
				>
					<ReactSVG src={ closeIcon } width={ 20 } height={ 20 } />
				</button>
			</InsertTemplateModalStyle>
		</>
	);
};

export default InsertDirectoryTypeModal;
