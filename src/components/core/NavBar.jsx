import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const navBarItems = [
	{ title: 'Browse', link: '/browse' },
	{ title: 'How it Works', link: '' },
	{ title: 'Documentation', link: '' },
	{ title: 'About Us', link: '/about-us' },
];

const NavBar = ({ selected }) => {
	return (
		<header className="grid grid-cols-2 gap-y-16 px-80 bg-gradient-to-r from-black to-accent_dark">
			<nav className="col-span-2 flex justify-between items-center bg-transparent py-6">
				{/* logo */}
				<img src={logo} alt="Findtech Company Logo" />

				{/* Buttons */}
				<div className="flex w-2/3 justify-between items-center">
					{navBarItems.map((item) => {
						if (item.title === selected) {
							return (
								<Link to={item.link} className="text-accent text-xs font-bold">
									{item.title}
								</Link>
							);
						} else {
							return (
								<Link to={item.link} className="text-white text-xs font-bold">
									{item.title}
								</Link>
							);
						}
					})}
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
