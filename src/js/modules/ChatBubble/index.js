import { lazy, useEffect, Suspense } from '@wordpress/element';
import { ChatBubbleStateProvider } from './context/ChatBubbleContext';
import { useChatBubbleState } from './context/ChatBubbleContext';
import ContentLoading from '@components/ContentLoading';
import ChatBubble from '@components/ChatBubble';
const ChatForm = lazy( () => import( '@components/ChatForm' ) );
import { QueryClientProvider } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import queryStore from '../../queryStore';
import { ChatBubbleFormStyle, ChatBubbleContainerStyle } from './style';

const ChatBubbleCircle = ( props ) => {
	const { data, isLoggedIn, isFloatingForm } = props;
	const { chatBubbleState, setChatBubbleState } = useChatBubbleState();
	const { singleForm } = chatBubbleState;

	const { questions } = JSON.parse( JSON.parse( data ).content );
	const { global } = JSON.parse( JSON.parse( data ).content );
	const { bubble } = global;
	const { offset_x, offset_y, position } = bubble;
	const bubbleFormStyles = {
		'--templatiq-bubble-form-offset-x': `${ offset_x }px`,
		'--templatiq-bubble-form-offset-y': `${ offset_y }px`,
	};
	useEffect( () => {
		let activeQuestion = questions.find( ( item, index ) => {
			if ( item.question_type === 'welcome' ) {
				return true;
			} else if ( isLoggedIn === '1' && index === 0 ) {
				return true;
			} else if ( item.question_type === 'user_validation' ) {
				return true;
			}
			return false;
		} );

		setChatBubbleState( {
			...chatBubbleState,
			singleForm: JSON.parse( data ),
			activeQuestion: activeQuestion,
			isLoggedIn: isLoggedIn,
			estimatedTime: null,
			nextQuestion: null,
			isFinalSubmissionActive: false,
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
		} );
		if ( window.templatiqGlobalState ) {
			window.templatiqGlobalState = {};
		}
	}, [ chatBubbleState?.chatBubble?.isChatFormActive ] );

	return (
		singleForm &&
		singleForm.is_chat_bubble === '1' && (
			<ChatBubbleContainerStyle>
				{ chatBubbleState.chatBubble.isChatFormActive && (
					<div
						style={ {
							display: chatBubbleState.chatBubble
								.isChatFormMinimized
								? 'none'
								: 'block',
						} }
					>
						<ChatBubbleFormStyle
							className={ `templatiq-chat-bubble-form templatiq-chat-bubble-form--${ position }` }
							style={ bubbleFormStyles }
						>
							<ChatForm
								moduleState={ chatBubbleState }
								setModuleState={ setChatBubbleState }
								isFloatingForm={ isFloatingForm }
							/>
						</ChatBubbleFormStyle>
					</div>
				) }

				{ ( ! chatBubbleState.chatBubble.isChatFormActive ||
					chatBubbleState.chatBubble.isChatFormMinimized ) && (
					<ChatBubble
						bubbleSettings={ bubble }
						moduleState={ chatBubbleState }
						setModuleState={ setChatBubbleState }
						isClientModeActive
					/>
				) }
			</ChatBubbleContainerStyle>
		)
	);
};

export default function ChatBubbleModule( props ) {
	return (
		<QueryClientProvider client={ queryStore }>
			<ChatBubbleStateProvider>
				<ChatBubbleCircle { ...props } />
			</ChatBubbleStateProvider>
		</QueryClientProvider>
	);
}
