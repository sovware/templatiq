import { PreMadeTemplatePreviewModule } from '@helpgent/modules';

function PreMadeTemplatePreview() {
	return (
		<PreMadeTemplatePreviewModule baseApiRoute="/helpgent/admin/form/templates" />
	);
}

export default PreMadeTemplatePreview;
