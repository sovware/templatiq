import { addQueryArgs } from '@wordpress/url';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../../queryStore';
import useFetchData from '@hooks/useFetchData.js';
import CrudLayout from '@components/CrudLayout';
import { TagStateProvider } from './context/TagStateContext';
import { useTagState } from './context/TagStateContext';
import TagContent from './components/TagContent';
import TagHeader from './components/TagHeader';

const Tag = ( props ) => {
	const perPage = 15;
	const { tagState, setTagState } = useTagState();
	const { tagSearchText, currentPage } = tagState;
	const fetchParams = {
		search: tagSearchText,
		per_page: perPage,
		page: currentPage,
	};

	const {
		data: tagsData,
		isLoading: isTagsLoading,
		isError: isTagError,
		errorMessage: tagErrorMessage,
		isFetching: isTagFetching,
	} = useFetchData(
		[ `template-market-tag-list-${ currentPage }-${ tagSearchText }` ],
		addQueryArgs( '/template-market/admin/tag', fetchParams )
	);

	return (
		<CrudLayout
			headerChild={ <TagHeader total={ tagsData && tagsData.total } /> }
			mainChild={
				<TagContent
					data={ tagsData }
					isLoading={ isTagsLoading }
					isError={ isTagError }
					perPage={ perPage }
				/>
			}
		/>
	);
};

export default function TagModule( props ) {
	return (
		<QueryClientProvider client={ queryStore }>
			<TagStateProvider>
				<Tag { ...props } />
			</TagStateProvider>
		</QueryClientProvider>
	);
}
