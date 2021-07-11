import { screen, render } from '@testing-library/react';
import Spiritualist from '~/components/Spiritualist/variations/Basic/template';

describe('Spiritualist Templates', () => {
  describe('Basic', () => {
    it('has a name and a description', () => {
      render(
        <Spiritualist name={'Professor Test'} description={'For testing'} />
      );

      screen.getByText('Professor Test');
      screen.getByText('For testing');
    });
  });
});
