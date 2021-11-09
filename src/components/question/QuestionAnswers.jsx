const QuestionAnswers = ({ answers, selectedAnswer, onSelect }) => {
	return (
		<div className="w-2/3 h-1/2 bg-white rounded-2xl py-4 px-8">
			<div className="bg-gray-100 rounded-xl p-4">
				<h2 className="text-xl">
					<span className="">Select your</span>
					<span className="text-accent font-bold"> options</span>
				</h2>
			</div>

			{answers.map((answer, index) => (
				<AnswerPill
					text={answer.text}
					isSelected={index === selectedAnswer}
					onClick={() => onSelect(index)}
				/>
			))}
		</div>
	);
};

const AnswerPill = ({ text, isSelected = false, onClick }) => {
	return isSelected ? (
		<button
			className="rounded-xl border-2 border-accent block w-full text-left p-6 my-4"
			onClick={onClick}
		>
			{text}
		</button>
	) : (
		<button
			className="rounded-xl border-2 border-gray-300 block w-full text-left p-6 my-4"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default QuestionAnswers;
