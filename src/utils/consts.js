import FilterModel from '../models/FilterModel';
import deepFreeze from './deepFreeze';

export const NavBarItems = deepFreeze([
	{ title: 'Browse', link: '/browse' },
	{ title: 'About Us', link: '/about-us' },
]);

export const Url = deepFreeze({
	base: 'https://findtech.herokuapp.com/api',
	// base: 'https://127.0.0.1:5000/api',
	laptops: '/laptops',
	predict: '/predict',
});

export const QuestionTypes = deepFreeze({
	single: 'single',
	multi: 'multi',
});

export const PaginationTypes = deepFreeze([
	new FilterModel('Default', 0),
	new FilterModel('Infinite Scrolling', 1),
]);

export const PriceRangeTypes = deepFreeze([
	new FilterModel('None', {}),
	new FilterModel('0 - 5.000.000', { minPrice: 0, maxPrice: 5000000 }),
	new FilterModel('5.000.000 - 10.000.000', {
		minPrice: 5000000,
		maxPrice: 10000000,
	}),
	new FilterModel('10.000.000 - 15.000.000', {
		minPrice: 10000000,
		maxPrice: 15000000,
	}),
	new FilterModel('15.000.000 - 20.000.000', {
		minPrice: 15000000,
		maxPrice: 20000000,
	}),

	new FilterModel('20.000.000++', {
		minPrice: 20000000,
		maxPrice: 99999999,
	}),
]);
