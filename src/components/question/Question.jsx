const QuestionPrompt = ({ questionNumber, questionText }) => {
	return (
		<div className="w-full flex flex-col bg-white rounded-2xl divide-solid divide-y divide-gray-300 py-8 mb-6">
			<strong className="px-4 py-4 font-bold">
				{`Question ${questionNumber}`}
			</strong>
			<p className="px-4 py-4">{questionText}</p>
		</div>
	);
};

export default QuestionPrompt;
