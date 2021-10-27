import NavBar from '../components/about-us/NavBar';
import background from '../assets/images/bg-aboutus.png';
import AboutHeaderBody from '../components/about-us/HeaderBody';

const AboutUs = () => {
	return (
		<div>
			<header className="grid grid-cols-2 gap-y-16 px-80 bg-gradient-to-r from-black to-darkaccent">
				<NavBar />
			</header>
			<div
				className="w-full h-screen bg-no-repeat bg-cover "
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<AboutHeaderBody />
			</div>
		</div>
	);
};

export default AboutUs;
