import { createMocks } from 'node-mocks-http';
import handleRequest from '../title';

jest.mock('~/data/titles.json', () => ['test', 'test 2', 'test 3']);

describe('/api/title', () => {
  it('returns a single item by default', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handleRequest(req, res);

    const statusCode = res._getStatusCode();
    const data = JSON.parse(res._getData());

    expect(statusCode).toBe(200);
    expect(data).toHaveLength(1);
  });

  it('returns the requested amount of titles', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        quantity: '3',
      },
    });

    await handleRequest(req, res);

    const statusCode = res._getStatusCode();
    const data = JSON.parse(res._getData());

    expect(statusCode).toBe(200);
    expect(data).toHaveLength(3);
  });

  it('throws with an invalid quantity titles', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        quantity: '-1',
      },
    });

    await handleRequest(req, res);

    const data = JSON.parse(res._getData());
    expect(res._getStatusCode()).toBe(400);
    expect(data.error).toBe('Invalid quantity');
  });

  it('throws when requested quantity is too large', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        quantity: '4',
      },
    });

    await handleRequest(req, res);

    const statusCode = res._getStatusCode();
    const data = JSON.parse(res._getData());
    expect(statusCode).toBe(400);
    expect(data.error).toBe('Invalid quantity (quantity too large)');
  });
});
