import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';

const navBarItems = [
	{ title: 'Browse', link: '/browse' },
	// { title: 'How it Works', link: '' },
	// { title: 'Documentation', link: '' },
	{ title: 'About Us', link: '/about-us' },
];

const NavBar = () => {
	return (
		<nav className="col-span-2 flex justify-between items-center bg-transparent py-6">
			{/* logo */}
			<Link to="/">
				<img src={logo} alt="Findtech Company Logo" />
			</Link>

			{/* Buttons */}
			<div className="flex w-2/3 justify-evenly items-center">
				{navBarItems.map((item) => (
					<Link to={item.link} className="text-white text-xs font-bold">
						{item.title}
					</Link>
				))}

				<button className="bg-accent rounded-tr-2xl px-8 py-2">
					<span className="font-bold text-sm pr-2">Find Laptops</span>
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
	);
};

export default NavBar;
