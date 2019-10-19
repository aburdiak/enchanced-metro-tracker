const lambdaApi = require("lambda-api");

const api = lambdaApi();

module.exports = endpoints => {
  api.use((req, res, next) => {
    console.log(`Request in api util: ${req.body}`);
    next();
  });

  endpoints.forEach(endpoint => {
    api.METHOD(endpoint.method, endpoint.path, endpoint.handler);
  });

  console.log("hellllloooooo");

  return (event, context) => api.run(event, context);
};
