import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const navBarItems = [
	{ title: 'Browse', link: '' },
	{ title: 'How it Works', link: '' },
	{ title: 'Documentation', link: '' },
	{ title: 'About Us', link: '/about-us' },
];

const NavBar = () => {
	return (
		<nav className="col-span-2 flex justify-between items-center bg-transparent py-6">
			{/* logo */}
			<img src={logo} alt="Findtech Company Logo" />

			{/* Buttons */}
			<div className="flex w-2/3 justify-between items-center">
				{navBarItems.map((item) => {
					if (item.title === 'About Us') {
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
	);
};

export default NavBar;
