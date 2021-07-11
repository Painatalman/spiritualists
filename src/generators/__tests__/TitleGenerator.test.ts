import TitleGenerator from '~/generators/TitleGenerator';
import getUniqueRandomValues from '~/utils/getUniqueRandomValues';

jest.mock('~/utils/getUniqueRandomValues', () => jest.fn());

const mockedGetUniqueRandomValues = getUniqueRandomValues as jest.Mock;

describe('TitleGenerator', () => {
  it('selects a title from a list by default', async () => {
    mockedGetUniqueRandomValues.mockImplementationOnce((content) => {
      return content[0];
    });

    const generator = new TitleGenerator(['Right', 'Wrong', 'Also Wrong']);
    expect(await generator.generateRandom()).toEqual('Right');
  });
});
