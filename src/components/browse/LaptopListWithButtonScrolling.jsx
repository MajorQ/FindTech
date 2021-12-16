import LaptopItem from './LaptopItem';

const LaptopListWithButtonScrolling = ({
	data,
	page,
	totalPages,
	onPreviousPage,
	onNextPage,
}) => {
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

			<ul className="flex mt-20 justify-center">
				{page !== 1 && (
					<li>
						<button
							disabled={page === 1}
							onClick={onPreviousPage}
							className="mx-3"
						>
							Prev
						</button>
					</li>
				)}
				{page + 1 <= totalPages && (
					<li>
						<button className="mx-3" onClick={onNextPage}>
							Next
						</button>
					</li>
				)}
			</ul>
		</>
	);
};

export default LaptopListWithButtonScrolling;
