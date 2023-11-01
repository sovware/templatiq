import { useState, useEffect, useRef } from '@wordpress/element';
import { DatePicker } from '@wordpress/components';
import ReactSVG from 'react-inlinesvg';
import checkedClickedOutside from '@helper/checkClickedOutside';
import calendar from '@icon/calendar.svg';
import getValidationMessage from '@helper/getValidationMessage.js';
import handleDropdownOverflow from '../helper/handleDropdownOverflow';
import handleDropdownOverflowScroll from '../helper/handleDropdownOverflowScroll';

const DatePickerControl = ( props ) => {
	const {
		handleChangeDate,
		date,
		placeholder,
		validation,
		register,
		errors,
		clearErrors,
		isClientModeActive,
		featureState,
		setFeatureState,
	} = props;
	const [ isActivePicker, setActivePicker ] = useState( false );
	const ref = useRef( null );

	function handleOpenDatePicker( event ) {
		if ( ! isClientModeActive ) {
			return;
		}
		setActivePicker( true );
		handleDropdownOverflow(
			event,
			'.helpgent-datepicker',
			'.components-datetime__date',
			140,
			55,
			false,
			'right'
		);
	}

	handleDropdownOverflowScroll(
		'.helpgent-datepicker',
		'.components-datetime__date',
		55
	);

	/* Close Dropdown click on outside */
	useEffect( () => {
		checkedClickedOutside( isActivePicker, setActivePicker, ref );
	}, [ isActivePicker ] );

	return (
		<div
			className={
				isActivePicker
					? 'helpgent-datepicker helpgent-active'
					: 'helpgent-datepicker'
			}
			ref={ ref }
		>
			<div className="helpgent-form helpgent-form-group helpgent-form-icon-right helpgent-mb-0">
				<span className="helpgent-input-icon">
					<ReactSVG src={ calendar } />
				</span>
				<input
					type="text"
					className="helpgent-form-group__element helpgent-form-group__element--date"
					placeholder={ placeholder }
					value={ date.value }
					onClick={ ( e ) => {
						handleOpenDatePicker( e );
					} }
					readOnly
					{
						...( isClientModeActive
							? register( 'date', {
									required: {
										value:
											validation.isActive === '1'
												? true
												: false,
										message: 'The date field is required',
									},
							  } )
							: {} ) // Empty object when condition is false
					}
					//onChange={ ()=> clearErrors('date') }
				/>
			</div>
			<DatePicker
				onChange={ ( newDate ) => {
					handleChangeDate( newDate );
					setActivePicker( false );
				} }
			/>
		</div>
	);
};

// Specifies the default values for props:
DatePickerControl.defaultProps = {};

// Specifies the prop Types:
DatePickerControl.propTypes = {};

export default DatePickerControl;
