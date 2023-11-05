import { useEffect } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const RangeSlider = ( props ) => {
	const {
		startPosition,
		minValue,
		maxValue,
		control,
		setValue,
		setFieldValue,
		validation,
	} = props;

	useEffect( () => {
		if ( validation ) {
			setValue( 'range_slider', parseInt( startPosition ) );
		}
	}, [] );
	return (
		<div className="template-market-rangeControl">
			<div className="template-market-rangeControl__wayline">
				<span className="template-market-starting-point">{ minValue }</span>
				<span className="template-market-ending-point">{ maxValue }</span>
			</div>
			{ validation ? (
				<Controller
					name="range_slider"
					control={ control }
					render={ ( { field } ) => (
						<RangeControl
							{ ...field }
							initialPosition={ parseInt( startPosition ) }
							max={ maxValue }
							min={ minValue }
							withInputField={ false }
							railColor="#D5D5D5"
							trackColor="#6551F2"
							onChange={ ( value ) => {
								setValue( 'range_slider', value );
								setFieldValue( value );
							} }
						/>
					) }
				/>
			) : (
				<RangeControl
					initialPosition={ parseInt( startPosition ) }
					max={ maxValue }
					min={ minValue }
					withInputField={ false }
					railColor="#D5D5D5"
					trackColor="#6551F2"
				/>
			) }
		</div>
	);
};

// Specifies the default values for props:
RangeSlider.defaultProps = {};

// Specifies the prop Types:
RangeSlider.propTypes = {};

export default RangeSlider;
