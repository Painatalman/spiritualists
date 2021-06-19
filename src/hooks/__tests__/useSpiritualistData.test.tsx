import React from 'react';
import { render, screen, act } from '@testing-library/react';
import useSpiritualistData from '~/hooks/useSpiritualistData';
import { rest } from 'msw';
import { server } from '~/msw/server';

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

describe('useSpiritualistData', () => {
  it('loads a random spiritualist', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test name'))
      ),
      rest.get(`${apiUrl}description`, (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test description'))
      )
    );

    const Component: React.FC = () => {
      const [_error, spiritualist] = useSpiritualistData();
      return (
        <>
          <p>{spiritualist?.name}</p>
          <p>{spiritualist?.description}</p>
        </>
      );
    };
    render(<Component />);

    await screen.findByText('Test name');
    await screen.findByText('Test description');
  });

  it('signals errors loading a spiritualist', async () => {
    server.use(
      rest.get(`${apiUrl}name`, (_req, res, ctx) => res(ctx.status(500)))
    );

    const Component: React.FC = () => {
      const [error] = useSpiritualistData();
      return <p>{error ? 'Error' : 'Correct'}</p>;
    };
    render(<Component />);

    await screen.findByText('Error');
  });
});
