import { CrudLayoutStyle } from '../style';

export default function CrudLayout( props ) {
	const { headerChild, mainChild } = props;

	return (
		<CrudLayoutStyle className="template-market-page-inner">
			<header className="template-market-crud-header">{ headerChild }</header>
			<main className="template-market-crud-main">{ mainChild }</main>
		</CrudLayoutStyle>
	);
}
