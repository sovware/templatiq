import { ResponseDeleteAlertStyle } from './style';
export default function ResponseDeleteAlert() {
	return (
		<ResponseDeleteAlertStyle>
			<div className="helpgent-alert-content">
				<p>
					All data associated with this response will be deleted
					forever.
				</p>
				<p>
					<em>Once deleted, responses cannot be recovered.</em>
				</p>
			</div>
		</ResponseDeleteAlertStyle>
	);
}
