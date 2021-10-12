const HeaderButton = () => {
	return (
		<button className="col-span-2 container bg-accent text-left px-4 py-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-8 w-8 inline-block"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>

			<span className="text-xl font-bold px-4">Find Laptops</span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 inline-block"
				fill="none"
				viewBox="0 0 24 24"
				stroke="white"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</button>
	);
};

export default HeaderButton;
