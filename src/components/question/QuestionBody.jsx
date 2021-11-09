import QuestionAnswers from './QuestionAnswers';
import QuestionPrompt from './QuestionPrompt';

const QuestionBody = ({ questionNumber, questionText, answers = [] }) => {
	return (
		<main className="flex flex-col justify-evenly items-center bg-gray-100 px-52 py-8">
			<QuestionPrompt
				questionNumber={questionNumber}
				questionText={questionText}
			/>
			<QuestionAnswers answers={answers} />
		</main>
	);
};

export default QuestionBody;
