import { useEffect } from 'react';
import { useState } from 'react';
import GradientLine from '../core/GradientLine';
import LaptopItems from './LaptopItems';

const priceRange = [
	'0 - 5.000.000',
	'5.000.000 - 10.000.000',
	'10.000.000 - 15.000.000',
	'15.000.000++',
];

const BrowseBody = () => {
	const [laptop, setLaptop] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(6);

	const [pageNumberLimit] = useState(5);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	useEffect(() => {
		fetch('/laptops')
			.then((response) => response.json())
			.then((json) => setLaptop(json));
	}, [laptop.length]);

	const pages = [];
	for (let i = 1; i <= Math.ceil(laptop.length / itemsPerPage); i++) {
		pages.push(i);
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = laptop.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};

	const renderPageNumbers = pages.map((number) => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					className={`mx-1 px-5 border shadow-xl  rounded-lg cursor-pointer ${
						currentPage === number ? 'bg-gray-200' : 'bg-white'
					}`}
					key={number}
					id={number}
					onClick={handlePageClick}
				>
					{number}
				</li>
			);
		} else {
			return null;
		}
	});

	const handleNextBttn = () => {
		setCurrentPage(currentPage + 1);
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	const handlePrevBttn = () => {
		setCurrentPage(currentPage - 1);
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	return (
		<main>
			<div className="bg-gray-100 px-8 md:px-52 py-10">
				<GradientLine />
				<h1 className="text-2xl md:text-4xl text-left text-black font-bold tracking-tighter my-5">
					Browse Recommendations
				</h1>

				<div className="w-full h-48 md:h-32 rounded-2xl  bg-white shadow-md p-4 md:p-12 my-8 md:my-16">
					<div>
						<label htmlFor="select" className=" font-bold md:mx-5">
							Filter by Price
						</label>
						<select name="price" id="" className="font-bold  rounded-xl">
							{priceRange.map((select) => {
								return (
									<option value={select} className=" bg-white">
										{select}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<LaptopItems laptop={currentItems} />
				<ul className="flex mt-20 justify-center">
					<li>
						<button
							disabled={currentPage === 1 ? true : false}
							onClick={handlePrevBttn}
							className="mx-3 "
						>
							Prev
						</button>
					</li>
					{renderPageNumbers}
					<li>
						<button className="mx-3" onClick={handleNextBttn}>
							Next
						</button>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default BrowseBody;
