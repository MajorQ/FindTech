import { useState } from 'react';
import { PaginationTypes, priceRange } from '../../utils/consts';
import GradientLine from '../core/GradientLine';
import FilterComponent from './FilterComponent';
import LaptopList from './LaptopList';

const BrowseBody = () => {
	const [pagination, setPagination] = useState(PaginationTypes[0]);

	const onFilterSelect = (e) => {
		setPagination(e.target.value);
	};

	return (
		<main>
			<div className="bg-gray-100 px-8 md:px-52 py-10">
				<GradientLine />
				<h1 className="text-2xl md:text-4xl text-left text-black font-bold tracking-tighter my-5">
					Browse Recommendations
				</h1>

				<div className="w-full h-48 md:h-32 rounded-2xl  bg-white shadow-md p-4 md:p-12 my-8 md:my-16">
					<FilterComponent
						title="Pagination"
						items={PaginationTypes}
						selectName="pagination"
						onSelect={onFilterSelect}
					/>
					<FilterComponent
						title="Filter by Price"
						items={priceRange}
						selectName="price"
						onSelect={onFilterSelect}
					/>
				</div>

				<LaptopList paginationType={pagination} />
			</div>
		</main>
	);
};

export default BrowseBody;
