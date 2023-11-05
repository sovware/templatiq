import ReactSVG from 'react-inlinesvg';
import template-marketLogoLight from '@icon/template-market-logo-light.svg';
import { PreviewCopyright } from '../style';

export default function Copyright( props ) {
	const { className } = props;
	return (
		<PreviewCopyright
			className={ `template-market-form__copyright ${
				className !== undefined ? className : ''
			}` }
		>
			<a href="#" className="template-market-copyright__button">
				Powered by
				<ReactSVG src={ template-marketLogoLight } />
			</a>
		</PreviewCopyright>
	);
}
