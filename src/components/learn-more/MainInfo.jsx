import image_maininfo from '../../assets/image/image_maininfo.png';

const MainInfo = () => {
	return (
		<div className="container grid grid-cols-2 mt-20">
			<div className="">
				<img src={image_maininfo} alt="" width="754" height="650" />
			</div>
			<div className="max-w-xl ml-32 flex flex-col justify-center items-left ">
				<div className="w-44 h-1 bg-gradient-to-r from-yellow-400 to-black"></div>
				<div className="my-5">
					<h2 className="text-4xl text-left text-black font-bold tracking-tighter">
						Your AI tech specialist
					</h2>
				</div>
				<div className="max-w-sm">
					<p className="text-left mb-10 text-gray-600 text-sm">
						We gather models from popular lists of laptops in the internet, ones
						that are available in your local area and recommend them to you
						through a series of user-friendly questions that will be processed
						through AI algorithm, so your recommendations will be personalized
						to your needs.
					</p>
					<div className="grid justify-items-start">
						<button className="bg-black w-1/2 text-left font-bold rounded-tr-xl px-4 py-2">
							<span className="px-1 text-sm text-white">Learn More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 inline-block stroke-current text-accent"
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
				</div>
			</div>
		</div>
	);
};

export default MainInfo;
