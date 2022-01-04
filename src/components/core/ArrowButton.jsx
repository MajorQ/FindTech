const ArrowButton = ({ onClick, isEnabled = true, iconPath }) => {
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
					d={iconPath}
				/>
			</svg>
		</button>
	);
};

export default ArrowButton;
