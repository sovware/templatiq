import { TagDeleteAlertStyle } from './style';
export default function TagDeleteModal() {
	return (
		<TagDeleteAlertStyle>
			<h5 className="helpgent-conversation-delete__label">
				Are you sure you want to delete the tag?
			</h5>
		</TagDeleteAlertStyle>
	);
}
