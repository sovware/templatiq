import postData from '@helper/postData';
import { dispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import Dropdown from '@components/Dropdown';
import store from '@store/index';

import { HeaderActionStyle, HeaderStyle } from './style';


import Searchform from '@components/Searchform';
import bricksIcon from '@icon/bricks.svg';
import chevronIcon from '@icon/chevron-down-solid.svg';
import diviIcon from '@icon/divi.svg';
import elementorIcon from '@icon/elementor.svg';
import gutenbergIcon from '@icon/gutenberg.svg';


const CloudHeader = ( ) => {
	const [ selectedEditor, setSelectedEditor ] = useState( templatiq_obj.builder );

	let editorItems = [
		{
			icon: elementorIcon,
			name: "elementor",
			text: __( 'Elementor', 'templatiq' ),
			url: '#',
			type: 'available'
		},
		{
			icon: gutenbergIcon,
			name: "block",
			text: __( 'Block Editor', 'templatiq' ),
			url: '#',
			type: 'available'
		},
		{
			icon: bricksIcon,
			name: "bricks",
			text: __( 'Bricks', 'templatiq' ),
			url: '#',
			type: 'available'
		},
		{
			icon: diviIcon,
			name: "divi",
			text: __( 'Divi Builder', 'templatiq' ),
			url: '#',
			type: 'upcoming'
		},
	];

	// Handle selected item from Dropdown
	const handleDropdownChange = (selectedItem) => {
		setSelectedEditor(selectedItem.name); 
		// Update templatiq_obj.builder
		templatiq_obj.builder = selectedItem.name;

		if(selectedEditor !== selectedItem.name) {
			dispatch( store ).setIsLoading( true );
			postData( `templatiq/template/set-builder?builder=${selectedItem.name}` )
			.then( ( res ) => {
				dispatch( store ).setTemplates( res.templates );
				dispatch( store ).setLibraryData( res );
				dispatch( store ).setIsLoading( false );
			} )
		} 	
	};

	return (
		<HeaderStyle className="templatiq__header templatiq__header--cloud">
			<div className="templatiq__header__content">
				<HeaderActionStyle className="templatiq__header__action">
					<div className="templatiq__header__action__item">
						<Dropdown
							className="templatiq__dropdown"
							dropDownText={__( 'Select Editor', 'templatiq' )}
							dropDownIcon={ chevronIcon }
							dropdownList={ editorItems }
							defaultSelect={editorItems.find(editor => editor.name === templatiq_obj.builder)}
							dropDownChange={handleDropdownChange}
						/>
					</div>

				</HeaderActionStyle>
				<div className="templatiq__header__content__search">
					<Searchform />
				</div>
			</div>
		</HeaderStyle>
	);
};

export default CloudHeader;