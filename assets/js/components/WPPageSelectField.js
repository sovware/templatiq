import { useState, useEffect } from '@wordpress/element';
import AsyncSelectField from './AsyncSelectField';
import fetchWPPages from '@helper/fetchWPPages';

export default function WPPageSelectField( props ) {
	const {
		control,
		name,
		rules,
		isMulti,
		isClearable,
		closeMenuOnSelect,
		hideSelectedOptions,
		allowSelectAll,
		onChange,
		outputAsArray,
	} = props;

	const [ defaultPages, setDefaultPages ] = useState( [] );

	useEffect( () => {
		const fetchDefaultPages = async () => {
			setDefaultPages( await fetchWPPages() );
		};

		fetchDefaultPages();
	}, [] );

	function fetchWPPagesByIDs( ids ) {
		return fetchWPPages( '', ids );
	}

	return (
		<AsyncSelectField
			control={ control }
			name={ name }
			rules={ rules }
			isMulti={ isMulti }
			isClearable={ isClearable }
			closeMenuOnSelect={ closeMenuOnSelect }
			hideSelectedOptions={ hideSelectedOptions }
			allowSelectAll={ allowSelectAll }
			loadPreSelectedOptions={ fetchWPPagesByIDs }
			loadOptions={ fetchWPPages }
			defaultOptions={ defaultPages }
			onChange={ onChange }
			outputAsArray={ outputAsArray }
		/>
	);
}
