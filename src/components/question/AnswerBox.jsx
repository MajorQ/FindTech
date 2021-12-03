const AnswerBox = ({ text, onClick, isSelected }) => {
	const bgColor = isSelected ? 'gray-100' : 'white';
	const borderColor = isSelected ? 'accent' : 'gray-300';

	return (
		<button
			className={`bg-${bgColor} rounded-xl border-2 border-${borderColor} block w-full text-left p-6 my-4`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default AnswerBox;
