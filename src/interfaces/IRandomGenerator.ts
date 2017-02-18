interface IRandomGenerator<T> {
  generateRandom(): Promise<T>;
}

export default IRandomGenerator;
