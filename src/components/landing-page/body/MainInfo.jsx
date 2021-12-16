import image_maininfo from '../../../assets/images/image_maininfo.png';
// import RoundedButton from '../../core/RoundedButton.jsx';

const MainInfo = () => {
	return (
		<div className="container md:grid md:grid-cols-2 mt-20">
			<div className="">
				<img src={image_maininfo} alt="" width="754" height="650" />
			</div>
			<div className="max-w-xl flex flex-col justify-center items-left ml-16 mr-8 md:ml-32">
				<div className="w-44 h-1 bg-gradient-to-r from-yellow-400 to-black"></div>
				<div className="my-5">
					<h2 className="text-4xl text-left text-black font-bold tracking-tighter">
						Your AI tech specialist
					</h2>
				</div>
				<div className="max-w-sm">
					<p className="text-left mb-10 text-gray-600 text-sm leading-relaxed">
						We gather models from popular lists of laptops in the internet, ones
						that are available in your local area and recommend them to you
						through a series of user-friendly questions that will be processed
						through AI algorithm, so your recommendations will be personalized
						to your needs.
					</p>
					{/* <RoundedButton
						label="Learn More"
						arrowColor="accent"
						backgroundColor="black"
						textColor="white"
					/> */}
				</div>
			</div>
		</div>
	);
};

export default MainInfo;
