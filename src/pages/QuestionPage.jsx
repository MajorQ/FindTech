import { useState } from 'react';
import NavBar from '../components/core/NavBar';
import QuestionPrompt from '../components/question/QuestionPrompt';
import QuestionAnswers from '../components/question/QuestionAnswers';

// TODO: remove dummy data
const questionNumber = 1;
const questionText = 'How much is your budget?';
const answers = [
	{ text: 'Under 6.000.000', value: 1 },
	{ text: 'Rp6.000.000 - Rp8.000.000', value: 2 },
	{ text: 'Rp8.000.000 - Rp15.000.000', value: 3 },
	{ text: 'Rp15.000.000 - Rp20.000.000', value: 4 },
	{ text: 'Over Rp20.000.000', value: 5 },
];

const QuestionPage = () => {
	var [selectedAnswer, selectAnswer] = useState(-1);
	return (
		<div>
			<NavBar />

			<main className="flex flex-col justify-evenly items-center bg-gray-100 px-52 py-8">
				<QuestionPrompt
					questionNumber={questionNumber}
					questionText={questionText}
				/>

				<QuestionAnswers
					answers={answers}
					selectedAnswer={selectedAnswer}
					onSelect={(index) => selectAnswer(index)}
				/>
			</main>
		</div>
	);
};

export default QuestionPage;
