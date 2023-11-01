import { createContext, useContext, useState } from '@wordpress/element';
const ChatBubbleStateContent = createContext();

export const useChatBubbleState = () => useContext( ChatBubbleStateContent );

export const ChatBubbleStateProvider = ( { children } ) => {
	const chatBubbleObj = {
		singleForm: null,
		estimatedTime: null,
		activeQuestion: null,
		nextQuestion: null,
		isFinalSubmissionActive: false,
		isLoggedIn: '1',
		userVerificationField: 'default',
		userEmail: '',
		submittedQuestions: [],
		reWatchedQuestionIds: [],
		cachedQuestionsValue: [],
		responseToken: null,
		isProcessingSubmitCallback: null,
		beforeSubmitCallback: null,
		beforeSubmitCallbackArgs: null,
		submissionServerError: null,
		chatBubble: {
			isChatFormActive: false,
			isChatFormMinimized: false,
			canCloseChatForm: true,
		},
		chatFormClose: null,
	};
	const [ chatBubbleState, setChatBubbleState ] = useState( chatBubbleObj );

	return (
		<ChatBubbleStateContent.Provider
			value={ { chatBubbleState, setChatBubbleState } }
		>
			{ children }
		</ChatBubbleStateContent.Provider>
	);
};
