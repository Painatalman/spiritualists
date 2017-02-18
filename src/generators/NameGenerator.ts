import IRandomGenerator from "~/interfaces/IRandomGenerator";
import NameData from "~/types/NameData";

function getRandomItem<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

class NameGenerator implements IRandomGenerator<string> {
  data: NameData;
  constructor(nameData: NameData) {
    this.data = nameData;
  }
  async generateRandom(): Promise<string> {
    const { roles, names } = this.data;
    const role = getRandomItem<string>(roles);
    const name = getRandomItem<string>(names);

    return await `${role} ${name}`;
  }
}

export default NameGenerator;
