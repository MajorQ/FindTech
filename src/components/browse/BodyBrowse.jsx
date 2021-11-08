import GradientLine from '../core/GradientLine';

const popularity = ['default', 1, 2, 3, 4, 5];
const userFilter = ['Casual', 'Gaming', 'Work'];
const operatingSystem = ['Windows', 'Mac OS'];
const priceRange = [];

const BodyBrowse = () => {
	return (
		<div className="bg-gray-100 h-screen px-52 py-10">
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
		</div>
	);
};

export default BodyBrowse;
