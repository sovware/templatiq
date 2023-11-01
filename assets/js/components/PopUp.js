import { Modal } from '@wordpress/components';
import { ModalAlertStyle } from '../style';
export default function PopUp( props ) {
	const {
		children,
		title,
		className,
		AlertContent,
		onCancel,
		onFooterCancel,
		onSubmit,
		hasCancelButton,
		hasSubmitButton,
		isDisableAction,
		submitText,
		cancelText,
		cancelBtnType,
		submitBtnType = 'danger',
		isDismissible,
	} = props;
	return (
		<Modal
			title={ title }
			overlayClassName={ `helpgent-modal helpgent-modal-default ${ className }` }
			onRequestClose={ onCancel }
			isDismissible={ isDismissible }
		>
			<ModalAlertStyle>
				{ children }
				{ ! isDisableAction && (
					<div
						className={ `helpgent-modal-action ${ className }-action` }
					>
						{ hasCancelButton && (
							<a
								href="#"
								className={ `helpgent-btn helpgent-btn-${
									cancelBtnType ? cancelBtnType : 'light'
								} helpgent-btn-md helpgent-modal-action__cancel` }
								onClick={ ( e ) => {
									e.preventDefault();
									onFooterCancel
										? onFooterCancel()
										: onCancel();
								} }
							>
								{ cancelText || 'Cancel' }
							</a>
						) }
						{ hasSubmitButton && (
							<a
								href="#"
								className={ `helpgent-btn helpgent-btn-md helpgent-modal-action__btn helpgent-btn-${ submitBtnType }` }
								onClick={ ( e ) => {
									e.preventDefault();
									onSubmit();
								} }
							>
								{ submitText }
							</a>
						) }
					</div>
				) }
			</ModalAlertStyle>
		</Modal>
	);
}
