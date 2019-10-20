const _ = require("lodash");
const metroHeroService = require("./utils/metroHero-service");

module.exports = async (req, res) => {
  // call metrohero ap
  console.log("time to look for data");
  console.log(req.body);
  const { stationId, lineId, numberOfResults } = req.body;
  const trains = await metroHeroService(stationId);
  //console.log(apiResponse);
  console.log("about to respond");

  //return next 3 trains by train code

  const requestedTrains = _.filter(trains, ["Line", lineId]);

  return res.status(200).json(_.slice(requestedTrains, 0, numberOfResults));
};
