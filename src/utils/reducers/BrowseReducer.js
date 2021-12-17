import { PaginationTypes, PriceRangeTypes } from '../consts';

export const BrowseAction = Object.freeze({
	selectPaginationFilter: 'selectPaginationFilter',
	selectPriceFilter: 'selectPriceFilter',
	nextPageInfiniteScrolling: 'nextPageInfiniteScrolling',
	nextPageButtonScrolling: 'nextPageButtonScrolling',
	previousPageButtonScrolling: 'previousPageButtonScrolling',
});

export const BrowseInitialState = {
	page: 1,
	pagination: PaginationTypes[0],
	price: PriceRangeTypes[0],
	shouldRefresh: true,
};

export const browseReducer = (state, action) => {
	switch (action.type) {
		case BrowseAction.selectPaginationFilter:
			return {
				...state,
				page: 1,
				pagination: action.value,
				shouldRefresh: true,
			};
		case BrowseAction.selectPriceFilter:
			return { ...state, page: 1, price: action.value, shouldRefresh: true };
		case BrowseAction.nextPageInfiniteScrolling:
			return { ...state, page: state.page + 1, shouldRefresh: false };
		case BrowseAction.nextPageButtonScrolling:
			return { ...state, page: state.page + 1, shouldRefresh: true };
		case BrowseAction.previousPageButtonScrolling:
			return { ...state, page: state.page - 1, shouldRefresh: true };
		default:
	}
};
