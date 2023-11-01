import { Fragment } from '@wordpress/element';

import { LayoutStyle } from '../style';

export default function ConversationLayout( props ) {
	const { sidebarTop, sidebarChild, mainChild } = props;

	return (
		<LayoutStyle>
			<Fragment>
				<aside className="helpgent-sidebar">
					{ sidebarTop }
					{ sidebarChild }
				</aside>
				<main className="helpgent-conversation-main helpgent-conversation-main--active">
					{ mainChild }
				</main>
			</Fragment>
		</LayoutStyle>
	);
}
