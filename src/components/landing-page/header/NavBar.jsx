import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavBarBurger from '../../core/NavBarBurger';
import NavBarItemsText from '../../core/NavBarItemsText';
import logo from '../../../assets/images/logo.svg';
import { NavBarItems } from '../../../utils/consts';

const NavBar = () => {
	let [showNavBarItems, setShowNavBarItems] = useState(false);

	return (
		<nav className="md:col-span-2  bg-transparent pt-6 md:py-6">
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
					{NavBarItems.map((item, index) => {
						return (
							<Link
								to={item.link}
								className="text-white text-xs font-bold"
								key={`LandingNavBarItem-${index}`}
							>
								{item.title}
							</Link>
						);
					})}

					<Link to="/question">
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
					</Link>
				</div>
			</div>

			<NavBarItemsText
				navBarItems={NavBarItems}
				showNavBarItems={showNavBarItems}
			/>
		</nav>
	);
};

export default NavBar;
