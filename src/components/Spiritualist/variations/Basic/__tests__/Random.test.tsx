import { render, screen } from '@testing-library/react';
import RandomSpiritualist from '~/components/Spiritualist/variations/Basic/Random';
import { rest } from 'msw';
import { server } from '~/msw/server';

jest.mock('~/components/Spiritualist/variations/Basic/Loading', () => () => (
  <div data-testid="loading"></div>
));
jest.mock('~/components/Spiritualist/variations/Basic/Error', () => () => (
  <div data-testid="error"></div>
));
jest.mock('~/components/Spiritualist/variations/Basic/template', () => () => (
  <div data-testid="spiritualist"></div>
));

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

describe('RandomSpiritualist', () => {
  it('renders a loading and then a spiritualist', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.delay(200), ctx.status(200), ctx.json('Test name'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test description'))
      )
    );

    render(<RandomSpiritualist />);
    screen.getByTestId('loading');
    await screen.findByTestId('spiritualist');
  });

  it('renders a loading and then an error', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) => res(ctx.status(500)))
    );

    render(<RandomSpiritualist />);
    await screen.findByTestId('error');
  });
});
