import RoundedButton from '../../core/RoundedButton';

const About = () => {
	return (
		<div className="w-full flex flex-col items-center bg-gradient-to-r from-accent_dark to-black  p-32">
			<div className="w-44 h-1 bg-gradient-to-r from-yellow-400 to-black"></div>
			<h2 className="text-4xl text-left text-white font-bold tracking-tighter my-5">
				About Findtech Team
			</h2>
			<p className="max-w-sm text-center text-sm text-gray-400 leading-relaxed mb-20">
				Our team consists of Computer Engineering students of Universitas
				Indonesia, we are very interested in learning about AI and web
				development. Therefore, we present to you our latest and greatest idea:
				Findtech, to show how the power of data can make your life easier.
			</p>
			<RoundedButton
				label="Get to know us"
				arrowColor="white"
				backgroundColor="accent"
				textColor="black"
			/>
		</div>
	);
};

export default About;
