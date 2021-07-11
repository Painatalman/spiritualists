import getUniqueRandomValues from '~/utils/getUniqueRandomValues';
describe('getUniqueRandomValues', () => {
  it('returns all items if quantity matches option length', () => {
    expect(getUniqueRandomValues(['a', 'b', 'c', 'd'], 4)).toIncludeAllMembers([
      'a',
      'b',
      'c',
      'd',
    ]);
  });

  it('returns the requested number of elements, randomly', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.01)
      .mockImplementationOnce(() => 0.5);

    expect(getUniqueRandomValues(['a', 'b', 'c', 'd'], 2)).toIncludeSameMembers(
      ['a', 'c']
    );
  });

  it('throws with 0 or negative numbers', () => {
    const arbitraryValues = [0, 1, 2, 3];
    expect(() => getUniqueRandomValues(arbitraryValues, 0)).toThrow(
      'Invalid quantity'
    );
    expect(() => getUniqueRandomValues(arbitraryValues, -1)).toThrow(
      'Invalid quantity'
    );
  });

  it('throws if quantity is larger than available options', () => {
    const fourArbitraryValues = [0, 1, 2, 3];
    expect(() => getUniqueRandomValues(fourArbitraryValues, 5)).toThrow(
      'Invalid quantity (quantity too large)'
    );
  });
});
