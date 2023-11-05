
import ReactSVG from 'react-inlinesvg';
import arrowLeft from '@icon/arrow-small-left.svg';
export default function ChatFormBack( props ) {
	const { moduleState, setModuleState, clearErrors, getValues } = props;
	return (
		<a
			href="#"
			className={ `helpgent-chatForm-back-btn ${
				moduleState.isProcessingSubmitCallback
					? 'helpgent-disabled'
					: ''
			}` }
			onClick={ ( e ) => {
				if ( moduleState.isProcessingSubmitCallback ) {
					return;
				}

				e.preventDefault();
			} }
		>
			<ReactSVG src={ arrowLeft } />
		</a>
	);
}
