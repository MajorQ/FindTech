import { useReducer } from 'react';
import {
	PaginationTypes,
	priceRange,
	PriceRangeValues,
} from '../../utils/consts';
import useFetchLaptops from '../../utils/hooks/useFetchLaptops';
import GradientLine from '../core/GradientLine';
import FilterComponent from './FilterComponent';
import LaptopListWithButtonScrolling from './LaptopListWithButtonScrolling';
import LaptopListWithInfiniteScrolling from './LaptopListWithInfiniteScrolling';

const Actions = Object.freeze({
	onPaginationFilterSelect: 'onPaginationFilterSelect',
	onPriceFilterSelect: 'onPriceFilterSelect',
	onInfiniteScrollingNextPage: 'onInfiniteScrollingNextPage',
	onButtonScrollingNextPage: 'onButtonScrollingNextPage',
	onButtonScrollingPreviousPage: 'onButtonScrollingPreviousPage',
});

const reducer = (state, action) => {
	switch (action.type) {
		case Actions.onPaginationFilterSelect:
			return {
				...state,
				page: 1,
				pagination: action.value,
				shouldRefresh: true,
			};
		case Actions.onPriceFilterSelect:
			return { ...state, page: 1, price: action.value, shouldRefresh: true };
		case Actions.onInfiniteScrollingNextPage:
			return { ...state, page: state.page + 1, shouldRefresh: false };
		case Actions.onButtonScrollingNextPage:
			return { ...state, page: state.page + 1, shouldRefresh: true };
		case Actions.onButtonScrollingPreviousPage:
			return { ...state, page: state.page - 1, shouldRefresh: true };
		default:
	}
};

const initialState = {
	page: 1,
	pagination: PaginationTypes[0],
	price: PriceRangeValues[0],
	shouldRefresh: true,
};

const BrowseBody = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { data, isLoading, totalPages } = useFetchLaptops(
		state.page,
		state.pagination === PaginationTypes[0] ? 6 : 12,
		state.price.minPrice,
		state.price.maxPrice,
		state.shouldRefresh
	);

	const onPaginationFilterSelect = (e) => {
		dispatch({ type: Actions.onPaginationFilterSelect, value: e.target.value });
	};

	const onPriceFilterSelect = (e) => {
		const index = priceRange.indexOf(e.target.value);

		dispatch({
			type: Actions.onPriceFilterSelect,
			value: PriceRangeValues[index],
		});
	};

	const LaptopList = () => {
		if (state.pagination === PaginationTypes[1]) {
			return (
				<LaptopListWithInfiniteScrolling
					data={data}
					onNextPage={() => {
						if (state.page + 1 > totalPages) return;
						if (isLoading) return;

						dispatch({ type: Actions.onInfiniteScrollingNextPage });
					}}
				/>
			);
		}

		return (
			<LaptopListWithButtonScrolling
				data={data}
				page={state.page}
				totalPages={totalPages}
				onPreviousPage={() => {
					if (state.page === 1) return;

					dispatch({ type: Actions.onButtonScrollingPreviousPage });
				}}
				onNextPage={() => {
					if (state.page + 1 > totalPages) return;

					dispatch({ type: Actions.onButtonScrollingNextPage });
				}}
			/>
		);
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
						selectName="pagination"
						onSelect={onPaginationFilterSelect}
					/>
					<FilterComponent
						title="Filter by Price"
						items={priceRange}
						selectName="price"
						onSelect={onPriceFilterSelect}
					/>
				</div>

				<LaptopList />

				{isLoading && <p>Loading...</p>}
			</div>
		</main>
	);
};

export default BrowseBody;
