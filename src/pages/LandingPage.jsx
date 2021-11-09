import HeaderBody from '../components/main-header/HeaderBody';
import HeaderButton from '../components/main-header/HeaderButton';
import NavBar from '../components/main-header/NavBar';
import MainInfo from '../components/learn-more/MainInfo';
import SecondInfo from '../components/learn-more/SecondInfo';
import headerImage from '../assets/images/header_image.png';
import About from '../components/learn-more/About';
import UserReviews from '../components/learn-more/UserReviews';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
	return (
		<div>
			<header
				className="h-screen grid grid-cols-2 content-between px-40"
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

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default LandingPage;
