("use strict");

//const fetchData = require("./get-station-info");
/*
constmodule.exports = async event => {
  console.log("index sigh");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.1! I made my first change!",
        input: event
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};*/

// Require the framework and instantiate it
const api = require("lambda-api")();
const metroTracker = require("./get-station-info");

api.get("/getStationInfo", async (req, res) => {
  console.log("start");
  console.log("stop");

  return await metroTracker(req, res);
});
/*
const apiHelper = require("./utils/api")([
  {
    method: "GET",
    path: "/getStationInfo",
    handler: metroTracker.fetchData(event, context)
  }
]);*/

exports.handler = async (event, context) => {
  // Run the request
  return await api.run(event, context);
};

// exports.handler = (event, context) => api(event, context);
