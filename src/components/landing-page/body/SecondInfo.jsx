import image_secondinfo from '../../../assets/images/image_secondinfo.png';
import RoundedButton from '../../core/RoundedButton.jsx';

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
					<p className="text-left mb-10 text-gray-600 text-sm leading-relaxed">
						We work hard to make sure you get the best of the recommendations in
						the internet. Make yourself at ease with our best picked laptop
						recommendations and trusted sources information
					</p>
					<RoundedButton
						label="Learn More"
						arrowColor="accent"
						backgroundColor="black"
						textColor="white"
					/>
				</div>
			</div>
			<div className="grid justify-end">
				<img src={image_secondinfo} alt="" width="754" height="650" />
			</div>
		</div>
	);
};

export default SecondInfo;
