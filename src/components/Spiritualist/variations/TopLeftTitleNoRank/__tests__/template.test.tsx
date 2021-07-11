import { screen, render } from '@testing-library/react';
import TopLeftTitleNoRank from '~/components/Spiritualist/variations/TopLeftTitleNoRank/template';

describe('TopLeftTitleNoRank', () => {
  beforeAll(() => {
    render(
      <TopLeftTitleNoRank
        titleTop={'Astrólogo'}
        name={'Suaré'}
        titleBottomLeft={'Espiritualista'}
        titleBottomRight={'Cientista'}
        description={'O mais importante da astrologia é obter resultados bons'}
      />
    );
  });
  it('has a top title starting with "Grande Mestre "', () => {
    screen.getByText('Grande Mestre Astrólogo');
  });
});
