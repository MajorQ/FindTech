const Question = ({ questionNumber, totalQuestions, questionText }) => {
	return (
		<div className="w-full flex flex-col bg-white rounded-2xl divide-solid divide-y divide-gray-300 py-8 mb-6">
			<strong className="text-2xl px-4 py-4 font-bold">
				{`Question ${questionNumber}/${totalQuestions}`}
			</strong>
			<p className="text-xl px-4 py-4">{questionText}</p>
		</div>
	);
};

export default Question;
