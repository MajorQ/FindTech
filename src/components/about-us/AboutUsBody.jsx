import ContactUsForm from './ContactUsForm';

const AboutUsBody = () => {
	return (
		<div className="md:grid md:grid-cols-2 md:gap-y-16 px-8 md:px-40 py-6 md:py-24">
			<div className="md:col-span-1">
				<h1 className="text-4xl md:text-6xl font-bold leading-tight my-4">
					<span className="text-white">
						Hello! <br /> Here's where <br /> you can
					</span>
					<span className="text-accent"> find </span>
					<span className="text-white">us</span>
				</h1>
				<p className="text-gray-300 text-sm md:text-lg mt-10">
					Our team consists of the Computer Engineering students of Universitas
					Indonesia, we are very interested in learning about AI and web
					development. Therefore we present to you our latest and greatest idea:
					Findtech, to show how the power of data can make your life easier.
				</p>
				<p className="text-gray-300 text-sm md:text-lg mt-5">
					Come, get to know our team or if you find any trouble using Findtech
					or found something of your interest, you can contact us
				</p>
			</div>

			<div className="w-1/2 hidden md:block justify-self-center">
				<ContactUsForm />
			</div>
		</div>
	);
};

export default AboutUsBody;
