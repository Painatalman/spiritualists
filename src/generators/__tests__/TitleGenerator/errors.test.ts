import TitleGenerator from '~/generators/TitleGenerator';

describe('TitleGenerator errors', () => {
  it('throws with an invalid quantity', async () => {
    const generator = new TitleGenerator(['Right', 'Wrong', 'Also Wrong']);
    try {
      await generator.generateRandom(0);
      throw new Error('Did not throw');
    } catch (e) {
      expect(e.message).toBe('Invalid quantity');
    }

    try {
      await generator.generateRandom(-1);
      throw new Error('Did not throw');
    } catch (e) {
      expect(e.message).toBe('Invalid quantity');
    }

    try {
      await generator.generateRandom(4);
      throw new Error('Did not throw');
    } catch (e) {
      expect(e.message).toBe('Invalid quantity (quantity too large)');
    }
  });
});
