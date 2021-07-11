import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '~/msw/server';
import useSpiritualistDataWithExtras from '../useSpiritualistDataWithExtras';

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

describe('useSpiritualistDataWithExtras', () => {
  it('returns name without title, description, and three titles', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.delay(20), ctx.status(200), ctx.json('Test name'))
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

    const Component: React.FC = () => {
      const [_error, spiritualist] = useSpiritualistDataWithExtras();

      return (
        <>
          <p>{spiritualist?.name}</p>
          <p>{spiritualist?.description}</p>
          {spiritualist?.titles.map((title, key) => (
            <p key={key}>{title}</p>
          ))}
        </>
      );
    };

    render(<Component />);

    await screen.findByText('Test name');
    await screen.findByText('Test description');
    await screen.findByText('TitleTop');
    await screen.findByText('TitleBottomLeft');
    await screen.findByText('TitleBottomRight');
  });
});
