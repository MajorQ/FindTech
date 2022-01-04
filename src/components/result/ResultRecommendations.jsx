import { ResultRecommendationCard } from './ResultRecommendationCard';

export const ResultRecommendations = ({ laptops }) => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-x-4 py-8">
			<h1 className="md:col-start-2 md:col-end-8 text-2xl md:text-4xl py-8">
				Recommendations you might like
			</h1>
			<div className="rounded-3xl md:col-start-2 md:col-end-8 p-4">
				<div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
					{laptops.map((laptop, index) => (
						<ResultRecommendationCard
							laptop={laptop}
							key={`Recommended Laptop-${index}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
