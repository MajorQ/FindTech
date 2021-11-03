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
			<button className="flex justify-evenly bg-accent rounded-tr-xl w-2/12 px-4 py-6">
				<span className="text-sm text-black font-bold">Learn More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 inline-block stroke-current text-white"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</button>
		</div>
	);
};

export default About;
