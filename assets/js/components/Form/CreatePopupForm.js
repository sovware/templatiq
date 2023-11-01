import { useState, useEffect } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import Switch from '@components/Switch.js';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import ReactSVG from 'react-inlinesvg';
import useCreateMutation from '@hooks/useCreateMutation.js';
import handleChatBubbleToggle from './helper/handleChatBubbleToggle';
import CreatePopupHeader from './CreatePopupHeader';
import questionCircle from '@icon/question-circle.svg';
import { CreateFormStyleWrap } from './style.js';
import WPPageSelectField from '@components/WPPageSelectField';
import CreatePopupQuestionPreparation from './CreatePopupQuestionPreparation.js';
import { getGlobalState } from '@helper/utils';

export default function CreatePopupForm( props ) {
	const { navigationHook: useNavigate } = getGlobalState(
		'helpgent_router_references',
		null
	);
	const { moduleState, setModuleState } = props;
	const { selectedTemplate } = moduleState;
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const [ serverErrors, setServerErrors ] = useState( {} );
	const [ newFormData, setNewFormData ] = useState( null );
	const [ displayChatBubble, setDisplayChatBubble ] = useState( false );
	const [ toggleSwitch, setToggleSwitch ] = useState( '0' );
	const [ createStep, setCreateStep ] = useState( 'form' );

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		control,
	} = useForm( { mode: 'all' } );

	const { mutateAsync: createFormMutation, isLoading: formCreating } =
		useCreateMutation(
			'/helpgent/admin/form',
			function ( previousData, forms ) {
				previousData.forms.push( forms );
				previousData.total = previousData.forms.length;
				queryClient.setQueryData(
					[ 'helpgent-form' ],
					( old ) => previousData
				);
			}
		);

	useEffect( () => {
		if ( selectedTemplate ) {
			setValue( 'title', selectedTemplate?.title || null );
		}
	}, [ selectedTemplate ] );

	function handleFormSubmission( formData ) {
		setModuleState( {
			...moduleState,
			addBackBtn: false,
		} );

		if ( selectedTemplate ) {
			setCreateStep( 'attachmentImport' );
			setNewFormData( formData );
		} 
	}

	return (
		<>
			{ createStep === 'form' && (
				<div className="helpgent-createPopup">
					<CreatePopupHeader title="Let’s get started" />
					<CreateFormStyleWrap>
						<form
							onSubmit={ handleSubmit( ( formData ) =>
								handleFormSubmission( formData )
							) }
						>
							<div className="helpgent-form-group">
								<input
									type="text"
									className="helpgent-form-group__element"
									name="title"
									placeholder="Form Name"
									{ ...register( 'title', {
										required: {
											value: true,
											message:
												'The title field is required',
										},
										validate: {
											isOnlySpace: ( value ) => {
												const isValid =
													value.trim().length !== 0;
												return (
													isValid ||
													'Only spaces not allowed'
												);
											},
											minLength: ( value ) => {
												const isValid =
													value.trim().length >= 5;
												return (
													isValid ||
													'The title filed must be at least 5 characters.'
												);
											},
										},
									} ) }
								/>
							</div>
							<div className="helpgent-form-group">
								<div className="helpgent-form__element-inline">
									<Switch
										handleToggle={ () =>
											handleChatBubbleToggle(
												setDisplayChatBubble,
												setValue,
												displayChatBubble,
												setToggleSwitch,
												toggleSwitch
											)
										}
										label="Enable Form Bubble?"
										isActive={ toggleSwitch }
										tooltip
										tooltipText="More information"
									/>
								</div>
							</div>
							{ displayChatBubble ? (
								<div className="helpgent-form-group">
									<label
										htmlFor="helpgent-page-select"
										className="helpgent-form__label"
									>
										Display on Selected Pages
										<Tooltip
											text="More information"
											delay="0"
										>
											<span className="helpgent-tooltip-toggle">
												<ReactSVG
													src={ questionCircle }
												/>
											</span>
										</Tooltip>
									</label>

									<WPPageSelectField
										control={ control }
										name="available_pages"
										isMulti={ true }
									/>
								</div>
							) : null }

							<button
								type="submit"
								className={ `helpgent-btn helpgent-btn-md helpgent-btn-primary helpgent-btn-block ${
									Object.keys( errors ).length !== 0 ||
									Object.keys( serverErrors ).length !== 0 ||
									formCreating
										? 'helpgent-btn-disabled'
										: ''
								}` }
								disabled={
									Object.keys( errors ).length !== 0 ||
									Object.keys( serverErrors ).length !== 0 ||
									formCreating
										? true
										: false
								}
							>
								{ formCreating ? 'Creating' : 'Create Form' }
							</button>
							{ serverErrors.internal &&
								getValidationMessage( serverErrors.internal ) }
						</form>
					</CreateFormStyleWrap>
				</div>
			) }
			{ createStep === 'attachmentImport' && (
				<CreatePopupQuestionPreparation
					formData={ newFormData }
					createFormMutation={ createFormMutation }
					setServerErrors={ setServerErrors }
					navigate={ navigate }
					queryClient={ queryClient }
					moduleState={ moduleState }
					setModuleState={ setModuleState }
				/>
			) }
		</>
	);
}
