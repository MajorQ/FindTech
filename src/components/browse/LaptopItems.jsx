const LaptopItems = ({ laptop }) => {
	return (
		<div className="md:grid md:grid-cols-3 md:gap-10">
			{laptop.map((items) => {
				return (
					<div className="md:h-96 bg-white rounded-3xl mx-auto shadow-lg my-10 md:my-0">
						<div className="h-1/2 md:h-3/5 rounded-t-3xl">
							<img
								src={items.image}
								alt={items.name}
								className=" h-full w-full object-cover rounded-t-3xl"
							/>
						</div>
						<div className="px-10 py-4 md:py-8">
							<p className="text-black font-bold text-xl">{items.name}</p>
						</div>

						{/* <div className="flex flex-col justify-evenly md:grid md:grid-cols-3 md:justify-items-center px-4 py-4 md:p-0">
									<div>
										<p className="font-bold">{items.storage.slice(0, 6)}</p>
									</div>
									<div className="flex items-center md:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-3 w-3"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
												clip-rule="evenodd"
											/>
										</svg>
										<p className="text-sm font-bold">
											{items.screen.slice(0, 2) + '"'}
										</p>
									</div>
									<div className="flex items-center md:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-3 w-3"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M13 7H7v6h6V7z" />
											<path
												fill-rule="evenodd"
												d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
												clip-rule="evenodd"
											/>
										</svg>
										<p className="text-xs font-bold">{items.cpu}</p>
									</div>
								</div> */}
					</div>
				);
			})}
		</div>
	);
};

export default LaptopItems;
