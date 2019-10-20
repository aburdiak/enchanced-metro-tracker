const _ = require("lodash");
const metroHeroService = require("./utils/metroHero-service");

module.exports = async (req, res) => {
  // call metrohero ap
  console.log("time to look for data");
  console.log(req.body);
  const { originCode, destinationCode, lineCode, numberOfResults } = req.body;
  const trains = await metroHeroService(originCode);
  //console.log(apiResponse);
  console.log("about to respond");

  //return next 3 trains by train code
  const requestedTrainsByLineDestination = _.filter(trains, {
    Line: lineCode,
    DestinationCode: destinationCode
  });

  const slicedTrains = _.slice(
    requestedTrainsByLineDestination,
    0,
    numberOfResults
  );

  slicedTrains.forEach((trainData, i) => {
    const {
      Car,
      Min,
      minutesAway,
      currentStationName,
      secondsSinceLastMoved,
      estimatedMinutesAway,
      isScheduled
    } = trainData;
    slicedTrains[i] = Object.assign(
      {},
      {
        Car,
        Min,
        minutesAway,
        currentStationName,
        secondsSinceLastMoved,
        estimatedMinutesAway,
        isScheduled
      }
    );
  });

  return res.status(200).json(slicedTrains);
};
