import ReactSVG from 'react-inlinesvg';
import useFetchData from '@hooks/useFetchData';
import usePostMutation from '@hooks/usePostMutation';
import rotateLeftSolid from '@icon/rotate-left-solid.svg';
import { findObjectItem } from "@helper/utils";
import { useQueryClient } from '@tanstack/react-query';

export default function EmailThrottle(props) {
	const { label, inputKey, form, rules, ErrorMessage } = props;

	const queryClient = useQueryClient();

	const totalSentEmailAPI = findObjectItem('api.getTotalSentEmail', props, '');
	const resetThrottleAPI = findObjectItem('api.resetThrottle', props, '');

	const {
		data: totalSentEmailData,
		isLoading: isLoadingTotalSentEmail,
		isFetching: isFetchingTotalSentEmail,
	} = useFetchData(['totalSentEmailCheck'], totalSentEmailAPI);


	const { mutateAsync: resetThrottleMutation, isLoading: isResetingThrottle } = usePostMutation(
		resetThrottleAPI
	);

	const totalSentEmail = totalSentEmailData ? totalSentEmailData.total : 0;

	async function handleReset(e) {
		e.preventDefault();

		if ( isLoadingTotalSentEmail ||
			isFetchingTotalSentEmail ||
			isResetingThrottle 
		) {
			return;
		}

		const isConfirmed = confirm( 'Are you sure to reset the total email sent count?' );

		if ( ! isConfirmed ) {
			return;
		}

		try {
			await resetThrottleMutation();
			queryClient.invalidateQueries( { queryKey: [ 'totalSentEmailCheck' ] } );
		} catch (error) {
			console.log( error );
		}
	}

	return (
		<div className="helpgent-form-row">
			<div className="helpgent-form-row-left">
				<label
					htmlFor="helpgent-page-select"
					className="helpgent-form__label"
				>
					{label}
				</label>
			</div>

			<div className="helpgent-form-row-right">
				<div className='helpgent-form-group'>
					<input type="number" {...form.register(inputKey)} />

					<ErrorMessage
						inputKey={inputKey}
						form={form}
						rules={rules}
					/>
				</div>

				{
					isResetingThrottle && (
						'Reseting, please wait...'
					)
				}

				{
					isFetchingTotalSentEmail && (
						'Loading, please wait...'
					)
				}

				{ ( !isLoadingTotalSentEmail && !isFetchingTotalSentEmail && !isResetingThrottle ) && (
					<div className='helpgent-form-group'>
						Total Sent Email: {totalSentEmail}

						<a title='Reset' className='helpgent-icon-link' onClick={handleReset}>
							<ReactSVG src={rotateLeftSolid} />
						</a>
					</div>
				) }
			</div>
		</div>
	);
}
