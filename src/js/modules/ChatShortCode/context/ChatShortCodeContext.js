import { createContext, useContext, useState } from '@wordpress/element';
const ChatShortCodeStateContent = createContext();

export const useChatShortCodeState = () =>
	useContext( ChatShortCodeStateContent );

export const ChatShortCodeStateProvider = ( { children } ) => {
	const chatShortCodeObj = {
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
		globalKey: {
			beforeSubmitCallback: 'chatFormBeforeSubmitCallback',
			beforeSubmitCallbackArgs: 'chatFormBeforeSubmitCallbackArgs',
		},
		submissionServerError: null,
	};
	const [ chatShortCodeState, setChatShortCodeState ] =
		useState( chatShortCodeObj );

	return (
		<ChatShortCodeStateContent.Provider
			value={ { chatShortCodeState, setChatShortCodeState } }
		>
			{ children }
		</ChatShortCodeStateContent.Provider>
	);
};
