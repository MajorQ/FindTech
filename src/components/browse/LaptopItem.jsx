import { formatter } from '../../utils/fomatter';

const LaptopItem = ({ laptop }) => {
	return (
		<div className="md:h-100 w-full bg-white rounded-3xl mx-auto shadow-lg my-10 md:my-0">
			<div className="h-1/2 md:h-3/5 rounded-t-3xl">
				<img
					src={laptop.image}
					alt={laptop.name}
					className="h-full w-full object-cover rounded-t-3xl"
				/>
			</div>
			<div className="w-full px-10 py-4">
				<p className="text-black font-bold text-xl break-all">{laptop.name}</p>
			</div>
			<div className="w-full px-10 py-4">
				<p className="text-black font-bold text-md break-all">
					{formatter.format(laptop.price)}
				</p>
			</div>
		</div>
	);
};

export default LaptopItem;
