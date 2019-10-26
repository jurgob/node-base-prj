const axios = require('axios');
const axiosist = require('axiosist');

const buildRequest = app => async req => {
  const requestClient = process.env.TEST_USE_REAL_SERVER ? axios : axiosist(app);
  const { data, status } = await requestClient(req);
  return { data, status };
};

module.exports = {
  buildRequest
};
