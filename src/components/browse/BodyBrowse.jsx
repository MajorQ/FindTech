import GradientLine from '../core/GradientLine';
import laptopData from './Laptop';

const popularity = ['default', 1, 2, 3, 4, 5];
const userFilter = ['default', 'Casual', 'Gaming', 'Work'];
const operatingSystem = ['default', 'Windows', 'Mac OS'];
const priceRange = [];

const BodyBrowse = () => {
	return (
		<div className="bg-gray-100 px-52 py-10">
			<GradientLine />
			<h1 className="text-4xl text-left text-black font-bold tracking-tighter my-5">
				Browse Recommendations
			</h1>

			<div className=" my-16 w-full h-32 rounded-2xl grid grid-cols-4 bg-white shadow-md p-12">
				<div>
					<label htmlFor="select" className=" font-bold mx-5">
						Popularity
					</label>
					<select name="Popularity" id="" className="font-bold">
						{popularity.map((select) => {
							return <option value={select}>{select}</option>;
						})}
					</select>
					<label className="ml-5">⭐</label>
				</div>
				<div>
					<label htmlFor="select" className="font-bold mx-5">
						Filter by User
					</label>
					<select name="filter-by-user" id="" className="font-bold">
						{userFilter.map((select) => {
							return <option value={select}>{select}</option>;
						})}
					</select>
				</div>
				<div>
					<label htmlFor="select" className=" font-bold mx-5">
						Filter by OS
					</label>
					<select name="filter-by-os" id="" className="font-bold">
						{operatingSystem.map((select) => {
							return <option value={select}>{select}</option>;
						})}
					</select>
				</div>
				<div>
					<label htmlFor="select" className=" font-bold mx-5">
						Price
					</label>
					<select name="price" id="" className="font-bold">
						{priceRange.map((select) => {
							return <option value={select}>{select}</option>;
						})}
					</select>
				</div>
			</div>
			<div className=" grid grid-cols-3 gap-10">
				{laptopData.map((items) => {
					return (
						<div className=" h-96 w-9/12 bg-white rounded-3xl mx-auto shadow-lg">
							<div className=" h-3/5 rounded-t-3xl">
								<img
									src={items.image}
									alt={items.productName}
									className=" h-full w-full object-fill rounded-t-3xl"
								/>
							</div>
							<div className="px-10 py-8">
								<p className="text-black font-bold text-xl">
									{items.productName}
								</p>
							</div>
							<div className="grid grid-cols-3 justify-items-center">
								<div>
									<p className="font-bold">{items.storage.slice(0, 6)}</p>
								</div>
								<div className="">
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
									<p className=" text-sm font-bold">
										{items.screen.slice(0, 2) + '"'}
									</p>
								</div>
								<div>
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
									<p className=" text-xs font-bold">{items.cpu}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BodyBrowse;
