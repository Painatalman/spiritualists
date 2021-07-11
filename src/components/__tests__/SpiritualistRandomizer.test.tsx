import { screen, render, fireEvent } from '@testing-library/react';
import SpiritualistRandomizer from '~/components/SpiritualistRandomizer';
import { rest } from 'msw';
import { server } from '~/msw/server';

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

describe('SpiritualistRandomizer', () => {
  it('displays a spiritualist and a button', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.delay(20), ctx.status(200), ctx.json('Test name'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test description'))
      ),
      rest.get(`${apiUrl}title`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(['TitleTop', 'TitleBottomLeft', 'TitleBottomRight'])
        );
      })
    );

    render(<SpiritualistRandomizer />);

    await screen.findByText('Test description');
    expect(screen.getByRole('button')).toHaveTextContent(
      'Ver outro especialista'
    );
  });

  it('loads a new spiritualist on click', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res.once(ctx.status(200), ctx.json('Test name'))
      ),
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('New Test name'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res.once(ctx.status(200), ctx.json('Test description'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('New test description'))
      ),
      rest.get(`${apiUrl}title`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(['TitleTop', 'TitleBottomLeft', 'TitleBottomRight'])
        );
      })
    );

    render(<SpiritualistRandomizer />);
    await screen.findByText('Test description');
    fireEvent.click(screen.getByRole('button'));

    await screen.findByText('New test description');
  });
});
