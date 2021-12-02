import { useState } from 'react';
import { Url } from '../utils/consts';
import NavBar from '../components/core/NavBar';
import QuestionPrompt from '../components/question/QuestionPrompt';
import QuestionAnswers from '../components/question/QuestionAnswers';
import Questions from '../assets/json/questions.json';
import Request from '../assets/json/request.json';
import ScrollToTop from '../components/core/ScrollToTop';

// const States = Object.freeze({
// 	initial: 'initial',
// 	loading: 'loading',
// 	done: 'done',
// 	failed: 'failed',
// });

const QuestionPage = () => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [allAnswers, setAllAnswers] = useState(Request);
	const [data, setData] = useState({});
	const [selectedAnswer, setSelectedAnswer] = useState(-1);
	const question = Questions.at(questionIndex);

	const onSelectAnswer = (index) => {
		if (index === selectedAnswer) {
			setSelectedAnswer(-1);

			return;
		}

		setAllAnswers({
			...allAnswers,
			...question.answers.at(index).values,
		});

		setSelectedAnswer(index);
	};

	// TODO: previous question
	// const goToPreviousQuestion = () => {
	// 	setQuestionIndex(questionIndex - 1);
	// };

	const goToNextQuestion = () => {
		if (questionIndex + 1 === Questions.length) {
			console.log(allAnswers);

			// TODO: error handling
			fetch(Url.predict)
				.then((response) => response.json())
				.then((data) => setData(data));

			return;
		}

		setSelectedAnswer(-1);

		setQuestionIndex(questionIndex + 1);
	};

	if (Object.keys(data).length !== 0) {
		return <div className="bg-gray-100">{data}</div>;
	}

	return (
		<ScrollToTop>
			<div>
				<NavBar />

				<div className="md:grid md:grid-cols-5 md:items-center bg-gray-100 px-8">
					<div className="mx-auto">
						{/* <ArrowButton
							isEnabled={questionIndex !== 0}
							isForward={false}
							onClick={goToPreviousQuestion}
						></ArrowButton> */}
					</div>
					<main className="md:col-span-3 flex flex-col justify-evenly items-center py-8">
						<QuestionPrompt
							questionNumber={questionIndex + 1}
							questionText={question.text}
						/>

						<QuestionAnswers
							answers={question.answers}
							selectedAnswer={selectedAnswer}
							onClick={onSelectAnswer}
						/>
					</main>
					<div className="mx-auto">
						<ArrowButton
							isEnabled={selectedAnswer !== -1}
							onClick={goToNextQuestion}
						></ArrowButton>
					</div>
				</div>
			</div>
		</ScrollToTop>
	);
};

const ArrowButton = ({ onClick, isEnabled = true, isForward = true }) => {
	const path = isForward ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7';

	if (!isEnabled) {
		return <div></div>;
	}

	return (
		<button onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-24 w-24 mx-auto"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d={path}
				/>
			</svg>
		</button>
	);
};

export default QuestionPage;
