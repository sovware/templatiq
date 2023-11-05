import { FormToggle, Tooltip } from '@wordpress/components';
import ReactSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import questionCircle from '@icon/question-circle.svg';
import Badge from './Badge';

const Switch = ( props ) => {
	const {
		handleToggle,
		icon,
		label,
		isActive,
		disabled,
		tooltip,
		tooltipText,
		badgeText,
		data,
		className,
	} = props;

	return (
		<div
			className={ `${
				disabled
					? 'template-market-toggle template-market-toggle-inline template-market-disabled'
					: 'template-market-toggle template-market-toggle-inline'
			} ${ className }` }
		>
			{ label && (
				<span
					className="template-market-toggle__label"
					onClick={ handleToggle }
				>
					{ icon && <ReactSVG src={ icon } /> }
					{ label }
					{ badgeText && (
						<Badge
							type="success"
							text={ badgeText }
							modifier="template-market-badge-round"
						/>
					) }
					{ tooltip && (
						<Tooltip text={ tooltipText } delay="0">
							<span className="template-market-tooltip-toggle">
								<ReactSVG src={ questionCircle } />
							</span>
						</Tooltip>
					) }
				</span>
			) }
			<FormToggle
				checked={ isActive === '1' ? true : false }
				onChange={ handleToggle }
				disabled={ disabled }
			/>
		</div>
	);
};

// Specifies the default values for props:
Switch.defaultProps = {};

// Specifies the prop Types:
Switch.propTypes = {};

export default Switch;
