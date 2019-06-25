const axios = require('axios');
const axiosist = require('axiosist');

const buildRequest = (app) => (req) => {
	if (process.env.TEST_USE_REAL_SERVER) {
		return axios(req)
			.then(res => {
				const { data, status } = res
				return { data, status }
			})
	} else {
		return axiosist(app)(req)
			.then(res => {
				const { data, status } = res
				return { data, status }
			})
	}
}

module.exports = {
	buildRequest
}