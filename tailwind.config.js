module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				accent: '#FFAC12',
				accent_dark: '#271A00',
			},
			fontFamily: {
				body: ['Open Sans'],
			},
			backgroundImage: {
				'landing-bg': "url('./assets/images/header_image.png')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
