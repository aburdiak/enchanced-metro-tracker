const api = require("lambda-api")();

module.exports = endpoints => {
  api.use((req, res, next) => {
    next();
  });

  endpoints.forEach(endpoint => {
    api.METHOD(endpoint.method, endpoint.path, endpoint.handler);
  });

  return (event, context) => api.run(event, context);
};
