import { createContext, useContext, useState } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';
const ResponseStateContext = createContext();

export const useResponseState = () => useContext( ResponseStateContext );

export const ResponseStateProvider = ( { children } ) => {
	const responseObj = {
		responseData: null,
		activeResponse: null,
		orderBy: 'latest',
		status: null,
		responseQueryKey: uuidv4(),
		messageQueryKey: uuidv4(),
		answerQueryKey: uuidv4(),
		mediaQueryKey: uuidv4(),
		replyingMessageId: null,
		conversationMode: 'action',
		replyActivatedIds: [],
		responseSearchText: '',
		responseCache: {},
		sentResponse: [],
		sentUser: [],
		forwardSearchInput: '',
		responseAutoActivate: true,
		isActiveResponseDeleteAlert: false,
		isConversationSearchActive: false,
		messageSearchText: '',
		debouncedMessageSearchText: '',
		isConversationDrawerOpen: false,
		mediaFilterType: 'all',
		unreadMessages: [],
		filterByTags: [],
		messageFetchingEnabled: true,
		answerFetchingEnabled: true,
		formFetchingEnabled: true,
		responseSidebarTopComponent: null,
	};
	const [ responseState, setResponseState ] = useState( responseObj );

	return (
		<ResponseStateContext.Provider
			value={ { responseState, setResponseState } }
		>
			{ children }
		</ResponseStateContext.Provider>
	);
};
