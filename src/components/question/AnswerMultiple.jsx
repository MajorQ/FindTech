import AnswerBox from './AnswerBox';

const AnswerMutliple = ({ answers, selectedAnswers, onClick }) => {
	return (
		<div className="w-full bg-white rounded-2xl py-4 px-8">
			<div className="bg-gray-100 rounded-xl p-4">
				<h2 className="text-xl">
					<span className="">Select </span>
					<span className="text-accent font-bold">
						one, more than one, or no
					</span>
					<span className=""> options</span>
				</h2>
			</div>

			{answers.map((answer, index) => {
				return (
					<AnswerBox
						key={`AnswerMultiple-${index}`}
						text={answer.text}
						isSelected={selectedAnswers[index]}
						onClick={() => onClick(index)}
					/>
				);
			})}
		</div>
	);
};

export default AnswerMutliple;
