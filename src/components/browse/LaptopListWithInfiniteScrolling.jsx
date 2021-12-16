import { useState, useRef, useCallback } from 'react';
import useFetchLaptops from '../../utils/hooks/useFetchLaptops';
import LaptopItem from './LaptopItem';

const limit = 12;

const LaptopListWithInfiniteScrolling = ({ price }) => {
	const [page, setPage] = useState(1);
	const { data, isLoading, totalPages } = useFetchLaptops(
		page,
		limit,
		price.minPrice,
		price.maxPrice,
		false
	);

	const observer = useRef();
	const lastItemRef = useCallback(
		(node) => {
			const hasNextPage = page + 1 <= totalPages;

			if (isLoading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					setPage((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[isLoading, page, totalPages]
	);

	return (
		<>
			<div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
				{data.map((laptop, index) => {
					if (index + 1 === data.length) {
						return (
							<div ref={lastItemRef} key="Last-laptop">
								<LaptopItem
									index={index}
									laptop={laptop}
									key={`Laptop-Item-${index}`}
								/>
							</div>
						);
					}

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
		</>
	);
};

export default LaptopListWithInfiniteScrolling;
