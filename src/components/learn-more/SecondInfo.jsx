import image_secondinfo from '../../assets/image/image_secondinfo.png';

const SecondInfo = () => {
	return (
		<div className="bg-gray-100 grid grid-cols-2 mt-20">
			<div className="max-w-xl mx-32 flex flex-col justify-center items-left ">
				<div className="w-44 h-1 bg-gradient-to-r from-yellow-400 to-black"></div>
				<div className="my-5">
					<h2 className="text-4xl text-left text-black font-bold tracking-tighter">
						You're in good hands
					</h2>
				</div>
				<div className="max-w-sm">
					<p className="text-left mb-10 text-gray-600 text-sm">
						We work hard to make sure you get the best of the recommendations in
						the internet. Make yourself at ease with our best picked laptop
						recommendations and trusted sources information
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
			<div className="">
				<img src={image_secondinfo} alt="" width="754" height="650" />
			</div>
		</div>
	);
};

export default SecondInfo;
