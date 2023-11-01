import { CrudLayoutStyle } from '../style';

export default function CrudLayout( props ) {
	const { headerChild, mainChild } = props;

	return (
		<CrudLayoutStyle className="helpgent-page-inner">
			<header className="helpgent-crud-header">{ headerChild }</header>
			<main className="helpgent-crud-main">{ mainChild }</main>
		</CrudLayoutStyle>
	);
}
