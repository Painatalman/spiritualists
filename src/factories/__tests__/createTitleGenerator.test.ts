import createTitleGenerator from '~/factories/createTitleGenerator';

describe('createTitleGenerator', () => {
  it('creates a generator from static json content', async () => {
    const generator = createTitleGenerator();

    expect(await generator.generateRandom()).toBeArray();
  });
});
