import { useState, useRef, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import checkedClickedOutside from '../helper/checkClickedOutside';

export default function Dropdown( {
	className,
	dropDownText,
	dropDownIcon,
	dropdownList,
	placement,
	handleDropdownTrigger,
	Link,
} ) {
	const ref = useRef( null );
	const [ isDropdownOpen, setDropDownOpen ] = useState( false );
	const dropdownClassName = `helpgent-dropdown ${
		isDropdownOpen ? 'helpgent-dropdown-open ' : ''
	}${ className && className } helpgent-dropdown-${ placement }`;

	function handleDropdown( e ) {
		e.preventDefault();
		setDropDownOpen( ! isDropdownOpen );
	}

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isDropdownOpen, setDropDownOpen, ref );
	}, [ isDropdownOpen ] );

	return (
		<div className={ dropdownClassName } ref={ ref }>
			<a
				href="#"
				className="helpgent-dropdown__toggle helpgent-dropdown__toggle-icon-only"
				onClick={ handleDropdown }
			>
				{ dropDownText ? dropDownText : null }
				{ dropDownIcon ? (
					<span className="helpgent-dropdown-icon">
						<ReactSVG src={ dropDownIcon } />
					</span>
				) : null }
			</a>
			<ul
				className={
					isDropdownOpen
						? 'helpgent-dropdown__content helpgent-show'
						: 'helpgent-dropdown__content'
				}
			>
				{ dropdownList &&
					dropdownList.map( ( item, i ) => {
						let url = null;
						if ( item.target === 'blank' && item.url ) {
							url = item.url;
						} else if ( item.target !== 'blank' && item.url ) {
							url = `/${ item.url }`;
						} else {
							url = '#';
						}
						return (
							<li key={ i }>
								{ Link ? (
									<Link
										to={ url }
										onClick={ ( e ) =>
											url === '#' &&
											( setDropDownOpen( false ),
											handleDropdownTrigger(
												e,
												item.name
											) )
										}
										className={
											item.className ? item.className : ''
										}
										target={
											item.target === 'blank'
												? '_blank'
												: null
										}
									>
										{ item.icon ? (
											<span className="helpgent-dropdown-item-icon">
												<ReactSVG src={ item.icon } />
											</span>
										) : (
											''
										) }
										{ item.text }
									</Link>
								) : (
									<a
										href={ url }
										onClick={ ( e ) =>
											url === '#' &&
											( setDropDownOpen( false ),
											handleDropdownTrigger(
												e,
												item.name
											) )
										}
										className={
											item.className ? item.className : ''
										}
										target={
											item.target === 'blank'
												? '_blank'
												: null
										}
									>
										{ item.icon ? (
											<span className="helpgent-dropdown-item-icon">
												<ReactSVG src={ item.icon } />
											</span>
										) : (
											''
										) }
										{ item.text }
									</a>
								) }
							</li>
						);
					} ) }
			</ul>
		</div>
	);
}
