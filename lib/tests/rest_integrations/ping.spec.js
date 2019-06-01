
const { buildRequest } = require('../utils');
const app = require('../../rest/app');

test('GET /ping - success', async () => {
	const request = buildRequest(app)
	const expected_request = { url: "http://localhost:3000/ping", method: "GET" }
	const expected_response = {
		data: { success: true },
		status: 200
	}

	const actualResponse = await request(expected_request);

	expect(actualResponse).toEqual(expect.objectContaining(expected_response))

})