import Dropdown from '@components/Dropdown';
import ellipsisH from '@icon/ellipsis-h.svg';

export default function HeaderActionDropdown( { data, menuItems } ) {
	const mapCallback = ( previous, current ) => {
		if ( typeof current.name === 'undefined' ) {
			return previous;
		}

		previous[ current.name ] =
			typeof current.callback === 'function' ? current.callback : null;
		return previous;
	};

	const dropdownMenuItems = Array.isArray( menuItems ) ? menuItems : [];
	const dropdownMenuCallbacks = dropdownMenuItems.reduce( mapCallback, {} );

	function onSelect( event, name ) {
		if ( ! dropdownMenuCallbacks.hasOwnProperty( name ) ) {
			return;
		}

		const callback = dropdownMenuCallbacks[ name ];
		callback( event, name, data );
	}

	return (
		<Dropdown
			dropDownIcon={ ellipsisH }
			placement="left"
			dropdownList={ dropdownMenuItems }
			handleDropdownTrigger={ onSelect }
		/>
	);
}
