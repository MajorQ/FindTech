const QuestionAnswers = ({ answers, onSelect }) => {
	return (
		<div className="w-2/3 h-1/2 bg-white rounded-2xl py-4 px-8">
			<div className="bg-gray-100 rounded-xl p-4">
				<h2 className="text-xl">
					<span className="">Select your</span>
					<span className="text-accent font-bold"> options</span>
				</h2>
			</div>
			{answers.map((answer, index) => AnswerPill(answer))}
		</div>
	);
};

const AnswerPill = (answer, isSelected = false) => {
	return isSelected ? (
		<div className="rounded-xl border-2 border-accent p-6 my-4">
			<p>{answer.text}</p>
		</div>
	) : (
		<div className="rounded-xl border-2 border-gray-300 p-6 my-4">
			<p>{answer.text}</p>
		</div>
	);
};

export default QuestionAnswers;
