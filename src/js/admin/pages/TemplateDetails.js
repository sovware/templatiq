import TemplateDetailsModule from '@modules/TemplateDetails';
import { useParams } from 'react-router-dom';

export default function TemplateDetails() {
	const { slug } = useParams();

	return (
		<>
			<TemplateDetailsModule templateSlug={ slug } />
		</>
	);
}
