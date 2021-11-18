import { Link } from 'react-router-dom';

const NavBarItemsText = ({ navBarItems, showNavBarItems }) => {
	if (showNavBarItems) {
		return (
			<div className="block">
				{navBarItems.map((item, index) => {
					return (
						<Link
							to={item.link}
							className="block text-white text-xs text-right font-bold pt-4"
							key={`NavBarItem-${index}`}
						>
							{item.title}
						</Link>
					);
				})}
			</div>
		);
	}

	return <div></div>;
};

export default NavBarItemsText;
