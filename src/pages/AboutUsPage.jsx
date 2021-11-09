import background from '../assets/images/bg-aboutus.png';
import AboutProfile from '../components/about-us/AboutProfile';
import AboutHeaderBody from '../components/about-us/HeaderBody';
import NavBar from '../components/core/NavBar';

const AboutUsPage = () => {
	return (
		<div>
			<NavBar selected="About Us" />

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

export default AboutUsPage;
