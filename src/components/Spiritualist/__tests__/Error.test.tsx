import { screen, render } from '@testing-library/react';
import ErrorSpiritualist from '~/components/Spiritualist/Error';

describe('Error Spiritualist', () => {
  it('has expected name and description', () => {
    render(<ErrorSpiritualist />);

    screen.getByText('Professor ERRO');
  });
});
