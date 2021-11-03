import RoundedButton from '../core/RoundedButton';

const About = () => {
	return (
		<div className="w-screen flex flex-col p-32 items-center bg-gradient-to-r from-accent_dark to-black">
			<div className="w-44 h-1 bg-gradient-to-r from-yellow-400 to-black"></div>
			<h2 className="my-5 text-4xl text-left text-white font-bold tracking-tighter">
				About Findtech Team
			</h2>
			<p className="max-w-sm text-center text-sm mb-20 text-gray-400 leading-relaxed">
				Our team consists of Computer Engineering students of Universitas
				Indonesia, we are very interested in learning about AI and web
				development. Therefore, we present to you our latest and greatest idea:
				Findtech, to show how the power of data can make your life easier.
			</p>
			<RoundedButton
				label="Get to know us"
				arrowColor="text-white"
				backgroundColor="bg-accent"
				textColor="text-black"
			/>
		</div>
	);
};

export default About;
