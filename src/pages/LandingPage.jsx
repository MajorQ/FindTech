import HeaderBody from '../components/landing-page/header/HeaderBody';
import HeaderButton from '../components/landing-page/header/HeaderButton';
import NavBar from '../components/landing-page/header/NavBar';
import MainInfo from '../components/landing-page/body/MainInfo';
import SecondInfo from '../components/landing-page/body/SecondInfo';
import About from '../components/landing-page/body/About';
import UserReviews from '../components/landing-page/body/UserReviews';
import Footer from '../components/landing-page/footer/Footer';

const LandingPage = () => {
	return (
		<div>
			<header className="w-full h-screen bg-landing-bg grid grid-cols-2 content-between px-40">
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

			<Footer />
		</div>
	);
};

export default LandingPage;
