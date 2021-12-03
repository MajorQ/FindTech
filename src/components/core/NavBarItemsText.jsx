import { Link } from 'react-router-dom';

const NavBarItemsText = ({ navBarItems, showNavBarItems, selected }) => {
	if (showNavBarItems) {
		return (
			<div className="block md:hidden">
				{navBarItems.map((item, index) => {
					const textColor = item.title === selected ? 'accent' : 'white';
					return (
						<Link
							to={item.link}
							className={`block text-${textColor} text-xs text-right font-bold pt-4`}
							key={`NavBarItemText-${index}`}
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
