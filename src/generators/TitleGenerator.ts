import getUniqueRandomValues from '~/utils/getUniqueRandomValues';

class TitleGenerator {
  content: string[];
  constructor(content: string[]) {
    this.content = content;
  }

  async generateRandom(quantity = 1): Promise<string[]> {
    return await getUniqueRandomValues(this.content, quantity);
  }
}

export default TitleGenerator;
