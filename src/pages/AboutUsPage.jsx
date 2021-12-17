import AboutUsProfile from '../components/about-us/AboutUsProfile';
import AboutUsBody from '../components/about-us/AboutUsBody';
import NavBar from '../components/core/NavBar';
import ContactUsForm from '../components/about-us/ContactUsForm';
import useSetPageTitle from '../utils/hooks/useSetPageTitle';

const AboutUsPage = () => {
	useSetPageTitle('Findtech | About Us');

	return (
		<div>
			<NavBar selected="About Us" />

			<div className="w-full h-screen bg-about-us-header bg-cover">
				<AboutUsBody />
			</div>

			<div className="block md:hidden py-12">
				<ContactUsForm />
			</div>

			<AboutUsProfile />
		</div>
	);
};

export default AboutUsPage;
