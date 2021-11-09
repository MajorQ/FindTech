import BodyBrowse from '../components/browse/BodyBrowse';
import NavBar from '../components/core/NavBar';

const BrowsePage = () => {
	return (
		<div>
			<NavBar selected="Browse" />

			<main>
				<BodyBrowse />
			</main>
		</div>
	);
};

export default BrowsePage;
