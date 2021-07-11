import { render, screen } from '@testing-library/react';
import HeartIcon from '~/components/Icon/Heart';

describe('Heart icon', () => {
  it('renders with default width', () => {
    render(<HeartIcon />);

    const el = screen.getByRole('presentation');
    expect(el.getAttribute('width')).toBe('32');
  });
});
