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
				'landing-header': "url('./assets/images/header_landing.png')",
				'about-us-header': "url('./assets/images/header_about_us.png')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
