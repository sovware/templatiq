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
			overlayClassName={ `template-market-modal template-market-modal-default ${ className }` }
			onRequestClose={ onCancel }
			isDismissible={ isDismissible }
		>
			<ModalAlertStyle>
				{ children }
				{ ! isDisableAction && (
					<div
						className={ `template-market-modal-action ${ className }-action` }
					>
						{ hasCancelButton && (
							<a
								href="#"
								className={ `template-market-btn template-market-btn-${
									cancelBtnType ? cancelBtnType : 'light'
								} template-market-btn-md template-market-modal-action__cancel` }
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
								className={ `template-market-btn template-market-btn-md template-market-modal-action__btn template-market-btn-${ submitBtnType }` }
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
