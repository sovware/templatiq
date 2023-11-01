import { ContentLoadingStyle } from '../style';

export default function ContentLoading( { style } ) {
	const defaultStyle = { minHeight: '500px' };
	style = style ? { ...defaultStyle, ...style } : defaultStyle;

	return (
		<ContentLoadingStyle
			style={ style }
			className="helpgent-content-loading"
		>
			<span className="helpgent-shimmer-effect"></span>
			<span className="helpgent-shimmer-effect"></span>
			<span className="helpgent-shimmer-effect"></span>
		</ContentLoadingStyle>
	);
}
