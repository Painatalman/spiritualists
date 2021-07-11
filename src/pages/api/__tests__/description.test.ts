import { createMocks } from 'node-mocks-http';
import handleRequest from '../description';

describe('/api/description', () => {
  it('returns a single item by default', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handleRequest(req, res);

    const statusCode = res._getStatusCode();
    const data = JSON.parse(res._getData());

    expect(statusCode).toBe(200);
    expect(data).toBeString();
  });
});
