import { screen, render } from '@testing-library/react';
import Spiritualist from '~/components/Spiritualist';

describe('Spiritualist', () => {
  it('has a name and a description', () => {
    render(
      <Spiritualist name={'Professor Test'} description={'For testing'} />
    );

    screen.getByText('Professor Test');
    screen.getByText('For testing');
  });
});
