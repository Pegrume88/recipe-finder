const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/Api", // This is the endpoint you're making requests to
    createProxyMiddleware({
      target: "https://developer.edamam.com", // The target API domain
      changeOrigin: true,
    })
  );
};
