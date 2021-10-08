import HeaderBody from '../components/main-header/HeaderBody';
import HeaderButton from '../components/main-header/HeaderButton';
import NavBar from '../components/main-header/NavBar';

const LandingPage = () => {
	return (
		<div className="h-screen">
			<header className="grid grid-cols-2 bg-gray-700 h-full px-32">
				<NavBar />
				<HeaderBody />
				<HeaderButton />
			</header>
		</div>
	);
};

export default LandingPage;
