module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				accent: '#FFAC12',
				darkaccent: '#271A00',
			},
			fontFamily: {
				body: ['Open Sans'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
