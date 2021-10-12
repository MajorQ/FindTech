import HeaderBody from '../components/main-header/HeaderBody';
import HeaderButton from '../components/main-header/HeaderButton';
import NavBar from '../components/main-header/NavBar';
import headerImage from '../assets/images/header_image.png';

const LandingPage = () => {
	return (
		<header
			className="grid grid-cols-2 gap-y-16 px-40"
			style={{ backgroundImage: `url(${headerImage})` }}
		>
			<NavBar />
			<HeaderBody />
			<HeaderButton />
		</header>
	);
};

export default LandingPage;
