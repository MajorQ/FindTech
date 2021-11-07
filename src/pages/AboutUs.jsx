import background from '../assets/images/bg-aboutus.png';
import AboutProfile from '../components/about-us/AboutProfile';
import AboutHeaderBody from '../components/about-us/HeaderBody';
import AboutNavBar from '../components/about-us/NavBar';

const AboutUs = () => {
	return (
		<div>
			<header className="grid grid-cols-2 gap-y-16 px-80 bg-gradient-to-r from-black to-accent_dark">
				<AboutNavBar />
			</header>
			<div
				className="w-full h-screen bg-no-repeat bg-cover "
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<AboutHeaderBody />
			</div>
			<main>
				<AboutProfile />
			</main>
		</div>
	);
};

export default AboutUs;
