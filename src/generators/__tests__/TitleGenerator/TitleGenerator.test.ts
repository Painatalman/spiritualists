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

  it('can return one or more items in a list', async () => {
    mockedGetUniqueRandomValues
      .mockImplementationOnce((content) => {
        return [content[0], content[1]];
      })
      .mockImplementationOnce((content) => {
        return [content[1]];
      });

    const generator = new TitleGenerator(['Right1', 'Right2', 'Wrong']);

    expect(await generator.generateRandom(2)).toEqual(['Right1', 'Right2']);
    expect(await generator.generateRandom(1)).toEqual(['Right2']);
  });
});
