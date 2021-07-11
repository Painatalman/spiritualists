import { screen, render } from '@testing-library/react';
import LoadingSpiritualist from '~/components/Spiritualist/variations/Basic/Loading';

describe('Loading Spiritualist', () => {
  it('has expected name and description', () => {
    render(<LoadingSpiritualist />);

    screen.getByText('Professor A CARREGAR...');
  });
});
