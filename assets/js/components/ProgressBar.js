import { ProgressBarStyle } from '../style';
export default function ProgressBar( props ) {
	const { type, currentValue, contentFlow } = props;
	return (
		<ProgressBarStyle
			className={ `helpgent-progress-bar helpgent-progress-bar-${ type } helpgent-progress-bar-${ contentFlow }` }
		>
			<div
				className="helpgent-progress-bar__status"
				style={ {
					[ contentFlow === 'vertical'
						? 'height'
						: 'width' ]: `${ currentValue }%`,
				} }
			></div>
		</ProgressBarStyle>
	);
}
