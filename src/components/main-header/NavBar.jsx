const navBarItems = [
	{ title: 'Browse', link: '' },
	{ title: 'How it Works', link: '' },
	{ title: 'Documentation', link: '' },
	{ title: 'About Us', link: '' },
];

const NavBar = () => {
	return (
		<div className="col-span-2">
			<nav className="flex justify-between items-center bg-transparent py-6">
				{/* logo */}
				<div>Logo</div>

				{/* Buttons */}
				<div className="flex w-1/2 justify-evenly">
					{navBarItems.map((item) => (
						<button className="text-white text-xs font-bold">
							{item.title}
						</button>
					))}
					<button className="bg-accent text-sm font-bold px-4 py-2 rounded-tr-lg">
						<span className="pr-2">Find Laptops</span>
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
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
