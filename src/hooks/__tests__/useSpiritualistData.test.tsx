import React from 'react';
import { render, screen } from '@testing-library/react';
import useSpiritualistData from '~/hooks/useSpiritualistData';
import { rest } from 'msw';
import { server } from '~/msw/server';

describe('useSpiritualistData', () => {
  beforeEach(() => {});

  it('loads a random spiritualist', async () => {
    server.use(
      rest.get('http://localhost:3000/api/name', (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test name'))
      ),
      rest.get('http://localhost:3000/api/description', (_req, res, ctx) =>
        res(ctx.status(200), ctx.json('Test description'))
      )
    );

    const Component: React.FC = () => {
      const { spiritualist } = useSpiritualistData();

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
});
