import { useRef, useCallback } from 'react';
import LaptopItem from './LaptopItem';

const LaptopListWithInfiniteScrolling = ({ data, onNextPage }) => {
	const observer = useRef();
	const lastItemRef = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					onNextPage();
				}
			});
			if (node) observer.current.observe(node);
		},
		[onNextPage]
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
		</>
	);
};

export default LaptopListWithInfiniteScrolling;
