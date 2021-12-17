import BrowseBody from '../components/browse/BrowseBody';
import NavBar from '../components/core/NavBar';
import useSetPageTitle from '../utils/hooks/useSetPageTitle';

const BrowsePage = () => {
	useSetPageTitle('Findtech | Browse');

	return (
		<div>
			<NavBar selected="Browse" />
			<BrowseBody />
		</div>
	);
};

export default BrowsePage;
