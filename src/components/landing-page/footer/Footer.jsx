import logo from '../../../assets/images/logo.svg';
import RoundedButton from '../../core/RoundedButton';

const Footer = () => {
	return (
		<footer className="w-full bg-gradient-to-r from-black to-accent_dark divide-solid divide-y-2 divide-gray-800 px-32 py-24">
			<div className="flex justify-between items-center mb-16">
				<h2 className="text-4xl text-left  font-bold tracking-tighter my-5">
					<span className="text-white">Make your dream laptop</span>
					<span className="text-accent"> come true </span>
				</h2>
				<RoundedButton
					label="Find yours now"
					arrowColor="white"
					backgroundColor="accent"
					textColor="black"
				/>
			</div>

			<div className="pt-16">
				<img className="mx-auto" src={logo} alt="Findtech Company Logo" />
			</div>
		</footer>
	);
};

export default Footer;
