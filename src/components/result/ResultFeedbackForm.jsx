import { useState } from 'react';
import { icThumbsDown, icThumbsUp } from '../../utils/assets';
import { ResultFeedback } from '../../utils/consts';
import RoundedButton from '../core/RoundedButton';
import { FeedbackButton } from './FeedbackButton';

export const ResultFeedbackForm = () => {
	const [resultFeedback, setResultFeedback] = useState(ResultFeedback.none);

	console.log(resultFeedback);
	return (
		<div className="bg-white rounded-3xl md:col-start-6 col-end-8 flex flex-col justify-between gap-4 p-6">
			<div className="bg-gray-100 w-full flex flex-col justify-center items-center gap-2 rounded-2xl px-12 py-8">
				<strong className="text-2xl text-center">
					Tell us what you think!
				</strong>
				<p className="text-md text-center">
					How are the results of your prediction? Do you like it?
				</p>
			</div>
			<FeedbackButton
				text="I like it"
				iconPath={icThumbsUp}
				isSelected={resultFeedback === ResultFeedback.positive}
				onClick={() => {
					if (resultFeedback === ResultFeedback.positive) {
						setResultFeedback(ResultFeedback.none);
						return;
					}

					setResultFeedback(ResultFeedback.positive);
				}}
			/>
			<FeedbackButton
				text="I don't like it"
				iconPath={icThumbsDown}
				isSelected={resultFeedback === ResultFeedback.negative}
				onClick={() => {
					if (resultFeedback === ResultFeedback.negative) {
						setResultFeedback(ResultFeedback.none);
						return;
					}

					setResultFeedback(ResultFeedback.negative);
				}}
			/>
			<RoundedButton
				label="Send to Us"
				link=""
				arrowColor="accent"
				backgroundColor="black"
				textColor="white"
				width="full"
				px="12"
				py="8"
				onClick={() => {
					if (resultFeedback !== ResultFeedback.none) {
						window.alert('Feedback sent!');
					}
				}}
			/>
		</div>
	);
};
