import AnswerBox from './AnswerBox';

const AnswerSingle = ({ answers, selectedAnswer, onClick }) => {
	return (
		<div className="w-full bg-white rounded-2xl py-4 px-8">
			<div className="bg-gray-100 rounded-xl p-4">
				<h2 className="text-xl">
					<span className="">Select</span>
					<span className="text-accent font-bold"> your</span>
					<span className=""> option</span>
				</h2>
			</div>

			{answers.map((answer, index) => {
				return (
					<AnswerBox
						key={`AnswerSingle-${index}`}
						text={answer.text}
						isSelected={index === selectedAnswer}
						onClick={() => onClick(index)}
					/>
				);
			})}
		</div>
	);
};

export default AnswerSingle;
