import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import NavBarBurger from './NavBarBurger';
import { navBarItems } from '../../utils/consts';
import NavBarItemsText from './NavBarItemsText';

const NavBar = ({ selected }) => {
	let [showNavBarItems, setShowNavBarItems] = useState(false);

	return (
		<header className="md:grid md:grid-cols-2 md:gap-y-16 px-4 md:px-80 bg-gradient-to-r from-black to-accent_dark">
			<nav className="md:col-span-2 py-6">
				<div className="flex justify-between items-center">
					{/* logo */}
					<Link to="/">
						<img src={logo} alt="Findtech Company Logo" />
					</Link>

					{/* Burger Icon */}
					<NavBarBurger
						isClicked={showNavBarItems}
						onClick={() => setShowNavBarItems(!showNavBarItems)}
					/>

					{/* Buttons */}
					<div className="hidden md:flex w-2/3 justify-evenly items-center">
						{navBarItems.map((item, index) => {
							if (item.title === selected) {
								return (
									<Link
										to={item.link}
										className="text-accent text-xs font-bold"
										key={`NavBarItem-${index}`}
									>
										{item.title}
									</Link>
								);
							} else {
								return (
									<Link
										to={item.link}
										className="text-white text-xs font-bold"
										key={`NavBarItem-${index}`}
									>
										{item.title}
									</Link>
								);
							}
						})}
					</div>
				</div>

				<NavBarItemsText
					navBarItems={navBarItems}
					showNavBarItems={showNavBarItems}
					selected={selected}
				/>
			</nav>
		</header>
	);
};

export default NavBar;
