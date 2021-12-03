import { useState } from 'react';
import NavBar from '../components/core/NavBar';
import Questions from '../assets/json/questions.json';
import QuestionPrompt from '../components/question/Question';
import AnswerSingle from '../components/question/AnswerSingle';
import AnswerMutliple from '../components/question/AnswerMultiple';
import ArrowButton from '../components/core/ArrowButton';
import { useHistory } from 'react-router-dom';

const getInitialAnswers = () => {
	return Questions.map((question) => {
		switch (question.type) {
			case 'multiple':
				return question.answers.map(() => false);
			default:
				return -1;
		}
	});
};

const QuestionPage = () => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState(getInitialAnswers());
	const question = Questions.at(questionIndex);
	const history = useHistory();

	const onSelectSingleAnswer = (newAnswer) => {
		const previousAnswer = selectedAnswers[questionIndex];

		const newSelectedAnswers = selectedAnswers.map((answer) => answer);

		if (newAnswer === previousAnswer) {
			// If new answer is the same as previous one, deselect the answer
			newSelectedAnswers[questionIndex] = -1;
		} else {
			// else, set the new answer for the question
			newSelectedAnswers[questionIndex] = newAnswer;
		}

		setSelectedAnswers(newSelectedAnswers);
	};

	const onSelectMultiAnswer = (index) => {
		const previousAnswer = selectedAnswers[questionIndex][index];

		const newSelectedAnswers = selectedAnswers.map((answer) => answer);

		// Set new answer for that question on the answer index as opposite of previous ones
		newSelectedAnswers[questionIndex][index] = !previousAnswer;

		setSelectedAnswers(newSelectedAnswers);
	};

	const goToPreviousQuestion = () => {
		if (questionIndex - 1 < 0) return;

		setQuestionIndex(questionIndex - 1);
	};

	const goToNextQuestion = () => {
		if (questionIndex + 1 === Questions.length) {
			let request = {};

			// This is so ugly but it works haha
			Questions.forEach((question, index) => {
				const selectedIndex = selectedAnswers[index];

				if (question.type === 'multiple') {
					question.answers.forEach((answer, index2) => {
						request = {
							...request,
							...{ [answer.value]: selectedIndex[index2] },
						};
					});

					return;
				}

				request = { ...request, ...question.answers.at(selectedIndex).values };
			});

			history.replace({ pathname: '/result', state: request });

			return;
		}

		setQuestionIndex(questionIndex + 1);
	};

	const AnswerComponent = () => {
		switch (question.type) {
			case 'multiple':
				return (
					<AnswerMutliple
						answers={question.answers}
						selectedAnswers={selectedAnswers[questionIndex]}
						onClick={onSelectMultiAnswer}
					/>
				);

			default:
				return (
					<AnswerSingle
						answers={question.answers}
						selectedAnswer={selectedAnswers[questionIndex]}
						onClick={onSelectSingleAnswer}
					/>
				);
		}
	};

	return (
		<div>
			<NavBar />

			<div className="md:grid md:grid-cols-5 md:items-center bg-gray-100 px-8 transition-all duration-1000">
				<div className="mx-auto">
					<ArrowButton
						isEnabled={questionIndex !== 0}
						isForward={false}
						onClick={goToPreviousQuestion}
					></ArrowButton>
				</div>
				<main className="md:col-span-3 flex flex-col justify-evenly items-center py-8">
					<QuestionPrompt
						questionNumber={questionIndex + 1}
						questionText={question.text}
					/>

					<AnswerComponent />
				</main>
				<div className="mx-auto">
					<ArrowButton
						isEnabled={selectedAnswers[questionIndex] !== -1}
						onClick={goToNextQuestion}
					></ArrowButton>
				</div>
			</div>
		</div>
	);
};

export default QuestionPage;
