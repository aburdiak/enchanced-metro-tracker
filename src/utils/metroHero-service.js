const axios = require("axios");

module.exports = async stationId => {
  const client = axios.create({
    baseUrl: "https://dcmetrohero.com/api/v1",
    headers: {
      apiKey: "b64d0d87-f16c-45de-a82a-b6dab904df79",
      accept: "*/*"
    }
  });

  try {
    const response = await client.get(
      `https://dcmetrohero.com/api/v1/metrorail/stations/${stationId}/trains`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
