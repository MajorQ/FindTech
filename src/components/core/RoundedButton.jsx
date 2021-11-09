import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const RoundedButton = ({
	link = '/',
	label,
	textColor,
	backgroundColor,
	arrowColor,
}) => {
	return (
		<Link to={link}>
			<button
				className={`flex justify-evenly bg-${backgroundColor} rounded-tr-xl w-48 px-4 py-6`}
			>
				<span className={`text-${textColor} font-bold text-sm pr-2`}>
					{label}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`stroke-current text-${arrowColor} h-6 w-6 inline-block`}
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</button>
		</Link>
	);
};

export default RoundedButton;
