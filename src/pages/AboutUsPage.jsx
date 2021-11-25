import AboutUsProfile from '../components/about-us/AboutUsProfile';
import AboutUsBody from '../components/about-us/AboutUsBody';
import NavBar from '../components/core/NavBar';

const AboutUsPage = () => {
	return (
		<div>
			<NavBar selected="About Us" />

			<div className="w-full h-screen bg-about-us-header bg-cover">
				<AboutUsBody />
			</div>

			<AboutUsProfile />
		</div>
	);
};

export default AboutUsPage;
