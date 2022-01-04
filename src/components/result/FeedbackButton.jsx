export const FeedbackButton = ({ isSelected, onClick, text, iconPath }) => {
	const backgroundColor = isSelected ? 'accent' : 'white';

	return (
		<button
			className={`bg-${backgroundColor} rounded-2xl w-full border-2 border-gray-200 flex justify-center items-center gap-4 py-12`}
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d={iconPath}
				/>
			</svg>
			<h2 className="text-2xl">{text}</h2>
		</button>
	);
};
