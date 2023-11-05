import ReactSVG from 'react-inlinesvg';
import file from '@icon/file.svg';
import { UserMediaStyle } from '../style';
import Image from './Image';
export default function UserMessageMedia( props ) {
	const { user, message, attachment, isShowingDate, date } = props;
	return (
		<UserMediaStyle className="template-market-user-block template-market-d-flex">
			<div className="template-market-user-block__left">
				{ user.avatar_url ? (
					<Image src={ user.avatar_url } alt="template-market Image" />
				) : (
					<span>{ user.display_name.slice( 0, 2 ) }</span>
				) }
			</div>
			<div className="template-market-user-block__right">
				<div className="template-market-user-block__info">
					{ user ? (
						<span className="template-market-user-block__username">
							{ user.display_name }
						</span>
					) : (
						<span className="template-market-user-block__username">
							Anonymous
						</span>
					) }
					{ date && (
						<span className="template-market-user-block__date-meta">
							{ date }
						</span>
					) }
				</div>
				<div className="template-market-user-block__content">
					{ message && <p>{ message }</p> }

					{ attachment && (
						<span className="template-market-user-block__content-attachment">
							<ReactSVG src={ file } />
							<span className="template-market-user-block__content-fileName">
								{ attachment.title }
							</span>
						</span>
					) }
				</div>
			</div>
		</UserMediaStyle>
	);
}
