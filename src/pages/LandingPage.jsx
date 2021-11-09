import HeaderBody from '../components/landing-page/header/HeaderBody';
import HeaderButton from '../components/landing-page/header/HeaderButton';
import NavBar from '../components/landing-page/header/NavBar';
import MainInfo from '../components/landing-page/body/MainInfo';
import SecondInfo from '../components/landing-page/body/SecondInfo';
import headerImage from '../assets/images/header_image.png';
import About from '../components/landing-page/body/About';
import UserReviews from '../components/landing-page/body/UserReviews';
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
