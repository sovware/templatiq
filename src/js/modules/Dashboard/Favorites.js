import { TemplatePackStyle } from "@root/style";
import AllTemplates from "@components/AllTemplates";

export default function MyFavoritesModule() {
	return (
		<TemplatePackStyle className="templatiq__content">
			<AllTemplates />
		</TemplatePackStyle>
	);
}
