import { FormDeleteAlertStyle } from './style';
export default function FormDeleteAlert( props ) {
	const { error, formTitle } = props;
	return (
		<FormDeleteAlertStyle>
			{ error?.data?.status === 500 && (
				<span className=" template-market-notice template-market-notice-danger">
					Internal server error
				</span>
			) }

			<div className="template-market-alert-content">
				<p>
					You are about to delete ( <strong>{ formTitle }</strong> )
				</p>
				<p>
					All responses this form has collected, including associated
					messages, will be deleted forever.
				</p>
				<h4>Are you sure you want to proceed with the deletion?</h4>
			</div>
		</FormDeleteAlertStyle>
	);
}
