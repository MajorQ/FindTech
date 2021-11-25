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
			<div className="w-1/2 bg-white justify-self-center rounded-3xl shadow-lg">
				<div className="flex flex-col justify-center items-center ">
					<h1 className=" my-5 font-bold text-3xl">
						<span className="text-black">Contact</span>
						<span className="text-accent "> Us</span>
					</h1>
					<form action="" className="space-y-4">
						<div>
							<input
								type="text"
								placeholder="Name"
								className="ring ring-gray-100 rounded-md px-4 py-4  outline-none"
							/>
						</div>

						<div>
							<input
								type="text"
								placeholder="Phone"
								className="ring ring-gray-100 rounded-md px-4 py-4 outline-none"
							/>
						</div>

						<div>
							<input
								type="text"
								placeholder="Email"
								className="ring ring-gray-100 rounded-md px-4 py-4  outline-none"
							/>
						</div>

						<div>
							<textarea
								type="text"
								placeholder="Hello, I found a problem in..."
								className="ring ring-gray-100 rounded-md px-4 py-4 outline-none"
							/>
						</div>
					</form>

					<button className="bg-black w-1/2 font-bold rounded-tr-xl px-4 py-2 my-5 text-center">
						<span className="px-1 text-sm text-white">Send to us </span>
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
	);
};

export default AboutUsBody;
