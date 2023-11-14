
import { useParams } from "react-router-dom";
import TemplateDetailsModule from '@modules/TemplateDetails';

export default function TemplateDetails() {
	let isLoggedIn = false;

	const { slug } = useParams();

	return (
		<>
			<TemplateDetailsModule 
				templateSlug = { slug }
			/>
		</>
	);
}
