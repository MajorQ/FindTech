import BrowseBody from '../components/browse/BrowseBody';
import NavBar from '../components/core/NavBar';

const BrowsePage = () => {
	return (
		<div>
			<NavBar selected="Browse" />
			<BrowseBody />
		</div>
	);
};

export default BrowsePage;
