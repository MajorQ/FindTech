import { useMemo } from 'react';
import { PaginationTypes, Url } from '../../utils/consts';
import useFetchPagination from '../../utils/hooks/useFetchPagination';
import LaptopListWithInfiniteScrolling from './LaptopListWithInfiniteScrolling';
import LaptopListWithButtonScrolling from './LaptopListWithButtonScrolling';
import { BrowseAction } from '../../utils/reducers/BrowseReducer';

const LaptopList = ({ state, dispatch }) => {
	// useMemo is used to have deep equality for filters
	// when used in useEffect
	const filters = useMemo(
		() => ({
			...state.price.value,
		}),
		[state.price]
	);

	const { data, isLoading, totalPages } = useFetchPagination(
		Url.laptops,
		state.page,
		state.pagination.value === PaginationTypes[1].value ? 12 : 6,
		filters,
		state.shouldRefresh
	);

	if (state.pagination === PaginationTypes[1]) {
		return (
			<LaptopListWithInfiniteScrolling
				data={data}
				onNextPage={() => {
					if (state.page + 1 > totalPages) return;
					if (isLoading) return;

					dispatch({ type: BrowseAction.nextPageInfiniteScrolling });
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

				dispatch({ type: BrowseAction.previousPageButtonScrolling });
			}}
			onNextPage={() => {
				if (state.page + 1 > totalPages) return;

				dispatch({ type: BrowseAction.nextPageButtonScrolling });
			}}
		/>
	);
};

export default LaptopList;
