import { __ } from '@wordpress/i18n';

import notFoundIcon from '@icon/not-found.gif';

const EmptyTemplate = ( props ) => {
	const { title, subTitle } = props;

	return (
		<div className="templatiq__content__empty">
			<img 
				src={notFoundIcon}
				className="templatiq__content__empty__img" 
			/>
			<h3 className="templatiq__content__empty__title">
				{title || __( 'No Template Found', 'templatiq' )}
			</h3>
			<h4 className="templatiq__content__empty__desc">
				{subTitle || __( 'Search Other Templates', 'templatiq' )}
			</h4>
		</div>
	);
};

export default EmptyTemplate;
