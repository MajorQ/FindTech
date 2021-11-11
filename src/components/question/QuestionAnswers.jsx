const QuestionAnswers = ({ answers, selectedAnswer, onSelect }) => {
	return (
		<div className="w-2/3 h-1/2 bg-white rounded-2xl py-4 px-8">
			<div className="bg-gray-100 rounded-xl p-4">
				<h2 className="text-xl">
					<span className="">Select your</span>
					<span className="text-accent font-bold"> options</span>
				</h2>
			</div>

			{answers.map((answer, index) => {
				const isSelected = index === selectedAnswer;
				const borderColor = isSelected ? 'accent' : 'gray-300';
				const bgColor = isSelected ? 'gray-100' : 'white';
				const onClick = isSelected ? () => onSelect(-1) : () => onSelect(index);
				return (
					<AnswerPill
						text={answer.text}
						borderColor={borderColor}
						onClick={onClick}
						bgColor={bgColor}
					/>
				);
			})}
		</div>
	);
};

const AnswerPill = ({ text, borderColor, onClick, bgColor }) => {
	return (
		<button
			className={`transition duration-200 ease-in bg-${bgColor} rounded-xl border-2 border-${borderColor} block w-full text-left p-6 my-4`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default QuestionAnswers;
