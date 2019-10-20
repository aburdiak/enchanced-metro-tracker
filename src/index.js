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
const metroTracker = require("./get-station-info");

const api = require("./utils/api")([
  {
    method: "POST",
    path: "/getStationInfo",
    handler: metroTracker
  }
]);
exports.handler = async (event, context) => {
  return api(event, context);
};
