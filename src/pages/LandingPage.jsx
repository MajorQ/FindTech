import HeaderBody from '../components/main-header/HeaderBody';
import HeaderButton from '../components/main-header/HeaderButton';
import NavBar from '../components/main-header/NavBar';
import MainInfo from '../components/learn-more/MainInfo';
import SecondInfo from '../components/learn-more/SecondInfo';
import headerImage from '../assets/images/header_image.png';
import About from '../components/learn-more/About';
import UserReviews from '../components/learn-more/UserReviews';

const LandingPage = () => {
	return (
		<div>
			<header
				className="grid grid-cols-2 gap-y-16 px-40"
				style={{ backgroundImage: `url(${headerImage})` }}
			>
				<NavBar />
				<HeaderBody />
				<HeaderButton />
			</header>

			<main>
				<MainInfo />
				<SecondInfo />
				<About />
				<UserReviews />
			</main>
		</div>
	);
};

export default LandingPage;
