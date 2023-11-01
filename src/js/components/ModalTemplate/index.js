import ReactSVG from 'react-inlinesvg';
import xmarkSolid from '@icon/xmark-solid.svg';
import { ModalStyle } from './style';

export default function ModalTemplate( { children, title, onClose } ) {
	function handleClose( e ) {
		e.preventDefault();

		if ( typeof onClose === 'function' ) {
			onClose();
		}
	}

	return (
		<ModalStyle className="helpgent-modal helpgent-default-modal">
			<div className="helpgent-modal-header">
				<div className="helpgent-modal-header-title-area">
					{ title && (
						<h3 className="helpgent-modal-header-title">
							{ title }
						</h3>
					) }
				</div>

				<div className="helpgent-modal-header-action-area">
					<a
						className="helpgent-modal-action-close-link"
						onClick={ handleClose }
					>
						<span className="helpgent-modal-action-close-icon">
							<ReactSVG src={ xmarkSolid } />
						</span>
					</a>
				</div>
			</div>

			<div className="helpgent-modal-body">{ children }</div>
		</ModalStyle>
	);
}
