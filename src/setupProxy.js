const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/laptops',
		createProxyMiddleware({
			target: 'https://findtech.herokuapp.com/api',
			secure: false,
			changeOrigin: true,
		})
	);
	app.use(
		'/predict',
		createProxyMiddleware({
			target: 'https://findtech.herokuapp.com/api',
			secure: false,
			changeOrigin: true,
		})
	);
};
