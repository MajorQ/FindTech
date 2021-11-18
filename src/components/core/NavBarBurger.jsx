const NavBarBurger = ({ isClicked, onClick }) => {
	const burgerSvgPath = 'M6 18L18 6M6 6l12 12';
	const closeSvgPath = 'M4 6h16M4 12h16M4 18h16';
	const path = isClicked ? burgerSvgPath : closeSvgPath;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-8 w-8 md:hidden"
			fill="none"
			viewBox="0 0 24 24"
			stroke="white"
			onClick={onClick}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d={path}
			/>
		</svg>
	);
};

export default NavBarBurger;
