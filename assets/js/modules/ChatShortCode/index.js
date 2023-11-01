import { lazy, useEffect, Suspense } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import { ChatShortCodeStateProvider } from './context/ChatShortCodeContext';
import { useChatShortCodeState } from './context/ChatShortCodeContext';
import ContentLoading from '@components/ContentLoading';
import queryStore from '../../queryStore';

function ChatShortCode( props ) {
	const { data, isLoggedIn } = props;
	const { chatShortCodeState, setChatShortCodeState } =
		useChatShortCodeState();
	const { singleForm } = chatShortCodeState;

	const { questions } = JSON.parse( JSON.parse( data ).content );

	useEffect( () => {
		let activeQuestion = questions.find( ( item, index ) => {
			if ( item.question_type === 'welcome' ) {
				return true;
			} else if ( isLoggedIn === '1' && index === 1 ) {
				return true;
			} else if (
				isLoggedIn === '0' &&
				item.question_type === 'user_validation'
			) {
				return true;
			}
			return false;
		} );

		setChatShortCodeState( {
			...chatShortCodeState,
			singleForm: JSON.parse( data ),
			activeQuestion: activeQuestion,
			isLoggedIn: isLoggedIn,
		} );
	}, [] );

	return (
		singleForm && (
			<Suspense fallback={ <ContentLoading /> }>
				<ChatForm
					moduleState={ chatShortCodeState }
					setModuleState={ setChatShortCodeState }
					isFloatingForm={ false }
				/>
			</Suspense>
		)
	);
}

export default function ChatShortCodeModule( props ) {
	return (
		<QueryClientProvider client={ queryStore }>
			<ChatShortCodeStateProvider>
				<ChatShortCode { ...props } />
			</ChatShortCodeStateProvider>
		</QueryClientProvider>
	);
}
