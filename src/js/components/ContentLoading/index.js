import { ContentLoadingStyle } from './Style';

const ContentLoading = ( props ) => {
	const { style, type } = props;

	const defaultStyle = { minHeight: '150px' };
	const loaderStyle = style ? { ...defaultStyle, ...style } : defaultStyle;

	const handleContentLoading = ( type ) => {
		switch ( type ) {
			case 'single':
				return (
					<span className="templatiq-content-loading__single templatiq-shimmer-effect"></span>
				);
			case 'image':
				return (
					<>
						<span className="templatiq-content-loading__image templatiq-shimmer-effect"></span>
					</>
				);
			case 'full':
				return (
					<div className="templatiq-row">
						<div className="templatiq-col-12" style={{ marginTop: "25px" }}>
							<div className="templatiq-row">
								<div className="templatiq-col-4">
									<span className="templatiq-content-loading__single templatiq-shimmer-effect"></span>
								</div>
								<div className="templatiq-col-4">
									<span className="templatiq-content-loading__single templatiq-shimmer-effect"></span>
								</div>
								<div className="templatiq-col-4">
									<span className="templatiq-content-loading__single templatiq-shimmer-effect"></span>
								</div>
							</div>
						</div>
						<div className="templatiq-col-3" style={{ marginTop: "24px" }}>
							<div style={{ marginBottom: "70px", textAlign: "left" }}>
								<span className="templatiq-shimmer-effect"></span>
								<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
								<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
							</div>
							<div style={{ marginBottom: "70px", textAlign: "left" }}>
								<span className="templatiq-shimmer-effect"></span>
								<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
								<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
							</div>
							<div style={{ marginBottom: "70px", textAlign: "left" }}>
								<span className="templatiq-shimmer-effect"></span>
								<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
								<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
							</div>
							<div style={{ marginBottom: "70px", textAlign: "left" }}>
								<span className="templatiq-shimmer-effect"></span>
								<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
								<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
							</div>
							<div style={{ marginBottom: "70px", textAlign: "left" }}>
								<span className="templatiq-shimmer-effect"></span>
								<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
								<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
							</div>
						</div>
						<div className="templatiq-col-9">
							<div className="templatiq-row">
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
								<div className="templatiq-col-xxl-4 templatiq-col-6" style={{ marginBottom: "24px", textAlign: "left" }}>
									<span className="templatiq-content-loading__image templatiq-shimmer-effect" style={ { "marginBottom": "20px" } }></span>
									<span className="templatiq-shimmer-effect"></span>
									<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
									<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
								</div>
							</div>
						</div>
					</div>
				);
			default:
				return (
					<>
						<span className="templatiq-shimmer-effect"></span>
						<span className="templatiq-shimmer-effect" style={{ width: '75%' }}></span>
						<span className="templatiq-shimmer-effect" style={{ width: '50%' }}></span>
					</>
				);
		}
	}

	return (
		<ContentLoadingStyle
			style={ loaderStyle }
			className="templatiq-content-loading"
		>
			{
				handleContentLoading( type )
			}
		</ContentLoadingStyle>
	);
};

export default ContentLoading;
