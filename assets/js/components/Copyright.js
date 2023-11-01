import ReactSVG from 'react-inlinesvg';
import helpgentLogoLight from '@icon/helpgent-logo-light.svg';
import { PreviewCopyright } from '../style';

export default function Copyright( props ) {
	const { className } = props;
	return (
		<PreviewCopyright
			className={ `helpgent-form__copyright ${
				className !== undefined ? className : ''
			}` }
		>
			<a href="#" className="helpgent-copyright__button">
				Powered by
				<ReactSVG src={ helpgentLogoLight } />
			</a>
		</PreviewCopyright>
	);
}
