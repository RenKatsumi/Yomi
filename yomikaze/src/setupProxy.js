const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://enka.network',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Removes "/api" prefix when forwarding to the target
      },
    })
  );
};
