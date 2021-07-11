import { screen, render } from '@testing-library/react';
import { Error } from '~/components/Spiritualist/variations/Basic';

describe('Error Spiritualist', () => {
  it('has expected name and description', () => {
    render(<Error />);

    screen.getByText('Professor ERRO');
  });
});
