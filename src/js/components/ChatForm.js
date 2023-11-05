import { lazy, Suspense, useEffect, useState } from '@wordpress/element';
import { useForm } from 'react-hook-form';
import ReactSVG from 'react-inlinesvg';
import { ChatFormStyle } from '@root/style';
const MediaPreview = lazy( () => import( '@components/MediaPreview' ) );
const QuestionPreview = lazy( () => import( '@components/QuestionPreview' ) );
const QuestionNavigation = lazy( () =>
	import( '@components/QuestionNavigation' )
);
import { applyFilter } from '@modules/helpers';
import ContentLoading from '@components/ContentLoading';
import handleSubmitResponse from '@helper/handleSubmitResponse';
import handleGoBackQuestion from '@helper/handleGoBackQuestion';
import useCheckUserTypeMutation from '@hooks/useCheckUserTypeMutation';
import usePostMutation from '@hooks/usePostMutation';
import useDeleteMutation from '@hooks/useDeleteMutation';

import { getGlobalState, updateGlobalState } from '@helper/utils';
import { registerIsProActive } from '@helper/registerApplyFilter';
export default function ChatForm( props ) {
	const { moduleState, setModuleState, isFloatingForm } = props;
	const {
		isLoggedIn,
		activeQuestion,
		submittedQuestions,
		singleForm,
		isSubmitAnswerLoading,
		reWatchedQuestionIds,
		isProcessingSubmitCallback,
	} = moduleState;
	const [ chatFormExternalComponents, setChatFormExternalComponents ] =
		useState( {
			chatFormClose: null,
			chatFormBack: null,
			chatFormNavigation: null,
		} );
	const { questions } = JSON.parse( singleForm.content );
	const { layout, controls } = activeQuestion;
	const { fieldDesign } = controls;
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		resetField,
		control,
		watch,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm( { mode: 'onChange' } );

	const { mutateAsync: checkUserTypeMutation, isLoading } =
		useCheckUserTypeMutation( `/template-market/response/get-user-type` );
	const { mutateAsync: verifyUserMutation, verifyLoading } = usePostMutation(
		`/template-market/response/verify-registered-user`
	);
	const { mutateAsync: registerGuestMutation, registerLoading } =
		usePostMutation( `/template-market/response/register-guest` );
	const { mutateAsync: submitAnswerMutation, isLoading: submitLoading } =
		usePostMutation( `/template-market/response/answer` );
	const { mutateAsync: deleteAnswerMutation, isLoading: deleteLoading } =
		useDeleteMutation( `/template-market/response/answer` );
	const {
		mutateAsync: generateResponseTokenMutation,
		isLoading: responseLoading,
	} = usePostMutation( `/template-market/response/generate-token` );

	const activeIndex = questions.findIndex(
		( item ) => item.id === activeQuestion.id
	);

	useEffect( () => {
		const chatFormClose = applyFilter( 'template-market_chat_form_close', {
			props: { moduleState: moduleState, setModuleState: setModuleState },
		} );
		const chatFormBack = applyFilter( 'template-market_chat_form_back', {
			props: {
				moduleState: moduleState,
				setModuleState: setModuleState,
				clearErrors: clearErrors,
				getValues: getValues,
			},
		} );

		const chatFormNavigation = applyFilter(
			'template-market_chat_form_navigation',
			{
				props: {
					selectedQuestion: activeQuestion,
					isClientModeActive: true,
					featureState: moduleState,
					setFeatureState: setModuleState,
					clearErrors: clearErrors,
					getValues: getValues,
					register: register,
					errors: errors,
				},
			}
		);
		setChatFormExternalComponents( {
			...chatFormExternalComponents,
			chatFormClose: chatFormClose[ 1 ],
			chatFormBack: chatFormBack[ 1 ],
			chatFormNavigation: chatFormNavigation[ 1 ],
		} );
	}, [ moduleState ] );

	async function getResponseToken() {
		let responseToken = await generateResponseToken();

		setModuleState(currentValue => ({
			...currentValue,
			responseToken: responseToken,
		}));

		updateGlobalState( 'responseToken', responseToken );

		return responseToken;
	}

	async function generateResponseToken() {
		try {
			const generateResponseTokenResponse =
				await generateResponseTokenMutation( { form_id: singleForm.id } );
			return generateResponseTokenResponse.response_token;
		} catch ( error ) {
			console.log( error );
			return null;
		}
	}

	return (
		<ChatFormStyle
			className={ `${
				submitLoading || responseLoading
					? 'template-market-answer-loading'
					: ''
			} ${
				isFloatingForm ? 'template-market-chat-bubble-form__floating' : ''
			} template-market-form__contents` }
		>
			<form
				className="template-market-form__question-form"
				onSubmit={ handleSubmit( async ( submittedData ) => {
					const beforeSubmitCallback = getGlobalState(
						'chatFormBeforeSubmitCallback',
						null
					);
					const beforeSubmitCallbackArgs = getGlobalState(
						'chatFormBeforeSubmitCallbackArgs',
						null
					);

					if ( typeof beforeSubmitCallback === 'function' ) {
						setModuleState( ( currentValue ) => ( {
							...currentValue,
							isProcessingSubmitCallback: true,
						} ) );

						const status = await beforeSubmitCallback(
							beforeSubmitCallbackArgs,
							submittedData
						);

						setModuleState( ( currentValue ) => ( {
							...currentValue,
							isProcessingSubmitCallback: false,
						} ) );

						if (
							typeof status.success === 'boolean' &&
							! status.success
						) {
							return;
						}

						submittedData =
							typeof status.formData !== 'undefined'
								? status.formData
								: submittedData;
					}

					handleSubmitResponse(
						submittedData,
						true,
						moduleState,
						setModuleState,
						isLoggedIn,
						controls,
						null,
						activeQuestion,
						checkUserTypeMutation,
						verifyUserMutation,
						registerGuestMutation,
						submitAnswerMutation,
						deleteAnswerMutation,
						generateResponseTokenMutation,
						getResponseToken,
						registerIsProActive()
					);
				} ) }
			>
				{ chatFormExternalComponents?.chatFormNavigation &&
					! isFloatingForm &&
					activeQuestion.question_type !== 'end' &&
					chatFormExternalComponents.chatFormNavigation }
				<div
					className={ `template-market-preview-container ${
						layout === 'mediaRight'
							? 'template-market-preview-media-right'
							: layout === 'mediaBehind'
							? 'template-market-preview-media-overlay'
							: ''
					}` }
					style={ {
						'--template-market-label-font-size': `${ fieldDesign?.labelStyle?.font_size.value }px`,
						'--template-market-label-font-weight': `${ fieldDesign?.labelStyle?.font_weight.value }`,
						'--template-market-label-color': `${ fieldDesign?.labelStyle?.text_color.value }`,
						'--template-market-description-font-size': `${ fieldDesign?.descriptionStyle?.font_size.value }px`,
						'--template-market-description-font-weight': `${ fieldDesign?.descriptionStyle?.font_weight.value }`,
						'--template-market-description-color': `${ fieldDesign?.descriptionStyle?.text_color.value }`,
						'--template-market-chatTtile-font-size': `${ fieldDesign?.chatTitleStyle?.font_size.value }px`,
						'--template-market-chatTtile-font-weight': `${ fieldDesign?.chatTitleStyle?.font_weight.value }`,
						'--template-market-chatTtile-color': `${ fieldDesign?.chatTitleStyle?.text_color.value }`,
						'--template-market-footerText-font-size': `${ fieldDesign?.footerTextStyle?.font_size.value }px`,
						'--template-market-footerText-font-weight': `${ fieldDesign?.footerTextStyle?.font_weight.value }`,
						'--template-market-footerText-color': `${ fieldDesign?.footerTextStyle?.text_color.value }`,
						'--template-market-btn-color': `${ fieldDesign?.buttonStyle?.btn_color.value }`,
						'--template-market-btn-radius': `${ fieldDesign?.buttonStyle?.btn_radius.value }px`,
						'--template-market-btn-text-color': `${ fieldDesign?.buttonStyle?.btn_text_color?.value }`,
						'--template-market-btn-font-size': `${ fieldDesign?.buttonStyle?.btn_font_size.value }px`,
						'--template-market-overlay-color': `${ fieldDesign?.mediaStyle?.overlay_color.value }`,
						'--template-market-overlay-opacity': `${ fieldDesign?.mediaStyle?.overlay_opacity.value }%`,
						'--template-market-input-radius': '10px',
						'--template-market-input-background': '#EFEFEF',
					} }
				>
					{ activeIndex !== -1 &&
						activeIndex !== 0 &&
						activeQuestion.question_type !== 'end' &&
						isFloatingForm &&
						chatFormExternalComponents?.chatFormBack &&
						chatFormExternalComponents?.chatFormBack }

					<MediaPreview
						selectedQuestion={ activeQuestion }
						featureState={ moduleState }
						setFeatureState={ setModuleState }
						isClientModeActive={ true }
					/>
					<QuestionPreview
						selectedQuestion={ activeQuestion }
						featureState={ moduleState }
						setFeatureState={ setModuleState }
						isClientModeActive={ true }
						register={ register }
						errors={ errors }
						setValue={ setValue }
						getValues={ getValues }
						clearErrors={ clearErrors }
						resetField={ resetField }
						control={ control }
						watch={ watch }
						setError={ setError }
						getResponseToken={ getResponseToken }
					/>

					{ chatFormExternalComponents?.chatFormClose &&
						isFloatingForm &&
						chatFormExternalComponents.chatFormClose }
				</div>
			</form>
		</ChatFormStyle>
	);
}
