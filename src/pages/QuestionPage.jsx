import { useState } from 'react';
import NavBar from '../components/core/NavBar';
import Questions from '../assets/json/questions.json';
import QuestionPrompt from '../components/question/Question';
import AnswerSingle from '../components/question/AnswerSingle';
import AnswerMutliple from '../components/question/AnswerMultiple';
import ArrowButton from '../components/core/ArrowButton';

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
			console.log(selectedAnswers);

			return;
		}

		setQuestionIndex(questionIndex + 1);
	};

	// if (Object.keys(data).length !== 0) {
	// 	const result = data.result;

	// 	return (
	// 		<div className="w-full h-full flex flex-col bg-gray-100 px-16">
	// 			<NavBar />
	// 			<strong className="text-3xl py-8">Your result is...</strong>

	// 			<div className="bg-white px-16 mx-24 my-12 rounded-2xl">
	// 				<h1 className="text-4xl font-bold py-8">{result[0].name}</h1>
	// 				<div className="h-96 w-96 mx-auto">
	// 					<img src={result[0].image} alt="Laptop" className="mx-auto" />
	// 				</div>
	// 				<div className="flex justify-end">
	// 					<h2 className="text-3xl font-bold text-accent">{`Rp. ${result[0].price}`}</h2>
	// 				</div>
	// 			</div>

	// 			<h3 className="text-2xl">Other results...</h3>

	// 			{result.map((laptop, index) => {
	// 				return (
	// 					<div
	// 						className="bg-white py-4 px-16 mx-56 my-4 rounded-2xl"
	// 						key={`Laptop-${index}`}
	// 					>
	// 						<h1 className="text-2xl font-bold py-8">{laptop.name}</h1>
	// 						<div className="h-48 w-48 mx-auto">
	// 							<img src={laptop.image} alt="Laptop" className="mx-auto" />
	// 						</div>
	// 						<div className="flex justify-end">
	// 							<h2 className="text-lg font-bold text-accent">{`Rp. ${laptop.price}`}</h2>
	// 						</div>
	// 					</div>
	// 				);
	// 			})}
	// 		</div>
	// 	);
	// }

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
