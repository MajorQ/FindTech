import NavBar from '../components/core/NavBar';
import QuestionBody from '../components/question/QuestionBody';

// TODO: remove dummy data
const questionNumber = 1;
const questionText = 'How much is your budget';
const answers = [
	{ text: 'Under 6.000.000', value: 1 },
	{ text: 'Rp6.000.000 - Rp8.000.000', value: 2 },
	{ text: 'Rp8.000.000 - Rp15.000.000', value: 3 },
	{ text: 'Rp15.000.000 - Rp20.000.000', value: 4 },
	{ text: 'Over Rp20.000.000', value: 5 },
];

const QuestionsPage = () => {
	return (
		<div>
			<NavBar />
			<QuestionBody
				questionNumber={questionNumber}
				questionText={questionText}
				answers={answers}
			/>
		</div>
	);
};

export default QuestionsPage;
