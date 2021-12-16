import { useState } from 'react';
import useFetchLaptops from '../../utils/hooks/useFetchLaptops';
import LaptopItem from './LaptopItem';

const limit = 6;

const LaptopListWithButtonScrolling = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, totalPages } = useFetchLaptops(page, limit);

	const handleNextBttn = () => {
		if (page + 1 >= totalPages) return;

		setPage(page + 1);
	};

	const handlePrevBttn = () => {
		if (page === 1) return;

		setPage(page - 1);
	};

	return (
		<>
			<div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
				{data.map((laptop, index) => {
					return (
						<LaptopItem
							index={index}
							laptop={laptop}
							key={`Laptop-Item-${index}`}
						/>
					);
				})}
			</div>

			{isLoading ?? <p>Loading</p>}

			<ul className="flex mt-20 justify-center">
				{page !== 1 && (
					<li>
						<button
							disabled={page === 1}
							onClick={handlePrevBttn}
							className="mx-3"
						>
							Prev
						</button>
					</li>
				)}
				{page + 1 <= totalPages && (
					<li>
						<button className="mx-3" onClick={handleNextBttn}>
							Next
						</button>
					</li>
				)}
			</ul>
		</>
	);
};

export default LaptopListWithButtonScrolling;
