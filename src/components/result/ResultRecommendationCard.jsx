import { formatter } from '../../utils/fomatter';

export const ResultRecommendationCard = ({ laptop }) => {
	return (
		<div className="bg-white w-full rounded-2xl flex flex-col gap-4 p-4">
			<img
				className="max-h-72"
				src={laptop.image}
				alt="Recommended Laptop"
			></img>
			<strong className="text-md font-bold">{laptop.name}</strong>
			<p className="text-sm font-bold">{formatter.format(laptop.price)}</p>
		</div>
	);
};
