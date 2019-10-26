const { buildRequest } = require('../utils');
const app = require('../../rest/app');

test('GET /ping - success', async () => {
  const request = buildRequest(app);
  const expectedRequest = { url: 'http://localhost:3000/ping', method: 'GET' };
  const expectedResponse = {
    data: { success: true },
    status: 200
  };

  const actualResponse = await request(expectedRequest);

  expect(actualResponse).toEqual(expect.objectContaining(expectedResponse));
});
