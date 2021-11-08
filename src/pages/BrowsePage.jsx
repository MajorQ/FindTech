import BodyBrowse from '../components/browse/BodyBrowse';
import NavBar from '../components/core/NavBar';

const BrowsePage = () => {
	return (
		<div>
			<header className="grid grid-cols-2 gap-y-16 px-80 bg-gradient-to-r from-black to-accent_dark">
				<NavBar selected="Browse" />
			</header>

			<main>
				<BodyBrowse />
			</main>
		</div>
	);
};

export default BrowsePage;
