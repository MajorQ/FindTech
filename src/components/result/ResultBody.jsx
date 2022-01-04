import { formatter } from '../../utils/fomatter';

export const ResultBody = ({ result }) => {
	return (
		<>
			<h1 className="md:col-start-2 md:col-end-8 text-4xl font-bold py-8">
				Your result is...
			</h1>
			<div className="bg-white rounded-3xl md:col-start-2 md:col-end-6 flex flex-col justify-between pt-8 my-6 md:my-0">
				<h2 className="text-2xl font-bold px-4 md:px-12">{result.name}</h2>
				<img
					className="max-h-96 mx-auto my-16 px-4"
					src={result.image}
					alt="Recommended laptop mx-auto"
				></img>
				<div className="bg-accent flex justify-center items-center rounded-2xl py-4">
					<h3 className="text-white text-3xl font-bold">
						{formatter.format(result.price)}
					</h3>
				</div>
			</div>
		</>
	);
};
