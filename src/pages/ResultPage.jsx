import { Redirect } from 'react-router-dom';
import NavBar from '../components/core/NavBar';
import { formatter } from '../utils/fomatter';
import useFetchPrediction from '../utils/hooks/useFetchPrediction';
import useSetPageTitle from '../utils/hooks/useSetPageTitle';

const ResultPage = (props) => {
	useSetPageTitle();

	const request = props.location.state;

	const { isLoading, result } = useFetchPrediction(request);

	if (request == null) {
		return <Redirect to="/question" />;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<NavBar />

			<div className="px-16 py-8">
				<strong className="text-3xl py-8">Your result is...</strong>

				<div className="bg-white md:px-16 md:mx-24 my-10 md:my-12 rounded-2xl">
					<h1 className="text-2xl md:text-4xl font-bold py-8">
						{result[0].name}
					</h1>
					<div className="h-48 w-48 md:h-96 md:w-96 mx-auto">
						<img src={result[0].image} alt="Laptop" className="mx-auto" />
					</div>
					<div className="flex justify-end">
						<h2 className="text-xl md:text-3xl font-bold text-accent">
							{formatter.format(`${result[0].price}`)}
						</h2>
					</div>
				</div>

				<h3 className="text-2xl">Other results...</h3>

				{/* Slice removes first index */}
				{result.slice(1).map((laptop, index) => {
					const price = formatter.format(`${laptop.price}`);
					return (
						<div
							className="bg-white py-4 md:px-16 md:mx-56 my-4 rounded-2xl"
							key={`Laptop-${index}`}
						>
							<h1 className="text-md text-lg md:text-2xl font-bold py-8">
								{laptop.name}
							</h1>
							<div className="h-48 w-48 mx-auto">
								<img src={laptop.image} alt="Laptop" className="mx-auto" />
							</div>
							<div className="flex justify-end">
								<h2 className="text-lg font-bold text-accent">{price}</h2>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ResultPage;
