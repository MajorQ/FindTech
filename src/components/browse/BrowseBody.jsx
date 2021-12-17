import { useReducer } from 'react';
import { PaginationTypes, PriceRangeTypes } from '../../utils/consts';
import GradientLine from '../core/GradientLine';
import {
	BrowseAction,
	BrowseInitialState,
	browseReducer,
} from '../../utils/reducers/BrowseReducer';
import FilterComponent from './FilterComponent';
import LaptopList from './LaptopList';

const BrowseBody = () => {
	const [state, dispatch] = useReducer(browseReducer, BrowseInitialState);

	const onPaginationFilterSelect = (e) => {
		const index = e.target.value;

		dispatch({
			type: BrowseAction.selectPaginationFilter,
			value: PaginationTypes[index],
		});
	};

	const onPriceFilterSelect = (e) => {
		const index = e.target.value;

		dispatch({
			type: BrowseAction.selectPriceFilter,
			value: PriceRangeTypes[index],
		});
	};

	return (
		<main>
			<div className="bg-gray-100 px-8 md:px-52 py-10">
				<GradientLine />
				<h1 className="text-2xl md:text-4xl text-left text-black font-bold tracking-tighter my-5">
					Browse Recommendations
				</h1>

				<div className="flex flex-col gap-y-4 md:block w-full h-48 md:h-32 rounded-2xl  bg-white shadow-md p-4 md:p-12 my-8 md:my-16">
					<FilterComponent
						title="Pagination"
						items={PaginationTypes}
						onSelect={onPaginationFilterSelect}
					/>
					<FilterComponent
						title="Filter by Price"
						items={PriceRangeTypes}
						onSelect={onPriceFilterSelect}
					/>
				</div>

				<LaptopList state={state} dispatch={dispatch} />
			</div>
		</main>
	);
};

export default BrowseBody;
