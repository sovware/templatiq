import { useState, useRef, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import checkedClickedOutside from '../helper/checkClickedOutside';
import handleDropdownOverflow from '../helper/handleDropdownOverflow';
import handleDropdownOverflowScroll from '../helper/handleDropdownOverflowScroll';

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
	const dropdownClassName = `template-market-dropdown ${
		isDropdownOpen ? 'template-market-dropdown-open ' : ''
	}${ className && className } template-market-dropdown-${ placement }`;

	function handleDropdown( e ) {
		e.preventDefault();
		setDropDownOpen( ! isDropdownOpen );
		handleDropdownOverflow(
			e,
			'.template-market-dropdown',
			'.template-market-dropdown__content',
			null,
			25,
			false,
			'right'
		);
	}
	handleDropdownOverflowScroll(
		'.template-market-dropdown-open',
		'.template-market-dropdown__content',
		25
	);

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isDropdownOpen, setDropDownOpen, ref );
	}, [ isDropdownOpen ] );

	return (
		<div className={ dropdownClassName } ref={ ref }>
			<a
				href="#"
				className="template-market-dropdown__toggle template-market-dropdown__toggle-icon-only"
				onClick={ handleDropdown }
			>
				{ dropDownText ? dropDownText : null }
				{ dropDownIcon ? (
					<span className="template-market-dropdown-icon">
						<ReactSVG src={ dropDownIcon } />
					</span>
				) : null }
			</a>
			<ul
				className={
					isDropdownOpen
						? 'template-market-dropdown__content template-market-show'
						: 'template-market-dropdown__content'
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
											<span className="template-market-dropdown-item-icon">
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
											<span className="template-market-dropdown-item-icon">
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
