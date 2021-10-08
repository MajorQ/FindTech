import HeaderBody from '../components/main-header/HeaderBody';
import NavBar from '../components/main-header/NavBar';

const LandingPage = () => {
	return (
		<div className="h-screen">
			<header className="grid grid-cols-2 bg-gray-700 h-full px-32">
				<NavBar />
				<HeaderBody />
				<div className="col-span-2">tesxst</div>
			</header>
		</div>
	);
};

export default LandingPage;
