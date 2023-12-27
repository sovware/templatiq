import { ContentLoadingStyle } from './Style';

const ContentLoading = ( { style } ) => {
	const defaultStyle = { minHeight: '500px' };
	style = style ? { ...defaultStyle, ...style } : defaultStyle;

	return (
		<ContentLoadingStyle
			style={ style }
			className="templatiq-content-loading"
		>
			<span className="templatiq-shimmer-effect"></span>
			<span className="templatiq-shimmer-effect"></span>
			<span className="templatiq-shimmer-effect"></span>
		</ContentLoadingStyle>
	);
};

export default ContentLoading;
