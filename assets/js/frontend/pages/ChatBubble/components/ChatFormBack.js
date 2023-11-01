import ReactSVG from 'react-inlinesvg';
import arrowLeft from '@icon/arrow-small-left.svg';
export default function ChatFormBack( props ) {
	const { moduleState, setModuleState, clearErrors, getValues } = props;
	return (
		<a
			href="#"
			className={ `template-market-chatForm-back-btn ${
				moduleState.isProcessingSubmitCallback
					? 'template-market-disabled'
					: ''
			}` }
			onClick={ ( e ) => {
				if ( moduleState.isProcessingSubmitCallback ) {
					return;
				}
			} }
		>
			<ReactSVG src={ arrowLeft } />
		</a>
	);
}
