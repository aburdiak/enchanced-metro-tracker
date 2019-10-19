module.exports = (req, res) => {
  // call metrohero ap
  console.log("time to look for data");
  // console.log(JSON.stringify(req));
  return res.status(200).json({ message: "time to look for data" });
};
