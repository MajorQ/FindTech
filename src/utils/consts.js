export const navBarItems = [
	{ title: 'Browse', link: '/browse' },
	{ title: 'About Us', link: '/about-us' },
];

export const Url = {
	base: 'https://findtech.herokuapp.com/api',
	// base: 'https://127.0.0.1:5000/api',
	laptops: '/laptops',
	predict: '/predict',
};

export const QuestionTypes = Object.freeze({
	single: 'single',
	multi: 'multi',
});

export const PaginationTypes = ['Default', 'Infinite Scrolling'];

export const priceRange = [
	'0 - 5.000.000',
	'5.000.000 - 10.000.000',
	'10.000.000 - 15.000.000',
	'15.000.000++',
];
