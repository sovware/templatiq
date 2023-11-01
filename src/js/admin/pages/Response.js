import { ResponseModule } from '@helpgent/modules';
function Response() {
	return (
		<ResponseModule
			baseApiRoute="/helpgent/admin/response"
			isClientModeActive={ false }
		/>
	);
}

export default Response;
