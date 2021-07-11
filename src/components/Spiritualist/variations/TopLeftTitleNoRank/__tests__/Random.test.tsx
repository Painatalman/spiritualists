import { render, screen } from '@testing-library/react';
import Random from '~/components/Spiritualist/variations/TopLeftTitleNoRank/Random';
import { rest } from 'msw';
import { server } from '~/msw/server';

jest.mock('~/components/Spiritualist/variations/Basic/Loading', () => () => (
  <div data-testid="loading"></div>
));
jest.mock('~/components/Spiritualist/variations/Basic/Error', () => () => (
  <div data-testid="error"></div>
));

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

describe('Random TopLeftTitleNoRank Spiritualist', () => {
  it('loads and renders a spiritualist correctly', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.delay(200), ctx.status(200), ctx.json('Test name'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test description'))
      ),
      rest.get(`${apiUrl}title`, (req, res, ctx) => {
        const query = req.url.searchParams;
        const quantity = query.get('quantity');

        if (quantity !== '3') throw new Error('unexpected quantity');

        return res(
          ctx.status(200),
          ctx.json(['TitleTop', 'TitleBottomLeft', 'TitleBottomRight'])
        );
      })
    );

    render(<Random />);
    screen.getByTestId('loading');
    const expectedBottomTitle = 'TitleBottomLeft e TitleBottomRight';
    await screen.findByText(expectedBottomTitle);
  });
});
