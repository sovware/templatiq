import { useState, useEffect } from '@wordpress/element';
import usePostMutation from '@hooks/usePostMutation';
import getPercentageValue from '@helper/getPercentage';
import ProgressBar from '@components/ProgressBar';
import { QuestionPreparationStyle } from './style';

export default function CreatePopupQuestionPreparation( props ) {
	const {
		formData,
		createFormMutation,
		setServerErrors,
		navigate,
		queryClient,
		moduleState,
		setModuleState,
	} = props;
	const [ importSuccessCount, setImportSuccessCount ] = useState( 0 );
	const [ importUnSuccessCount, setImportUnSuccessCount ] = useState( 0 );
	const [ importPercentage, setImportPercentage ] = useState( 0 );
	const [ pictureOptionCount, setPictureOptionCount ] = useState( 0 );
	const { templateQuestions } = moduleState;

	const {
		mutateAsync: importMediaMutation,
		isLoading: isImportingMediaLoading,
	} = usePostMutation( `/helpgent/admin/form/media` );

	useEffect( () => {
		if ( templateQuestions?.questions?.length > 0 ) {
			setModuleState( {
				...moduleState,
				isImportingAttachment: true,
			} );
			const questions = templateQuestions?.questions;
			let unSuccessCount = 0;
			let successCount = 0;
			questions.map( async ( item, index ) => {
				if ( item?.media?.url ) {
					const mediaData = {
						url: item.media.url,
					};

					try {
						const importMediaResponse =
							await importMediaMutation( mediaData );

						if ( importMediaResponse?.data?.status === 201 ) {
							questions[ index ].media.url =
								importMediaResponse.url;
							successCount = successCount + 1;
							setImportSuccessCount( successCount );
						} else {
							questions[ index ].media.url = null;
							unSuccessCount = unSuccessCount + 1;
							setImportUnSuccessCount( unSuccessCount );
						}
					} catch ( error ) {
						questions[ index ].media.url = null;
						unSuccessCount = unSuccessCount + 1;
						setImportUnSuccessCount( unSuccessCount );
					}
				} else {
					unSuccessCount = unSuccessCount + 1;
					setImportUnSuccessCount( unSuccessCount );
				}
				if ( item?.question_type === 'picture_select' ) {
					if ( item?.controls?.general?.options?.length > 0 ) {
						setPictureOptionCount(
							item?.controls?.general?.options?.length
						);
						item?.controls?.general?.options.map(
							async ( option, index ) => {
								if ( option?.url ) {
									const mediaData = {
										url: option?.url,
									};

									try {
										const importMediaResponse =
											await importMediaMutation(
												mediaData
											);
										if (
											importMediaResponse?.data
												?.status === 201
										) {
											item.controls.general.options[
												index
											].url = importMediaResponse?.url;
											successCount = successCount + 1;
											setImportSuccessCount(
												successCount
											);
										} else {
											item.controls.general.options[
												index
											].url = null;
											unSuccessCount = unSuccessCount + 1;
											setImportUnSuccessCount(
												unSuccessCount
											);
										}
									} catch ( error ) {
										item.controls.general.options[
											index
										].url = null;
										unSuccessCount = unSuccessCount + 1;
										setImportUnSuccessCount(
											unSuccessCount
										);
									}
								} else {
									unSuccessCount = unSuccessCount + 1;
									setImportUnSuccessCount( unSuccessCount );
								}
							}
						);
					}
				}
			} );
		}
	}, [ templateQuestions?.questions ] );

	useEffect( () => {
		console.log( importSuccessCount, importUnSuccessCount );
		console.log(
			templateQuestions?.questions?.length + pictureOptionCount
		);
		const progressPercentage = getPercentageValue(
			importSuccessCount + importUnSuccessCount,
			templateQuestions?.questions?.length + pictureOptionCount
		);
		const formContent = JSON.stringify( {
			questions: templateQuestions.questions,
			global: templateQuestions.global,
		} );
		setImportPercentage( progressPercentage );
	}, [ importSuccessCount, importUnSuccessCount ] );

	return (
		<QuestionPreparationStyle>
			<h4 className="helpgent-import-attachment__title">
				Import attachment progress
			</h4>
			<div className="helpgent-import-attachment__progress">
				<ProgressBar
					type="success"
					currentValue={ importPercentage }
					contentFlow="horizontal"
				/>
				<span className="helpgent-import-attachment__percentage">
					{ Math.floor( importPercentage ) }%
				</span>
			</div>
		</QuestionPreparationStyle>
	);
}
